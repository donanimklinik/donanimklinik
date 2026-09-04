---
title: "Excel Keeps Crashing — Fix"
description: "Excel crashes when saving, printing, or opening spreadsheets? Disabling add-ins and turning off hardware acceleration stops most Excel crash problems."
category: software
pillar: "Office Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/excel-not-responding-hangs-freezes-or-stops-working-37e7d3c9-9e84-40bf-a805-4ca6853a1ff4"
source_last_verified_at: 2026-09-05
written_at: 2026-09-05
published_at: 2026-09-05
read_time: 6
fix_summary: "Open Excel in Safe Mode (hold Ctrl while launching) — if crashes stop, a COM add-in is the culprit. Go to File › Options › Add-ins, select COM Add-ins, and disable them one by one to find it."
fix_time_display: "~8 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "excel keeps crashing"
  - "excel crashing"
  - "excel crashes when saving"
  - "excel crash fix"
howto_steps:
  - name: "Identify the crash trigger"
    text: "Open Windows Event Viewer (search in Start menu). Go to Windows Logs > Application and look for Error events with Source listed as Microsoft Excel or Application Error. The Faulting module name in the event details identifies the cause: if it shows a third-party DLL name (not EXCEL.EXE or Microsoft DLL), an add-in is crashing Excel. If the faulting module is EXCEL.EXE itself, the installation is corrupted. This diagnosis saves time by pointing directly to the correct fix."
  - name: "Disable all add-ins and test"
    text: "Open Excel in Safe Mode by holding Ctrl while launching, or press Windows + R, type excel /safe, and press Enter. Work normally in Safe Mode — open a file, save it, and perform the action that previously caused the crash. If Excel does not crash in Safe Mode, a COM add-in is the cause. Go to File > Options > Add-ins > COM Add-ins > Go, uncheck all add-ins, and restart Excel normally. Re-enable add-ins one at a time to identify which one crashes Excel."
  - name: "Disable hardware acceleration"
    text: "Go to File > Options > Advanced. Scroll to the Display section and check Disable hardware graphics acceleration. Click OK and restart Excel. A GPU driver conflict is a common cause of crashes when Excel is scrolling through large spreadsheets, applying cell formatting to large ranges, or rendering charts with many data points."
  - name: "Check for conflicting third-party software"
    text: "Antivirus software that scans files in real time can conflict with Excel during save operations, causing Excel to crash when it tries to write to disk. Temporarily disable real-time protection and attempt the operation that previously caused the crash. If Excel stops crashing, add the Excel executable (EXCEL.EXE) and your documents folder to the antivirus exclusion list. Also check if any screen recording, clipboard manager, or remote desktop tools are running — these can intercept Excel's rendering calls and cause crashes."
  - name: "Run Office Online Repair"
    text: "Go to Control Panel > Programs and Features, find Microsoft 365 or Microsoft Office, click Change, and select Online Repair. Unlike Quick Repair, Online Repair downloads fresh Office files from Microsoft's servers and performs a complete reinstallation of Office components. This resolves crashes caused by corrupted installation files that Quick Repair cannot fix. After Online Repair completes, restart your computer before testing."
faq:
  - q: "Why does Excel crash only when I save a file?"
    a: "Crashes during save are almost always caused by antivirus real-time protection scanning the file as Excel writes it, or by Excel trying to save to a network or cloud location that becomes temporarily unavailable. Test by saving to your local Desktop. If the local save succeeds, add Excel to your antivirus exclusions and confirm your network drive or OneDrive is connected before saving to it."
  - q: "Why does Excel crash after a Windows or Office update?"
    a: "Updates occasionally change system DLL files that Excel or its add-ins depend on. Run Quick Repair (Control Panel > Programs and Features > Microsoft Office > Change > Quick Repair) immediately after an update that breaks Excel. If Quick Repair does not help, the update may have introduced a compatibility issue with a specific add-in — disable all add-ins and test."
  - q: "How do I find which add-in is crashing Excel?"
    a: "Go to File > Options > Add-ins > COM Add-ins > Go and disable all add-ins. Restart Excel and confirm it no longer crashes. Then enable add-ins one at a time, restarting Excel after each, and testing the operation that previously caused the crash. When Excel crashes again, the last add-in you enabled is the culprit. Contact the add-in vendor for an updated version compatible with your Excel version."
  - q: "Why does Excel crash on a specific spreadsheet but not others?"
    a: "A spreadsheet-specific crash usually means that file contains a corrupted chart, a broken external link to a missing workbook, a macro that errors out, or a function not supported by your Excel version. Open the file in Excel Safe Mode to disable macros and add-ins. If it opens in Safe Mode, go to File > Options > Trust Center > Trust Center Settings > Macro Settings and disable macros to isolate whether a macro is causing the crash."
  - q: "Does Online Repair delete my Excel files?"
    a: "No. Online Repair reinstalls Office application files only — your .xlsx spreadsheets are stored in your own folders and are completely unaffected. Your Office settings and activation status are also preserved. Online Repair does reset any customizations to the Office ribbon or Quick Access Toolbar."
---

**Excel keeps crashing** means the application closes unexpectedly without a warning — you are working in a spreadsheet and Excel simply disappears, or it crashes specifically when saving, printing, or performing certain operations. According to Microsoft's Office troubleshooting documentation, the most common causes of Excel crashes are COM add-in conflicts, hardware acceleration issues with graphics drivers, and real-time antivirus interference during file save operations.

![Excel keeps crashing: Event Viewer diagnosis, add-in isolation, hardware acceleration, antivirus conflict, Online Repair](/images/excel-keeps-crashing-fix.svg)

## What causes Excel to keep crashing

**COM add-in conflict** — Excel add-ins run inside the Excel process and can crash it entirely when they encounter errors. After an Office update, add-ins built for an older Excel version often become unstable and cause crashes during specific operations.

**Antivirus interference during save** — Real-time antivirus protection scans files as they are written to disk. When antivirus blocks or delays Excel's write operation, Excel's file-writing routine times out and crashes.

**Hardware acceleration driver bug** — GPU rendering crashes are typically triggered by a specific operation — scrolling through a large spreadsheet, rendering a chart, or applying conditional formatting to a large range. These crashes are reproducible and always happen at the same point.

**Corrupted installation** — Incomplete Office updates or antivirus quarantine actions that remove Office files cause Excel to crash at random points with no consistent trigger.

## How to fix Excel keeps crashing

Start with step 1 — checking Event Viewer takes 2 minutes and immediately tells you whether an add-in or the installation is the cause, saving you from applying the wrong fix.

## How to verify the fix

Perform the exact operation that previously caused the crash — save the file, print a sheet, or open the specific spreadsheet that triggered it. If Excel completes the operation without closing, the fix worked. Monitor Excel across several sessions, as some crash triggers are intermittent.
