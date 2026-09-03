---
title: "Windows Update Error 0x80070005 — Fix"
description: "Windows Update fails with error 0x80070005 Access Denied? These official Microsoft steps reset the permissions blocking your update."
category: computers
pillar: "Windows Update Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/topic/error-0x80070005-access-denied-when-you-try-to-install-windows-updates-b3e87c27-9d8a-5101-59e9-e7da98d4c2a3"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "0x80070005"
  - "windows update error 0x80070005"
  - "error 0x80070005 access denied"
  - "0x80070005 windows update fix"
howto_steps:
  - name: "Run the Windows Update Troubleshooter"
    text: "Go to Settings > System > Troubleshoot > Other troubleshooters. Click Run next to Windows Update. The troubleshooter resets the Windows Update service, clears the temporary update cache, and fixes the most common permission errors that cause 0x80070005 automatically."
  - name: "Reset Windows Update folder permissions via Command Prompt"
    text: "Open Command Prompt as administrator. Run the following commands in sequence: net stop wuauserv, net stop cryptSvc, net stop bits, net stop msiserver. Then run: icacls %systemroot%\\SoftwareDistribution /reset /T /C /Q and icacls %systemroot%\\System32\\catroot2 /reset /T /C /Q. Finally restart the services: net start wuauserv, net start cryptSvc, net start bits, net start msiserver."
  - name: "Temporarily disable third-party antivirus"
    text: "Third-party antivirus software can block Windows Update from accessing the files it needs, producing a false 0x80070005 error. Right-click your antivirus icon in the system tray and select Disable or Pause protection. Run Windows Update immediately after disabling. Re-enable antivirus protection once the update completes."
  - name: "Run System File Checker (SFC)"
    text: "Open Command Prompt as administrator and run: sfc /scannow. The scan takes 10-15 minutes. SFC checks all protected system files and replaces corrupted versions. After the scan completes, restart the computer and attempt Windows Update again."
  - name: "Install the update manually from Microsoft Update Catalog"
    text: "If Windows Update still fails with 0x80070005, download the specific update directly from catalog.update.microsoft.com. Search for the KB number shown in Windows Update history, download the correct version for your Windows edition (x64 or x86), and run the installer directly. This bypasses the Windows Update service entirely."
---

Windows Update error 0x80070005 means **Access Denied** — Windows Update cannot read or write to a folder it needs during the update process. The error occurs because the Windows Update service does not have the required permissions on the SoftwareDistribution or System32\catroot2 folders.

According to Microsoft's official documentation, this error most commonly appears after a failed previous update left behind corrupted permission entries, or after third-party security software modified system folder access controls.

![Windows Update error 0x80070005 fix: Access Denied error blocks update — reset SoftwareDistribution folder permissions via Command Prompt, run SFC scan, or install update manually from Microsoft Update Catalog](/images/windows-update-error-0x80070005-fix.svg)

## What causes Windows Update error 0x80070005

The 0x80070005 error code translates directly to ERROR_ACCESS_DENIED in the Windows system error table. Windows Update triggers this error when:

- **Corrupted folder permissions** — a previous failed update left incomplete permission entries on the SoftwareDistribution folder
- **Third-party antivirus interference** — security software with real-time protection blocks Windows Update from accessing system files
- **Corrupted system files** — damaged Windows system files cause the update service to fail permission checks
- **Group Policy restrictions** — in managed environments, Group Policy can restrict Windows Update service account permissions

## How to fix Windows Update error 0x80070005

### Step 1 — Run the Windows Update Troubleshooter

Microsoft's built-in troubleshooter resets the Windows Update components automatically and resolves the most common causes of 0x80070005.

1. Go to **Settings** → **System** → **Troubleshoot** → **Other troubleshooters**
2. Find **Windows Update** in the list and click **Run**
3. Follow the prompts and allow the troubleshooter to apply any fixes it finds
4. Restart the computer when prompted
5. Open **Settings** → **Windows Update** and try updating again

### Step 2 — Reset Windows Update folder permissions

If the troubleshooter does not resolve the error, manually resetting the permissions on the SoftwareDistribution and catroot2 folders clears the corrupt access entries.

Open **Command Prompt as administrator** (right-click Start → Terminal (Admin) or Command Prompt (Admin)) and run these commands in order:

**Stop the services:**
```
net stop wuauserv
net stop cryptSvc
net stop bits
net stop msiserver
```

**Reset permissions:**
```
icacls %systemroot%\SoftwareDistribution /reset /T /C /Q
icacls %systemroot%\System32\catroot2 /reset /T /C /Q
```

**Restart the services:**
```
net start wuauserv
net start cryptSvc
net start bits
net start msiserver
```

Restart the computer and run Windows Update again.

### Step 3 — Temporarily disable third-party antivirus

Real-time protection in third-party antivirus software can intercept file access requests from Windows Update and block them, generating a false 0x80070005 error.

1. Right-click your antivirus icon in the **system tray** (bottom-right corner)
2. Select **Disable**, **Pause**, or **Turn off protection temporarily**
3. Open **Settings** → **Windows Update** → **Check for updates**
4. Allow the update to download and install
5. Re-enable antivirus protection immediately after the update completes

If the update succeeds with antivirus disabled, add Windows Update to your antivirus exclusion list or check for an antivirus update that resolves the conflict.

### Step 4 — Run System File Checker

Corrupted Windows system files can cause the Update service to fail permission checks. SFC scans and repairs protected system files.

1. Open **Command Prompt as administrator**
2. Run: `sfc /scannow`
3. Wait for the scan to complete — this takes 10–15 minutes
4. If SFC reports corrupted files it could not fix, also run: `DISM /Online /Cleanup-Image /RestoreHealth`
5. Restart the computer and attempt Windows Update again

### Step 5 — Install the update manually from Microsoft Update Catalog

If all previous steps fail, bypass the Windows Update service entirely by downloading the update directly.

1. Note the **KB number** of the failing update from **Settings** → **Windows Update** → **Update history**
2. Go to [catalog.update.microsoft.com](https://catalog.update.microsoft.com)
3. Search for the KB number
4. Download the version matching your Windows edition (64-bit or 32-bit)
5. Run the downloaded `.msu` file and follow the prompts

## How to verify the fix

1. Go to **Settings** → **Windows Update** → **Check for updates**
2. Confirm updates download and install without showing the 0x80070005 error
3. Check **Update history** to confirm the previously failing update now shows **Successfully installed**

## Frequently asked questions

**Error 0x80070005 appears on every update, not just one.**
If the error appears consistently across all updates, the SoftwareDistribution folder permissions are likely corrupted at a deeper level. Complete Step 2 (permission reset) and Step 4 (SFC + DISM) before attempting updates again.

**0x80070005 appears in Microsoft Store, not Windows Update.**
Error 0x80070005 in Microsoft Store is a separate issue related to Store service permissions, not Windows Update. Go to Settings → Apps → Microsoft Store → Advanced options → Reset to clear the Store cache and permissions.

**The icacls commands show "Access is denied" when run.**
This means the Command Prompt was not opened as administrator. Close it, right-click Start, select Terminal (Admin) or Command Prompt (Admin), and run the commands again.
