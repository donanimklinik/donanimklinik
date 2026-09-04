---
title: "OneDrive Not Syncing — Fix"
description: "OneDrive not syncing files? Sign back in, reset the client, or check your quota. Step-by-step fixes for red X and stuck uploads."
category: software
pillar: "Cloud Storage Sync Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-945b-b26b8f33d400"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 7
fix_summary: "Right-click the OneDrive tray icon > Settings > Account > Unlink this PC, then sign back in — this resets sync state and fixes persistent errors without deleting your files."
fix_time_display: "~5 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "onedrive not syncing"
  - "onedrive won't sync"
  - "onedrive sync not working"
  - "onedrive not uploading files"
howto_steps:
  - name: "Check the OneDrive sync icon"
    text: "Click the OneDrive icon in the system tray (bottom-right of the taskbar). If you see a red X, the client has lost connection to your account. If you see a spinning circle that never stops, a specific file is blocked. Click the icon to see the activity panel — it lists the file currently failing to sync and the reason. This tells you which fix to apply."
  - name: "Pause and resume syncing"
    text: "Right-click the OneDrive icon in the system tray and select Pause syncing, then choose 2 hours. Wait 10 seconds, then right-click again and select Resume syncing. This forces the OneDrive client to restart its sync queue and often clears a stuck upload caused by a temporary network or file lock error."
  - name: "Sign out and sign back in"
    text: "Click the OneDrive icon, then click the Settings gear icon and select Settings. Go to the Account tab and click Unlink this PC. Confirm the unlink. OneDrive will close. Reopen OneDrive from the Start menu, sign in with your Microsoft account, and choose the same folder location. OneDrive will re-index your local files and resume syncing — existing files are not deleted."
  - name: "Reset the OneDrive client"
    text: "Press Win + R to open the Run dialog. Paste this command and press Enter: %localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset — this resets OneDrive's sync database without deleting your files. Wait 2 minutes, then open OneDrive from the Start menu. If the icon does not reappear within 5 minutes, open Run again and type: %localappdata%\\Microsoft\\OneDrive\\onedrive.exe to start it manually."
  - name: "Check your OneDrive storage quota"
    text: "Open OneDrive in a browser and check the storage indicator at the bottom-left. If your account is full (100% used), OneDrive stops uploading new files immediately — the sync icon shows a red X with no further explanation. Free up space by deleting files from your OneDrive account online, or upgrade your storage plan. Once space is available, sync resumes automatically within a few minutes."
faq:
  - q: "Why does OneDrive show a red X and stop syncing?"
    a: "A red X on the OneDrive icon means the client has lost its connection to your account. The most common causes are an expired sign-in session after a password change, a full storage quota, or a corrupted sync database. Click the OneDrive icon and read the activity panel — it displays the specific reason. Sign out and back in to restore the account connection."
  - q: "How do I reset the OneDrive sync client?"
    a: "Press Win + R and run: %localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset — this resets OneDrive's internal sync database without deleting any of your files. Wait 2 minutes for OneDrive to restart automatically. If it does not reopen on its own, open Run again and run the same path without /reset to start it manually."
  - q: "Will unlinking my PC from OneDrive delete my files?"
    a: "No. Unlinking removes the connection between the OneDrive desktop client and your account but does not delete files from your OneDrive account online or from the local OneDrive folder on your PC. When you sign back in and relink, OneDrive re-indexes your local files and syncs normally. Both your cloud and local files remain intact."
  - q: "Why does OneDrive sync work on some files but not others?"
    a: "OneDrive skips files that are currently open in another application, files with unsupported characters in the name, files with a full path longer than 260 characters, and files in folders excluded by a policy or personal vault restriction. Click the OneDrive icon and check the activity panel for the specific file name and the reason it is not syncing."
  - q: "How much storage does a free OneDrive account include?"
    a: "A free Microsoft account includes 5 GB of OneDrive storage. Microsoft 365 Personal and Family subscribers receive 1 TB per person. When storage is full, OneDrive stops uploading new files and shows a red X. Free up space by deleting files from onedrive.live.com, emptying the OneDrive recycle bin, or upgrading to a Microsoft 365 plan."
---

**OneDrive not syncing** means files you add or edit on your computer are not uploading to your OneDrive account, or changes from other devices are not downloading to your PC. According to Microsoft's official sync troubleshooting documentation, the most common causes are an expired account session, a corrupted sync database, a file with an unsupported name, or a full storage quota.

![OneDrive not syncing: red X means account disconnected, spinning circle means a file is blocked — check activity panel, reset client, or sign back in](/images/onedrive-not-syncing-fix.svg)

## What causes OneDrive to stop syncing

OneDrive's sync client runs as a background process. It fails when:

