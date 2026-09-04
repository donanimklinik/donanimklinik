---
title: "Windows Update Stuck — Fix"
description: "Windows Update stuck at 0%, 100%, or on the 'Working on updates' screen? These steps safely unfreeze the update without losing files."
category: computers
pillar: "Windows Update Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/windows-update-troubleshooter-19bc41ca-ad72-ae67-af3a-89292d261e4b"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 8
fix_summary: "If stuck for over 2 hours, restart the Windows Update service: open services.msc, find Windows Update, click Stop, wait 30 seconds, then Start — and try the update again."
fix_time_display: "~5 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "windows update stuck"
  - "windows update stuck at 0"
  - "windows update stuck downloading"
  - "windows update frozen"
howto_steps:
  - name: "Wait and force a safe restart"
    text: "If the update progress bar has not moved for 2 hours, it is safe to restart. On the 'Working on updates' screen, hold the power button for 5 seconds to shut down. On the next boot, Windows will attempt to roll back the partial update automatically. If Windows boots normally, go to Settings > Windows Update and try the update again. Do not interrupt a restart cycle that appears to be making progress — each percentage change confirms the update is still running."
  - name: "Boot into Safe Mode and clear the SoftwareDistribution folder"
    text: "Restart the PC and hold Shift while clicking Restart in the Start menu. Go to Troubleshoot > Advanced options > Startup Settings > Restart, then press 4 to boot into Safe Mode. In Safe Mode, open File Explorer and delete all files inside C:\\Windows\\SoftwareDistribution\\Download. Restart normally. Windows will rebuild the cache on next startup and the stuck update can be re-downloaded cleanly."
  - name: "Run DISM and SFC to repair Windows"
    text: "Open Command Prompt as administrator. Run: DISM /Online /Cleanup-Image /RestoreHealth — this contacts Microsoft's servers and repairs the Windows component store. When DISM completes (it can take 15–30 minutes), run: sfc /scannow — this scans and repairs protected system files. Restart after both complete, then check for updates. Corrupted system files are a common cause of updates that download but never finish installing."
  - name: "Download and install the update manually from the Microsoft Update Catalog"
    text: "Go to Settings > Windows Update > Update history and note the KB number of the stuck update (e.g., KB5034441). Open a browser and go to catalog.update.microsoft.com. Search for the KB number and download the package matching your Windows version and architecture (x64 for most modern PCs). Run the downloaded .msu or .exe file to install the update directly, bypassing Windows Update entirely."
  - name: "Run the Windows Update Troubleshooter after the fix"
    text: "After resolving the stuck update, go to Settings > System > Troubleshoot > Other troubleshooters (Windows 11) or Settings > Update & Security > Troubleshoot (Windows 10) and run the Windows Update troubleshooter. This resets service states and cleans up any residual configuration problems left by the stuck update, preventing the same issue from recurring."
faq:
  - q: "How long should I wait before assuming Windows Update is stuck?"
    a: "Wait at least 2 hours before concluding an update is genuinely stuck. Large feature updates can appear frozen at the same percentage for 30–60 minutes while processing in the background. The update is stuck if the percentage counter has not changed at all for 2 hours, the hard drive activity light is off, and the PC is not hot."
  - q: "Is it safe to restart my PC when Windows Update is stuck?"
    a: "Yes, after 2 hours of no progress it is safe to hold the power button for 5 seconds to force a shutdown. Windows detects the interrupted update on the next boot and automatically rolls back the partial installation. Your files and programs are not affected by the rollback."
  - q: "Why does Windows Update get stuck at 0%?"
    a: "Stuck at 0% almost always means the download has not started. The causes are a stopped Windows Update service, a corrupted SoftwareDistribution download folder blocking new downloads, or a network problem preventing the download server from being reached. Restart the update services and clear the SoftwareDistribution\\Download folder to resolve this."
  - q: "Why does Windows Update get stuck at 100% or on the 'Working on updates' screen?"
    a: "Stuck at 100% or on the Working on updates screen means the installation started but cannot complete. This is typically caused by an incompatible driver, corrupted system files, or the update conflicting with installed software. Running DISM and SFC repairs the Windows component store and resolves most installation-phase stuck updates."
  - q: "What is the Microsoft Update Catalog and how do I use it?"
    a: "The Microsoft Update Catalog at catalog.update.microsoft.com is Microsoft's official download site for individual update packages. Search for the KB number of the stuck update (found in Settings > Windows Update > Update history), download the correct version for your Windows edition, and run the downloaded file to install the update directly without using Windows Update."
---

**Windows Update stuck** means the download or installation progress has frozen — the percentage counter stops moving and the update never completes. According to Microsoft's troubleshooting documentation, updates most commonly get stuck during the download phase (at 0% or a fixed percentage) or during the installation phase (the "Working on updates — Do not turn off your PC" screen after a restart).

![Windows Update stuck — fix decision tree: stuck downloading vs stuck installing, with paths through safe restart, Safe Mode, DISM, and manual catalog download](/images/windows-update-stuck-fix.svg)

## What causes Windows Update to get stuck

A stuck update is almost always caused by one of the following:

- **Corrupted download package** — a partially downloaded file in the SoftwareDistribution folder prevents the download from completing
- **Windows Update service crash** — the service stops mid-download and the progress counter freezes
- **Corrupted Windows component store** — the Windows image (used during installation) has damaged entries that prevent the update from applying
- **Conflict with another update** — some cumulative updates require a previous update to be installed first; if the prerequisite is missing, the installation hangs
- **Insufficient disk space** — the update cannot stage its files and freezes rather than reporting an error

