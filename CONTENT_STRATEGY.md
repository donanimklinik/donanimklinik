# DonanimKlinik — Content Strategy
_Last updated: September 2026 — Revised after Opus analysis + Google Keyword Planner validation_

---

## SUB-TOPIC SELECTION CHECKLIST
Before adding ANY sub-article, verify ALL 8 criteria:

1. **Arama Hacmi** — Forum siteleri (Reddit, MS Q&A, Quora) bu soruyla dolu mu? Birden fazla bağımsız site yazmış mı?
2. **Rekabet** — Üst sırada kim var? Küçük bloglar = fırsat ✅. Microsoft'un kendi sayfası tek başına = zor ⚠️
3. **Kullanıcı Kalitesi** — Gerçek ücretli kullanıcı mı, korsan mı? Korsan kitlesi = düşük CPC = konu elenir ❌
4. **Resmi Kaynak** — Büyük firma destek sayfasında belgelenmiş mi? Yoksa yazılmaz.
5. **Kullanıcı Niyeti** — Aktif, acil sorun mu? Teorik değil mi?
6. **Güncellik** — Hata güncel platformlarda çıkıyor mu? (Windows 11, M365, güncel DSM)
7. **Tek Senaryo** — Bir makale = bir hata kodu veya senaryo. Karıştırma = SEO zararı.
8. **Çözüm Çalışıyor mu** — Resmi adımlar gerçekten çözüyor mu? Yarım çözüm = yüksek bounce = gelir düşer.

---

## SOURCE POLICY (Tiered)

- **Tier A** ✅ — Resmi vendor dokümantasyonu (support.microsoft.com, learn.microsoft.com, kb.synology.com, help.quickbooks.intuit.com, helpx.adobe.com, support.zoom.us vb.) — Her makalede en az 1 Tier A kaynak zorunlu.
- **Tier B** ⚠️ — Resmi vendor community'sinde verified vendor çalışanı yanıtı — Destekleyici kaynak olarak kullanılabilir.
- **Tier C** — Diğer her şey — Kaynak olarak kullanılmaz.

**Önemli:** Her kaynağa `source_last_verified_at` tarihi ekle — Microsoft/Adobe KB'leri sık değişir. Makale yayında kalırken kaynak silinmiş veya değişmiş olabilir.

**Cross-vendor sorunlar:** Eğer sorun iki ayrı firmanın ürününü kapsıyorsa (örn. OneDrive + Synology), her ikisinin resmi dokümanı ayrı ayrı kaynak gösterilir. Tek firma kaynağı yoksa makale yazılmaz.

---

## WRITING RULES

### Workflow
1. Claude Türkçe taslak yazar
2. Kullanıcı inceler ve onaylar
3. Claude İngilizce makaleye çevirir
4. Kullanıcı commit eder → Vercel otomatik deploy

### Content Rules
- Her makale Tier A kaynağa dayanmalı — İSTİSNASIZ
- Dil: "According to official Microsoft documentation..." — kişisel test iddiası asla yok
- Otomatik yayın yok — her makale human review şart
- Kelime hedefi: 800–1,200 kelime
- Bir makale = bir hata kodu veya senaryo

### Title Format
`[Error/Problem] — [Fix Description]`
Örnek: `BitLocker Recovery Key Not in Microsoft Account — What to Do`

### Meta Description (max 155 karakter)
Problem + platform + çözüm ipucu içermeli.

### Slug Format
`[problem-description]-fix` veya `[error-code]-fix`

### Schema Type
- Adım adım fix → `HowTo`
- Soru-cevap ağırlıklı → `FAQPage`
- Açıklama/analiz → `Article`

---

## ARTICLE STRUCTURE (HowTo)

```
[Intro: 2–3 cümle — hata ne, ne zaman çıkar, hangi platform]

## What causes [problem]
[1–2 paragraf — sadece resmi kaynaktan]

## How to fix [problem]
### Method 1 — [Resmi önerilen yöntem]
1. Adım
2. Adım

### Method 2 — [Varsa ikincil resmi yöntem]
1. Adım

## How to verify the fix
[1–2 cümle]

## Known limitations
[Resmi dokümantasyonun kapsamadığı senaryolar — dürüst ifade]

## Frequently asked questions
[3–5 S/C — sadece FAQPage schema için]
```

---

## FRONTMATTER TEMPLATE

```markdown
---
title: "BitLocker Recovery Key Not in Microsoft Account — What to Do"
description: "Step-by-step guide if your BitLocker recovery key is missing from your Microsoft account. Official Microsoft recovery options explained."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/..."
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "bitlocker recovery key not in microsoft account"
  - "bitlocker recovery key missing"
  - "find bitlocker recovery key"
---
```

---

## 16 PILLAR TOPICS — Revised & Tiered
_Opus analizi + Keyword Planner verisiyle güncellendi_

### TIER 1 — Revenue Engines (Yüksek CPC + Ticari Niyet)
**Önce bunlar yazılır.**

