---
title: "Windows Update Error 0xc1900101 — Fix"
description: "Windows Update error 0xc1900101 rolls back the installation due to a driver conflict. These Microsoft steps identify and remove the incompatible driver."
category: computers
pillar: "Windows Update Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/get-help-with-windows-upgrade-and-installation-errors-ea144c24-513d-a60e-40df-31ff78b3158a"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 7
fix_summary: "This driver compatibility error during feature updates is fixed by uninstalling incompatible drivers (especially graphics and antivirus) before running the update again."
fix_time_display: "~15 min"
fix_difficulty: Medium
schema_type: HowTo
featured: false
top_search_queries:
  - "0xc1900101"
  - "windows update error 0xc1900101"
  - "0xc1900101 0x20017"
  - "0xc1900101 windows 11"
howto_steps:
  - name: "Run SetupDiag to identify the failing driver"
    text: "Download SetupDiag from Microsoft's official download page. Run the tool — it reads Windows Setup log files and identifies the exact driver or component that caused the rollback. The output report names the specific driver file and its version. Use this information to target the correct driver in the next step."
  - name: "Update or uninstall the incompatible driver"
    text: "Open Device Manager (right-click Start > Device Manager). Find the device corresponding to the driver identified by SetupDiag. Right-click it and select Update driver > Search automatically for drivers. If no update is available, right-click and select Uninstall device, then check Delete the driver software for this device. The update will no longer fail on this driver."
  - name: "Disconnect all non-essential external hardware"
    text: "Unplug all USB devices except the keyboard and mouse: USB drives, external hard drives, card readers, webcams, drawing tablets, and USB hubs. Some external device drivers are incompatible with the target Windows version and cause 0xc1900101 during the update process. Run Windows Update again with only essential peripherals connected."
  - name: "Run the Windows Update Troubleshooter"
    text: "Go to Settings > System > Troubleshoot > Other troubleshooters and run Windows Update. The troubleshooter clears the update cache and resets the update components. After it completes, restart and attempt the update again."
  - name: "Use the Media Creation Tool instead of Windows Update"
    text: "Download the Media Creation Tool from microsoft.com/software-download/windows11 (or windows10). Select Upgrade this PC now. The tool performs the same Windows version upgrade as Windows Update but uses a fresh downloaded image rather than the cached update files. This method bypasses many driver-related rollback issues."
faq:
  - q: "What does Windows Update error 0xc1900101 mean?"
    a: "Error 0xc1900101 means Windows detected an incompatible driver and rolled back the feature update to protect your system. The secondary code narrows the cause: 0x20017 indicates a driver failure in the safe OS phase, and 0x4000D indicates a migration failure. Your PC boots normally after the rollback — no data is lost."
  - q: "How do I find which driver is causing 0xc1900101?"
    a: "Download SetupDiag from Microsoft's website and run it. The tool reads the Windows Setup log files and outputs a report naming the exact driver file and version that caused the rollback. Use that driver name to identify the device in Device Manager and update or uninstall it."
  - q: "Can I fix 0xc1900101 by uninstalling the incompatible driver?"
    a: "Yes. Once you know which driver is causing the error from SetupDiag, open Device Manager, find the corresponding device, right-click it, and select Uninstall device. Check Delete the driver software for this device before confirming. With the driver removed, run Windows Update again — the update will proceed past the point where it previously rolled back."
  - q: "Why does disconnecting USB devices fix 0xc1900101?"
    a: "USB devices install their own drivers, and some of these drivers are incompatible with the Windows version being installed. Disconnecting all non-essential USB devices before running the update removes those drivers from the compatibility check. After the update completes, reconnect the devices one at a time to identify which one was causing the conflict."
  - q: "What is the difference between 0xc1900101 and other Windows Update errors?"
    a: "The 0xc1900101 error is specifically a rollback error — it only occurs during feature updates (major version upgrades) when Windows Setup determines a driver is incompatible. Other Windows Update errors like 0x80070005 or 0x800f0922 occur during cumulative updates and have different causes. If you see 0xc1900101, the fix always involves identifying and removing the incompatible driver."
---

Windows Update error 0xc1900101 means the update installation started but was **rolled back** before completing. Windows detected an incompatible driver during the upgrade process and automatically reversed the installation to prevent a non-bootable system.

According to Microsoft's official documentation, 0xc1900101 is specifically a rollback error that occurs during major feature updates — such as upgrading from Windows 10 to Windows 11 or installing a major version update. The most common secondary codes are 0x20017 (driver failure in safe OS phase) and 0x4000D (migration failure).

![Windows Update error 0xc1900101 fix: driver incompatibility rolls back Windows feature update — run SetupDiag to identify failing driver, update or uninstall it in Device Manager, disconnect USB peripherals](/images/windows-update-error-0xc1900101-fix.svg)

