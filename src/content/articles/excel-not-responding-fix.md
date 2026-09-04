---
title: "Excel Not Responding — Fix"
description: "Excel freezes and shows Not Responding? Disabling add-ins and running Office Repair fixes most Excel freeze problems on Windows. Step-by-step guide."
category: software
pillar: "Office Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/excel-not-responding-hangs-freezes-or-stops-working-37e7d3c9-9e84-40bf-a805-4ca6853a1ff4"
source_last_verified_at: 2026-09-05
written_at: 2026-09-05
published_at: 2026-09-05
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "excel not responding"
  - "excel freezing"
  - "excel hangs"
  - "excel not responding fix"
howto_steps:
  - name: "End the frozen Excel process in Task Manager"
    text: "Press Ctrl + Shift + Esc to open Task Manager. Find Microsoft Excel in the list — its status will show Not Responding. Right-click it and select End Task. Wait 10 seconds for the process to fully close. This is always the first step — ending the frozen process allows a clean restart and prevents Windows from accumulating multiple stuck Excel instances."
  - name: "Open Excel in Safe Mode to isolate add-ins"
    text: "Hold the Ctrl key and double-click the Excel shortcut (or press Windows + R, type excel /safe, and press Enter). Excel Safe Mode disables all add-ins and custom toolbars. If Excel runs normally in Safe Mode but freezes in normal mode, a third-party add-in is causing the problem. Go to File > Options > Add-ins, set the dropdown to COM Add-ins, click Go, and uncheck each add-in one at a time to find the culprit."
  - name: "Disable hardware acceleration"
    text: "Go to File > Options > Advanced. Scroll down to the Display section and check Disable hardware graphics acceleration. Click OK and restart Excel. Hardware acceleration offloads rendering to the GPU, but on systems with outdated or incompatible drivers, this causes Excel to freeze — especially when scrolling through large spreadsheets or switching between sheets."
  - name: "Check and free up available memory"
    text: "Large Excel files with many formulas, pivot tables, or conditional formatting rules consume significant memory. Open Task Manager and check the Memory column — if your system is above 85% memory usage, Excel will freeze frequently. Close other applications to free memory. In Excel, go to File > Options > Formulas and switch from Automatic to Manual calculation to prevent Excel from recalculating the entire workbook on every change."
  - name: "Repair the Microsoft Office installation"
    text: "Go to Control Panel > Programs and Features. Find Microsoft 365 or Microsoft Office in the list, click Change, and select Quick Repair. Click Repair and wait for the process to complete (about 2 minutes). Quick Repair runs without internet access and replaces corrupted Office files. If the freeze continues, run Online Repair instead — it downloads fresh Office files from Microsoft and performs a more thorough repair."
faq:
  - q: "Why does Excel freeze only when opening large files?"
    a: "Large files with many rows, complex formulas, or embedded objects require significant memory and processing time. Excel may appear frozen while loading and calculating the file in the background. Wait up to 2 minutes for files over 10 MB before concluding Excel has locked up. Switching formulas to Manual calculation (File > Options > Formulas) reduces the processing load when opening large files."
  - q: "Why does Excel freeze when I try to save?"
    a: "Excel freezes during save most often because it is trying to write to a network location or cloud drive that is temporarily unavailable, or because antivirus software is scanning the file as it is written. Try saving to your local Desktop first. If the local save works, the problem is with the network path or antivirus interference — add Excel to your antivirus exclusions."
  - q: "How do I recover unsaved work after Excel freezes?"
    a: "When you reopen Excel after a crash, it automatically opens the Document Recovery pane on the left side showing recovered versions of your file. Select the most recent autosaved version and immediately save it with a new name. If no recovery pane appears, go to File > Info > Manage Workbook > Recover Unsaved Workbooks to browse AutoRecover files."
  - q: "Why does Excel freeze on a specific spreadsheet but not others?"
    a: "A file-specific freeze usually means that spreadsheet contains circular references, broken external links to missing files, an add-in that processes that file's content, or embedded objects (charts, images, OLE objects) that expose a rendering bug. Open the file in Excel Safe Mode to bypass add-ins. If it opens normally in Safe Mode, disable add-ins one by one to find the conflict."
  - q: "Does disabling add-ins permanently remove them?"
    a: "No. Disabling an add-in in File > Options > Add-ins only turns it off for the current Excel session or permanently until you re-enable it. The add-in remains installed and can be re-enabled at any time by going back to the same menu and checking the box next to it."
---

**Excel not responding** means the application freezes and stops accepting input — the title bar displays "Not Responding," scrolling halts, and clicking anywhere in the Excel window has no effect. According to Microsoft's official Excel troubleshooting documentation, the most common causes are third-party add-ins conflicting with Excel, hardware acceleration incompatibility, or insufficient system memory when working with large workbooks.

![Excel not responding: Safe Mode test isolates add-ins, hardware acceleration fix, memory check, Office Repair — step by step](/images/excel-not-responding-fix.svg)

## What causes Excel to freeze and stop responding

**Add-in conflict** — Third-party Excel add-ins (data analysis tools, CRM integrations, PDF exporters) inject code into the Excel process. After an Office update, these add-ins can trigger freezes because they were built for an older Excel version.

**Hardware acceleration mismatch** — Excel uses the GPU to render large spreadsheets. On systems with outdated graphics drivers, this causes the rendering to stall, locking the entire application.

**Large workbook processing** — A workbook with thousands of rows, complex array formulas, or many conditional formatting rules can take minutes to recalculate. During this time, Excel's window becomes unresponsive even though the application is actively working.

**Corrupted Office installation** — Incomplete updates or antivirus quarantine actions can corrupt Excel's executable or supporting DLL files, causing intermittent freezes with no clear trigger.

## How to fix Excel not responding

Work through these steps in order. Most freezes are resolved at step 2 (Safe Mode add-in test) or step 5 (Office Repair).

## How to verify the fix

Reopen the file that previously caused the freeze. Scroll through several sheets, perform a save, and apply a filter to a large dataset. If Excel remains responsive throughout, the fix worked. If a specific file still causes freezing but others do not, the issue is with that file — try opening it via File > Open > and selecting Open and Repair from the dropdown arrow next to the Open button.
