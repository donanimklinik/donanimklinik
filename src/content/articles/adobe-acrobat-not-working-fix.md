---
title: "Adobe Acrobat Not Working — Fix"
description: "Acrobat opens but printing fails, saving doesn't work, or tools are greyed out? Reset preferences, repair the installation, or reactivate your license to fix it."
category: software
pillar: "Adobe Acrobat Errors"
status: published
official_source_url: "https://helpx.adobe.com/acrobat/kb/cant-view-pdf-web.html"
source_last_verified_at: 2026-09-04
written_at: 2026-09-04
published_at: 2026-09-04
read_time: 6
fix_summary: "Running Acrobat's built-in Repair (Help > Repair Installation) replaces corrupted program files and fixes most not working issues without a full reinstall."
fix_time_display: "~5 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "adobe acrobat not working"
  - "acrobat print not working"
  - "acrobat tools greyed out"
  - "acrobat save not working"
howto_steps:
  - name: "Run Acrobat as administrator"
    text: "Right-click the Adobe Acrobat shortcut or taskbar icon and select Run as administrator. Many Acrobat functions — particularly saving files, printing, and accessing certain tools — fail silently when Acrobat lacks the necessary system permissions. Running as administrator bypasses the most common permission-related failures in a single step."
  - name: "Reset Acrobat preferences"
    text: "Corrupted Acrobat preferences can disable individual features. Close Acrobat. Hold Ctrl + Shift + Alt (Windows) or Command + Option + Shift (Mac) immediately after launching Acrobat. A dialog will appear asking if you want to delete the current settings. Click Yes. Acrobat will reset all preferences to defaults. Note that this resets your custom settings, but does not affect your documents."
  - name: "Check and reactivate your Acrobat license"
    text: "Licensing problems cause features to become greyed out or non-functional. In Acrobat, go to Help > Sign In to verify your Adobe ID is signed in. If you see a Sign Out option, you are signed in — click Help > About to verify the subscription is active. If the license shows expired or invalid, sign out, then sign back in. For volume-licensed versions, contact your IT administrator to reactivate."
  - name: "Repair the Acrobat installation"
    text: "Go to Help > Repair Installation. Acrobat downloads and replaces corrupted application files, DLLs, and registry entries. This fixes issues where specific features stop working after an incomplete update or after antivirus software quarantines an Acrobat file. After the repair completes, restart your computer before testing."
  - name: "Update or reinstall Adobe Acrobat"
    text: "Outdated Acrobat versions have known bugs that prevent specific functions from working. Go to Help > Check for Updates and install all available updates. If features remain broken after updating, uninstall Acrobat from Control Panel > Programs and Features and reinstall the latest version from Adobe's website. Your documents are unaffected by a reinstall."
faq:
  - q: "Why are Acrobat editing tools greyed out?"
    a: "Editing tools are greyed out for two main reasons: you are using Acrobat Reader (the free version), which does not include editing tools, or the PDF has restrictions applied by the creator that prevent editing. To check PDF restrictions in Acrobat Standard or Pro, go to File > Properties > Security. If editing is restricted, you need the document owner password to remove the restriction."
  - q: "Why does Acrobat open but printing does nothing?"
    a: "When Acrobat's Print command does nothing, the most common causes are a missing or offline printer, a corrupted print spooler, or a permissions issue with Acrobat. First confirm the printer is set as default and online in Windows Settings > Bluetooth and devices > Printers. Then try printing to Microsoft Print to PDF to confirm whether the problem is with Acrobat or with the physical printer."
  - q: "Why does Acrobat fail to save a PDF?"
    a: "Save failures usually occur because Acrobat does not have write permission to the destination folder, the file is open in another application (including a browser plugin), or the disk is full. Try using File > Save As and choosing a different location such as your Desktop. If that works, the problem is folder permissions on the original location."
  - q: "Does resetting Acrobat preferences delete my documents?"
    a: "No. Resetting preferences only clears Acrobat's configuration file — your PDF documents remain in their current folders. However, it does reset all your custom settings including default view options, recently-opened files list, and form fill data. Your signed-in Adobe ID is usually preserved, but you may need to sign in again."
  - q: "How do I fix Acrobat after a failed update left it broken?"
    a: "A failed update can leave Acrobat in a partially updated state where some features work and others do not. Run Help > Repair Installation first. If that does not restore all features, fully uninstall Acrobat using Control Panel, then download and install the latest full installer from Adobe's website. This is more thorough than running the updater over a broken installation."
---

**Adobe Acrobat not working** means the application opens normally but specific features stop functioning — printing does nothing, saving fails silently, editing tools are greyed out, or the application behaves erratically. Unlike not opening or crashing, this error category means Acrobat is running but cannot complete its intended functions. According to Adobe's troubleshooting documentation, these partial failures are typically caused by corrupted preferences, licensing errors, or installation damage from a failed update.

![Acrobat not working: permission check, preference reset, license reactivation, repair — targeted by symptom type](/images/adobe-acrobat-not-working-fix.svg)

## What causes Adobe Acrobat features to stop working

**Insufficient permissions** — Acrobat needs write access to create temp files, save PDFs, and communicate with printers. Running without administrator rights causes silent failures on these operations.

**Corrupted preferences file** — Acrobat stores feature settings in a preferences file. If this file becomes corrupted during a crash or update, individual features stop responding even though Acrobat itself opens normally.

**Licensing or subscription problem** — If your Adobe subscription expires, lapses, or encounters a server verification error, Acrobat restricts or disables features that require an active license.

**Partially applied update** — An interrupted Acrobat update can leave the installation in an inconsistent state where some components are updated and others are not, causing specific features to malfunction.

## How to fix Adobe Acrobat not working

Identify your specific symptom first: if tools are greyed out, start at step 3 (license check). If printing or saving fails, start at step 1 (administrator). If features stopped working after an update, start at step 4 (repair).

## How to verify the fix

Test the specific feature that was broken: attempt a print job, save a file to your Desktop, or use a previously greyed-out tool. If the feature works correctly, the fix was successful. If Acrobat freezes during the test rather than producing an error, see [Adobe Acrobat Not Responding — Fix](/software/adobe-acrobat-not-responding-fix/).
