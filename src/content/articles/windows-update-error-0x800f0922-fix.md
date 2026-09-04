---
title: "Windows Update Error 0x800f0922 — Fix"
description: "Windows Update error 0x800f0922? This error signals a full System Reserved partition or a .NET Framework failure. These Microsoft steps fix it."
category: computers
pillar: "Windows Update Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/topic/windows-update-error-0x800f0922-7be9b1e7-8a98-b59c-bf63-dbad2f5e866d"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 7
fix_summary: "This error means the System Reserved partition is full or update servers are unreachable — disable VPN if connected, then run 'sfc /scannow' in an elevated Command Prompt."
fix_time_display: "~8 min"
fix_difficulty: Medium
schema_type: HowTo
featured: false
top_search_queries:
  - "0x800f0922"
  - "windows update error 0x800f0922"
  - "0x800f0922 windows 10"
  - "0x800f0922 windows 11"
howto_steps:
  - name: "Check the System Reserved partition space"
    text: "Open Disk Management (right-click Start > Disk Management). Locate the System Reserved partition — it is typically 100–500 MB on the same disk as Windows. If it shows less than 50 MB free, the partition is full and causing 0x800f0922. Windows Update requires free space on this partition to stage updates."
  - name: "Clear unnecessary files from the System Reserved partition"
    text: "Open Command Prompt as administrator and run: Dism /Online /Cleanup-Image /StartComponentCleanup. This removes superseded Windows components from the system partition. Also run: vssadmin delete shadows /for=C: /Oldest to remove old shadow copies that may have consumed partition space."
  - name: "Repair .NET Framework via Windows Features"
    text: "Press Win+R, type optionalfeatures, and press Enter. In the Windows Features window, uncheck .NET Framework 3.5 (includes .NET 2.0 and 3.0) if it is checked, click OK, and restart. Re-open Windows Features, check .NET Framework 3.5 again, and click OK to reinstall it. This resolves CBS_E_INSTALLERS_FAILED errors within 0x800f0922."
  - name: "Run DISM and SFC to repair Windows image"
    text: "Open Command Prompt as administrator. Run: DISM /Online /Cleanup-Image /RestoreHealth and wait for it to complete (10–20 minutes). Then run: sfc /scannow. These commands repair the Windows component store and system files that 0x800f0922 may indicate are corrupted."
  - name: "Download and install the update manually"
    text: "Find the KB number of the failing update in Settings > Windows Update > Update history. Go to catalog.update.microsoft.com, search for the KB number, and download the correct version for your Windows edition. Run the .msu installer directly to bypass the Windows Update service."
faq:
  - q: "What does Windows Update error 0x800f0922 mean?"
    a: "Error 0x800f0922 means Windows Update could not complete the installation due to one of two causes: the System Reserved partition does not have enough free space to stage the update, or a .NET Framework component installation failed during the update process. Check the System Reserved partition size in Disk Management first to identify which cause applies."
  - q: "How do I free up space on the System Reserved partition?"
    a: "Open Command Prompt as administrator and run: Dism /Online /Cleanup-Image /StartComponentCleanup — this removes superseded Windows components from the system partition. Also remove old Volume Shadow Copy snapshots with: vssadmin delete shadows /for=C: /Oldest. These commands typically recover enough space to allow the update to proceed."
  - q: "How do I know if 0x800f0922 is caused by .NET Framework?"
    a: "Open Event Viewer (search in Start menu), go to Windows Logs > Application, and look for errors mentioning CBS_E_INSTALLERS_FAILED. If this error appears at the time of the Windows Update failure, the cause is .NET Framework. Repair it by unchecking and rechecking .NET Framework 3.5 in the Windows Features panel (optionalfeatures command)."
  - q: "Why does the System Reserved partition fill up?"
    a: "The System Reserved partition stores boot files, BitLocker encryption data, and Windows recovery environment files. It fills up over time as Windows accumulates superseded update components, recovery tools, and Volume Shadow Copy snapshots. The DISM StartComponentCleanup command removes old components without affecting the current Windows installation."
  - q: "Can I install the update manually if 0x800f0922 keeps returning?"
    a: "Yes. Find the KB number in Settings > Windows Update > Update history, search for it at catalog.update.microsoft.com, and download the matching package for your Windows edition. Running the .msu file directly bypasses the System Reserved partition space check that causes 0x800f0922 in the Windows Update client."
---

Windows Update error 0x800f0922 appears when Windows cannot complete a cumulative update installation. The error has two distinct root causes: the **System Reserved partition is full**, or a **.NET Framework component installation failed** (logged internally as CBS_E_INSTALLERS_FAILED).

