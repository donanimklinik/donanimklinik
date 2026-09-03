---
title: "Dropbox Not Updating — Fix"
description: "Dropbox not updating files from other devices? Files stuck on old versions? Fix Dropbox sync and get the latest changes on every device."
category: software
pillar: "Cloud Storage Sync Errors"
status: published
official_source_url: "https://help.dropbox.com/sync/not-syncing"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "dropbox not updating"
  - "dropbox not updating files"
  - "dropbox files not updating"
  - "dropbox not refreshing"
howto_steps:
  - name: "Check the Dropbox sync icon and activity panel"
    text: "Click the Dropbox icon in the system tray. If the icon shows a steady blue droplet with no activity, Dropbox believes everything is up to date — but you are not seeing new files. If it shows a spinning circle, files are downloading. If it shows a pause or X, sync is stopped. Click the icon and look at the activity panel to see the last sync time and any pending downloads."
  - name: "Force a sync by triggering an activity"
    text: "Dropbox checks for new files from the server at regular intervals. If the check-in interval has not triggered yet, files from other devices will not appear. To force an immediate check: click the Dropbox icon, then click your profile picture and select Pause syncing. Wait 5 seconds, then click Resume syncing. This forces an immediate connection to Dropbox servers and downloads any pending changes."
  - name: "Verify Selective Sync is not excluding the folder"
    text: "If a folder is excluded from Selective Sync on this device, new files added to that folder on other devices will never appear here — even though they exist in your Dropbox account online. Click the Dropbox icon, go to Preferences > Sync > Selective Sync, and confirm all expected folders are checked. If a folder is unchecked, add it and click Update."
  - name: "Quit and restart the Dropbox client"
    text: "Click the Dropbox icon, click your profile picture, and select Quit Dropbox. Wait 10 seconds. Reopen Dropbox from the Start menu. After reopening, Dropbox immediately connects to its servers and downloads all pending updates from other devices. This is the most reliable way to force Dropbox to fetch new changes."
  - name: "Check that the Dropbox folder location is unchanged"
    text: "If the Dropbox folder has been moved or renamed, the Dropbox client loses track of where to put downloaded files and appears to stop updating. Right-click the Dropbox icon, go to Preferences > Sync, and check the folder path shown. If it points to the wrong location, click Move Dropbox folder and navigate to the correct location."
---

**Dropbox not updating** means files added or edited on another device — a second computer, a phone, or a web browser — are not appearing in your local Dropbox folder. The files exist in your Dropbox account online, but the desktop client on this computer has not downloaded the new versions. According to Dropbox's official documentation, this is typically caused by a paused sync, a Selective Sync exclusion, or the Dropbox client not checking in with the server.

![Dropbox not updating: files added on other devices don't appear locally — check sync status, selective sync, folder path, and force re-sync](/images/dropbox-not-updating-fix.svg)

## The difference between "not syncing" and "not updating"

- **Not syncing** — your local changes are not uploading to Dropbox
- **Not updating** — changes from other devices are not downloading to your local folder

Both involve sync, but they point to different causes. Not updating almost always means the download direction is broken: either the client is paused, the folder is excluded from Selective Sync, or the client has not checked in with the Dropbox server recently.

## What causes Dropbox to stop updating

- **Sync is paused** — all downloads stop when sync is paused
- **Selective Sync exclusion** — the folder containing the new files is not configured to sync on this device
- **Dropbox folder moved or renamed** — the client cannot find where to place downloaded files
- **The Dropbox process is in a stalled state** — the client is running but not polling the server for changes
- **Bandwidth download limit set too low** — downloads are throttled to the point of appearing non-functional
- **Account storage full** — in some cases, storage issues affect both uploads and downloads

## How to fix Dropbox not updating

### Step 1 — Check the Dropbox sync icon and activity panel

Click the **Dropbox icon** in the system tray.

What the icon tells you:

| Icon | What it means |
|------|--------------|
| Steady blue droplet | Dropbox thinks everything is synced |
| Spinning blue circle | Actively downloading or uploading |
| Pause symbol | Sync is paused — this blocks all updates |
| Red X | An error is preventing sync |

If the icon shows a steady blue droplet but files from other devices are missing, Dropbox believes it is up to date when it is not. Proceed to Step 2 to force a re-check.

Click the icon and look for:
- **Last synced** timestamp — if it shows hours ago, the client has not checked in recently
- **Files pending** — any files listed here are queued to download

### Step 2 — Force an immediate sync

Dropbox polls its servers at intervals (typically every few minutes). To force an immediate check:

1. Click the **Dropbox icon** in the system tray
2. Click your **profile picture** → **Pause syncing**
3. Wait **5 seconds**
4. Click the icon → **Resume syncing**

After resuming, Dropbox immediately contacts its servers and downloads all pending changes. New files from other devices should appear in your Dropbox folder within 60 seconds for small files.

### Step 3 — Verify Selective Sync settings

Selective Sync lets you choose which Dropbox folders sync to a specific computer. If the folder containing the files you are looking for is excluded on this device, the files will not download here — even though they are visible in your Dropbox account online.

1. Click the **Dropbox icon** → **gear icon** → **Preferences**
2. Click the **Sync** tab
3. Click **Selective Sync** (or **Choose folders to sync**)
4. Look for folders without a checkmark — these are excluded from this device
5. Check the missing folders and click **Update**

Dropbox immediately begins downloading the previously excluded folders.

### Step 4 — Quit and restart the Dropbox client

A full restart forces Dropbox to reconnect to its servers and download all pending changes:

1. Click the **Dropbox icon** → **profile picture** → **Quit Dropbox**
2. Wait **10 seconds**
3. Open **Task Manager** (Ctrl + Shift + Esc) and confirm **Dropbox.exe** is no longer running
4. Reopen **Dropbox** from the Start menu

After restarting, the activity panel shows any files being downloaded. New files from other devices appear within a few minutes for most account sizes.

### Step 5 — Verify the Dropbox folder path

If you recently moved or renamed your Dropbox folder in File Explorer, the Dropbox client loses track of where to place downloaded files. It will appear to work — the icon shows a steady droplet — but nothing is actually being written to disk.

1. Click the **Dropbox icon** → **gear icon** → **Preferences**
2. Click the **Sync** tab
3. Look at the **Dropbox folder location** shown — confirm it matches the folder you are checking
4. If the path is wrong, click **Move Dropbox folder** and navigate to the correct location

After correcting the path, Dropbox rescans the folder and downloads all missing files.

### Step 6 — Check bandwidth download settings

If downloads are throttled:

1. Click **Dropbox icon** → **gear icon** → **Preferences** → **Bandwidth**
2. Under **Download rate**, select **Don't limit**
3. Click **OK**

With no download limit, Dropbox downloads pending files at full speed.

## Checking Dropbox online to confirm files exist

Before spending time troubleshooting, confirm the files exist in your Dropbox account:

1. Go to [dropbox.com](https://www.dropbox.com) in a browser and sign in
2. Navigate to the folder where the files should be
3. If the files are not there, the problem is on the other device (the files were not uploaded, not downloaded)
4. If the files are there, the problem is on this device (download is failing)

This distinction tells you which device to troubleshoot.

## How to verify the fix

1. Open [dropbox.com](https://www.dropbox.com) and note the timestamp on a recently changed file
2. Check your local Dropbox folder — the same file should show the same modification date
3. Add a file on a different device (or via the Dropbox website) and confirm it appears in your local folder within 2 minutes
