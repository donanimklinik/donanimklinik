/**
 * Fetches 56 days of GSC data (2×28d windows) and writes raw JSON.
 * Run via GitHub Actions daily cron.
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getAccessToken } from './gsc-auth.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const RAW_DIR = join(ROOT, 'data/gsc-raw');

if (!existsSync(RAW_DIR)) mkdirSync(RAW_DIR, { recursive: true });

const SITE_URL = process.env.GSC_SITE_URL || 'https://www.donanimklinik.com/';
const API = 'https://searchconsole.googleapis.com/webmasters/v3';

function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().split('T')[0];
}

async function searchAnalytics(token, body) {
  const res = await fetch(`${API}/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GSC API error ${res.status}: ${txt}`);
  }
  return res.json();
}

console.log('Getting access token...');
const token = await getAccessToken();

// GSC has ~3 day data delay
const endDate = daysAgo(3);
const startDate28 = daysAgo(30);   // current 28d window
const startDatePrev = daysAgo(58); // previous 28d window
const endDatePrev = daysAgo(31);

console.log(`Fetching GSC data: ${startDate28} → ${endDate}`);

// Current 28-day: page-level
const pages28 = await searchAnalytics(token, {
  startDate: startDate28,
  endDate,
  dimensions: ['page'],
  rowLimit: 500,
});

// Previous 28-day: page-level (for delta calculation)
const pagesPrev = await searchAnalytics(token, {
  startDate: startDatePrev,
  endDate: endDatePrev,
  dimensions: ['page'],
  rowLimit: 500,
});

// Current 28-day: top queries per page (page + query dimensions)
const queries28 = await searchAnalytics(token, {
  startDate: startDate28,
  endDate,
  dimensions: ['page', 'query'],
  rowLimit: 2500,
});

const snapshot = {
  fetched_at: new Date().toISOString(),
  site_url: SITE_URL,
  windows: {
    current: { start: startDate28, end: endDate },
    previous: { start: startDatePrev, end: endDatePrev },
  },
  pages_current: pages28.rows || [],
  pages_previous: pagesPrev.rows || [],
  queries: queries28.rows || [],
};

const filename = join(RAW_DIR, `${new Date().toISOString().split('T')[0]}.json`);
writeFileSync(filename, JSON.stringify(snapshot, null, 2), 'utf8');

console.log(`✓ Saved ${filename}`);
console.log(`  Pages (current):  ${snapshot.pages_current.length}`);
console.log(`  Pages (previous): ${snapshot.pages_previous.length}`);
console.log(`  Query rows:       ${snapshot.queries.length}`);
