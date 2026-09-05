---
title: "OneDrive Sync Pending — Fix"
description: "OneDrive stuck on sync pending? File locks, path length, and name conflicts are the usual causes. Here's how to clear it."
category: software
pillar: "Cloud Storage Sync Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-95b2-e4cc8c4670b2"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 6
fix_summary: "Files stuck on sync pending usually have the file open in another app — close all Office apps, wait 60 seconds. If still pending, right-click the file > Always keep on this device."
fix_time_display: "~3 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "onedrive sync pending"
  - "onedrive stuck on sync pending"
  - "sync pending onedrive fix"
  - "onedrive sync pending meaning"
howto_steps:
  - name: "Identify which file is stuck"
    text: "Click the OneDrive icon in the system tray and look at the activity panel. It lists every file that is pending sync and how long it has been waiting. If a specific file has been pending for more than 10 minutes, that file is the problem — not the network or the account. Note the file name and its location before proceeding."
  - name: "Close any application that has the file open"
    text: "Sync pending almost always means another application has the file open. OneDrive cannot upload a file that is being written to by another process. Save and close the file in the application that has it open — Microsoft Word, Excel, Outlook (for .pst files), Adobe Acrobat, and similar applications often hold files open in the background. After closing the application, the pending status clears within 30 seconds."
  - name: "Check for file name and path restrictions"
    text: "OneDrive skips files with names containing these characters: \\ / : * ? \" < > | — or names ending with a space or period. It also skips files when the full path (all folder names + file name) exceeds 260 characters. Open the file's location in File Explorer, rename it to remove any unsupported characters, and shorten the folder structure if the path is too long."
  - name: "Pause and resume sync to clear the queue"
    text: "Right-click the OneDrive icon in the system tray and select Pause syncing, then 2 hours. Wait 10 seconds, then right-click and select Resume syncing. This resets the sync queue and forces OneDrive to re-evaluate which files still need to be uploaded. Files that were waiting behind the stuck file will now proceed."
  - name: "Reset OneDrive if multiple files are stuck"
    text: "Press Win + R, paste %localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset and press Enter. Wait 2 minutes for OneDrive to restart, then open it from the Start menu if it does not reopen automatically. The reset clears the sync database and rebuilds it — all pending files are re-evaluated and most will begin syncing immediately."
faq:
  - q: "What does 'sync pending' mean in OneDrive?"
    a: "Sync pending means OneDrive has added the file to its upload queue but cannot start or complete the transfer. Unlike a sync error, there is no red X — just a persistent spinning icon. The most common causes are another application holding the file open, an unsupported character in the file name, or a large file blocking the queue ahead of smaller files."
  - q: "Why does OneDrive show sync pending for a file that is not open?"
    a: "Even if you close a file in its application, some programs keep the file locked for a short time afterward — Microsoft Office applications, Adobe Acrobat, and video editing software often do this. Wait a few minutes after closing the application and check if the sync pending status clears. If it does not, check for unsupported characters in the file name or an overly long file path."
  - q: "What file names cause OneDrive sync pending?"
    a: "OneDrive cannot sync files with names containing these characters: backslash, forward slash, colon, asterisk, question mark, quotation mark, less-than, greater-than, or pipe symbol. It also skips files with names ending in a space or period, and files where the complete path (folder names plus file name) exceeds 260 characters. Rename the file to remove these issues."
  - q: "How do I find which file is causing sync pending in OneDrive?"
    a: "Click the OneDrive icon in the system tray and look at the activity panel. It lists every file in the pending queue with how long each has been waiting. A file that has been pending for more than 10 minutes is the blocked file. Note its name and location, then close any application that may have it open or rename it to fix the issue."
  - q: "Does pausing and resuming sync in OneDrive fix sync pending?"
    a: "Yes, pausing and resuming sync forces OneDrive to reset its upload queue and re-evaluate all pending files from the beginning. This is especially effective when a large file was blocking the queue — after the reset, smaller files can proceed even if the large file is still pending. Right-click the OneDrive icon, select Pause syncing for 2 hours, wait 10 seconds, then select Resume syncing."
---

**OneDrive sync pending** means OneDrive has queued a file for upload but has not started or cannot complete the transfer. According to Microsoft's official documentation, "sync pending" is not the same as an error — it means OneDrive is waiting for a condition to be met before it can proceed. The most common conditions are another application holding the file open, an unsupported character in the file name, or the upload queue being blocked by a single large file ahead of it.

![OneDrive sync pending causes: file locked by another app, unsupported characters in name, path too long, or large file blocking the queue](/images/onedrive-sync-pending-fix.svg)

