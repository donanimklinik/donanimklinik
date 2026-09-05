/**
 * Generates data/dashboard.json from article frontmatter.
 * Run once to bootstrap. Subsequent runs are from gsc-fetch + calc-ahs.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const DATA_DIR = join(ROOT, 'data');

if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
if (!existsSync(join(DATA_DIR, 'gsc-raw'))) mkdirSync(join(DATA_DIR, 'gsc-raw'), { recursive: true });

function parseFrontmatter(content) {
  const clean = content.replace(/^﻿/, '');
  const match = clean.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) fm[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  return fm;
}

const files = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articles = [];

for (const file of files) {
  const content = readFileSync(join(ARTICLES_DIR, file), 'utf8');
  const fm = parseFrontmatter(content);
  const slug = file.replace('.md', '');
  if (!fm.title || !fm.category) continue;

  articles.push({
    slug,
    category: fm.category,
    url: `/${fm.category}/${fm.slug}/`,
    title: fm.title,
    ahs: 50,
    ahs_prev: 50,
    ahs_delta: 0,
    group: 'STABIL',
    metrics_28d: { impressions: 0, clicks: 0, ctr: 0, position: 0 },
    metrics_prev_28d: { impressions: 0, clicks: 0, ctr: 0, position: 0 },
    trend: 'neutral',
    top_queries: [],
    last_refresh: fm['admin_meta.last_refresh'] || null,
    refresh_count: parseInt(fm['admin_meta.refresh_count'] || '0', 10),
    source_url: fm.official_source_url || null,
    suggestions: [],
    snooze_until: null,
  });
}

// Sort alphabetically
articles.sort((a, b) => a.slug.localeCompare(b.slug));

const dashboard = {
  generated_at: new Date().toISOString(),
  gsc_data_through: null,
  has_gsc_data: false,
  site_totals: {
    impressions_28d: 0,
    clicks_28d: 0,
    avg_ctr: 0,
    avg_position: 0,
    articles_with_data: 0,
  },
  groups: { acil: [], izle: [], firsat: [], stabil: articles.map(a => a.slug), yildiz: [], olu: [] },
  articles,
  health: {
    broken_links: [],
    cannibal_pairs: [],
    duplicate_risks: [],
    checked_at: null,
  },
  opportunities: [],
};

writeFileSync(join(DATA_DIR, 'dashboard.json'), JSON.stringify(dashboard, null, 2), 'utf8');
console.log(`✓ dashboard.json generated — ${articles.length} articles`);
