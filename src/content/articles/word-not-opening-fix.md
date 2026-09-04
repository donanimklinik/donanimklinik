---
title: "Word Not Opening — Fix"
description: "Word documents won't open or show 'Word cannot open the document'? Fix file associations, repair Office, and recover corrupted .docx files. Step-by-step guide."
category: software
pillar: "Office Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/open-and-repair-a-file-in-office-4f59f0fa-8416-43a1-a6c7-5dd5e2bb8a23"
source_last_verified_at: 2026-09-05
written_at: 2026-09-05
published_at: 2026-09-05
read_time: 6
fix_summary: "Deleting the corrupted Normal.dotm template (in %APPDATA%\\Microsoft\\Templates\\) forces Word to rebuild it on next launch — this alone fixes the majority of Word won't open problems."
fix_time_display: "~4 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "word not opening"
  - "word won't open"
  - "microsoft word not opening"
  - "word cannot open the document"
howto_steps:
  - name: "Set Word as the default app for .docx files"
    text: "If double-clicking a .docx file opens a different application, the file association is broken. Right-click any .docx file in File Explorer, select Open with > Choose another app, select Word from the list, and check Always use this app to open .docx files. On Windows 11, go to Settings > Apps > Default apps, search for .docx, and select Microsoft Word. This fixes the association system-wide and persists through browser and software updates."
  - name: "Open Word in Safe Mode first"
    text: "Press Windows + R, type winword /safe, and press Enter. Safe Mode opens Word with all add-ins disabled. If Word opens successfully in Safe Mode but not normally, a third-party add-in is preventing startup. Go to File > Options > Add-ins, set the dropdown to COM Add-ins, click Go, and disable all add-ins. Re-enable them one at a time to identify which one causes the failure."
  - name: "Use Open and Repair for a specific document"
    text: "Open Microsoft Word. Go to File > Open > Browse and navigate to the problem .docx file. Do not double-click it. Instead, click the dropdown arrow next to the Open button and select Open and Repair. Word attempts to fix the document's internal structure and open it. If this succeeds, immediately save the recovered content to a new file using File > Save As."
  - name: "Check if the file is blocked by Windows"
    text: "Files downloaded from the internet are sometimes marked by Windows as potentially unsafe and blocked at the filesystem level. Right-click the .docx file in File Explorer and select Properties. If you see a Security section at the bottom of the General tab with a message about the file coming from another computer, check the Unblock checkbox and click OK. Try opening the file again — Word should now open it without the security restriction."
  - name: "Run Office Quick Repair"
    text: "Go to Control Panel > Programs and Features, find Microsoft 365 or Microsoft Office, click Change, and select Quick Repair. Click Repair and wait for the process to complete. Quick Repair replaces corrupted Word installation files including the components responsible for file association registration. After the repair, restart your computer and try opening the .docx file again."
faq:
  - q: "Why does Word open but immediately show an error on my document?"
    a: "Word successfully launched, but the specific document it tried to open is corrupted or in an incompatible format. Use File > Open > Open and Repair to recover the content. If the document was received by email, save the attachment to your Desktop first and check its Properties to unblock it if Windows has flagged it as unsafe."
  - q: "Why do my .docx files open in Google Docs or another application instead of Word?"
    a: "Another application (Google Drive, OneDrive, or a browser extension) has registered itself as the default handler for .docx files. Fix this by right-clicking a .docx file, selecting Open with > Choose another app, selecting Microsoft Word, and checking Always use this app. On Windows 11, use Settings > Apps > Default apps for a more permanent fix."
  - q: "Can I recover a Word document that has become corrupted?"
    a: "Yes. Use File > Open > Open and Repair in Word. If the file is severely corrupted, copy its content using Insert > Object > Text from File in a new blank Word document — this extracts the text even when the file's formatting is damaged. Google Docs can also open many corrupted .docx files and recover the text content."
  - q: "Why does Word say 'Word cannot open the document: user does not have access privileges'?"
    a: "This error means the .docx file has restrictive permissions set on it, preventing your Windows user account from reading it. Right-click the file, select Properties > Security, and check if your account has Read permission. If not, click Edit and add your account with at least Read access. This often happens with files copied from a different Windows user account or from a network drive."
  - q: "Why can't Word open a file from a USB drive or network location?"
    a: "Word applies Protected View to files from external storage and network paths. Click Enable Editing in the yellow warning bar. If Word shows a permissions error instead, copy the file to your local Desktop first — local files have fewer access restrictions. For network files, confirm the network drive is connected and that your account has read access to the shared folder."
---

**Word not opening** covers two distinct problems: Microsoft Word itself not launching, and Word launching but being unable to open a specific .docx document. According to Microsoft's Office support documentation, the most common causes of document-specific failures are file corruption, Windows security blocking downloaded files, and broken .docx file associations that route documents to the wrong application.

![Word not opening: file association fix, Safe Mode, Open and Repair, Windows block unblock, Office Repair — by symptom](/images/word-not-opening-fix.svg)

## What causes Word not to open documents

**Broken .docx file association** — When another application installs and claims the .docx extension, double-clicking a Word document opens that application instead of Word. This is common after installing Google Drive, OneDrive desktop, or PDF editors.

**Windows security block** — Files downloaded from the internet carry a "Mark of the Web" flag that Windows uses to identify potentially unsafe files. Word detects this flag and opens the file in Protected View, or shows an access error if the block is applied at the filesystem level.

**Corrupted document** — An incomplete download, a storage error, or an abrupt power loss during save can corrupt a .docx file's internal structure. Word cannot parse the damaged XML and displays an error instead of opening the document.

**Add-in preventing Word startup** — A third-party add-in that crashes during loading prevents Word from completing its startup sequence, making it impossible to open any document.

## How to fix Word not opening documents

Identify your specific symptom first. If .docx files open in the wrong application, start at step 1. If a specific document shows an error, start at step 3 (Open and Repair). If Word itself won't launch, start at step 2 (Safe Mode).

## How to verify the fix

Double-click the .docx file from File Explorer. Word should open within 5 seconds and display the document's content. Confirm all pages, images, and formatting are intact. If Word opens but specific elements are missing, the document was partially corrupted — use Open and Repair to recover the full content.
