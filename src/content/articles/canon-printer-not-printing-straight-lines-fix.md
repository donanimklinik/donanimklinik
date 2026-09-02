---
title: "Canon Printer Not Printing Straight Lines — Fix"
description: "Canon printer printing wavy, misaligned, or diagonal lines instead of straight ones? Run the official Canon print head alignment to fix the issue."
category: peripherals
pillar: "Printer Errors"
status: published
official_source_url: "https://support.usa.canon.com/kb/index?page=content&id=ART109546"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "canon printer not printing straight lines"
  - "canon printer printing wavy lines"
  - "canon printer lines not straight"
  - "canon printer diagonal lines"
howto_steps:
  - name: "Run the print head alignment from the Canon maintenance menu"
    text: "On the printer's control panel, go to Setup > Maintenance > Print Head Alignment > Auto (Start). The printer prints an alignment pattern and scans it automatically to calibrate the print head position. This is the primary fix for misaligned or non-straight lines."
  - name: "Run the print head cleaning cycle"
    text: "Go to Setup > Maintenance > Cleaning > Standard Cleaning. After cleaning completes, print the nozzle check pattern from the same Maintenance menu. If nozzles are clogged, ink is delivered unevenly — causing lines to appear crooked or broken."
  - name: "Check paper loading and paper type settings"
    text: "Remove all paper, fan the sheets, and reload them flat against the tray guides. In the print dialog or printer properties, confirm the Paper Type setting matches the actual paper in the tray. Using plain paper settings with coated paper (or vice versa) causes ink to spread unevenly, producing wavy lines."
  - name: "Clean the encoder strip"
    text: "The encoder strip is a thin transparent strip that runs horizontally inside the printer, allowing the carriage to track position. If it is dirty or smeared with ink, lines print at incorrect positions. With the printer off and unplugged, use a cotton swab lightly dampened with distilled water to wipe the strip gently from end to end."
  - name: "Run manual print head alignment if automatic alignment fails"
    text: "Go to Setup > Maintenance > Print Head Alignment > Manual. The printer prints a grid of alignment patterns. Examine each pattern and enter the number of the straightest column into the control panel. Repeat for each alignment pattern group until all settings are entered."
---

A Canon printer that produces wavy, skewed, or misaligned lines — on what should be straight horizontal or vertical lines — has a print head alignment issue. The print head is slightly out of position, causing each row of ink drops to land at a slightly different position than intended.

According to Canon's official maintenance documentation, print head misalignment is a normal occurrence that develops over time or after the printer is moved. It is corrected through the built-in alignment procedure, not through hardware repair.

## What causes Canon printer to not print straight lines

Lines appear crooked or wavy for specific reasons:

- **Print head misalignment** — the most common cause. The print head shifts slightly out of calibration over time or after the printer is moved or bumped
- **Clogged print head nozzles** — ink delivered unevenly from partially blocked nozzles causes lines to appear broken or misaligned
- **Incorrect paper type setting** — ink spreading behaviour differs between paper types; wrong settings cause ink to bleed or pool unevenly
- **Dirty encoder strip** — the carriage position strip is smeared, causing incorrect horizontal positioning
- **Worn or dirty feed rollers** — paper fed at a slight angle causes the printed output to be skewed

## How to fix Canon printer not printing straight lines

### Step 1 — Run automatic print head alignment

Print head alignment recalibrates the position of the print head nozzles so that ink drops land at the correct coordinates. Canon printers perform this alignment automatically after cartridge replacement, but it can be run manually at any time.

On the **printer's control panel**:
1. Navigate to **Setup** (or **Settings**) → **Maintenance**
2. Select **Print Head Alignment**
3. Select **Auto** or **Start**

The printer prints a small alignment pattern, then uses the scanner (on all-in-one models) or an internal optical sensor to read it. The calibration takes approximately 2–3 minutes. Do not open the printer or load paper during the process.

On **Canon PIXMA models without a touchscreen**, the alignment button sequence varies by model — refer to the quick start guide for your model, or navigate through the **Setup** button menu on the control panel.

After alignment, print a document with horizontal and vertical lines (a spreadsheet or ruled page works well) to evaluate the result.

