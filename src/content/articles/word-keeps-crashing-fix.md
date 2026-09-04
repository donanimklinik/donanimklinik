---
title: "Word Keeps Crashing — Fix"
description: "Microsoft Word closes unexpectedly when printing, saving, or typing? Clearing Normal.dotm and disabling add-ins stops most Word crash problems. Step-by-step."
category: software
pillar: "Office Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/word-is-not-responding-or-hangs-e07d20e8-e7ab-4f2f-9cf7-43af94dd8e6c"
source_last_verified_at: 2026-09-05
written_at: 2026-09-05
published_at: 2026-09-05
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "word keeps crashing"
  - "word crashing"
  - "word crashes when saving"
  - "word crash fix"
howto_steps:
  - name: "Test in Safe Mode to isolate add-ins"
    text: "Press Windows + R, type winword /safe, and press Enter. Safe Mode disables all COM add-ins, VBA macros in the startup folder, and custom templates. Work in Safe Mode — type, save, and print — and perform the action that previously caused the crash. If Word does not crash in Safe Mode, a COM add-in or a macro stored in the Normal.dotm template is the cause. This single test separates add-in crashes from installation crashes."
  - name: "Reset the Normal.dotm template"
    text: "Close Word completely. Open File Explorer and navigate to C:\\Users\\[YourName]\\AppData\\Roaming\\Microsoft\\Templates. Find Normal.dotm and rename it to Normal.dotm.old (do not delete it — you may need to restore it). Restart Word — it creates a fresh Normal.dotm with default settings. If Word stops crashing after this, the old template contained a corrupted macro, style, or AutoText entry. Your .docx documents are not affected."
  - name: "Disable add-ins one by one"
    text: "Open Word normally (not Safe Mode). Go to File > Options > Add-ins. In the Manage dropdown, select COM Add-ins and click Go. Uncheck all add-ins and click OK. Restart Word and test if the crash still occurs. If Word is now stable, re-enable add-ins one at a time, restarting after each, until the crash returns. The last add-in you enabled is the cause. Common crash-causing add-ins include Grammarly, citation managers (Zotero, EndNote), and document management tools."
  - name: "Check for corrupted fonts"
    text: "Word crashes related to specific documents or when applying certain fonts are often caused by corrupted font files in Windows. Open Control Panel > Appearance and Personalization > Fonts. Look for fonts with unusual file sizes (0 KB or unusually large). Delete any suspicious fonts and reinstall them from a trusted source. Also try opening the problematic document and changing all text to a standard font (like Calibri) to determine if a specific font triggers the crash."
  - name: "Run Office Online Repair"
    text: "Go to Control Panel > Programs and Features, find Microsoft 365 or Microsoft Office, click Change, and select Online Repair. Online Repair downloads fresh Word application files from Microsoft's servers and replaces all corrupted components. This is more thorough than Quick Repair and resolves crashes caused by corrupted Word DLL files that Quick Repair cannot fix. After Online Repair, restart your computer."
faq:
  - q: "Why does Word crash every time I try to print?"
    a: "Word communicates with the printer driver before and during printing. A corrupted or outdated printer driver causes Word to crash at the point of communication. Update the printer driver from the manufacturer's website. As a quick test, set Microsoft Print to PDF as the default printer and try printing — if Word does not crash when printing to PDF, the issue is confirmed to be with the physical printer's driver."
  - q: "Why does Word crash when I open a document from a colleague?"
    a: "Documents from other users often contain fonts not installed on your system, macros, or complex formatting that expose version differences. Open the document in Word Safe Mode (hold Ctrl while opening) to bypass macros. If it opens safely, the document contains a macro that crashes Word — go to File > Options > Trust Center > Macro Settings and set macros to Disable all macros with notification."
  - q: "How do I find out what is causing Word to crash?"
    a: "Open Windows Event Viewer (search in Start menu). Go to Windows Logs > Application and look for Error events around the time of the crash. The Faulting module name tells you what crashed: WINWORD.EXE means the Word installation is corrupted (run Online Repair); a third-party DLL name means an add-in caused the crash (disable that add-in); GDI32.dll or similar graphics DLL means a display driver issue (disable hardware acceleration)."
  - q: "Does resetting Normal.dotm lose my macros and custom styles?"
    a: "Yes. Macros stored in Normal.dotm and default style customizations are lost when you rename it. Before renaming, export any important macros by going to Developer tab > Visual Basic, then File > Export File for each macro module. If you do not see the Developer tab, enable it in File > Options > Customize Ribbon. After Word creates a new Normal.dotm, you can import your macros back."
  - q: "Why does Word crash after I install a new printer?"
    a: "Installing a new printer adds a new printer driver to Windows, and Word immediately detects and communicates with the new default printer on startup. If the new printer's driver has a bug or incompatibility, Word crashes during this initial communication. Set a different printer as the default temporarily (such as Microsoft Print to PDF) and test if Word stabilizes. If it does, reinstall the problematic printer's driver using the latest version from the manufacturer."
---

**Word keeps crashing** means Microsoft Word closes unexpectedly during use — while typing, saving, printing, or opening certain documents — without displaying a useful error message. According to Microsoft's Office troubleshooting documentation, Word crashes are most commonly caused by a corrupted Normal.dotm template containing a faulty macro, a COM add-in conflict, or a corrupted printer driver that Word communicates with during startup.

![Word keeps crashing: Safe Mode test, Normal.dotm reset, add-in isolation, font check, Online Repair — step-by-step](/images/word-keeps-crashing-fix.svg)

## What causes Word to keep crashing

**Corrupted Normal.dotm macro** — Word loads Normal.dotm on every startup and executes any macros stored in its AutoOpen or Document_Open event. A corrupted or poorly written macro in this template crashes Word immediately after launch or during the first operation.

**COM add-in conflict** — Grammar checkers, citation managers, and document management tools run inside the Word process. After a Word update, these add-ins may call Word functions that no longer exist in the updated API, causing a crash.

**Corrupted font file** — Word pre-processes fonts when rendering documents. A corrupted font file in the Windows Fonts folder causes Word to crash when that font is applied or when a document containing that font is opened.

**Printer driver communication failure** — Word queries the default printer on startup to determine page dimensions. A corrupted printer driver causes this query to fail and crashes Word before the application window even appears.

## How to fix Word keeps crashing

Start with step 1 — the Safe Mode test takes 30 seconds and immediately tells you whether the crash is caused by an add-in or template (fix with steps 2–3) or by the Word installation itself (fix with step 5).

## How to verify the fix

Perform the action that previously caused the crash — print a document, save to a network drive, or open the specific file that triggered it. If Word completes the operation without closing, the fix worked. Test across several sessions and different document types to confirm the stability.
