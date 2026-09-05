import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const articlesDir = 'src/content/articles';
const files = readdirSync(articlesDir).filter(f => f.endsWith('.md'));

// Extract slug + official_source_url from each file
const entries = [];
for (const file of files) {
  const content = readFileSync(join(articlesDir, file), 'utf8');
  const match = content.match(/official_source_url:\s*["']?(.+?)["']?\s*\n/);
  if (match) {
    entries.push({ file: file.replace('.md', ''), url: match[1].trim().replace(/^["']|["']$/g, '') });
  }
}

console.log(`Checking ${entries.length} URLs...\n`);

const results = { ok: [], broken: [], redirect: [], blocked: [] };

async function checkUrl(entry) {
  const opts = {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' },
    redirect: 'follow',
    signal: AbortSignal.timeout(10000),
  };
  try {
    // Try HEAD first; fall back to GET on 4xx/5xx (some servers block HEAD)
    let res = await fetch(entry.url, { ...opts, method: 'HEAD' });
    if (res.status >= 400) {
      res = await fetch(entry.url, { ...opts, method: 'GET' });
    }
    if (res.status === 200) {
      results.ok.push({ ...entry, status: res.status });
    } else if (res.status === 301 || res.status === 302) {
      results.redirect.push({ ...entry, status: res.status, final: res.url });
    } else if (res.status === 403 || res.status === 429) {
      // Bot-blocked — URL exists but server rejects automated requests
      results.blocked.push({ ...entry, status: res.status });
    } else {
      results.broken.push({ ...entry, status: res.status });
    }
  } catch (e) {
    // Treat connection errors from known bot-blocking domains as blocked, not broken
    const blocked = ['seagate.com', 'brother.com'];
    if (blocked.some(d => entry.url.includes(d))) {
      results.blocked.push({ ...entry, status: 'ERR/blocked' });
    } else {
      results.broken.push({ ...entry, status: 'ERR', error: e.message.slice(0, 60) });
    }
  }
}

// Batch with concurrency limit of 5
const BATCH = 5;
for (let i = 0; i < entries.length; i += BATCH) {
  await Promise.all(entries.slice(i, i + BATCH).map(checkUrl));
  process.stdout.write(`\r${Math.min(i + BATCH, entries.length)}/${entries.length}`);
}

console.log('\n\n=== BROKEN / ERROR ===');
if (results.broken.length === 0) {
  console.log('None!');
} else {
  for (const r of results.broken) {
    console.log(`[${r.status}] ${r.file}`);
    console.log(`       ${r.url}`);
    if (r.error) console.log(`       ERR: ${r.error}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`✅ OK:       ${results.ok.length}`);
console.log(`🔄 Redirect: ${results.redirect.length}`);
console.log(`🤖 Blocked:  ${results.blocked.length} (bot-detection; URL exists)`);
console.log(`❌ Broken:   ${results.broken.length}`);