- **Account session expired** — after a password change or after a long period without signing in
- **Corrupted sync database** — the local index OneDrive uses to track file states becomes damaged
- **File name or path restriction** — files with characters like `?`, `"`, `:`, `*`, `<`, `>`, `|` in the name, or with a full path longer than 260 characters, are silently skipped
- **File locked by another application** — OneDrive cannot upload a file that another program has open exclusively (common with `.pst` files and some database files)
- **Storage quota full** — uploads stop completely when the account reaches its storage limit
- **OneDrive process crashed** — the background sync process stopped and did not restart

## How to fix OneDrive not syncing

### Step 1 — Check the OneDrive sync icon

Click the OneDrive icon in the system tray (bottom-right corner of the taskbar — you may need to click the arrow to show hidden icons).

The icon tells you what is wrong:

| Icon | Meaning |
|------|---------|
| Blue spinning circle | Syncing in progress — may be a large file or slow connection |
| Red X | Account disconnected or error — sign in required |
| Blue cloud with X | Cannot connect to OneDrive servers |
| Grey icon | OneDrive is paused or you are signed out |

Click the icon to open the activity panel. It shows which files are syncing, which are blocked, and a brief reason for any errors. This is the fastest way to identify the specific cause.

### Step 2 — Pause and resume syncing

A stuck sync queue often clears itself when you pause and resume:

1. Right-click the OneDrive icon in the system tray
2. Select **Pause syncing** → choose **2 hours**
3. Wait 10 seconds
4. Right-click the icon again and select **Resume syncing**

OneDrive restarts its upload queue from scratch. If the stuck file was caused by a temporary network hiccup or a brief file lock, this resolves it without any further action.

### Step 3 — Sign out and sign back in

If the icon shows a red X or a "sign-in required" message, your OneDrive session has expired — typically after a password change or a long gap between uses.

1. Click the **OneDrive icon** in the system tray
2. Click the **Settings gear** → **Settings**
3. Go to the **Account** tab
4. Click **Unlink this PC** → confirm

OneDrive closes. To reconnect:

1. Open **OneDrive** from the Start menu (search "OneDrive")
2. Sign in with your Microsoft account credentials
3. When asked for the folder location, choose the same folder (e.g., `C:\Users\YourName\OneDrive`)
4. Let OneDrive finish its initial scan — this may take several minutes for large libraries

Your local files are not deleted during this process. OneDrive compares what is on disk with what is in the cloud and only uploads what is missing.

### Step 4 — Reset the OneDrive client

If signing out did not fix the problem, reset the client. This clears OneDrive's sync database — the internal index that tracks which files have been synced — without deleting any of your files.

1. Press **Win + R** to open the Run dialog
2. Paste the following command exactly and press **Enter**:

```
%localappdata%\Microsoft\OneDrive\onedrive.exe /reset
```

3. The OneDrive icon will disappear from the system tray — this is expected
4. Wait **2 minutes**
5. If OneDrive does not restart automatically, press **Win + R** again and run:

```
%localappdata%\Microsoft\OneDrive\onedrive.exe
```

After the reset, OneDrive re-scans all files in your OneDrive folder and rebuilds the sync database. This process can take 10–30 minutes for large accounts.

### Step 5 — Check your storage quota

A full OneDrive account stops uploading silently — no obvious error message, just a persistent red X.

1. Go to [onedrive.live.com](https://onedrive.live.com) in a browser and sign in
2. Look at the storage indicator in the bottom-left corner
3. If it shows **100%** or "Storage full", that is the cause

To free space:
- Delete files or folders you no longer need from OneDrive online
- Empty the OneDrive **Recycle Bin** (deleted files count against your quota until the bin is emptied)
- Move files from OneDrive to local storage if you do not need cloud backup for them

Once space is available, syncing resumes automatically within a few minutes.

## How to find files that OneDrive is skipping

OneDrive silently skips files with unsupported characters in their name or path. To check:

1. Click the **OneDrive icon** → **Help & Settings** → **View sync problems**
2. This opens a window listing every file OneDrive is failing to sync and the reason

Common file name problems:
- Characters not allowed: `\ / : * ? " < > |`
- File name ends with a space or period
- Full path (folder + file name) longer than 260 characters
- Temporary files (files starting with `~$`) — these are usually safe to ignore

Rename or move the affected files, and OneDrive will pick them up on the next sync cycle.

## How to verify the fix

1. Add a small test file (a new text document) to your OneDrive folder
2. Watch the OneDrive icon in the system tray — it should show a spinning circle briefly, then return to the steady blue cloud
3. Open [onedrive.live.com](https://onedrive.live.com) in a browser and confirm the file appears there
4. If the file appears online, sync is working correctly