## What "sync pending" means

When a file shows "sync pending" in the OneDrive activity panel, it means the file is in the upload queue but OneDrive has not been able to start or complete the transfer. This is different from a sync error — no red X, no warning message, just a persistent spinning icon on the file or folder.

Sync pending persists when:

- **The file is locked** — another application has the file open in exclusive write mode
- **The file name contains unsupported characters** — OneDrive silently holds it pending rather than skipping it outright
- **The path is too long** — the total path including all folder names exceeds 260 characters
- **A large file is ahead in the queue** — OneDrive uploads files sequentially; a 10 GB file blocks everything behind it
- **Network is throttled or paused** — sync is paused manually or by a scheduled bandwidth limit

## How to fix OneDrive sync pending

### Step 1 — Identify which file is stuck

Click the **OneDrive icon** in the system tray (bottom-right corner, may be hidden behind the arrow).

The activity panel shows:
- Which files are currently syncing (with a progress bar)
- Which files are in the "pending" state (listed below the active upload)
- How long each file has been waiting

If a specific file has been showing "sync pending" for more than 10 minutes while other files sync normally, that file is the problem. Note its name and folder location.

### Step 2 — Close the application that has the file open

The most common cause of sync pending is another application holding the file open. OneDrive cannot upload a file that is being written to by another process — it waits indefinitely for the file to be released.

**Common culprits:**
- **Microsoft Word / Excel / PowerPoint** — autosave files (`.docx`, `.xlsx`) are held open until you close the application or the document
- **Microsoft Outlook** — `.pst` and `.ost` files are held open whenever Outlook is running; these files should be excluded from OneDrive sync entirely
- **Adobe Acrobat** — open PDF files
- **Any database application** — `.db`, `.sqlite`, `.accdb` files

To resolve:
1. Save and close the document in the application
2. If unsure which application has the file open, restart your PC — this releases all file locks

After closing the application, the pending status clears within 30 seconds.

### Step 3 — Check for file name and path restrictions

OneDrive has strict rules about file names and folder path lengths. Files that violate these rules are held as "sync pending" without a clear error message.

**Characters not allowed in file or folder names:**
`\ / : * ? " < > |`

**Other restrictions:**
- File name cannot end with a space or period
- Full path (all folder names combined + file name + extension) cannot exceed **260 characters**
- File size cannot exceed **250 GB** per file

To check:
1. Open the file's location in **File Explorer**
2. Look at the address bar — if the path is already 200+ characters, moving the file to a shorter path (e.g., directly to `C:\Users\Name\OneDrive\`) will fix it
3. Rename the file to remove any unsupported characters

After renaming or moving, OneDrive picks up the file on its next scan (usually within 60 seconds).

### Step 4 — Pause and resume sync

If the file name and lock issues are not the cause, resetting the sync queue often helps:

1. Right-click the **OneDrive icon** in the system tray
2. Select **Pause syncing** → **2 hours**
3. Wait 10 seconds
4. Right-click again → **Resume syncing**

This forces OneDrive to abandon its current queue and restart evaluation from the beginning. Files that were stuck behind a large upload will now proceed.

### Step 5 — Reset OneDrive

If multiple files are stuck, or if pause/resume did not help, reset the OneDrive client:

1. Press **Win + R**
2. Paste and run:
```
%localappdata%\Microsoft\OneDrive\onedrive.exe /reset
```
3. Wait 2 minutes
4. If OneDrive does not reopen automatically, press **Win + R** again and run:
```
%localappdata%\Microsoft\OneDrive\onedrive.exe
```

The reset clears the sync database and rebuilds it from scratch. All pending files are re-evaluated and most will begin syncing immediately.

## Files that should not be in OneDrive

Some file types cause persistent sync pending because they are always in use:

- **Outlook data files** (`.pst`, `.ost`) — always held open by Outlook; Microsoft specifically recommends excluding these from OneDrive
- **Virtual machine disks** (`.vmdk`, `.vhd`) — too large and continuously written to
- **Database files** (`.db`, `.sqlite`, `.accdb`) — held open by the database application

To exclude a file type from sync, move it out of the OneDrive folder, or add an exception in OneDrive settings.

## How to verify the fix

1. Click the **OneDrive icon** — the activity panel should show files uploading, not stuck on pending
2. Add a small test file to the OneDrive folder and watch it sync within 60 seconds
3. Confirm on [onedrive.live.com](https://onedrive.live.com) that the previously pending files now appear in your account online
