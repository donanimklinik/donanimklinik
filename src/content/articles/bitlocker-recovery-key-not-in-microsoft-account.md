---
title: "BitLocker Recovery Key Not in Microsoft Account — What to Do"
description: "BitLocker recovery key missing from your Microsoft account? Learn why it happens and what official alternatives exist — step by step."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/finding-your-bitlocker-recovery-key-in-windows-6b71ad27-0b89-ea08-f143-056f5ab347d6"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "bitlocker recovery key not in microsoft account"
  - "bitlocker key not showing in microsoft account"
  - "can't find bitlocker recovery key microsoft account"
  - "bitlocker recovery key missing from account"
howto_steps:
  - name: "Check other Microsoft accounts"
    text: "If you have more than one Microsoft account, sign in to each one at account.microsoft.com/devices/recoverykey and match the Key ID shown on the recovery screen."
  - name: "Check your work or school account"
    text: "Go to myaccount.microsoft.com, select Devices, find your device and click View BitLocker key. If the key does not appear, contact your IT helpdesk with the Key ID from the recovery screen."
  - name: "Search for a saved file or USB backup"
    text: "Look for a file named 'BitLocker Recovery Key [Key ID].txt' on USB drives, cloud storage folders, or in your email sent around the time BitLocker was set up."
  - name: "Check for a printed copy"
    text: "Look through physical documents for a printed sheet containing the 48-digit recovery key, created when BitLocker was first enabled."
---

If you have checked `account.microsoft.com/devices/recoverykey` and your BitLocker recovery key is not listed, it means the key was never uploaded to that account. This is not a Microsoft error — it reflects the choices made when the device was first set up. According to official Microsoft documentation, there are specific conditions under which automatic upload occurs, and several alternative locations to check before concluding the key is permanently lost.

## Why the key is not in your Microsoft account

According to Microsoft's BitLocker documentation, the recovery key is uploaded to a Microsoft account automatically only when two conditions are met at the same time: the device was configured with a Microsoft account signed in during setup, and BitLocker was activated during that same session.

Three situations prevent automatic upload:

- **Local account setup.** If Windows was installed using a local account rather than a Microsoft account, the key is never uploaded automatically. Local accounts have no cloud sync path for BitLocker keys.
- **A different Microsoft account was used.** If BitLocker was enabled while signed in to a different Microsoft account than the one you are checking now, the key belongs to that other account, not the current one.
- **Work or school device.** If the device was issued by an employer or educational institution, the key is held by the organisation's IT system — either Azure Active Directory or on-premises Active Directory — and will not appear in a personal Microsoft account under any circumstances.

## What to do when the key is not in your Microsoft account

### Step 1 — Check other Microsoft accounts

If you use more than one Microsoft account, check each of them separately.

1. On a different device, go to **account.microsoft.com/devices/recoverykey**
2. Sign out and sign back in with each Microsoft account you own
3. On the BitLocker recovery screen, locate the **Key ID** in the upper portion — it is an 8-character identifier
4. Match that Key ID against the entries listed in each account

The Key ID tells you exactly which account holds the correct key, eliminating guesswork when multiple accounts are involved.

### Step 2 — Check your work or school account

If the device was issued by a company or school, the recovery key is stored in the organisation's system, not in a personal account.

1. Go to **myaccount.microsoft.com** using your work or school credentials
2. Select **Devices**
3. Find your device and click **View BitLocker key**
4. If the key does not appear here either, contact your IT helpdesk directly
5. Provide the **Key ID** from the recovery screen — IT administrators can retrieve the key from Microsoft Intune or Active Directory using this identifier

### Step 3 — Search for a saved file or USB backup

During BitLocker setup, Windows offers the option to save the recovery key as a text file or write it to a USB drive. These backups may still exist.

- **Text file:** The filename follows the format `BitLocker Recovery Key [Key ID].txt`. Search for it on every USB drive you own, in your OneDrive, Google Drive, or Dropbox folders, and in your email — some users email the file to themselves during setup.
- **USB drive:** Connect USB drives to the locked computer. The BitLocker recovery screen can detect and read the key file automatically, which may unlock the drive without manual entry.

### Step 4 — Check for a printed copy

If the printed copy option was selected during setup, a physical sheet with the 48-digit key may exist among important documents. This is the last backup location to check before accepting that no key is available.

## If none of the above works — the official position

According to Microsoft's official documentation, if the recovery key was not saved to any of the locations above, there is no remaining path to access the encrypted data. BitLocker uses AES encryption specifically designed so that the drive cannot be unlocked without the key — this is the security guarantee the feature provides.

At that point, two options remain:

- **Reset the drive.** Using Windows installation media, the drive can be wiped and Windows reinstalled. All data on the encrypted drive will be permanently lost.
- **Professional data recovery.** No professional service can bypass BitLocker encryption. Reputable providers will confirm this upfront. Any service claiming otherwise should be treated with caution.

## How to prevent this in the future

If you regain access to the device — through a PIN, password, or TPM unlock — back up the recovery key immediately to avoid this situation again.

1. Open the Start menu and search for **Manage BitLocker**, then press Enter
2. Next to the encrypted drive, click **Back up your recovery key**
3. Choose **Save to your Microsoft account** or **Save to a file**
4. Confirm the backup appears at account.microsoft.com/devices/recoverykey before closing

## Frequently asked questions

**Can I upload the BitLocker recovery key to my Microsoft account after the fact?**
Yes, as long as you still have access to the device. Open **Manage BitLocker** from the Start menu, select **Back up your recovery key**, and choose your Microsoft account as the destination.

**What is the Key ID and where do I find it?**
The Key ID is an 8-character code shown at the top of the blue BitLocker recovery screen. It identifies which specific key belongs to which drive. Use it to match the correct entry when multiple keys appear across different accounts.

**Can I use a BitLocker key from a different computer?**
No. Each BitLocker-protected drive has its own unique recovery key. A key generated for one drive will not unlock any other drive, even on the same computer.

**Does reinstalling Windows recover the data?**
No. Reinstalling Windows without the recovery key does not decrypt the drive. The data remains encrypted and inaccessible. A full drive wipe is required to reuse the device.