| # | Konu | Kategori | CPC | KP Verisi |
|---|------|----------|-----|-----------|
| 1 | **BitLocker & Data Recovery** (eski #2+#6 birleşimi) | computers | $10–35 | 500K arama ✅ |
| 2 | NAS & Home Server (Synology/QNAP) | networking | $12–25 | Doğrulanacak |
| 3 | Password Manager Setup & Errors | software | $10–20 | Doğrulanacak |
| 4 | Windows Activation & License Errors | computers | $10–20 | Doğrulanacak |
| 5 | **QuickBooks / Accounting Software Errors** _(YENİ)_ | software | $15–50 | Doğrulanacak |
| 6 | **Adobe Creative Cloud Errors** _(YENİ)_ | software | $12–25 | Doğrulanacak |

### TIER 2 — Volume + Moderate CPC
**Tier 1 tamamlanınca bunlar.**

| # | Konu | Kategori | CPC | KP Verisi |
|---|------|----------|-----|-----------|
| 7 | Microsoft 365 & Outlook Errors _(aktivasyon değil: sync, mailbox, M365 app hataları)_ | software | $8–20 | Düşük aktivasyon hacmi ⚠️ |
| 8 | **Email Deliverability & Auth Errors** (SPF/DKIM/DMARC, Outlook) _(YENİ)_ | networking | $10–25 | Doğrulanacak |
| 9 | Windows Update & Driver Errors | computers | $5–10 | Doğrulanacak |
| 10 | BSOD Error Codes (specific codes) | computers | $5–10 | Doğrulanacak |
| 11 | GPU Driver Conflicts & Display Issues | computers | $5–12 | Doğrulanacak |
| 12 | Cloud Storage Sync Errors (OneDrive/iCloud/Drive) | software | $6–12 | 1K-10K arama ✅ |

### TIER 3 — Traffic + Weaker Monetization
**En sona bırakılır.**

| # | Konu | Kategori | CPC | KP Verisi |
|---|------|----------|-----|-----------|
| 13 | DNS / VPN Conflicts | networking | $6–15 | Doğrulanacak |
| 14 | Router Security & Parental Controls | networking | $6–12 | Doğrulanacak |
| 15 | Wi-Fi / Network Driver Conflicts | networking | $6–12 | Doğrulanacak |
| 16 | **USB & External Storage Errors** (eski #17+#18 birleşimi) | computers | $4–10 | Doğrulanacak |

### ÇIKARILAN PILLARLAR
- ~~Pillar 10 — Smart TV App Errors~~ → **Silindi.** Resmi kaynak (Samsung/LG) yok denecek kadar az. "Official source only" kuralı bu pillara uygulanamıyor.
- ~~Port Forwarding & CGNAT~~ → **Silindi.** Resmi ISP kılavuzu yok. Router docs yeterli kaynak sağlamıyor.

---

## CLUSTER ARTICLES — Pillar 1 (Başlangıç Pillar'ı)

### Pillar 1 — BitLocker & Data Recovery
Official sources: `learn.microsoft.com/windows/security/bitlocker/`, `support.microsoft.com/windows/`

**BitLocker cluster (yüksek hacim):**
1. BitLocker Recovery Key — Where to Find It (Official Methods) ✅ [500K arama]
2. BitLocker Recovery Screen After Windows Update Fix ✅ [Nisan 2026 güncel]
3. BitLocker Triggered After BIOS/TPM/Firmware Update — Why and Fix ✅
4. Recovery Key Not in Microsoft Account — Official Options ✅
5. BitLocker on Work/School Device — How to Get Key from IT/Intune ✅
6. Suspending BitLocker Before Hardware Changes ✅
7. BitLocker "No Recovery Key" Scenarios — Official Reality Check ✅
8. BitLocker Recovery Key ID — How to Match It ✅
9. BitLocker Suspended Mode — How to Re-enable ✅
10. BitLocker After Motherboard Replacement Fix ✅

**Data Recovery cluster:**
11. Accidentally Deleted Files — Windows File Recovery Tool Guide ✅
12. Formatted USB Drive Recovery — Windows Built-in Method ✅
13. Recycle Bin Emptied — Official Recovery Options ✅
14. Corrupted Word Document Recovery — Microsoft AutoRecover ✅
15. OneDrive Version History — Restore Deleted Files ✅
16. Windows Previous Versions — File Restore Guide ✅
17. SD Card Not Readable — Windows CHKDSK Official Fix ✅
18. Hard Drive Recovery Services — When DIY Isn't Enough ✅ [Yüksek CPC: $34]
19. SSD Recovery After Failure — Official Options ✅ [CPC: $11]
20. SharePoint Recycle Bin Recovery Guide ✅

---

## YAYINLAMA SIRASI (İlk 30 Gün)

1. BitLocker Recovery Key — Where to Find It ← **İLK MAKALE**
2. Recovery Key Not in Microsoft Account
3. BitLocker After Windows Update Fix
4. BitLocker Triggered After BIOS/TPM Update
5. BitLocker on Work Device — Get Key from IT
6. Accidentally Deleted Files — Windows File Recovery
7. Formatted USB Recovery
8. Hard Drive Recovery Services — When DIY Isn't Enough
9. SSD Recovery After Failure
10. BitLocker Suspended Mode Fix

_10 makale, 1 pillar hub = pipeline test tamamlanmış olur._
