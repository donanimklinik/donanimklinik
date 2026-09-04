---
title: "Dropbox Not Syncing — Fix"
description: "Dropbox not syncing files to the cloud? Pause and resume, check selective sync, or reinstall. Step-by-step fix for stuck Dropbox uploads."
category: software
pillar: "Cloud Storage Sync Errors"
status: published
official_source_url: "https://help.dropbox.com/sync/not-syncing"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 7
schema_type: HowTo
featured: false
top_search_queries:
  - "dropbox not syncing"
  - "dropbox won't sync"
  - "dropbox files not syncing"
  - "dropbox not syncing files"
howto_steps:
  - name: "Check the Dropbox sync icon"
    text: "Click the Dropbox icon in the system tray. If the icon shows a spinning blue circle, Dropbox is actively syncing. If it shows a red X or a pause symbol, sync has stopped. Click the icon to open the activity panel — it lists any files that are failing to sync and the reason. Hover over the icon without clicking to see a tooltip showing how many files are remaining and estimated time."
  - name: "Pause and resume syncing"
    text: "Click the Dropbox icon in the system tray, then click your profile picture or initials at the top right of the panel and select Pause syncing. Wait 10 seconds, then click the icon again and select Resume syncing. This resets the upload queue. If a temporary network error or file lock was the cause, syncing resumes immediately."
  - name: "Check Selective Sync settings"
    text: "Selective Sync lets you choose which Dropbox folders sync to your computer. If a folder is excluded from Selective Sync, its files never upload from that device. Click the Dropbox icon, go to Preferences (gear icon) > Sync > Selective Sync. Make sure all folders you expect to sync have a checkmark. If a folder is unchecked, check it and click Update."
  - name: "Check bandwidth settings"
    text: "Dropbox has built-in upload and download rate limits. If these are set too low, sync appears to stall. Click the Dropbox icon, go to Preferences > Bandwidth. Under Upload rate, select Don't limit or set a higher limit. Under Download rate, do the same. Dropbox throttling its own bandwidth is a common reason why syncing appears to work but never finishes."
  - name: "Quit and restart Dropbox"
    text: "Click the Dropbox icon, then click your profile picture or initials and select Quit Dropbox. Open Task Manager (Ctrl + Shift + Esc) and confirm that Dropbox.exe is no longer running. Then reopen Dropbox from the Start menu or Applications folder. A full quit-and-restart clears any hung state in the sync engine without resetting your settings or account."
  - name: "Reinstall Dropbox"
    text: "If the above steps do not work, reinstall the Dropbox desktop client. First quit Dropbox completely. Then go to Settings > Apps > Installed apps, find Dropbox, and uninstall it. Download the latest Dropbox installer from dropbox.com/install and run it. Sign in with your Dropbox account. Your files remain in your Dropbox account — they re-sync to your computer after setup."
faq:
  - q: "Why has Dropbox stopped syncing files?"
    a: "The most common causes are a paused sync, an upload bandwidth limit set too low in Dropbox Preferences, a Selective Sync exclusion hiding the folder, or a temporary error in the Dropbox desktop client. Start with a pause-resume cycle to reset the sync queue. If sync is still stopped, check Selective Sync settings and bandwidth limits in Dropbox Preferences."
  - q: "What is Selective Sync and why does it stop files from syncing?"
    a: "Selective Sync is a Dropbox feature that lets you choose which folders from your Dropbox account are synced to your computer's local storage. If a folder is excluded from Selective Sync on this device, files you add to that folder on another device or on the web will never appear locally — even though they exist in your account. Enable all needed folders in Dropbox Preferences > Sync > Selective Sync."
  - q: "Why does Dropbox sync appear to work but never finish?"
    a: "This usually means Dropbox has an upload rate limit set that is too low. Open Dropbox Preferences > Bandwidth and check the Upload rate setting. If it is set to a specific low value like 10 KB/s, the sync will process files very slowly. Set it to Don't limit to use the full available bandwidth."
  - q: "Will reinstalling Dropbox delete my files?"
    a: "No. Your files are stored in your Dropbox account on Dropbox's servers. Reinstalling the desktop client only replaces the application. After reinstalling and signing in, Dropbox re-syncs your files from the cloud. The local Dropbox folder on your computer remains after uninstalling — its contents are not deleted during reinstallation."
  - q: "How do I check if Dropbox is syncing or paused?"
    a: "Click the Dropbox icon in the system tray. A spinning blue circle means Dropbox is actively syncing. A steady blue droplet with no activity means everything is up to date. A pause symbol means sync is manually paused. A red X means an error has stopped sync. Hover over the icon without clicking to see a tooltip with the number of files remaining and estimated sync time."
---

**Dropbox not syncing** means files you add or edit in your local Dropbox folder are not uploading to your account, or changes made on other devices are not appearing on your computer. According to Dropbox's official troubleshooting documentation, the most common causes are a paused sync, a bandwidth limit set too low, Selective Sync excluding the relevant folder, or a temporary error in the Dropbox desktop client.

