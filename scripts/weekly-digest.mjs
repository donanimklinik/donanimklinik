/**
 * Generates data/weekly-digest.md from dashboard.json.
 * Run every Monday by GitHub Actions.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DASHBOARD_PATH = join(ROOT, 'data/dashboard.json');

const d = JSON.parse(readFileSync(DASHBOARD_PATH, 'utf8'));
const today = new Date().toISOString().split('T')[0];

const acil = d.articles.filter(a => a.group === 'ACIL');
const firsat = d.articles.filter(a => a.group === 'FIRSAT');
const yildiz = d.articles.filter(a => a.group === 'YILDIZ');
const olu = d.articles.filter(a => a.group === 'OLU');

const fmt = n => n.toLocaleString('tr-TR');

let md = `# Haftalık Özet — ${today}\n\n`;
md += `> GSC verisi: ${d.gsc_data_through || '—'}  |  Oluşturuldu: ${d.generated_at?.split('T')[0]}\n\n`;

md += `## Site Toplamı (28 Gün)\n\n`;
md += `| Metrik | Değer |\n|--------|-------|\n`;
md += `| Impression | ${fmt(d.site_totals.impressions_28d)} |\n`;
md += `| Tıklama | ${fmt(d.site_totals.clicks_28d)} |\n`;
md += `| Ort. CTR | ${(d.site_totals.avg_ctr * 100).toFixed(1)}% |\n`;
md += `| Ort. Pozisyon | ${d.site_totals.avg_position} |\n\n`;

md += `## Makale Durumu\n\n`;
md += `🔴 ACIL: ${acil.length} | 🟡 FIRSAT: ${firsat.length} | 🟢 YILDIZ: ${yildiz.length} | ⚫ ÖLÜ: ${olu.length}\n\n`;

if (acil.length > 0) {
  md += `## 🔴 Acil Güncelleme Gerekli\n\n`;
  for (const a of acil.slice(0, 5)) {
    const imp = a.metrics_28d.impressions;
    const impPrev = a.metrics_prev_28d.impressions;
    const delta = impPrev > 0 ? Math.round((imp - impPrev) / impPrev * 100) : 0;
    md += `- **[${a.ahs}]** [${a.slug}](/${a.category}/${a.slug}/) — Imp: ${fmt(imp)} (${delta > 0 ? '+' : ''}${delta}%) | Pos: ${a.metrics_28d.position.toFixed(1)}\n`;
  }
  md += '\n';
}

if (firsat.length > 0) {
  md += `## 🟡 Fırsat — İçerik Genişlet\n\n`;
  for (const a of firsat.slice(0, 5)) {
    md += `- [${a.slug}](/${a.category}/${a.slug}/) — Pos: ${a.metrics_28d.position.toFixed(1)} | Imp: ${fmt(a.metrics_28d.impressions)}\n`;
  }
  md += '\n';
}

if (d.opportunities?.length > 0) {
  md += `## 🔵 Yeni Makale Fırsatları (Top 5)\n\n`;
  for (const o of d.opportunities.slice(0, 5)) {
    md += `- "${o.query}" — Pos: ${o.position.toFixed(1)}, Imp: ${fmt(o.impressions)} (${o.slug})\n`;
  }
  md += '\n';
}

const broken = d.health?.broken_links?.length || 0;
if (broken > 0) {
  md += `## ⚠ Kırık Linkler: ${broken}\n\nAdmin panelinden düzelt → /admin/health\n\n`;
}

md += `---\n*Otomatik üretildi — admin panelinden detay: /admin*\n`;

writeFileSync(join(ROOT, 'data/weekly-digest.md'), md, 'utf8');
console.log(`✓ weekly-digest.md generated`);
