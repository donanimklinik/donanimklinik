---
title: "Printer Paper Jam But No Paper — Fix"
description: "Printer shows a paper jam error but there's no paper stuck inside? This guide covers the official steps to clear false jam errors on HP, Epson, and Canon."
category: peripherals
pillar: "Printer Errors"
status: published
official_source_url: "https://support.hp.com/us-en/document/c03633887"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "printer paper jam but no paper"
  - "printer says paper jam but no paper"
  - "epson printer paper jam but no paper"
  - "brother printer paper jam but no paper"
howto_steps:
  - name: "Power cycle the printer completely"
    text: "Turn the printer off using the power button. Unplug the power cable from the back of the printer (not just the wall outlet). Wait 60 seconds. Plug it back in and turn the printer on. A full power cycle clears the error state held in the printer's memory without requiring any paper removal."
  - name: "Check all paper path access points"
    text: "Open every door and cover on the printer: the front access door, rear access door (if present), and the duplexer (if your model has one). Look with a flashlight for any torn paper fragments, small pieces of label backing, or debris. Even a 1 cm fragment triggers the jam sensor."
  - name: "Clean the paper feed rollers"
    text: "With the printer off and unplugged, locate the paper feed rollers inside the paper tray slot. Dampen a lint-free cloth with distilled water (not tap water) and gently rotate each roller while wiping the surface. Dirty or worn rollers misread the paper sensor and report false jams."
  - name: "Check the paper tray alignment"
    text: "Remove all paper from the tray. Fan the sheets to eliminate static cling between pages. Reload the paper so it sits flat against the back of the tray. Adjust the width and length guides so they touch the paper edges without pressing inward. Misaligned guides cause the paper to skew into the sensor."
  - name: "Update the printer firmware"
    text: "Outdated printer firmware can cause sensors to misreport. For HP printers, open HP Smart or the printer's control panel and check for firmware updates. For Epson, use the Epson Software Updater. For Canon, check the Maintenance menu on the control panel. Apply any available updates and test after restarting."
---

A printer that reports a paper jam when no paper is visibly stuck is experiencing a sensor error, not a mechanical blockage. The jam sensor — a small optical or mechanical switch in the paper path — is triggering without paper actually being caught in the mechanism.

According to HP's official jam troubleshooting documentation, false jam errors are most commonly caused by small paper fragments left from a previous jam, debris on the paper feed rollers, or a firmware error that misreads the sensor state.

## What causes a false paper jam error

The jam sensor works by detecting whether the paper path is clear. A false error occurs when:

- **Paper fragment remaining** — a small piece torn from a previous real jam is lodged near a sensor
- **Dirty or glazed feed rollers** — debris on the roller surface causes it to slip, triggering the jam sensor without paper moving
- **Misaligned paper in the tray** — paper loaded at an angle skews into the sensor zone
- **Firmware bug** — some printer models have known firmware issues where the jam sensor state is not properly reset
- **Foreign object** — a small piece of tape, label backing, or staple inside the paper path

## How to fix printer showing paper jam with no paper

### Step 1 — Power cycle the printer completely

A power cycle clears the error state stored in the printer's memory. Unlike pressing the cancel button, which acknowledges the error without clearing the sensor state, a full power cycle resets all internal systems.

1. Press the **Power** button to turn the printer off
2. Unplug the **power cable** from the back of the printer
3. Wait **60 seconds** — this ensures the printer's capacitors fully discharge and the memory clears
4. Plug the power cable back in
5. Turn the printer on and wait for it to complete its startup

If the jam error does not appear after the power cycle, the error was caused by a temporary sensor fault. If it returns, continue to the next steps.

### Step 2 — Inspect all paper path access points

Even a small fragment of paper — 1–2 cm — can trigger the jam sensor. Paper tears are common during real jam clearing events.

With the printer powered off:

1. Open the **front access door** (where you access cartridges or the paper path)
2. Open the **rear access door** if your printer has one — often a panel that snaps off the back
3. Remove the **duplexer** if present (a module that enables double-sided printing, usually clips onto the rear)
4. Use a **flashlight** to inspect the rollers, guides, and sensor areas
5. Look for any paper fragments, torn edges, label backing, or other debris
6. Remove anything you find using tweezers or by hand — do not use scissors inside the printer

On HP printers, also check the area above the cartridge carriage — paper occasionally tears and lodges in this area without being visible from below.

### Step 3 — Clean the paper feed rollers

Rollers that are glazed with ink residue, paper dust, or general debris can slip on the paper surface. When a roller slips, the printer detects that paper is not moving normally and reports a jam.

1. Turn the printer **off** and unplug it
2. Open the paper input tray and locate the feed rollers (usually visible at the back of the tray slot — small cylindrical rubber components)
3. Dampen a **lint-free cloth** with distilled water — do not use tap water (minerals leave residue), cleaning sprays, or alcohol
4. Press the cloth gently against a roller and rotate it by hand to clean the entire surface
5. Repeat for each visible roller
6. Allow the rollers to dry fully (10–15 minutes) before powering the printer back on

### Step 4 — Reload paper correctly

Incorrectly loaded paper skews as it enters the feed mechanism, triggering the jam sensor before the paper reaches the print zone.

1. Remove all paper from the input tray
2. **Fan the sheets** — hold one end and let the pages fall slightly to separate them. Static electricity between pages causes double-feeding, which triggers jam sensors
3. Tap the stack on a flat surface to align all edges
4. Reload the paper flat against the back of the tray
5. Adjust the **width guides** so they lightly touch both sides of the paper stack — not pressing in, not loose
6. Adjust the **length guide** to meet the back edge of the paper stack

Only use paper within the printer's supported specifications. Paper that is too thick, too thin, or curled from humidity can trigger false jam errors.

### Step 5 — Update the printer firmware

HP, Epson, and Canon have released firmware updates that correct known sensor misreporting issues on specific models.

**HP printers:**
1. Open **HP Smart** on Windows or the printer's control panel
2. Go to **Printer Settings** → **Printer Information** → **Update**
3. Install any available firmware update and restart the printer

**Epson printers:**
1. Download **Epson Software Updater** from epson.com
2. Run the updater and install any firmware updates for your model

**Canon printers:**
1. On the control panel, go to **Setup** → **Firmware Update**
2. Follow the prompts to check for and install updates

## How to verify the fix

1. Load 5–10 sheets of clean, undamaged paper into the input tray
2. Send a test print from Windows: **Settings** → **Bluetooth & devices** → **Printers & scanners** → click your printer → **Print a test page**
3. If the test page prints without a jam error, the issue is resolved

## Frequently asked questions

**Printer shows paper jam immediately when powered on, before any paper is loaded.**
This confirms a sensor fault rather than actual paper. A fragment is likely lodged near the sensor. Inspect all access points with a flashlight and check for debris even in areas that seem inaccessible.

**Printer cleared the jam error once but it keeps returning.**
The feed rollers are likely worn or dirty. After cleaning (Step 3), test with a small batch of paper. If the error returns consistently, the rollers may need replacement — check your printer manufacturer's support site for roller replacement guides or service options.

**Paper jam error on a brand-new printer.**
A new printer with a jam error has likely experienced packing material left inside the paper path. Open all doors and remove any foam, tape, or cardboard that may have been left from shipping.