![Dropbox not syncing: check sync icon, pause-resume queue, verify selective sync settings, check bandwidth limits](/images/dropbox-not-syncing-fix.svg)

## What causes Dropbox to stop syncing

Dropbox's desktop client monitors your Dropbox folder for changes and syncs them automatically. Sync stops when:

- **Sync is paused** — manually or by Dropbox automatically after a connection error
- **Selective Sync excludes the folder** — the folder exists on disk but is not configured to sync from this device
- **Bandwidth limit too low** — the upload rate is throttled so aggressively that no progress is visible
- **File is locked** — another application has the file open exclusively
- **File name conflict** — Dropbox cannot resolve which version of a file is correct
- **Dropbox client process hung** — the application is running but the sync engine is stuck
- **Account storage full** — uploads stop when the account has no remaining space

## How to fix Dropbox not syncing

### Step 1 — Check the Dropbox sync icon

The system tray icon tells you the current state:

| Icon | Meaning |
|------|---------|
| Spinning blue circle | Actively syncing |
| Steady blue droplet | All files synced |
| Red X | Error — sync stopped |
| Pause symbol | Sync is paused |
| Grey icon | Dropbox is not running |

Click the icon to open the activity panel. It shows:
- Files currently uploading or downloading
- Files that failed to sync (with the reason)
- The estimated time remaining

If no specific error is shown and the icon is just spinning indefinitely, proceed to Step 2.

### Step 2 — Pause and resume syncing

1. Click the **Dropbox icon** in the system tray
2. Click your **profile picture or initials** at the top-right of the panel
3. Select **Pause syncing**
4. Wait **10 seconds**
5. Click the icon again → **Resume syncing**

This clears the current upload queue and forces Dropbox to restart syncing from the beginning. If the problem was a temporary network error or a transient file lock, this resolves it without further action.

### Step 3 — Check Selective Sync settings

Selective Sync is a feature that lets you choose which Dropbox folders sync to your computer. If the folder containing your files is excluded, those files will never upload from that device — even though they exist in your Dropbox account online.

1. Click the **Dropbox icon** in the system tray
2. Click the **gear icon** (or your profile picture) → **Preferences**
3. Go to the **Sync** tab
4. Click **Selective Sync** (or **Choose folders to sync**)
5. Review which folders have checkmarks — unchecked folders do not sync to this computer
6. Check any folders that should be syncing and click **Update**

After updating Selective Sync, Dropbox begins downloading the newly included folders immediately.

### Step 4 — Check bandwidth settings

Dropbox allows you to limit its upload and download speeds — but if these limits are too low, syncing appears to work while making no visible progress.

1. Click the **Dropbox icon** → **gear icon** → **Preferences**
2. Go to the **Bandwidth** tab
3. Under **Upload rate**, select **Don't limit** (or set a higher value)
4. Under **Download rate**, do the same
5. Click **OK**

After removing the bandwidth limit, open the Dropbox activity panel and watch — uploads should now show measurable progress.

### Step 5 — Quit and restart Dropbox

A clean restart clears any hung state in the Dropbox sync engine:

1. Click the **Dropbox icon** → your **profile picture** → **Quit Dropbox**
2. Press **Ctrl + Shift + Esc** to open Task Manager
3. Confirm **Dropbox.exe** is no longer in the process list — if it is, right-click it and select **End task**
4. Reopen **Dropbox** from the Start menu (search "Dropbox")

Dropbox resumes syncing from where it left off. This is less disruptive than a reset because it preserves your settings and account configuration.

### Step 6 — Reinstall Dropbox

If none of the above steps resolved the problem, reinstall the Dropbox desktop client.

**Step 1 — Uninstall:**
1. Make sure Dropbox is fully quit (Step 5)
2. Go to **Settings → Apps → Installed apps**
3. Find **Dropbox** and click **Uninstall**

**Step 2 — Reinstall:**
1. Go to [dropbox.com/install](https://www.dropbox.com/install) and download the installer
2. Run the downloaded file and follow the setup prompts
3. Sign in with your Dropbox account credentials

Your files in the Dropbox cloud are not affected by uninstalling the desktop client. After reinstalling and signing in, Dropbox re-downloads your files to the local Dropbox folder.

## Dropbox not syncing on a specific device only

If Dropbox syncs correctly on other devices but not on one specific computer, the problem is with the local client installation — not the account. In this case:

1. Check that the device is connected to the internet
2. Confirm the local Dropbox folder path has not been moved (right-click the Dropbox icon → Preferences → Sync — the folder path is shown there)
3. Run the reinstall steps above

## How to verify the fix

1. The Dropbox icon in the system tray should show a steady blue droplet (not spinning, not paused)
2. Add a small test file to your Dropbox folder — the icon should spin briefly and return to steady
3. Open [dropbox.com](https://www.dropbox.com) in a browser and confirm the file appears there
4. On another device with Dropbox, confirm the file also appears there
