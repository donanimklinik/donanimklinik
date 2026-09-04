---
title: "Google Drive Not Syncing — Fix"
description: "Google Drive not syncing files to your computer? Restart the client, sign back in, or reset sync. Step-by-step fix guide."
category: software
pillar: "Cloud Storage Sync Errors"
status: published
official_source_url: "https://support.google.com/drive/answer/2633000"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "google drive not syncing"
  - "google drive sync not working"
  - "google drive not uploading"
  - "google drive stopped syncing"
howto_steps:
  - name: "Check the Google Drive for Desktop status icon"
    text: "Click the Google Drive icon in the system tray (a coloured triangle). The icon shows whether Drive is syncing, paused, or in an error state. Click the icon to open the status panel — it lists any files that failed to sync and the reason. If you see a pause button symbol, Drive is paused. If you see a red X or warning triangle, an error is preventing sync. This tells you which step to apply."
  - name: "Pause and resume syncing"
    text: "Click the Google Drive icon in the system tray, then click the Pause button (two vertical bars). Wait 10 seconds. Click the Resume button (play triangle). This forces Drive to restart its sync queue. Most temporary sync errors caused by network interruptions or file lock timeouts clear on their own when sync is paused and resumed."
  - name: "Quit and restart Google Drive for Desktop"
    text: "Click the Google Drive icon, click the gear icon at the top-right of the status panel, and select Quit Google Drive. Open Task Manager (Ctrl + Shift + Esc) and confirm googledrivesync.exe or GoogleDriveFS.exe is no longer running. Then reopen Google Drive from the Start menu. After restarting, Drive reconnects to Google servers and resumes any pending sync operations."
  - name: "Sign out and sign back in"
    text: "Click the Google Drive icon, then click the gear icon > Preferences. In the Preferences window, click your Google account name and select Disconnect account. Confirm the sign-out. Then click Sign in and authenticate with your Google account. Disconnecting refreshes the authentication token — this fixes sync failures caused by expired credentials or a Google account password change."
  - name: "Reinstall Google Drive for Desktop"
    text: "Quit Google Drive completely. Go to Settings > Apps > Installed apps, find Google Drive, and uninstall it. Download the latest version of Google Drive for Desktop from google.com/drive/download and run the installer. Sign in with your Google account. Your files in Google Drive are not deleted — they re-sync to your computer after setup."
faq:
  - q: "Why has Google Drive stopped syncing files?"
    a: "The most common causes are a paused sync, expired Google account credentials after a password change, a temporary error in the Google Drive for Desktop client, or a file that cannot be synced due to its name or type. Click the Google Drive icon in the system tray and check the status panel — it shows the specific reason and the affected file name."
  - q: "How do I fix Google Drive not syncing after a password change?"
    a: "When your Google account password changes, Google Drive for Desktop loses its authentication token and stops syncing. Fix it by clicking the Drive icon, going to Preferences > your Google account > Disconnect account, then signing back in with your updated password. This refreshes the authentication and restores sync."
  - q: "Does quitting and restarting Google Drive for Desktop fix sync problems?"
    a: "Yes, for many temporary sync errors. Quitting Google Drive completely (including ending the process in Task Manager) and restarting it forces the client to reconnect to Google's servers and re-evaluate the sync queue. This resolves errors caused by network timeouts, temporary server issues, or the client getting into a stuck state."
  - q: "Will reinstalling Google Drive for Desktop delete my files?"
    a: "No. Your files are stored in your Google account on Google's servers. Reinstalling only replaces the desktop application. After reinstalling and signing back in, Google Drive for Desktop re-syncs your files from the cloud. Files already on your computer in the Google Drive folder are not deleted during reinstallation."
  - q: "How do I know if Google Drive is syncing or has an error?"
    a: "Click the Google Drive icon in the system tray to open the status panel. A spinning sync icon means Drive is actively syncing. A checkmark means everything is up to date. A red X or warning triangle means an error has stopped sync. The status panel lists the specific file causing the error and the reason, making it easy to identify what needs to be fixed."
---

**Google Drive not syncing** means files you place in your Google Drive folder are not uploading to your account, or changes made in Google Drive online are not appearing on your computer. According to Google's official documentation, the most common causes are a paused sync, expired Google account credentials, or an error in the Google Drive for Desktop client.

![Google Drive not syncing: check status icon, pause-resume, sign out and back in, or reinstall Drive for Desktop to fix sync](/images/google-drive-not-syncing-fix.svg)

## What Google Drive for Desktop does

Google Drive for Desktop (previously Backup and Sync, and before that Google Drive) creates a virtual Google Drive folder on your computer. Files you add to this folder upload to your Google account automatically. Changes you make in Google Drive online download to your computer automatically.

When sync breaks, this two-way flow stops.

