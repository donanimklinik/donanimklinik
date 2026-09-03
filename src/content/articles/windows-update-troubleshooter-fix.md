---
title: "Windows Update Troubleshooter — How to Run"
description: "How to run the Windows Update Troubleshooter on Windows 10 and 11, what it fixes automatically, and what to do if it doesn't resolve the problem."
category: computers
pillar: "Windows Update Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/windows-update-troubleshooter-19bc41ca-ad72-ae67-af3a-89292d261e4b"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "windows update troubleshooter"
  - "windows update troubleshooter windows 11"
  - "troubleshoot windows update"
  - "windows update troubleshooter download"
howto_steps:
  - name: "Open the Windows Update Troubleshooter on Windows 11"
    text: "Go to Settings > System > Troubleshoot > Other troubleshooters. Scroll to Windows Update in the list and click Run. A diagnostic window will open and begin scanning automatically — no further input is required until the scan completes."
  - name: "Open the Windows Update Troubleshooter on Windows 10"
    text: "Go to Settings > Update & Security > Troubleshoot > Additional troubleshooters. Click Windows Update in the list to expand it, then click Run the troubleshooter. The tool opens and begins scanning."
  - name: "Let the troubleshooter scan and apply fixes"
    text: "The troubleshooter runs through several checks automatically: verifying that the Windows Update service and BITS are running, checking for corrupted update database entries, testing network connectivity to Microsoft's update servers, and reviewing Windows Firewall rules. For each problem found, it attempts an automatic fix. When the scan is complete, a results summary appears listing what was found and what was fixed. Click Apply this fix if any actions require confirmation."
  - name: "Restart your PC and check for updates"
    text: "After the troubleshooter completes, restart the PC even if the tool does not prompt you to. Some fixes — particularly service restarts and Winsock resets — only take full effect after a reboot. After restarting, go to Settings > Windows Update and click Check for updates."
  - name: "If the troubleshooter reports no issues but problems continue — run manual fixes"
    text: "If the troubleshooter completes with 'No issues found' but Windows Update still fails, the problem is in an area the tool does not cover. The next steps are: clear the SoftwareDistribution folder manually, reset Windows Update components via Command Prompt, or run DISM /Online /Cleanup-Image /RestoreHealth to repair the Windows component store."
---

The **Windows Update Troubleshooter** is a built-in Microsoft diagnostic tool that automatically detects and repairs the most common causes of Windows Update failures. According to Microsoft's official documentation, it checks service states, network connectivity to update servers, update database integrity, and Windows Firewall configuration — and applies fixes without requiring manual command-line steps.

Running the troubleshooter is the correct first step for any Windows Update problem before attempting manual fixes.

![Windows Update Troubleshooter: Settings path on Windows 10 and 11, scan phases, results screen, and next steps if troubleshooter shows no issues](/images/windows-update-troubleshooter-fix.svg)

## What the Windows Update Troubleshooter checks and fixes

According to Microsoft's documentation, the troubleshooter performs the following checks automatically:

| Check | What it looks for | What it fixes |
|---|---|---|
| Windows Update service | Service stopped or in an error state | Restarts the service |
| BITS (Background Intelligent Transfer Service) | Service stopped | Restarts the service |
| Cryptographic Services | Service stopped | Restarts the service |
| Update database | Corrupted entries in the update registry | Clears and resets affected entries |
| Network connectivity | Cannot reach Microsoft update servers | Resets network components |
| Windows Firewall rules | Rules blocking update connections | Reports the conflict (cannot modify firewall rules automatically) |
| Pending reboot | Previous update is waiting for a restart | Alerts you to restart |

The troubleshooter cannot fix every update problem. It does not repair corrupted system files (that requires DISM and SFC), remove corrupted downloads from the SoftwareDistribution folder, or resolve errors caused by third-party antivirus or VPN software.

## How to run the Windows Update Troubleshooter

### Step 1 — Open the troubleshooter on Windows 11

