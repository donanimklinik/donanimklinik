---
title: "Canon Printer Not Printing — Fix"
description: "Canon printer not printing anything? These are the official Canon troubleshooting steps to resolve blank pages, no output, and stuck print jobs."
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
  - "canon printer not printing"
  - "canon printer won't print"
  - "canon printer not printing anything"
  - "my canon printer is not printing"
howto_steps:
  - name: "Check ink levels and print head status"
    text: "Open the Canon printer's control panel or the Canon IJ Status Monitor on Windows (right-click the printer icon in the system tray). Check ink levels for all cartridges. If any cartridge is empty or very low, replace it. Even if the document does not use a particular colour, some Canon models will not print when any cartridge is depleted."
  - name: "Cancel all pending print jobs and restart the spooler"
    text: "Open Settings > Bluetooth & devices > Printers & scanners, click your Canon printer, and select Open print queue. Cancel all jobs with Ctrl+A then Delete. Then press Win+R, type services.msc, find Print Spooler, right-click and select Restart."
  - name: "Run the Canon print head cleaning cycle"
    text: "On the printer's control panel, navigate to Maintenance or Setup > Maintenance > Cleaning. Select Standard Cleaning. The printer runs ink through the print head nozzles to clear any dried ink. After cleaning, print the nozzle check pattern to confirm all nozzles are firing."
  - name: "Check the paper and paper size settings"
    text: "Remove all paper from the tray, fan the sheets to separate them, and reload them. Confirm the paper guides touch the paper edges without pressing too tightly. In Windows, open the print dialog and confirm the paper size in the application matches the paper size set on the printer."
  - name: "Reinstall the Canon printer driver"
    text: "Go to Settings > Bluetooth & devices > Printers & scanners, click your Canon printer, and select Remove device. Download the latest full driver for your Canon model from support.usa.canon.com. Install it and reconnect the printer when prompted."
faq:
  - q: "Why is my Canon printer not printing anything?"
    a: "The most common causes are an empty ink cartridge (including colours not used in the current document), clogged print head nozzles, a stuck job in the Windows print queue, or a communication issue between Windows and the printer driver."
  - q: "Can a low or empty colour cartridge stop a Canon printer from printing at all?"
    a: "Yes. Some Canon models require all cartridges to have ink before printing, even for black-and-white documents. If any cartridge is empty or below a threshold, the printer may refuse all print jobs. Check ink levels in the Canon IJ Status Monitor and replace any depleted cartridge."
  - q: "How do I clear stuck print jobs on a Canon printer?"
    a: "Go to Settings > Bluetooth & devices > Printers & scanners, click your Canon printer, select Open print queue, select all jobs with Ctrl+A, and press Delete. Then restart the Print Spooler service by pressing Win+R, typing services.msc, finding Print Spooler, right-clicking it, and selecting Restart."
  - q: "What does print head cleaning do on a Canon printer?"
    a: "Print head cleaning forces ink through the nozzles to clear dried ink blockages. It consumes a small amount of ink. Access it from the printer's control panel under Maintenance > Cleaning, or from the Canon IJ Printer Assistant Tool on Windows. Run it when print quality is poor or nozzles are missing output."
  - q: "Canon printer prints blank pages. What does that mean?"
    a: "Blank pages usually mean the print head nozzles are clogged and no ink is being deposited on the paper, or all ink cartridges are depleted. Run the print head cleaning cycle, then print the nozzle check pattern. If the pattern shows missing lines, run deep cleaning or replace the cartridges."
---

A Canon printer that appears ready but produces no output — or prints blank pages — is almost always a software, ink, or print head issue rather than a hardware failure. The printer receives the job, processes it, and moves paper through, but nothing appears on the page.

According to Canon's official printer troubleshooting documentation, the most common causes are depleted ink cartridges (including non-printing colours), clogged print head nozzles, and stuck jobs in the Windows print queue.

![Canon printer not printing: check ink levels and print head, run nozzle check from printer utility, clear print queue in Windows, ensure Canon driver is installed correctly](/images/canon-printer-not-printing.svg)

## What causes a Canon printer to not print

Canon printers stop printing for a distinct set of reasons:

- **Empty or low ink cartridge** — many Canon models halt all printing when any cartridge is depleted, even if the empty cartridge is not used for the current document
- **Clogged print head nozzles** — dried ink blocks nozzles after periods of inactivity
- **Stuck print job** — a single failed job blocks all subsequent jobs in the queue
- **Driver mismatch** — an incompatible or outdated driver after a Windows update
- **Paper size mismatch** — the printer waits for the correct paper if the application and printer settings differ

