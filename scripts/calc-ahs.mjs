/**
 * Reads latest GSC raw JSON + article frontmatter → calculates AHS scores → writes dashboard.json
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const RAW_DIR = join(ROOT, 'data/gsc-raw');
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const DASHBOARD_PATH = join(ROOT, 'data/dashboard.json');

// ─── Load latest raw GSC snapshot ────────────────────────────────────────────

const rawFiles = readdirSync(RAW_DIR)
  .filter(f => f.endsWith('.json'))
  .sort()
  .reverse();

if (rawFiles.length === 0) {
  console.error('No raw GSC data found in data/gsc-raw/. Run gsc-fetch.mjs first.');
  process.exit(1);
}

const raw = JSON.parse(readFileSync(join(RAW_DIR, rawFiles[0]), 'utf8'));
console.log(`Using snapshot: ${rawFiles[0]}`);

// ─── Parse article frontmatter ────────────────────────────────────────────────

function parseFrontmatter(content) {
  const clean = content.replace(/^﻿/, '');
  const match = clean.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([\w.]+):\s*(.+)$/);
    if (m) fm[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  return fm;
}

const articleFiles = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articleMeta = {};

for (const file of articleFiles) {
  const slug = file.replace('.md', '');
  const content = readFileSync(join(ARTICLES_DIR, file), 'utf8');
  const fm = parseFrontmatter(content);
  articleMeta[slug] = {
    title: fm.title || slug,
    category: fm.category || 'uncategorized',
    source_url: fm.official_source_url || null,
    last_refresh: fm['admin_last_refresh'] || null,
    refresh_count: parseInt(fm['admin_refresh_count'] || '0', 10),
  };
}

// ─── Build lookup maps from GSC data ─────────────────────────────────────────

function urlToSlug(url) {
  return url.replace(/https?:\/\/[^/]+/, '').replace(/^\/|\/$/g, '').split('/').pop();
}

const pageMapCurrent = {};
for (const row of raw.pages_current) {
  const slug = urlToSlug(row.keys[0]);
  pageMapCurrent[slug] = {
    impressions: row.impressions,
    clicks: row.clicks,
    ctr: row.ctr,
    position: row.position,
  };
}

const pageMapPrev = {};
for (const row of raw.pages_previous) {
  const slug = urlToSlug(row.keys[0]);
  pageMapPrev[slug] = {
    impressions: row.impressions,
    clicks: row.clicks,
    ctr: row.ctr,
    position: row.position,
  };
}

// Top queries per slug (max 5)
const queryMap = {};
for (const row of raw.queries) {
  const slug = urlToSlug(row.keys[0]);
  if (!queryMap[slug]) queryMap[slug] = [];
  if (queryMap[slug].length < 5) {
    queryMap[slug].push({
      query: row.keys[1],
      impressions: row.impressions,
      clicks: row.clicks,
      ctr: row.ctr,
      position: row.position,
    });
  }
}

// ─── Category CTR benchmark ───────────────────────────────────────────────────

const catBenchmarks = {};
for (const [slug, m] of Object.entries(pageMapCurrent)) {
  const cat = articleMeta[slug]?.category || 'unknown';
  if (!catBenchmarks[cat]) catBenchmarks[cat] = [];
  catBenchmarks[cat].push(m.ctr);
}
const catMedian = {};
for (const [cat, ctrs] of Object.entries(catBenchmarks)) {
  const sorted = ctrs.slice().sort((a, b) => a - b);
  catMedian[cat] = sorted[Math.floor(sorted.length / 2)] || 0;
}

// ─── AHS calculation ──────────────────────────────────────────────────────────

function calcAHS(slug, cur, prev, category) {
  if (!cur || cur.impressions === 0) return 50; // neutral — no data

  let score = 50;

  // Impression trend (±35 points)
  if (prev && prev.impressions > 0) {
    const ratio = cur.impressions / prev.impressions;
    if (ratio >= 1.5) score += 35;
    else if (ratio >= 1.25) score += 25;
    else if (ratio >= 1.0) score += 10;
    else if (ratio >= 0.85) score -= 5;
    else if (ratio >= 0.70) score -= 15;
    else if (ratio >= 0.50) score -= 25;
    else score -= 35;
  }

  // Position trend (±25 points) — lower position number = better
  if (prev && prev.position > 0) {
    const delta = cur.position - prev.position; // positive = worse
    if (delta <= -3) score += 25;
    else if (delta <= -1) score += 15;
    else if (delta <= 1) score += 0;
    else if (delta <= 3) score -= 10;
    else if (delta <= 5) score -= 18;
    else score -= 25;
  }

  // CTR vs category benchmark (±20 points)
  const bench = catMedian[category] || 0;
  if (bench > 0) {
    const ratio = cur.ctr / bench;
    if (ratio >= 1.5) score += 20;
    else if (ratio >= 1.0) score += 8;
    else if (ratio >= 0.8) score -= 5;
    else if (ratio >= 0.6) score -= 12;
    else score -= 20;
  }

  // Absolute position bonus (±15)
  if (cur.position <= 3) score += 15;
  else if (cur.position <= 5) score += 8;
  else if (cur.position <= 10) score += 2;
  else if (cur.position <= 15) score -= 5;
  else if (cur.position <= 20) score -= 10;
  else score -= 15;

  // Sample size weight — small samples normalize toward 50
  const sampleWeight = Math.min(1, Math.log10(Math.max(cur.impressions, 1)) / 2.5);
  score = score * sampleWeight + 50 * (1 - sampleWeight);

  return Math.round(Math.max(0, Math.min(100, score)));
}

function getGroup(ahs, cur, prev) {
  if (!cur || cur.impressions === 0) return 'STABIL'; // No data

  const impDrop = prev && prev.impressions > 0
    ? (cur.impressions - prev.impressions) / prev.impressions
    : 0;

  if (ahs < 30 && impDrop < -0.3) return 'ACIL';
  if (ahs < 30) return 'IZLE';
  if (ahs < 50) return 'IZLE';
  if (cur.position >= 5 && cur.position <= 15 && cur.impressions > 50) return 'FIRSAT';
  if (ahs >= 80 && cur.impressions > 100) return 'YILDIZ';
  if (cur.impressions === 0 && (!prev || prev.impressions === 0)) return 'OLU';
  return 'STABIL';
}

function getSuggestions(slug, cur, prev, ahs) {
  const suggestions = [];
  if (!cur) return suggestions;

  if (prev && prev.impressions > 0 && cur.impressions / prev.impressions < 0.75) {
    suggestions.push('Impression %40+ düştü — title/H1 güncelle, FAQ ekle');
  }
  if (cur.position > 8 && cur.position <= 15 && cur.impressions > 50) {
    suggestions.push('Sayfa 1 sınırında — içerik genişletme ile çıkabilir');
  }
  if (cur.ctr < 0.02 && cur.impressions > 30) {
    suggestions.push("CTR %2 altı — meta description ve title'ı yenile");
  }
  if (cur.position > 15) {
    suggestions.push('Pozisyon 15+ — anahtar kelime hedefleme gözden geçir');
  }
  return suggestions;
}

function getTrend(cur, prev) {
  if (!cur || !prev || prev.impressions === 0) return 'neutral';
  const r = cur.impressions / prev.impressions;
  if (r >= 1.1) return 'up';
  if (r <= 0.9) return 'down';
  return 'neutral';
}

// ─── Identify query gap opportunities ────────────────────────────────────────

const opportunities = [];
for (const row of raw.queries) {
  const slug = urlToSlug(row.keys[0]);
  const query = row.keys[1];
  const pos = row.position;
  const imp = row.impressions;

  // Queries in position 5-20, decent impression count, worth targeting
  if (pos >= 5 && pos <= 20 && imp >= 30) {
    const meta = articleMeta[slug];
    if (!meta) continue;
    opportunities.push({
      query,
      slug,
      url: `/${meta.category}/${slug}/`,
      impressions: imp,
      clicks: row.clicks,
      position: pos,
      category: meta.category,
    });
  }
}

// Sort by impressions desc, deduplicate by query
const seen = new Set();
const uniqueOpportunities = opportunities
  .filter(o => { if (seen.has(o.query)) return false; seen.add(o.query); return true; })
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 50);

// ─── Build articles array ─────────────────────────────────────────────────────

const articles = [];
let totalImp = 0, totalClicks = 0, articlesWithData = 0;

for (const slug of Object.keys(articleMeta)) {
  const meta = articleMeta[slug];
  const cur = pageMapCurrent[slug] || null;
  const prev = pageMapPrev[slug] || null;
  const ahs = calcAHS(slug, cur, prev, meta.category);
  const group = getGroup(ahs, cur, prev);
  const ahsPrev = calcAHS(slug, prev, null, meta.category);

  if (cur) {
    totalImp += cur.impressions;
    totalClicks += cur.clicks;
    articlesWithData++;
  }

  articles.push({
    slug,
    category: meta.category,
    url: `/${meta.category}/${slug}/`,
    title: meta.title,
    ahs,
    ahs_prev: ahsPrev,
    ahs_delta: ahs - ahsPrev,
    group,
    metrics_28d: cur || { impressions: 0, clicks: 0, ctr: 0, position: 0 },
    metrics_prev_28d: prev || { impressions: 0, clicks: 0, ctr: 0, position: 0 },
    trend: getTrend(cur, prev),
    top_queries: queryMap[slug] || [],
    last_refresh: meta.last_refresh,
    refresh_count: meta.refresh_count,
    source_url: meta.source_url,
    suggestions: getSuggestions(slug, cur, prev, ahs),
    snooze_until: null,
  });
}

articles.sort((a, b) => {
  const order = { ACIL: 0, IZLE: 1, FIRSAT: 2, YILDIZ: 3, STABIL: 4, OLU: 5 };
  return (order[a.group] || 4) - (order[b.group] || 4) || b.metrics_28d.impressions - a.metrics_28d.impressions;
});

// ─── Build group index ────────────────────────────────────────────────────────

const groups = { acil: [], izle: [], firsat: [], yildiz: [], stabil: [], olu: [] };
for (const a of articles) {
  const key = a.group.toLowerCase();
  if (groups[key]) groups[key].push(a.slug);
}

// ─── Site totals ──────────────────────────────────────────────────────────────

const avgPos = articlesWithData > 0
  ? articles.filter(a => a.metrics_28d.position > 0)
      .reduce((s, a) => s + a.metrics_28d.position, 0) /
    articles.filter(a => a.metrics_28d.position > 0).length
  : 0;

// ─── Write dashboard.json ─────────────────────────────────────────────────────

const dashboard = {
  generated_at: new Date().toISOString(),
  gsc_data_through: raw.windows.current.end,
  has_gsc_data: true,
  site_totals: {
    impressions_28d: totalImp,
    clicks_28d: totalClicks,
    avg_ctr: articlesWithData > 0 ? totalClicks / totalImp : 0,
    avg_position: Math.round(avgPos * 10) / 10,
    articles_with_data: articlesWithData,
  },
  groups,
  articles,
  health: existsSync(join(ROOT, 'data/dashboard.json'))
    ? JSON.parse(readFileSync(join(ROOT, 'data/dashboard.json'), 'utf8')).health
    : { broken_links: [], cannibal_pairs: [], duplicate_risks: [], checked_at: null },
  opportunities: uniqueOpportunities,
};

writeFileSync(DASHBOARD_PATH, JSON.stringify(dashboard, null, 2), 'utf8');

console.log(`✓ dashboard.json updated`);
console.log(`  Articles: ${articles.length}`);
console.log(`  ACIL: ${groups.acil.length} | İZLE: ${groups.izle.length} | FIRSAT: ${groups.firsat.length}`);
console.log(`  YILDIZ: ${groups.yildiz.length} | STABİL: ${groups.stabil.length} | ÖLÜ: ${groups.olu.length}`);
console.log(`  Opportunities: ${uniqueOpportunities.length}`);
console.log(`  Site impressions (28d): ${totalImp.toLocaleString()}`);