According to Microsoft's official documentation, identifying which cause applies requires checking the System Reserved partition size first, then examining the CBS.log file for .NET-related failures.

![Windows Update error 0x800f0922 fix: System Reserved partition full or .NET Framework failure — check partition space in Disk Management, run DISM cleanup, repair .NET Framework via Windows Features](/images/windows-update-error-0x800f0922-fix.svg)

## What causes Windows Update error 0x800f0922

The 0x800f0922 error appears in two scenarios:

- **System Reserved partition is full** — this small partition (100–500 MB) holds bootloader files and Windows Update staging data. When it runs out of space, updates cannot be applied
- **.NET Framework installation failed** — cumulative updates often include .NET Framework components; if the existing .NET installation is corrupted, the update fails with CBS_E_INSTALLERS_FAILED, which surfaces as 0x800f0922
- **Corrupted Windows component store** — the Windows servicing stack (DISM/CBS) has inconsistencies that prevent update installation

## How to fix Windows Update error 0x800f0922

### Step 1 — Check the System Reserved partition space

1. Right-click **Start** and select **Disk Management**
2. Find the **System Reserved** partition — it is a small partition (100–500 MB) on the same disk as your Windows installation, labeled "System Reserved"
3. Check the **Free Space** column
4. If free space is less than **50 MB**, the partition is full and causing the error

A full System Reserved partition is the most common cause of 0x800f0922 on Windows 10 systems that were upgraded from Windows 7 or 8.

### Step 2 — Clean up the System Reserved partition

Run these commands in **Command Prompt as administrator** to free space on the system partition:

**Clean up Windows component store:**
```
Dism /Online /Cleanup-Image /StartComponentCleanup
```

**Remove old shadow copies (if present):**
```
vssadmin delete shadows /for=C: /Oldest
```

After the cleanup completes, return to Disk Management and check if the System Reserved partition now has more free space. Then run Windows Update again.

### Step 3 — Repair .NET Framework via Windows Features

If the System Reserved partition has adequate space, the error is likely caused by a .NET Framework installation failure.

1. Press **Win+R**, type `optionalfeatures`, press **Enter**
2. In the **Windows Features** window, locate **.NET Framework 3.5 (includes .NET 2.0 and 3.0)**
3. If it is checked, **uncheck it** and click **OK** — restart when prompted
4. Re-open Windows Features, **check .NET Framework 3.5** again, and click **OK**
5. Windows reinstalls .NET Framework 3.5 — restart when complete
6. Run Windows Update again

### Step 4 — Run DISM and SFC

If the above steps do not resolve the error, the Windows component store may be corrupted.

1. Open **Command Prompt as administrator**
2. Run: `DISM /Online /Cleanup-Image /RestoreHealth`
   - This contacts Windows Update servers to download and replace corrupted components
   - It takes 10–20 minutes to complete
3. After DISM completes, run: `sfc /scannow`
4. Restart the computer and run Windows Update

### Step 5 — Install the update manually

If 0x800f0922 persists, download the failing update directly from Microsoft.

1. In **Settings** → **Windows Update** → **Update history**, note the **KB number** of the failing update
2. Go to [catalog.update.microsoft.com](https://catalog.update.microsoft.com)
3. Search for the KB number and download the correct package for your Windows version and architecture
4. Double-click the downloaded `.msu` file to install it directly
5. Restart the computer when prompted

## How to verify the fix

1. Open **Settings** → **Windows Update** → **Check for updates**
2. Confirm that updates download and install without showing 0x800f0922
3. In **Update history**, confirm the previously failing update now shows **Successfully installed**

## Frequently asked questions

**0x800f0922 appears only when installing a specific cumulative update.**
Check the KB number against the Microsoft Update Catalog. Some cumulative updates have known issues on specific hardware configurations. Microsoft typically releases a follow-up patch within days. Installing the update manually from the catalog (Step 5) often resolves version-specific issues.

**Disk Management does not show a System Reserved partition.**
Some systems — particularly those that booted directly from a USB installer or use third-party boot managers — do not have a System Reserved partition. In this case, the error is caused by .NET Framework or component store corruption. Proceed directly to Step 3.

**DISM /RestoreHealth fails with an error.**
If DISM cannot connect to Windows Update servers to download repair files, run it with a local source: mount the Windows installation ISO and specify the source path. Open Command Prompt as administrator and run: DISM /Online /Cleanup-Image /RestoreHealth /Source:D:\Sources\install.wim (replace D: with your ISO drive letter).
