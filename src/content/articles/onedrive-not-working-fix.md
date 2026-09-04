---
title: "OneDrive Not Working — Fix"
description: "OneDrive not opening or missing from system tray? Restart the process, reset, or reinstall. Full fix guide for OneDrive not working."
category: software
pillar: "Cloud Storage Sync Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-945b-b26b8f33d400"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "onedrive not working"
  - "onedrive problems"
  - "issues with onedrive"
  - "onedrive issue"
howto_steps:
  - name: "Start OneDrive manually"
    text: "Press Win + R, type %localappdata%\\Microsoft\\OneDrive\\onedrive.exe and press Enter. This starts the OneDrive process directly. If OneDrive opens and appears in the system tray, the problem was that it did not start automatically at login — you can fix this in Settings > Apps > Startup, or in OneDrive Settings > General > Start OneDrive automatically when I sign in to Windows."
  - name: "End the OneDrive process and restart it"
    text: "Open Task Manager (Ctrl + Shift + Esc). Click the Details tab and look for OneDrive.exe. Right-click it and select End task. Then press Win + R and run: %localappdata%\\Microsoft\\OneDrive\\onedrive.exe to start it fresh. Killing and restarting the process clears any hung state that is preventing OneDrive from functioning."
  - name: "Unlink and relink your account"
    text: "Click the OneDrive icon, go to Settings > Account, and click Unlink this PC. Confirm the unlink. Then reopen OneDrive from the Start menu, sign in with your Microsoft account, and select the same OneDrive folder location. This refreshes the account token and re-establishes the connection to Microsoft's servers — your local files are not deleted."
  - name: "Reset the OneDrive client"
    text: "Press Win + R and run: %localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset — this resets OneDrive's internal settings and sync database without deleting your files. Wait 2 minutes for the process to restart. If OneDrive does not reopen automatically, run the same path without /reset to start it manually."
  - name: "Reinstall OneDrive"
    text: "Open Settings > Apps > Installed apps and search for Microsoft OneDrive. Click Uninstall and confirm. Then go to microsoft.com/en-us/microsoft-365/onedrive/download and download the latest OneDrive installer. Run the installer and sign in. Reinstalling replaces all OneDrive program files, which fixes problems caused by corrupted installation files."
faq:
  - q: "Why is the OneDrive icon missing from my system tray?"
    a: "The OneDrive icon is missing when the OneDrive process is not running. Press Win + R and run: %localappdata%\\Microsoft\\OneDrive\\onedrive.exe to start it. If it starts and the icon appears, fix it permanently by going to Settings > Apps > Startup and enabling Microsoft OneDrive, or in OneDrive Settings > General enabling Start OneDrive automatically when I sign in to Windows."
  - q: "Why does OneDrive crash immediately on startup?"
    a: "OneDrive crashes on startup when its installation files are corrupted. The fastest fix is to reset it first: press Win + R and run %localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset. If it still crashes after a reset, uninstall OneDrive from Settings > Apps, then download and reinstall the latest version from Microsoft's website."
  - q: "Does reinstalling OneDrive delete my files?"
    a: "No. Your files are stored in your OneDrive account on Microsoft's servers. Reinstalling the desktop client only replaces the application software on your computer. After reinstalling and signing in, OneDrive re-syncs your files from the cloud. Files already on your computer in the OneDrive folder remain in place."
  - q: "Why does OneDrive say it cannot connect to OneDrive?"
    a: "This error appears when the OneDrive client cannot reach Microsoft's servers. Check your internet connection first. If internet is working, the issue is usually an expired account token — click the OneDrive icon, go to Settings > Account, unlink the PC, and sign back in. If the problem persists, check if a firewall or VPN is blocking OneDrive's connections."
  - q: "How do I set OneDrive to start automatically with Windows?"
    a: "Click the OneDrive icon in the system tray, go to Settings (gear icon) > Settings > General, and check Start OneDrive automatically when I sign in to Windows. Alternatively, open Task Manager, go to the Startup tab, find Microsoft OneDrive, right-click it, and select Enable. After either change, OneDrive will start with Windows automatically."
---

**OneDrive not working** covers several different symptoms: the OneDrive icon is missing from the system tray, the application crashes on startup, it shows account errors, or it opens but refuses to sync anything. According to Microsoft's official troubleshooting documentation, these problems are most commonly caused by a crashed OneDrive process, an expired account session, or corrupted OneDrive installation files.

![OneDrive not working: process crashed, account expired, or corrupt install — restart process, relink account, or reset to fix](/images/onedrive-not-working-fix.svg)

## What "OneDrive not working" looks like

