/**
 * Post-build verification script — runs on dist/ BEFORE git commit.
 * No network, no cache, no Vercel timing issues.
 * Usage: node scripts/verify.mjs
 * Integrated: npm run verify (after npm run build)
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const DIST = './dist';
let failed = 0;
let passed = 0;

function check(label, condition, detail = '') {
  if (condition) {
    console.log(`  ✅ ${label}${detail ? ' (' + detail + ')' : ''}`);
    passed++;
  } else {
    console.log(`  ❌ ${label}${detail ? ' — ' + detail : ''}`);
    failed++;
  }
}

function readPage(path) {
  const full = join(DIST, path);
  if (!existsSync(full)) return null;
  return readFileSync(full, 'utf-8');
}

// ─── Sample pages (one from each category) ───────────────────────────────────
const SAMPLES = [
  { label: 'Article (software)',     path: 'software/excel-not-responding-fix/index.html' },
  { label: 'Article (computers)',    path: 'computers/bitlocker-recovery-key-find/index.html' },
  { label: 'Article (networking)',   path: 'networking/wifi-connected-but-no-internet-fix/index.html' },
  { label: 'Article (peripherals)',  path: 'peripherals/hp-printer-offline-fix/index.html' },
  { label: 'Hub page',              path: 'software/office-errors/index.html' },
  { label: 'Home page',             path: 'index.html' },
  { label: 'Category page',         path: 'software/index.html' },
];

// ─── Check groups ─────────────────────────────────────────────────────────────

function checkAdSense(html, label) {
  // No empty ad containers (old pattern with aria-label + only comment inside)
  check(`${label} — no empty "Advertisement" div`, !html.includes('aria-label="Advertisement"'));
  // No old commented-out AdSense placeholder code
  check(`${label} — no old AdSense placeholder comment`, !html.includes('publisher ID will be inserted'));
  // No <ins class="adsbygoogle"> without a real slot ID (catches accidental activation)
  const hasIns = html.includes('class="adsbygoogle"');
  const hasSlot = html.includes('data-ad-slot="');
  if (hasIns) {
    check(`${label} — adsbygoogle has real slot ID`, hasSlot, hasSlot ? '' : 'ins tag present but no data-ad-slot');
  }
}

function checkConsent(html, label) {
  check(`${label} — Consent Mode v2 default`, html.includes("gtag('consent'"));
  check(`${label} — wait_for_update present`, html.includes('wait_for_update'));
}

function checkMeta(html, label) {
  check(`${label} — canonical is www`, html.includes('rel="canonical" href="https://www.donanimklinik.com'));
  check(`${label} — no bare donanimklinik.com canonical`, !html.match(/rel="canonical" href="https:\/\/donanimklinik\.com[^w]/));
}

function checkArticle(html, label) {
  const h1count = (html.match(/<h1[\s>]/g) || []).length;
  check(`${label} — single H1`, h1count === 1, `found ${h1count}`);
  // HowTo OR Article schema (both are valid article schema types)
  check(`${label} — article schema (HowTo or Article)`,
    html.includes('"@type":"HowTo"') || html.includes('"@type":"Article"'));
  check(`${label} — BreadcrumbList schema`, html.includes('BreadcrumbList'));
  check(`${label} — ezoic-category meta`, html.includes('name="ezoic-category"'));
  check(`${label} — canonical has trailing slash`, html.match(/rel="canonical" href="[^"]+\/"/));
}

function checkHub(html, label) {
  const h1count = (html.match(/<h1[\s>]/g) || []).length;
  check(`${label} — single H1`, h1count === 1, `found ${h1count}`);
  check(`${label} — CollectionPage schema`, html.includes('"@type":"CollectionPage"'));
  check(`${label} — ezoic-category meta`, html.includes('name="ezoic-category"'));
}

// ─── Future feature checks (activate when feature is shipped) ─────────────────
function checkAnswerCard(html, label) {
  check(`${label} — Answer Card present`, html.includes('class="answer-card"'));
}

function checkHubPill(html, label) {
  check(`${label} — Hub pill present`, html.includes('class="hub-pill"'));
}

function checkFeedbackWidget(html, label) {
  check(`${label} — Feedback widget present`, html.includes('class="feedback-widget"'));
}

function checkCopyButton(html, label) {
  // Uncomment after Feature 6 (Copy Button) is shipped:
  // check(`${label} — Copy button JS`, html.includes('copy-btn'));
}

// ─── Run all checks ───────────────────────────────────────────────────────────

console.log('\n📋 DonanimKlinik — Build Verification\n');

// Global: Consent Mode (check once from home)
const home = readPage('index.html');
if (home) {
  console.log('── Consent Mode v2');
  checkConsent(home, 'Home');
}

// Per-page checks
for (const { label, path } of SAMPLES) {
  const html = readPage(path);
  if (!html) {
    console.log(`\n── ${label}`);
    check(`${label} — page exists in dist/`, false, path);
    continue;
  }

  console.log(`\n── ${label}`);
  checkMeta(html, label);
  checkAdSense(html, label);

  // Article-specific — detect hub vs article by schema type in the HTML
  const isTopLevel = path.match(/^(index|software\/index|computers\/index|networking\/index|peripherals\/index)\.html/);
  if (!isTopLevel) {
    const isHub = html.includes('"@type":"CollectionPage"');
    if (isHub) {
      checkHub(html, label);
    } else {
      checkArticle(html, label);
      checkAnswerCard(html, label);
      checkHubPill(html, label);
      checkFeedbackWidget(html, label);
      checkCopyButton(html, label);
    }
  }
}

// ─── Sitemap + robots ─────────────────────────────────────────────────────────
console.log('\n── Build outputs');
check('sitemap-index.xml exists',   existsSync(join(DIST, 'sitemap-index.xml')));
check('sitemap-0.xml exists',       existsSync(join(DIST, 'sitemap-0.xml')));
check('robots.txt exists',          existsSync(join(DIST, 'robots.txt')));
check('ads.txt exists',             existsSync(join(DIST, 'ads.txt')));
check('favicon.svg exists',         existsSync(join(DIST, 'favicon.svg')));

// ─── Result ───────────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(50)}`);
console.log(`Passed: ${passed}  |  Failed: ${failed}  |  Total: ${passed + failed}`);

if (failed === 0) {
  console.log('\n✅ All checks passed — safe to commit\n');
  process.exit(0);
} else {
  console.log(`\n❌ ${failed} check(s) FAILED — fix before committing\n`);
  process.exit(1);
}
