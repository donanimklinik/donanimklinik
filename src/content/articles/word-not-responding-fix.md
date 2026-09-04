---
title: "Word Not Responding — Fix"
description: "Microsoft Word freezes and shows Not Responding? Disabling add-ins and clearing the Normal.dotm template fixes most Word freeze problems. Step-by-step guide."
category: software
pillar: "Office Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/word-is-not-responding-or-hangs-e07d20e8-e7ab-4f2f-9cf7-43af94dd8e6c"
source_last_verified_at: 2026-09-05
written_at: 2026-09-05
published_at: 2026-09-05
read_time: 6
fix_summary: "Running Word in Safe Mode (winword /safe from Run dialog) reveals the root cause instantly — if Word is stable in Safe Mode, a COM add-in or corrupted Normal.dotm template is the culprit."
fix_time_display: "~5 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "word not responding"
  - "microsoft word not responding"
  - "word freezing"
  - "word hangs when saving"
howto_steps:
  - name: "End the frozen Word process in Task Manager"
    text: "Press Ctrl + Shift + Esc to open Task Manager. Find WINWORD.EXE or Microsoft Word in the list — its status will show Not Responding. Right-click it and select End Task. Wait 10 seconds. If Word was in the middle of a save, Windows will have created an autosaved version. Do not open a new Word window until the process has fully closed."
  - name: "Open Word in Safe Mode"
    text: "Hold the Ctrl key and double-click the Word shortcut, or press Windows + R, type winword /safe, and press Enter. Word Safe Mode disables all add-ins, custom templates, and startup items. If Word works normally in Safe Mode, a third-party add-in or a corrupted Normal.dotm template is the cause. Go to File > Options > Add-ins, set the dropdown to COM Add-ins, click Go, and disable each add-in one at a time to identify the problem."
  - name: "Reset the Normal.dotm template"
    text: "The Normal.dotm file is Word's default template. If it becomes corrupted, Word freezes consistently regardless of which document you open. Close Word completely. Open File Explorer and navigate to C:\\Users\\[YourName]\\AppData\\Roaming\\Microsoft\\Templates. Find Normal.dotm, right-click it, and rename it to Normal.dotm.bak. Restart Word — it will create a fresh Normal.dotm automatically. Your documents are not affected, but custom styles saved in Normal.dotm will be reset to defaults."
  - name: "Disable hardware acceleration"
    text: "Go to File > Options > Advanced. Scroll to the Display section and check Disable hardware graphics acceleration. Click OK and restart Word. On systems with incompatible GPU drivers, hardware acceleration causes Word to freeze when rendering complex documents with many images, tables, or tracked changes."
  - name: "Run Office Quick Repair"
    text: "Go to Control Panel > Programs and Features. Find Microsoft 365 or Microsoft Office, click Change, and select Quick Repair. Click Repair. The Quick Repair process takes about 2 minutes and replaces corrupted Word files without requiring an internet connection. If freezes continue, run Online Repair, which downloads a fresh copy of Office from Microsoft's servers and performs a complete reinstallation of Office components."
faq:
  - q: "Why does Word freeze when I try to print?"
    a: "Word freezes during printing most often because of a communication problem with the printer driver, or because Word is waiting for a network printer that is offline. First, set a local printer (such as Microsoft Print to PDF) as the default and try printing to it. If that works, the problem is with your physical printer's driver — update or reinstall the printer driver from the manufacturer's website."
  - q: "How do I recover a Word document after Word freezes?"
    a: "When you reopen Word after a crash, the Document Recovery pane appears on the left showing autosaved versions of your document. Click the most recent version and immediately save it with File > Save As using a new name. If the recovery pane does not appear, go to File > Info > Manage Document > Recover Unsaved Documents to browse Word's AutoRecover folder."
  - q: "Why does Word freeze only on documents with tracked changes?"
    a: "Documents with many tracked changes require Word to maintain two versions of every edit, which multiplies the rendering load. Accept or reject all changes (Review tab > Accept All or Reject All) to dramatically reduce the file's complexity. Also check if a specific change from a particular author or date triggers the freeze — delete those tracked changes first."
  - q: "What is Normal.dotm and why does it cause Word to freeze?"
    a: "Normal.dotm is Word's global template that loads automatically every time Word starts. It stores default styles, macros, AutoCorrect entries, and toolbar customizations. If a corrupted macro or style is stored in Normal.dotm, it causes Word to freeze on startup or during specific operations. Renaming the file forces Word to create a clean replacement, which resolves most template-related freezes."
  - q: "Does resetting Normal.dotm delete my Word documents?"
    a: "No. Normal.dotm is a template file, not a document. Your .docx files are stored in your own folders and are completely unaffected by resetting Normal.dotm. The only things reset are the default styles, macros, and customizations that were stored in that template file."
---

**Word not responding** means Microsoft Word freezes and stops accepting input — the title bar shows "Not Responding," you cannot type, save, or close the document normally, and the application must be ended through Task Manager. According to Microsoft's official Word troubleshooting documentation, the leading causes are a corrupted Normal.dotm template, conflicting add-ins, and hardware acceleration issues on systems with outdated graphics drivers.

![Word not responding: Safe Mode add-in test, Normal.dotm reset, hardware acceleration, Office Repair — prioritized fix path](/images/word-not-responding-fix.svg)

## What causes Word to freeze and stop responding

**Corrupted Normal.dotm template** — Word loads the Normal.dotm template on every startup. A corrupted macro, style, or AutoCorrect entry in this file causes Word to freeze consistently, often within seconds of opening a document.

**Add-in conflict** — Grammar checkers, citation managers, PDF converters, and document management plugins all integrate deeply into Word. After a Word update, incompatible add-ins can cause freezes during specific operations like saving or printing.

**Hardware acceleration rendering bug** — Word uses the GPU to render complex documents. Documents with many high-resolution images, complex tables, or heavy use of tracked changes can trigger a GPU rendering stall that locks the Word window.

**Printer driver conflict** — Word communicates with the printer driver even before you click Print, to set page margins and dimensions. A corrupted or outdated printer driver can cause Word to freeze on startup or when switching documents.

## How to fix Word not responding

Work through the steps in order. Safe Mode testing (step 2) quickly identifies add-in conflicts. Resetting Normal.dotm (step 3) resolves the majority of template-related freezes.

## How to verify the fix

Open the document that previously caused the freeze. Type several paragraphs, save the file, and attempt a print preview. If Word remains responsive and saves successfully, the fix worked. If a specific document still freezes Word but others open normally, the document itself may be corrupted — try File > Open > Open and Repair to recover its content.