## What causes Google Drive to stop syncing

- **Sync is paused** — the most common cause; Drive can pause itself after a network error
- **Authentication expired** — the Google account session has expired, typically after a password change
- **Google account storage full** — Google offers 15 GB free across Gmail, Drive, and Photos; when full, uploads stop
- **A file violates Google Drive restrictions** — files larger than 5 TB, or files Google cannot process, are skipped
- **The Drive for Desktop process crashed** — the background sync process is no longer running
- **Corrupted Drive installation** — the Drive application files are damaged

## How to fix Google Drive not syncing

### Step 1 — Check the Google Drive status icon

Click the **Google Drive icon** in the system tray (a triangle in blue, green, and yellow).

What the icon means:

| Icon | Meaning |
|------|---------|
| Spinning arrows | Actively syncing |
| Steady checkmark | All files synced |
| Pause symbol | Sync is paused |
| Warning triangle | Error — check the status panel |
| No icon | Google Drive is not running |

Click the icon to open the status panel. It shows:
- Files currently uploading or downloading
- Files that encountered errors (with a reason)
- How long since Drive last checked in with Google servers

If Drive shows an error message, note the exact text — it often identifies the specific cause (storage full, authentication error, or a specific file that failed).

### Step 2 — Pause and resume syncing

1. Click the **Google Drive icon** in the system tray
2. Click the **Pause** button (two vertical bars at the top of the panel)
3. Wait **10 seconds**
4. Click the **Resume** button (play triangle)

After resuming, Drive immediately checks Google servers for pending changes and restarts any stalled uploads. If a temporary network error was the cause, this alone resolves the problem.

### Step 3 — Quit and restart Google Drive for Desktop

A full restart clears any hung process state:

1. Click the **Google Drive icon** → **gear icon** → **Quit Google Drive**
2. Open **Task Manager** (Ctrl + Shift + Esc)
3. Look for **googledrivesync.exe** or **GoogleDriveFS.exe** — if found, right-click → **End task**
4. Reopen **Google Drive** from the Start menu (search "Google Drive")

After restarting, Drive reconnects to Google's servers and downloads or uploads any pending files.

### Step 4 — Sign out and sign back in

If Drive shows a sign-in error or if syncing stopped after a Google account password change:

1. Click the **Google Drive icon** → **gear icon** → **Preferences**
2. In the Preferences window, click your **Google account name**
3. Select **Disconnect account** and confirm

Drive disconnects from your account and removes its local authentication token. To reconnect:

1. Click the **Google Drive icon** — it will prompt you to sign in
2. Click **Sign in** and complete Google's authentication in the browser
3. Choose your Google Drive folder location when prompted (use the same location as before)

After signing back in, Drive resumes syncing. It compares the local folder with your Google Drive account and only uploads or downloads what is different.

### Step 5 — Check Google account storage

Google provides 15 GB of free storage shared across Gmail, Google Drive, and Google Photos. When storage is full, new uploads stop immediately.

1. Go to [one.google.com/storage](https://one.google.com/storage) and sign in
2. Check the storage indicator
3. If storage is at or near 100%, free space by:
   - Deleting large files from Google Drive online
   - Emptying the Google Drive Trash (files in Trash still count toward your quota)
   - Removing large email attachments in Gmail
   - Purchasing additional Google One storage

After freeing space, Drive resumes uploads automatically within a few minutes.

### Step 6 — Reinstall Google Drive for Desktop

If none of the above steps resolved the issue, reinstall the client:

**Uninstall:**
1. Make sure Drive is fully quit
2. Go to **Settings → Apps → Installed apps**
3. Find **Google Drive** and click **Uninstall**

**Reinstall:**
1. Go to [google.com/drive/download](https://www.google.com/drive/download)
2. Download and run **GoogleDriveSetup.exe**
3. Sign in with your Google account during setup

Your files in Google Drive are not affected by reinstalling — they remain in your Google account and re-sync after setup.

## Checking which files are failing to sync

To see a detailed list of files that Drive could not sync:

1. Click the **Google Drive icon** → **gear icon** → **View sync errors** (or check the status panel for a list of failed files)
2. Common reasons shown:
   - **File too large** — maximum file size is 5 TB
   - **Unsupported file type** — some system files are excluded
   - **Insufficient permission** — the file is locked or in a protected folder

Files that fail due to permissions or size limitations cannot be synced and should be moved out of the Drive folder.

## How to verify the fix

1. The Google Drive icon should show a steady checkmark (not spinning, not paused)
2. Add a small test file to your Google Drive folder — the icon should spin briefly and then show a checkmark
3. Open [drive.google.com](https://drive.google.com) in a browser and confirm the test file appears there
4. On a second device, open Google Drive and confirm the file is visible there as well