The symptoms range in severity:

- **OneDrive icon missing from system tray** — the process is not running
- **OneDrive crashes immediately on startup** — corrupted installation or conflicting software
- **"You're not signed in" or account error** — session expired or account credentials changed
- **OneDrive opens but nothing syncs** — the sync service is running but failing silently
- **OneDrive not working after Windows update** — the update replaced or reset OneDrive components

## How to fix OneDrive not working

### Step 1 — Start OneDrive manually

If the OneDrive icon is missing from the system tray, the process may have simply not started at login.

1. Press **Win + R** to open the Run dialog
2. Type or paste the following and press **Enter**:
```
%localappdata%\Microsoft\OneDrive\onedrive.exe
```

If OneDrive opens and appears in the system tray, it was not set to start automatically. To fix this:

1. Click the **OneDrive icon** → **Settings gear** → **Settings**
2. Go to the **General** tab
3. Check **Start OneDrive automatically when I sign in to Windows**

Alternatively, go to **Settings → Apps → Startup** and make sure Microsoft OneDrive is enabled.

### Step 2 — End the OneDrive process and restart it

If OneDrive is running but not functioning correctly, the process may be in a hung or error state.

1. Press **Ctrl + Shift + Esc** to open Task Manager
2. Click the **Details** tab
3. Find **OneDrive.exe** in the list
4. Right-click it and select **End task** — confirm if prompted
5. Press **Win + R** and run:
```
%localappdata%\Microsoft\OneDrive\onedrive.exe
```

This gives OneDrive a clean start. Most issues caused by a hung process are resolved by this alone.

### Step 3 — Unlink and relink your account

If OneDrive shows an account error, a "sign-in required" message, or a red X that persists after restarting, the account session has expired. This happens after a password change, after a long period without using OneDrive, or after a Windows account change.

1. Click the **OneDrive icon** in the system tray
2. Click the **Settings gear** → **Settings**
3. Go to the **Account** tab
4. Click **Unlink this PC** and confirm

OneDrive closes and removes its local account configuration. To reconnect:

1. Open **OneDrive** from the Start menu
2. Sign in with your **Microsoft account** (the same account your files are stored in)
3. When prompted for a folder location, choose the same folder you were using before (e.g., `C:\Users\YourName\OneDrive`)
4. Allow OneDrive to complete its initial scan

Your local files are not deleted. OneDrive compares what is on disk with what is in the cloud and syncs the differences.

### Step 4 — Reset the OneDrive client

If unlinking did not resolve the issue, reset the client. This clears all OneDrive settings and rebuilds the sync database — without deleting your files.

1. Press **Win + R**
2. Run:
```
%localappdata%\Microsoft\OneDrive\onedrive.exe /reset
```
3. The OneDrive icon disappears — this is expected
4. Wait **2 minutes**
5. If OneDrive does not restart automatically, open Run again and execute:
```
%localappdata%\Microsoft\OneDrive\onedrive.exe
```

After the reset, OneDrive signs you in automatically using your stored credentials and begins re-syncing all files.

### Step 5 — Reinstall OneDrive

If OneDrive crashes on startup or if the reset does not work, the installation files may be corrupted.

**Uninstall OneDrive:**
1. Go to **Settings → Apps → Installed apps**
2. Search for **Microsoft OneDrive**
3. Click the three-dot menu → **Uninstall** → confirm

**Reinstall OneDrive:**
1. Go to [microsoft.com](https://www.microsoft.com/en-us/microsoft-365/onedrive/download) and download the latest OneDrive installer
2. Run the downloaded `OneDriveSetup.exe`
3. Sign in with your Microsoft account when prompted
4. Choose your OneDrive folder location

Reinstalling replaces all program files and resets the application to a clean state. Your cloud files are not affected — they remain in your OneDrive account and re-sync after setup.

## OneDrive not working after a Windows update

Windows updates occasionally reset OneDrive settings or replace the OneDrive binary with an older version. If OneDrive stopped working after a Windows update:

1. Check if OneDrive is still installed: search for "OneDrive" in the Start menu
2. If not found, reinstall using the link above
3. If found but not working, run the reset command (Step 4)
4. Also check **Settings → Apps → Startup** to confirm OneDrive is enabled to start automatically

## How to verify the fix

1. The OneDrive icon should appear as a steady blue cloud in the system tray
2. Click the icon — it should show your account name and storage usage, not an error
3. Add a small test file to your OneDrive folder and confirm it uploads (the icon shows a spinning circle briefly, then returns to steady blue)
4. Open [onedrive.live.com](https://onedrive.live.com) and confirm the test file appears there
