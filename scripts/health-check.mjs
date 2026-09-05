/**
 * Checks official_source_url links and detects duplicate/cannibal risks.
 * Updates health section of dashboard.json.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const DASHBOARD_PATH = join(ROOT, 'data/dashboard.json');

// ─── Parse articles ───────────────────────────────────────────────────────────

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

const files = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articles = files.map(file => {
  const slug = file.replace('.md', '');
  const fm = parseFrontmatter(readFileSync(join(ARTICLES_DIR, file), 'utf8'));
  return { slug, title: fm.title || slug, category: fm.category, source_url: fm.official_source_url };
});

// ─── Check URLs ───────────────────────────────────────────────────────────────

const broken_links = [];
const BATCH = 5;
const BOT_BLOCKED = ['microsoft.com', 'seagate.com', 'brother.com'];

async function checkUrl({ slug, source_url }) {
  if (!source_url) return;
  const opts = {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    signal: AbortSignal.timeout(12000),
    redirect: 'follow',
  };
  try {
    let res = await fetch(source_url, { ...opts, method: 'HEAD' });
    if (res.status >= 400 && !BOT_BLOCKED.some(d => source_url.includes(d))) {
      res = await fetch(source_url, { ...opts, method: 'GET' });
    }
    if (res.status >= 400 && res.status !== 403 && res.status !== 429) {
      broken_links.push({ slug, url: source_url, status: res.status });
    }
  } catch (e) {
    if (!BOT_BLOCKED.some(d => source_url.includes(d))) {
      broken_links.push({ slug, url: source_url, status: 'ERR', error: e.message.slice(0, 80) });
    }
  }
}

console.log(`Checking ${articles.length} source URLs...`);
for (let i = 0; i < articles.length; i += BATCH) {
  await Promise.all(articles.slice(i, i + BATCH).map(checkUrl));
  process.stdout.write(`\r${Math.min(i + BATCH, articles.length)}/${articles.length}`);
}
console.log();

// ─── Duplicate risk (trigram similarity on titles) ────────────────────────────

function trigrams(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9 ]/g, '');
  const grams = new Set();
  for (let i = 0; i < s.length - 2; i++) grams.add(s.slice(i, i + 3));
  return grams;
}

function similarity(a, b) {
  const ta = trigrams(a), tb = trigrams(b);
  const intersection = [...ta].filter(g => tb.has(g)).length;
  return intersection / Math.max(ta.size, tb.size, 1);
}

const duplicate_risks = [];
for (let i = 0; i < articles.length; i++) {
  for (let j = i + 1; j < articles.length; j++) {
    const sim = similarity(articles[i].title, articles[j].title);
    if (sim > 0.6) {
      duplicate_risks.push({
        slug_a: articles[i].slug,
        slug_b: articles[j].slug,
        similarity: Math.round(sim * 100),
      });
    }
  }
}

// ─── Update dashboard.json health section ────────────────────────────────────

const dashboard = JSON.parse(readFileSync(DASHBOARD_PATH, 'utf8'));
dashboard.health = {
  broken_links,
  cannibal_pairs: dashboard.health?.cannibal_pairs || [],
  duplicate_risks,
  checked_at: new Date().toISOString(),
};
writeFileSync(DASHBOARD_PATH, JSON.stringify(dashboard, null, 2), 'utf8');

console.log(`✓ Health check complete`);
console.log(`  Broken links:     ${broken_links.length}`);
console.log(`  Duplicate risks:  ${duplicate_risks.length}`);
