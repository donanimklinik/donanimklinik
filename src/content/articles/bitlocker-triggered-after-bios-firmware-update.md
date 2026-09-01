---
title: "BitLocker Triggered After BIOS or Firmware Update — Why and Fix"
description: "BitLocker recovery screen after a BIOS or firmware update? Learn why firmware changes trigger BitLocker and how to fix it — including the TPM clear scenario."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-recovery-guide-plan"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "bitlocker triggered after bios update"
  - "bitlocker recovery after firmware update"
  - "bios update caused bitlocker"
  - "bitlocker after tpm update"
howto_steps:
  - name: "Enter your recovery key"
    text: "Note the Key ID on the recovery screen, go to account.microsoft.com/devices/recoverykey on another device, sign in with your Microsoft account, and enter the matching 48-digit key."
  - name: "Reinitialise the TPM if it was cleared"
    text: "After unlocking with the recovery key, open tpm.msc from the Start menu, click Prepare the TPM, follow the on-screen steps, and restart the device."
  - name: "Suspend BitLocker before future firmware updates"
    text: "Open Manage BitLocker, click Suspend protection, select 2 restarts, apply the BIOS or firmware update, then verify BitLocker re-enables automatically after restart."
---

Updating a BIOS, UEFI, or hardware firmware is one of the most reliable ways to trigger the BitLocker recovery screen — and one of the most surprising, because the update itself has nothing to do with your files. According to official Microsoft documentation, BitLocker uses the TPM to measure specific boot components at setup time. When a firmware update changes any of those components, the TPM detects the mismatch and BitLocker enters recovery mode as a deliberate security response.

Your data is intact. Entering the recovery key resolves the lockout immediately.

## Why BIOS and firmware updates trigger BitLocker

According to Microsoft's BitLocker recovery guide, the TPM measures the integrity of several boot-time components and stores those measurements as a baseline. On every subsequent start, BitLocker compares the live readings against that baseline. A firmware update modifies the very code the TPM is measuring, so the comparison fails — by design.

Operations that commonly trigger this behaviour include:

- BIOS or UEFI version updates applied through a manufacturer utility or a bootable USB
- Motherboard firmware updates pushed by tools such as Dell Command Update, HP Support Assistant, or Lenovo System Update
- Changes to Secure Boot settings in the UEFI interface
- TPM firmware version upgrades
- Intentional or accidental TPM clearing from within the UEFI menu

## How to fix BitLocker after a BIOS or firmware update

### Method 1 — Enter your recovery key

This is the immediate fix for any firmware-triggered lockout.

1. On the BitLocker recovery screen, note the **Key ID** shown near the top of the screen
2. On a separate device, go to **account.microsoft.com/devices/recoverykey**
3. Sign in with the Microsoft account used on the locked device
4. Locate the entry whose Key ID matches the one on the recovery screen
5. Copy the 48-digit recovery key and type it into the recovery screen
6. Windows will boot normally

If the key is not in your Microsoft account, check the other backup locations — USB drive, saved file, or printed copy — covered in the main BitLocker recovery key guide.

### Method 2 — Reinitialise the TPM (required after a TPM clear)

If the TPM was deliberately cleared — for example, through a **TPM Clear** or **Clear Security Chip** option in the UEFI menu — entering the recovery key unlocks the drive, but the TPM needs to be reinitialised before BitLocker can protect the drive normally again.

According to Microsoft's official documentation, the steps are:

1. Unlock the drive by entering the recovery key at the boot screen
2. Once Windows has loaded, open the **Start** menu and type **tpm.msc**, then press Enter
3. In the TPM Management console, click **Prepare the TPM**
4. Follow the on-screen instructions — a restart may be required
5. After the restart, open **Manage BitLocker** from the Start menu
6. Confirm the status shows **BitLocker on** — if it shows **Suspended**, click **Resume protection**

## How to prevent this — suspend BitLocker before firmware updates

According to Microsoft, suspending BitLocker before any operation that modifies the boot environment is the recommended approach. This allows the firmware update to proceed without triggering a recovery event.

1. Open the **Start** menu, type **Manage BitLocker**, and press Enter
2. Next to the encrypted drive, click **Suspend protection**
3. When prompted, select **2** restarts to cover the update and the post-install reboot
4. Apply the BIOS or firmware update
5. After the update completes and Windows restarts, BitLocker re-enables automatically

After the update, open **Manage BitLocker** and confirm the drive shows **BitLocker on**. If the status still reads **Suspended**, click **Resume protection** to restore full coverage. This step re-records the new TPM measurements as the trusted baseline, preventing a recovery prompt on the next start.

## Known limitations

- **Motherboard replacement:** Replacing the motherboard replaces the TPM as well. This is a separate scenario — the recovery key unlocks the drive, but BitLocker must be fully reconfigured for the new TPM. That process is covered in a dedicated guide.
- **Key not saved before the update:** A firmware change combined with a missing recovery key results in permanent loss of access to the encrypted data. Microsoft's documentation is explicit that no recovery path exists in this case. Back up the recovery key via **Manage BitLocker → Back up your recovery key** before any firmware operation.

## Frequently asked questions

**Does every BIOS update trigger BitLocker?**
Not always. Some manufacturers design firmware updates to avoid modifying the specific PCR registers that BitLocker monitors. However, this is not guaranteed across all devices or update types. Suspending BitLocker before any firmware update is the safest practice regardless of the expected outcome.

**The update finished but BitLocker still shows "Suspended" — is that a problem?**
Yes. Open **Manage BitLocker** and click **Resume protection**. In the suspended state, the drive is still encrypted, but the boot-time integrity checks are disabled. Resuming protection re-records the current TPM measurements and restores full BitLocker coverage.

**I cleared the TPM and do not have the recovery key. Can I recover the data?**
No. According to Microsoft's official documentation, clearing the TPM without a recovery key results in permanent, irrecoverable loss of access to any BitLocker-encrypted data. Professional data recovery services cannot bypass BitLocker encryption.

**Can I update the BIOS without suspending BitLocker?**
Technically yes — but if the update modifies the boot environment, the recovery screen will appear on the next start. As long as the recovery key is available, you can unlock the drive and continue. Suspending first simply avoids the interruption.