### Step 2 — Run the print head cleaning cycle

Clogged nozzles deliver ink unevenly — some positions receive less ink than others, causing gaps and irregularities that appear as wavy or broken lines.

1. On the control panel, go to **Setup** → **Maintenance** → **Cleaning**
2. Select **Standard Cleaning**
3. After cleaning (30–60 seconds), select **Print Nozzle Check Pattern** from the same Maintenance menu
4. Examine the printed pattern — all vertical columns should be complete with no gaps or fading

If columns are missing in the nozzle check pattern, run a second cleaning cycle. Do not run more than two cycles without printing in between — excessive cleaning uses significant ink.

After successful cleaning (all nozzles confirmed), run the **print head alignment** again (Step 1), as cleaning can slightly shift the alignment.

### Step 3 — Verify paper loading and paper type settings

Incorrect paper type settings change how the printer controls ink volume and drying time, which directly affects line quality.

**Paper loading:**
1. Remove all paper from the tray
2. Fan the sheets to separate them
3. Reload them so all edges are aligned and flat against the tray guides
4. Adjust the guides to touch the paper edges without pressing them

**Paper type setting:**
1. In your application, open the print dialog (**File** → **Print** or **Ctrl+P**)
2. Click **Properties** or **Printer Properties**
3. On the **Main** or **Media Type** tab, select the paper type that matches what is in the tray:
   - Plain Paper for standard office paper
   - High Resolution Paper for photo paper
   - Matte Photo Paper, Glossy Photo Paper, etc. for photo papers
4. Using **Plain Paper** settings on glossy paper (or vice versa) causes ink to absorb or spread incorrectly, producing wavy edges on lines

### Step 4 — Clean the encoder strip

The encoder strip is a thin transparent film inside the printer that tells the carriage exactly where it is as it moves horizontally. Ink splatter or dust on this strip causes the carriage to misjudge its position, printing each row of ink at a slightly offset location.

With the printer **off and unplugged**:

1. Open the top cover to access the interior
2. Locate the encoder strip — it is a thin, semi-transparent strip running horizontally behind or alongside the carriage rail
3. Lightly dampen a cotton swab with **distilled water** (not tap water or alcohol)
4. Gently wipe the strip from one end to the other — do not scrub or press hard
5. Allow it to dry completely (10–15 minutes) before closing the printer and powering it on
6. After powering on, run print head alignment (Step 1) again

### Step 5 — Run manual print head alignment

If automatic alignment does not resolve the issue — or if the printer model does not have an automatic alignment scanner — use manual alignment.

1. Go to **Setup** → **Maintenance** → **Print Head Alignment** → **Manual**
2. The printer prints a series of numbered alignment patterns
3. For each pattern group, examine the columns and identify the one that appears most straight and evenly spaced
4. Enter that number using the printer's control panel
5. Repeat for all pattern groups (typically 9–12 groups covering horizontal, vertical, and diagonal alignment)

Manual alignment provides finer control than automatic alignment and is used when automatic results are still not satisfactory.

## How to verify the fix

1. Print a page with a mix of horizontal lines, vertical lines, and diagonal lines — a spreadsheet or technical drawing works well
2. Check that:
   - Horizontal lines are straight across the full width of the page
   - Vertical lines are straight from top to bottom
   - Diagonal lines are consistent with no breaks or waviness
3. Compare with a previous printed page if available

## Frequently asked questions

**Canon printer lines are straight at the top of the page but wavy at the bottom.**
This indicates a paper feed issue — the paper is slipping or skewing slightly as it moves through the printer. Clean the feed rollers (Step 3 of the general Canon troubleshooting guide) and ensure the paper guides are set correctly.

**Canon printer alignment pattern itself has wavy lines.**
If the alignment test pattern prints incorrectly, the issue is more severe — likely a clogged print head or a hardware fault. Run two cleaning cycles before attempting alignment again. If the pattern remains distorted, contact Canon support for service options.

**Lines are fine when printing photos but crooked for documents.**
Different paper type settings use different print modes. Set the paper type correctly in the print dialog for each type of print job. If the issue persists, the print head alignment may need to be set separately for different paper types using the manual alignment procedure.
