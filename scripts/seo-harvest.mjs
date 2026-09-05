/**
 * Reads dashboard.json opportunities → merges with existing query-index.json → writes updated index.
 * Run after calc-ahs.mjs. New opportunities get status "pending".
 * Already-processed queries (applied/skipped) are preserved unchanged.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DASHBOARD_PATH = join(ROOT, 'data/dashboard.json');
const REFRESH_DIR = join(ROOT, 'data/seo-refresh');
const INDEX_PATH = join(REFRESH_DIR, 'query-index.json');

if (!existsSync(REFRESH_DIR)) mkdirSync(REFRESH_DIR, { recursive: true });

// ─── Load existing index ──────────────────────────────────────────────────────

const existing = existsSync(INDEX_PATH)
  ? JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
  : { updated_at: null, items: [] };

const processedIds = new Set(existing.items.map(i => i.id));

// ─── Load dashboard ───────────────────────────────────────────────────────────

const dashboard = JSON.parse(readFileSync(DASHBOARD_PATH, 'utf8'));
const articleMap = {};
for (const a of dashboard.articles) {
  articleMap[a.slug] = a;
}

// ─── Build new opportunities from dashboard.opportunities + article top_queries

const newItems = [];

// Source 1: dashboard.opportunities (pos 5-20, imp >= 30)
for (const opp of dashboard.opportunities || []) {
  const id = createHash('md5').update(`${opp.slug}__${opp.query}`).digest('hex').slice(0, 12);
  if (processedIds.has(id)) continue;

  const article = articleMap[opp.slug];
  newItems.push({
    id,
    slug: opp.slug,
    title: article?.title || opp.slug,
    url: opp.url,
    query: opp.query,
    impressions: opp.impressions,
    clicks: opp.clicks,
    ctr: opp.ctr,
    position: Math.round(opp.position * 10) / 10,
    status: 'pending',
    detected_at: new Date().toISOString().slice(0, 10),
    applied_at: null,
  });
}

// Source 2: article top_queries with position 8-20 (lower threshold than opportunities)
for (const article of dashboard.articles) {
  for (const q of article.top_queries || []) {
    if (q.position < 8 || q.position > 20) continue;
    if (q.impressions < 10) continue;

    const id = createHash('md5').update(`${article.slug}__${q.query}`).digest('hex').slice(0, 12);
    if (processedIds.has(id)) continue;

    // Avoid duplicates from source 1
    if (newItems.some(i => i.id === id)) continue;

    newItems.push({
      id,
      slug: article.slug,
      title: article.title,
      url: article.url,
      query: q.query,
      impressions: q.impressions,
      clicks: q.clicks,
      ctr: q.ctr,
      position: Math.round(q.position * 10) / 10,
      status: 'pending',
      detected_at: new Date().toISOString().slice(0, 10),
      applied_at: null,
    });
  }
}

// ─── Merge and write ──────────────────────────────────────────────────────────

const allItems = [
  ...newItems,
  ...existing.items,
];

// Sort: pending first, then by impressions desc
allItems.sort((a, b) => {
  if (a.status === 'pending' && b.status !== 'pending') return -1;
  if (a.status !== 'pending' && b.status === 'pending') return 1;
  return b.impressions - a.impressions;
});

const output = {
  updated_at: new Date().toISOString(),
  pending_count: allItems.filter(i => i.status === 'pending').length,
  applied_count: allItems.filter(i => i.status === 'applied').length,
  skipped_count: allItems.filter(i => i.status === 'skipped').length,
  items: allItems,
};

writeFileSync(INDEX_PATH, JSON.stringify(output, null, 2), 'utf8');

console.log(`✓ query-index.json updated`);
console.log(`  New opportunities: ${newItems.length}`);
console.log(`  Total pending: ${output.pending_count}`);
console.log(`  Applied: ${output.applied_count} | Skipped: ${output.skipped_count}`);