## How to fix Canon printer not printing

### Step 1 — Check ink levels

Open the **Canon IJ Status Monitor** on Windows:

1. Right-click the **Canon printer icon** in the Windows system tray (bottom-right corner)
2. Select **Open Canon IJ Status Monitor**
3. Check the ink level bars for all cartridges

Alternatively, on the printer's control panel, navigate to **Setup** → **Maintenance** → **Ink Level Information**.

If any cartridge shows low or empty, replace it before continuing. Canon's official documentation confirms that some printer models will refuse to print entirely when even one cartridge is below a minimum threshold — even when printing in black and white.

### Step 2 — Clear the print queue and restart the Print Spooler

A job stuck in the queue — from a previous failed print attempt — can block all subsequent jobs.

1. Go to **Settings** → **Bluetooth & devices** → **Printers & scanners**
2. Click your Canon printer and select **Open print queue**
3. Press **Ctrl+A** to select all jobs, then press **Delete**
4. Confirm cancellation of all jobs

Then restart the Windows Print Spooler service:

1. Press **Win+R**, type `services.msc`, press **Enter**
2. Find **Print Spooler** in the list
3. Right-click it and select **Restart**

After the Spooler restarts, try sending a simple test print — a single page from Notepad works well.

### Step 3 — Run the print head cleaning cycle

If the printer was idle for several days or weeks, the print head nozzles may have dried ink blocking them. This produces blank pages or pages with missing sections.

On the **printer's control panel**:

1. Navigate to **Setup** or **Maintenance**
2. Select **Maintenance** → **Cleaning**
3. Choose **Standard Cleaning**

The printer runs ink through the nozzles for approximately 30–60 seconds. After cleaning completes, print the **nozzle check pattern** (also in the Maintenance menu) to see if all nozzles are firing correctly. If some nozzles are still missing, run one additional cleaning cycle.

Do not run more than two cleaning cycles in sequence — this consumes significant ink and can damage the print head if the nozzles are physically blocked.

### Step 4 — Verify paper and paper size settings

A paper size mismatch between the application and the printer can cause the printer to wait indefinitely without printing.

1. Remove the paper from the tray
2. Fan the sheets and reload them — misaligned paper causes feed errors
3. Adjust the paper guides so they touch the paper edges without bending them
4. In the **print dialog** (the window that appears when you press Ctrl+P), confirm the paper size matches the paper in the tray
5. In **Windows**, go to **Settings** → **Bluetooth & devices** → **Printers & scanners** → click your Canon printer → **Printer properties** → **Paper/Quality** tab — confirm the default paper size matches

### Step 5 — Reinstall the Canon printer driver

If the previous steps do not resolve the issue, the printer driver may be corrupted or incompatible after a Windows update.

1. Go to **Settings** → **Bluetooth & devices** → **Printers & scanners**
2. Click your Canon printer and select **Remove device**
3. Go to [support.usa.canon.com](https://support.usa.canon.com) and search for your Canon model
4. Download the latest **full driver and software package** for your model and Windows version
5. Run the installer and follow the prompts — it reinstalls all driver components from scratch
6. Reconnect the printer by USB or Wi-Fi when the installer requests it

## How to verify the fix

1. Open the **Canon IJ Status Monitor** and confirm all ink levels are adequate
2. Send a **test print** using the printer's own test page: go to **Settings** → **Printers & scanners** → click your Canon printer → **Print a test page**
3. Confirm the page prints with no missing sections, lines, or blank areas

## Frequently asked questions

**Canon printer is printing blank pages.**
Blank pages almost always indicate clogged print head nozzles or empty ink cartridges. Run the nozzle check pattern first (Setup → Maintenance → Print Nozzle Check Pattern). If columns are missing from the pattern, run the standard cleaning cycle. If the pattern prints correctly, check ink levels.

**Canon printer says it is printing but nothing comes out.**
This is a print head or ink delivery issue. Run two rounds of cleaning, print the nozzle check pattern, and check ink levels. If ink is present and cleaning does not fix it, the print head may need replacement. Check Canon's support page for your model — some models have replaceable print heads, while others require a service visit.

**Canon printer prints some colours but not others.**
This indicates one or more cartridges are clogged or empty. Run the nozzle check pattern — any missing columns in the pattern identify the problem cartridges. Replace depleted cartridges or run the cleaning cycle for the affected colours.
