---
title: "Windows Activation Error 0xC004F050 — Fix"
description: "Error 0xC004F050 means Windows rejected the product key as invalid. Here is what causes it and the exact steps to resolve it on Windows 10 and 11."
category: computers
pillar: "Windows Activation Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/get-help-with-windows-activation-errors-09d8fb64-6768-4815-0c30-159fa7d89d85"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 5
fix_summary: "The product key is invalid for this Windows edition — run 'winver' to confirm your edition (Home/Pro/Enterprise) and make sure your key matches. Keys are edition-specific."
fix_time_display: "~3 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "0xc004f050"
  - "error 0xc004f050"
  - "windows activation error 0xc004f050"
  - "0xc004f050 windows 10"
howto_steps:
  - name: "Verify the product key is entered correctly"
    text: "Open Settings > System > Activation and select Change product key. Re-enter the 25-character key carefully, checking for common mistakes: the digit 0 vs the letter O, the digit 1 vs the letter I or L."
  - name: "Confirm the key matches your Windows edition"
    text: "A Windows 11 Home key cannot activate Windows 11 Pro, and vice versa. Open Settings > System > About to see your current edition. The product key must match it exactly."
  - name: "Use the activation troubleshooter"
    text: "Go to Settings > System > Activation and select Troubleshoot. Windows will attempt to diagnose and fix the activation problem automatically."
  - name: "Contact Microsoft support if the key is legitimate"
    text: "If the key came with a new device or was purchased directly from Microsoft or an authorised retailer, contact Microsoft support with proof of purchase. They can validate and reissue the activation."
faq:
  - q: "What does Windows activation error 0xC004F050 mean?"
    a: "Error 0xC004F050 means Windows rejected the product key as invalid. The key was refused before activation could even be attempted. This is usually caused by a typo when entering the key, a key for the wrong Windows edition, or a key from an unauthorized source."
  - q: "How do I know if my product key is for the right Windows edition?"
    a: "Go to Settings > System > About and check the Edition field. A Windows 11 Home key only works on Windows 11 Home; a Pro key only works on Pro. If the editions do not match, you need the correct key for your installed edition."
  - q: "Can a Windows 10 product key activate Windows 11?"
    a: "No. Windows 10 and Windows 11 use different product keys. A Windows 10 key will be rejected on a Windows 11 installation, producing error 0xC004F050 or a similar invalid key error."
  - q: "What characters are commonly confused when entering a Windows product key?"
    a: "The digit 0 and the letter O look similar, as do the digit 1 and the letters I or L. A single wrong character causes the key to be rejected. Re-enter the key carefully, or copy and paste it directly from the email or document where it was provided."
  - q: "My key came with a new PC and still gets 0xC004F050. What should I do?"
    a: "OEM keys shipped with new devices are tied to the specific hardware. If you have reinstalled Windows or replaced the motherboard, the key may not reactivate. Contact Microsoft support with proof of purchase; they can verify the original licence and assist with reactivation."
---

Error code **0xC004F050** appears when Windows cannot accept the product key you entered. The full message from the Software Licensing Service reads: "The product key is invalid." This does not mean Windows itself is broken — it means the key was rejected before activation could complete.

According to Microsoft's activation error documentation, this error has a small number of causes, each with a specific resolution.

![Windows activation error 0xC004F050: invalid product key — check for typos, confirm key matches Windows edition, avoid grey-market keys](/images/activation-error-0xc004f050.svg)

## What causes error 0xC004F050

**The product key was typed incorrectly.** A 25-character Windows product key contains only letters and digits, but several characters are visually similar: the digit `0` and the letter `O`, the digit `1` and the letters `I` or `L`. A single wrong character produces this error.

**The product key is for a different Windows edition.** Windows Home, Pro, Education, and Enterprise each require a different product key. Using a Pro key on a Home installation, or a Home key on a Pro installation, results in 0xC004F050.

**The product key is for a different version of Windows.** A Windows 10 key cannot activate Windows 11, and a Windows 7 or 8 key cannot activate Windows 10 or 11 through the standard channel.

**The product key has already been used on the maximum number of devices.** Retail keys are typically licensed for one device. If the same key was previously used on another device, Windows may reject it.

**The product key is not legitimate.** Keys purchased from unofficial marketplaces are frequently invalid, revoked, or already used. Microsoft does not support keys obtained from sources other than authorised retailers.

## Step 1 — Re-enter the product key carefully

Open **Settings > System > Activation** and select **Change product key**. Before typing, check your key source — the physical sticker on your device, the digital confirmation email, or the Microsoft account order history — and read each character precisely.

Common transcription mistakes:
- `0` (zero) written as `O` (letter O)
- `1` (one) written as `I` (letter I) or `L` (letter L)
- `8` written as `B`
- `5` written as `S`

If copying from a digital source, paste the key directly rather than retyping it to eliminate input errors.

## Step 2 — Verify your Windows edition

The product key must match the edition of Windows currently installed.

To check your edition: **Settings > System > About** — look for the **Edition** field.

Common mismatches:
- Buying a Windows Pro key but having Windows Home installed (or vice versa)
- Using a key from a different device that runs a different edition

If you need to upgrade from Home to Pro, purchase an upgrade key from the Microsoft Store directly — this is different from a standard Home or Pro activation key.

## Step 3 — Run the activation troubleshooter

Go to **Settings > System > Activation** and select **Troubleshoot**. The troubleshooter checks for common activation problems and can resolve some automatically, including cases where Windows recognises your hardware configuration from a previous activation.

## Step 4 — Use phone activation as a fallback

If the troubleshooter does not resolve the error and your key is legitimate, try phone activation:

1. Open an administrator Command Prompt
2. Run: `slui 4`
3. Select your country and call the displayed number
4. Follow the automated system to receive an activation confirmation ID
5. Enter the confirmation ID when prompted

Phone activation connects directly to Microsoft's licensing system and can resolve cases where online activation is blocked.

## Step 5 — Contact Microsoft support

If your product key came with a new device, was purchased from the Microsoft Store, or from an authorised retailer, and the steps above have not resolved the error, contact Microsoft support directly at [support.microsoft.com](https://support.microsoft.com). Have your proof of purchase ready. Microsoft can verify the key's validity and, if legitimate, assist with activation.

## If the key was purchased from a third-party marketplace

Keys purchased from unofficial sources — auction sites, discount key resellers, or peer-to-peer platforms — are not guaranteed to be valid. Microsoft does not provide support for keys obtained outside authorised channels. If a key from one of these sources triggers 0xC004F050, the key itself is the problem and Microsoft cannot resolve it.

## Frequently asked questions

**I typed the key correctly and the edition matches but still get 0xC004F050. Why?**
The key may have been used on another device already, or it may have been revoked by Microsoft. Contact Microsoft support with proof of purchase to have the key's status checked.

**Can I activate Windows without a product key?**
Windows 10 and 11 can run without activation, but unactivated Windows displays a watermark on the desktop, disables personalisation settings, and receives a persistent notification. Full functionality requires a valid product key or a digital licence linked to your Microsoft account.

**My key worked before but now shows 0xC004F050. What happened?**
A previously working key that now fails activation may have been revoked by Microsoft — this happens when the same key is detected on too many devices simultaneously. Contact Microsoft support to resolve a legitimate revocation.
