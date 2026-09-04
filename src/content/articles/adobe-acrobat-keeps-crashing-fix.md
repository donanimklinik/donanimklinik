---
title: "Adobe Acrobat Keeps Crashing — Fix"
description: "Adobe Acrobat crashes when printing, saving, or shortly after opening? Disabling hardware acceleration and clearing the cache resolves most Acrobat crash problems."
category: software
pillar: "Adobe Acrobat Errors"
status: published
official_source_url: "https://helpx.adobe.com/acrobat/using/crashes.html"
source_last_verified_at: 2026-09-04
written_at: 2026-09-04
published_at: 2026-09-04
read_time: 6
fix_summary: "Clearing the Acrobat cache folder (in AppData\\Adobe\\Acrobat\\DC\\Cache) and disabling Protected Mode (Edit > Preferences > Security) stops most Acrobat crash loops."
fix_time_display: "~6 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "adobe acrobat keeps crashing"
  - "acrobat crashes when printing"
  - "acrobat crashes when saving"
  - "adobe acrobat crash fix"
howto_steps:
  - name: "Disable hardware acceleration"
    text: "Hardware acceleration offloads PDF rendering to your GPU. On systems with outdated or incompatible graphics drivers, this causes crashes. Open Acrobat, go to Edit > Preferences > Page Display > Rendering, and uncheck Enable hardware acceleration for Rendering or Use GPU. Click OK and restart Acrobat. This is the fix for the majority of Acrobat crashes, especially those that occur when scrolling, printing, or rendering complex PDFs."
  - name: "Clear the Acrobat cache"
    text: "Close Acrobat completely. Open File Explorer and navigate to C:\\Users\\[YourName]\\AppData\\Local\\Adobe\\Acrobat. Delete the contents of the Cache folder (do not delete the folder itself, only its contents). On a Mac, navigate to ~/Library/Caches/com.adobe.Acrobat and clear the cache. Restart Acrobat. A corrupted cache forces Acrobat to reprocess the same invalid data repeatedly, causing crashes."
  - name: "Disable third-party plugins"
    text: "Third-party Acrobat plugins (PDF editors, e-signature tools, or enterprise plugins) can conflict with newer Acrobat versions. Open Acrobat, go to Edit > Preferences > General, and click Manage Add-ons or Plug-ins (the option varies by version). Disable non-Adobe plugins one at a time, restarting Acrobat after each, until you identify the conflicting plugin."
  - name: "Repair the Acrobat installation"
    text: "Open Acrobat and go to Help > Repair Installation. If Acrobat crashes before you can reach this menu, open Control Panel > Programs and Features, find Adobe Acrobat or Acrobat Reader, click Change, and select Repair. The repair process replaces corrupted application files, DLLs, and registry entries without removing your settings or documents."
  - name: "Update Adobe Acrobat"
    text: "Adobe releases updates that address known crash bugs. Open Acrobat and go to Help > Check for Updates. Install all available updates and restart. If Acrobat crashes before reaching this menu, download the latest installer from Adobe's website and run it over the existing installation — the installer will update the existing version."
faq:
  - q: "Why does Adobe Acrobat crash every time I try to print?"
    a: "Acrobat crashes during printing most often because of a graphics driver conflict with hardware acceleration. Open Edit > Preferences > Page Display and disable hardware acceleration. If printing still crashes, try printing to Microsoft Print to PDF first to confirm whether the issue is with the printer driver or with Acrobat itself."
  - q: "Why does Acrobat crash when I open a specific PDF but not others?"
    a: "A crash on one specific file usually means that PDF contains elements — embedded fonts, complex vector graphics, or JavaScript — that expose a bug in your version of Acrobat. Update Acrobat to the latest version. If the crash persists, open the file in a browser and use Print > Save as PDF to create a simplified copy that Acrobat can process."
  - q: "How do I find what is causing Acrobat to crash?"
    a: "Open Windows Event Viewer (search for it in the Start menu), go to Windows Logs > Application, and look for error events with Source: Acrobat or AcroRd32. The Faulting module name in the error details identifies the specific DLL or process that crashed. A faulting module of atioglxx.dll or nvwgf2umx.dll points to a GPU driver conflict — disable hardware acceleration to fix it."
  - q: "Can antivirus software cause Adobe Acrobat to crash?"
    a: "Yes. Some antivirus programs scan PDF content in real time and inject code into the Acrobat process, which can trigger crashes. Temporarily disable real-time protection and test if Acrobat stabilises. If it does, add Acrobat to your antivirus exclusion list rather than disabling protection permanently."
  - q: "Does reinstalling Acrobat fix crashing problems?"
    a: "Reinstalling is effective when the crash is caused by corrupted installation files that the Repair Installation option cannot fix. Uninstall Acrobat from Control Panel, then use the Adobe Creative Cloud Cleaner Tool to remove leftover files before reinstalling. This ensures a completely clean installation rather than installing over residual corrupted files."
---

**Adobe Acrobat keeps crashing** means the application opens but closes unexpectedly — during printing, saving, scrolling through a document, or sometimes just moments after launch. According to Adobe's crash troubleshooting documentation, the leading cause of Acrobat crashes on Windows and Mac is hardware acceleration conflict with graphics drivers, followed by corrupted installation files and third-party plugin conflicts.

![Acrobat crash causes: hardware acceleration, cache corruption, plugin conflict — each with targeted fix path](/images/adobe-acrobat-keeps-crashing-fix.svg)

## What causes Adobe Acrobat to keep crashing

**Hardware acceleration conflict** — Acrobat uses your GPU to accelerate PDF rendering. When your graphics driver is outdated or incompatible, the GPU operations cause Acrobat to crash. This is the most common cause of crashes, especially when scrolling or printing.

**Corrupted cache** — Acrobat's rendering cache can accumulate corrupted entries. When Acrobat attempts to read this data, it crashes. Clearing the cache forces Acrobat to rebuild it cleanly.

**Third-party plugin conflict** — Enterprise PDF tools, digital signature applications, and document management plugins all integrate into Acrobat at a low level. After an Acrobat update, these plugins can trigger crashes until the plugin developer releases a compatible version.

**Corrupted installation** — Incomplete Windows updates, antivirus quarantine actions, or hard shutdowns can corrupt Acrobat's executable or supporting DLL files.

## How to fix Adobe Acrobat keeps crashing

Start with step 1. Disabling hardware acceleration resolves most crash reports and takes less than a minute.

## How to verify the fix

Perform the action that previously caused the crash — printing, saving a large file, or scrolling through a complex document. If Acrobat completes the operation without closing unexpectedly, the fix worked. Monitor Acrobat across several sessions, as some crash triggers are intermittent.