## What causes Windows Update error 0xc1900101

The 0xc1900101 error is always caused by a driver or hardware compatibility problem during a feature update:

- **Incompatible device driver** — a driver installed on the system does not support the target Windows version, causing setup to fail during the driver migration phase
- **External USB hardware** — a connected peripheral has a driver that conflicts with the new Windows version
- **Corrupted driver files** — an existing driver is damaged and causes setup to crash during the installation phase
- **Antivirus or security software** — some security tools inject drivers that block the Windows upgrade process

The secondary error code (0x20017, 0x4000D, etc.) indicates at which phase of the upgrade the failure occurred, but the fix is the same: identify and remove the incompatible driver.

## How to fix Windows Update error 0xc1900101

### Step 1 — Run SetupDiag to identify the failing driver

SetupDiag reads the Windows Setup log files and pinpoints exactly which driver caused the rollback.

1. Download **SetupDiag** from [Microsoft's official download page](https://docs.microsoft.com/en-us/windows/deployment/upgrade/setupdiag)
2. Save it to a folder such as `C:\SetupDiag\`
3. Open **Command Prompt as administrator**, navigate to the folder: `cd C:\SetupDiag`
4. Run: `SetupDiag.exe /Output:results.log`
5. Open `results.log` in Notepad
6. Look for lines mentioning a specific **.sys** or **.inf** file — this is the incompatible driver

Note the driver name and the associated device. Use this in the next step.

### Step 2 — Update or uninstall the incompatible driver

1. Right-click **Start** and select **Device Manager**
2. Find the device associated with the driver identified by SetupDiag
3. Right-click the device and select **Update driver** → **Search automatically for drivers**
4. If Windows finds an updated driver, install it and restart
5. If no updated driver is available, right-click the device and select **Uninstall device**
6. Check **Delete the driver software for this device** and confirm
7. Restart the computer and run Windows Update again

After removing or updating the driver, Windows can complete the feature update without rolling back.

### Step 3 — Disconnect all non-essential external hardware

Some connected USB devices have drivers that are incompatible with the target Windows version. Disconnecting them removes those drivers from the upgrade process.

Before running Windows Update:

1. Unplug all **USB devices** except the keyboard and mouse:
   - USB flash drives and external hard drives
   - Card readers and SD card adapters
   - USB webcams and microphones
   - Drawing tablets (Wacom, Huion, etc.)
   - USB hubs
2. Also disconnect any **Thunderbolt** or **DisplayPort** adapters
3. Run **Windows Update** with only the essential devices connected
4. After the update completes, reconnect devices one at a time and check for driver issues

### Step 4 — Run the Windows Update Troubleshooter

1. Go to **Settings** → **System** → **Troubleshoot** → **Other troubleshooters**
2. Click **Run** next to **Windows Update**
3. Allow the troubleshooter to complete and apply any fixes
4. Restart the computer and attempt the update again

### Step 5 — Use the Media Creation Tool

If Windows Update repeatedly fails with 0xc1900101, bypass it entirely by using the Media Creation Tool, which performs the upgrade using a freshly downloaded Windows image.

1. Download the **Media Creation Tool** from [microsoft.com/software-download](https://www.microsoft.com/software-download/windows11) (for Windows 11) or the Windows 10 equivalent
2. Run the tool and select **Upgrade this PC now**
3. Follow the prompts — the tool downloads a complete Windows installation image and performs the upgrade
4. The Media Creation Tool skips some driver validation checks that cause 0xc1900101 in Windows Update

## How to verify the fix

1. After the update completes without rolling back, go to **Settings** → **System** → **About**
2. Confirm the **Windows specification** shows the correct version and build number
3. Check **Settings** → **Windows Update** → **Update history** — the feature update should show **Successfully installed**

## Frequently asked questions

**The update keeps rolling back even after removing the driver SetupDiag identified.**
Run SetupDiag again after removing the first driver — the log may now show a different driver as the failure point. Some systems have multiple incompatible drivers that must each be addressed individually.

**0xc1900101 0x20017 specifically — what does 0x20017 mean?**
The 0x20017 sub-code indicates the failure occurred in the **Safe OS phase** — early in the installation when Windows is loading drivers for the new environment. This specifically points to a kernel-mode driver conflict. SetupDiag will identify the exact driver.

**I cannot find SetupDiag or it shows no results.**
SetupDiag requires the Windows Setup log files to be present. If the system was restarted multiple times after the failed update, the logs may have been cleared. In this case, proceed directly to Step 3 (disconnect external hardware) and Step 5 (Media Creation Tool).