1. Click **Start** and open **Settings** (the gear icon), or press **Win + I**
2. Go to **System → Troubleshoot → Other troubleshooters**
3. Scroll down to find **Windows Update** in the list
4. Click **Run**

A diagnostic window opens immediately and begins scanning.

### Step 2 — Open the troubleshooter on Windows 10

1. Press **Win + I** to open **Settings**
2. Go to **Update & Security → Troubleshoot**
3. Click **Additional troubleshooters** (link at the top right of the page)
4. Click **Windows Update** to expand the section
5. Click **Run the troubleshooter**

**Alternative method (both Windows 10 and 11):**
Press **Win + R**, type `msdt.exe /id WindowsUpdateDiagnostic`, and press **Enter**. This opens the troubleshooter directly without navigating through Settings.

### Step 3 — Let the scan complete and apply fixes

Once open, the troubleshooter runs automatically through several scan phases:

1. **Detecting problems** — the tool checks all services and configurations
2. **Applying fixes** — for each problem found, the tool attempts an automatic repair
3. **Verifying fixes** — the tool confirms the repairs worked

If a fix requires your confirmation, a prompt appears with an **Apply this fix** button. Click it to proceed.

Some fixes display as **Requires administrator access** — if you are running the troubleshooter without administrator rights, close it and reopen it by right-clicking the Settings app and selecting **Run as administrator**, then navigate back to the troubleshooter.

### Step 4 — Read the results report

When the scan finishes, the troubleshooter shows a results screen with one of three outcomes:

- **"Fixed"** — the problem was found and repaired automatically. Restart your PC and check for updates.
- **"Detected"** with instructions — a problem was found but requires a manual action. Follow the instructions shown.
- **"No issues found"** — the troubleshooter did not detect a problem. See Step 5.

Click **View detailed information** (available in some versions) to see a full log of every check performed and its result.

### Step 5 — If the troubleshooter reports no issues but updates still fail

"No issues found" does not mean Windows Update is working correctly — it means the specific items the troubleshooter checks are all in order. The actual problem is likely in an area the tool does not cover.

In this case, proceed with manual fixes in this order:

**1. Clear the SoftwareDistribution download cache:**
Open an administrator Command Prompt and run:
```
net stop wuauserv
net stop bits
```
Delete all files inside `C:\Windows\SoftwareDistribution\Download`, then run:
```
net start wuauserv
net start bits
```

**2. Repair the Windows component store with DISM:**
```
DISM /Online /Cleanup-Image /RestoreHealth
```
This repairs corrupted entries that prevent updates from installing, even when services appear to be running correctly.

**3. Scan for corrupted system files:**
```
sfc /scannow
```
Run this after DISM completes. Restart after both commands finish.

See the [Windows Update Not Working guide](/computers/windows-update-errors/windows-update-not-working-fix/) for the full manual fix sequence.

## How to verify the troubleshooter worked

1. After the troubleshooter completes and you restart, go to **Settings → Windows Update**
2. Click **Check for updates**
3. Updates should begin detecting and downloading without error
4. Confirm in **Settings → Windows Update → Update history** that recent updates show **Successfully installed**

## Frequently asked questions

**The Windows Update Troubleshooter itself will not open.**
If the troubleshooter window does not appear or closes immediately, try the direct command: press Win + R, type `msdt.exe /id WindowsUpdateDiagnostic`, and press Enter. If that also fails, the MSDT diagnostic service may be stopped — open services.msc, find Diagnostic Policy Service, and start it.

**The troubleshooter says "Troubleshooting couldn't identify the problem."**
This is the same as "No issues found" — the tool checked everything it knows how to check and found nothing. Follow the manual fixes in Step 5. The most effective next step is running DISM to repair the Windows component store.

**Do I need to download the Windows Update Troubleshooter?**
No. On Windows 10 and Windows 11, the troubleshooter is built into the operating system. Microsoft previously offered a standalone download for older Windows versions, but it is no longer necessary for current Windows releases. Use the Settings path described in Steps 1 and 2.
