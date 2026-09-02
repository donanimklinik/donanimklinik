---
title: "Windows Product Key Not Working — What to Do"
description: "Product key rejected by Windows? The cause is usually a mismatch, a used key, or a key from the wrong channel. Here is how to identify and fix it."
category: computers
pillar: "Windows Activation Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/activate-windows-c39005d4-5837-5c23-b9f8-78e0f6f0f1f7"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "windows product key not working"
  - "windows activation key not working"
  - "product key not working windows 10"
  - "windows 10 activation key not working"
howto_steps:
  - name: "Check the error code shown after the key is rejected"
    text: "When Windows rejects a product key, it displays an error code. Note this code — it identifies the specific reason for rejection. Common codes include 0xC004F050 (invalid key), 0xC004C008 (blocked key), and 0x8007007B (key format error)."
  - name: "Verify the key matches your Windows edition and version"
    text: "Check Settings > System > About for your current edition (Home, Pro, etc.). A Windows 11 Pro key cannot activate Windows 11 Home, and a Windows 10 key cannot activate Windows 11. The key must match both the edition and the version."
  - name: "Re-enter the key character by character"
    text: "Open Settings > System > Activation > Change product key and retype the key carefully. Common mistakes: digit 0 vs letter O, digit 1 vs letter I or L. If possible, copy and paste the key directly from its source."
  - name: "Try phone activation if online activation fails"
    text: "Open an administrator Command Prompt and run: slui 4 — select your country and call the displayed number. Phone activation uses a separate system and can succeed when online activation cannot."
---

A Windows product key that does not work has a specific reason for failing — and that reason determines the fix. Windows rejects product keys for a small number of well-defined causes, each producing a different error code.

According to Microsoft's activation documentation, the most effective first step is to note the exact error code displayed after the rejection. Without it, troubleshooting is guesswork.

![Windows product key types: OEM tied to one PC, Retail transferable, Volume license for organizations, Digital license via Microsoft account](/images/windows-product-key-types.svg)

## Read the error code first

When Windows rejects a product key, it displays an error code in the activation window. The most common codes and their meanings:

| Error code | Meaning |
|------------|---------|
| 0xC004F050 | The key is invalid — wrong edition, wrong version, or incorrectly typed |
| 0xC004C008 | The key has been blocked by Microsoft's activation servers |
| 0xC004C060 | The key is not available — flagged or suspended by Microsoft |
| 0x8007007B | The key format is wrong — typically a volume licence key entered on a retail system |
| 0xC004F074 | No KMS server could be reached — usually a network or workplace issue |

## Cause 1 — Edition or version mismatch

A product key is specific to both the edition and version of Windows it was issued for.

**Edition mismatch examples:**
- A Windows 11 Home key used on Windows 11 Pro (or vice versa)
- A Windows 10 Pro key used on Windows 10 Home

**Version mismatch examples:**
- A Windows 10 key used on a Windows 11 installation
- A Windows 8 key used on Windows 10

Check your current edition at **Settings > System > About** — the Edition field shows exactly what version is installed. The product key must match.

**Fix:** Obtain a key that matches the installed edition and version, or install the edition that matches the key you have.

## Cause 2 — Typing error

A 25-character product key contains only the letters A–Z and digits 0–9, but several characters are nearly identical visually. A single wrong character causes rejection with no indication of which position is wrong.

Common mistakes:
- `O` (letter) vs `0` (zero)
- `I` (letter I) vs `1` (one) vs `L` (letter L)
- `B` vs `8`
- `S` vs `5`

**Fix:** Re-enter the key by reading each character individually from its source, or copy and paste directly if the key is in a digital document. Go to **Settings > System > Activation > Change product key** to enter it again.

## Cause 3 — Key already used on another device

Retail Windows product keys are typically licensed for one device. If the key was previously used to activate Windows on a different device, subsequent activations on a new device may be blocked.

**Fix:** If you are replacing the previous device, try phone activation — the automated phone system asks how many devices the key is currently active on. Answering honestly may allow the transfer to be approved. For retail keys purchased from Microsoft or authorised retailers, Microsoft support can also assist with legitimate device transfers.

## Cause 4 — Key from an unofficial source

Keys purchased from third-party marketplaces, auction sites, or discount resellers that are not authorised by Microsoft are frequently invalid, already used by previous buyers, or from batches that have been recalled and blocked.

**Fix:** Purchase a legitimate key directly from the Microsoft Store or an authorised retailer. Microsoft does not provide support for keys obtained from unauthorised sources.

## Cause 5 — Volume licence key on a retail system (error 0x8007007B)

If error **0x8007007B** appears, the key is formatted as a volume licence key (KMS or MAK). These keys are not for personal use — they require a KMS server or a volume licence agreement with Microsoft.

**Fix:** Use a retail product key. If this is a workplace device, contact your IT administrator for the correct activation method.

## Phone activation as a last resort

If online activation fails for a legitimate key, phone activation uses a separate verification pathway:

1. Open an administrator Command Prompt and run: `slui 4`
2. Select your country
3. Call the displayed number
4. Follow the automated system to receive a confirmation ID
5. Enter the confirmation ID when prompted

Phone activation can resolve cases where online activation is blocked due to perceived licence overuse, hardware changes, or system flags.

## Frequently asked questions

**I bought a key online at a steep discount and it is not working. Can Microsoft fix it?**
If the key was purchased from a source not authorised by Microsoft, Microsoft does not provide support for it. Deeply discounted keys from unofficial sources are frequently invalid or already used. The only reliable solution is to purchase a key from an authorised source.

**My key worked when I first installed Windows but stopped working after an update. Why?**
This occasionally happens if a Windows Update changes the system in a way that Windows interprets as a significant hardware change, particularly on older licences. Run the activation troubleshooter at **Settings > System > Activation > Troubleshoot** — it is designed to handle this scenario.

**Can I use the same product key on two computers?**
Retail licences allow activation on one device at a time. Using the same key on a second device will eventually cause rejection on one or both devices. Microsoft 365 Family and some other products allow multiple devices, but standard Windows retail keys do not.