## How to fix Windows Update stuck

### Step 1 — Wait, then force a safe restart

Before taking any action, confirm the update is genuinely stuck:

- **Downloading:** If the percentage has not changed in **2 hours**, it is stuck
- **Installing (post-restart screen):** If the "Working on updates" screen has shown the same percentage for **2 hours**, it is stuck

A single percentage change — even from 0% to 1% — means the update is still running slowly. Do not interrupt it.

**When it is confirmed stuck, restart safely:**

1. On the "Working on updates" screen: hold the **power button** for 5 seconds to shut down
2. Wait 10 seconds, then power on normally
3. Windows will detect the incomplete installation and attempt an **automatic rollback** — this is normal and safe
4. Once Windows boots to the desktop, the update will appear as failed in Update history
5. Go to **Settings → Windows Update → Check for updates** to retry

Most stuck downloads resolve after this step — the service resets and the download restarts from scratch.

### Step 2 — Boot into Safe Mode and clear the download cache

If the update gets stuck again after a retry, the SoftwareDistribution download cache contains corrupted data that must be removed in Safe Mode (to ensure the Windows Update service is not running while files are deleted).

**Enter Safe Mode:**
1. Click **Start** → hold **Shift** and click **Restart**
2. Go to **Troubleshoot → Advanced options → Startup Settings → Restart**
3. When the Startup Settings menu appears, press **4** to enter Safe Mode (no networking needed for this step)

**Clear the download cache in Safe Mode:**
1. Open **File Explorer** and navigate to `C:\Windows\SoftwareDistribution\Download`
2. Select all contents (Ctrl + A) and delete them
3. Leave the `Download` folder itself in place — only delete the contents inside it

**Restart normally:**
1. Click **Start → Power → Restart** to exit Safe Mode and boot normally
2. Go to **Settings → Windows Update → Check for updates**

Windows rebuilds the download cache with fresh data. The stuck update will re-download from the beginning.

### Step 3 — Run DISM and SFC to repair Windows

If the update gets stuck during installation (not download), the Windows component store — which the update modifies — may be corrupted. DISM repairs it by downloading replacement files directly from Microsoft.

1. Right-click **Start** → **Terminal (Admin)** or **Command Prompt (Admin)**
2. Run DISM:
```
DISM /Online /Cleanup-Image /RestoreHealth
```
DISM connects to Microsoft's servers and repairs any damaged entries in the Windows component store. This process takes **15–30 minutes** — let it complete. A progress percentage is displayed.

3. After DISM completes, run SFC:
```
sfc /scannow
```
SFC scans all protected Windows system files and replaces any that are damaged or missing.

4. **Restart the PC** after both scans complete
5. Go to **Settings → Windows Update → Check for updates** and retry the stuck update

**Note:** If DISM reports "The source files could not be found," your PC is not connected to the internet, or the Windows image repair servers are temporarily unavailable. Ensure you have an internet connection and retry.

### Step 4 — Download the update manually from the Microsoft Update Catalog

If Windows Update continues to get stuck on the same specific update, you can install it directly from Microsoft's Update Catalog, bypassing the Windows Update system entirely.

**Find the KB number:**
1. Go to **Settings → Windows Update → Update history**
2. Note the **KB number** of the failed or stuck update (e.g., KB5034441)

**Download from the catalog:**
1. Open a browser and go to [catalog.update.microsoft.com](https://catalog.update.microsoft.com)
2. Search for the KB number
3. From the results, download the package that matches:
   - Your Windows version (Windows 10 or Windows 11)
   - Your architecture: **x64** for most modern computers (check via Settings → System → About → System type)

**Install the update:**
1. Double-click the downloaded `.msu` file
2. Follow the installation wizard
3. Restart when prompted

After the manual install completes, Windows Update should recognise the update as installed and stop attempting to re-download it.

### Step 5 — Run the Windows Update Troubleshooter to clean up

After resolving the stuck update, run the troubleshooter to reset any residual service state problems.

**On Windows 11:**
1. Go to **Settings → System → Troubleshoot → Other troubleshooters**
2. Click **Run** next to **Windows Update**

**On Windows 10:**
1. Go to **Settings → Update & Security → Troubleshoot → Additional troubleshooters**
2. Click **Windows Update → Run the troubleshooter**

This step is important for preventing the same issue from recurring on the next update cycle.

## How to verify the fix

1. Go to **Settings → Windows Update → Update history**
2. Confirm the previously stuck update now shows **Successfully installed** with today's date
3. Click **Check for updates** again — any additional pending updates should now download and install without freezing

## Frequently asked questions

**Windows Update is stuck at exactly 0% for hours.**
This almost always indicates a corrupted entry in the SoftwareDistribution download folder. Follow Step 2 (Safe Mode cache clear) — it resolves the 0% stuck problem in the majority of cases.

**The "Working on updates" screen is stuck at 100% and has been for over an hour.**
100% stuck is the most common installation freeze point. A forced restart (Step 1) typically causes Windows to roll back cleanly. After the rollback, run DISM and SFC (Step 3) before retrying — the corruption that caused the 100% freeze is usually in the component store.

**Windows is in a restart loop: it starts updating, reboots, then shows the same percentage again.**
Stop the loop by performing a hard shutdown (hold power button 5 seconds). Boot into Safe Mode (Step 2), clear the SoftwareDistribution cache, restart normally, then run DISM before retrying. If the loop continues, manually install the update from the Microsoft Update Catalog (Step 4).
