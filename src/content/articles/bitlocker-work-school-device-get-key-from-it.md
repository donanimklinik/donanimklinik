---
title: "BitLocker on a Work or School Device — How to Get the Recovery Key from IT"
description: "BitLocker locked on a work or school laptop? The key is held by your IT department, not your personal Microsoft account. Here is how to retrieve it."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-recovery-guide-plan"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "bitlocker recovery key work laptop"
  - "bitlocker key stored by company"
  - "how to get bitlocker key from it department"
  - "bitlocker school device recovery key"
howto_steps:
  - name: "Try self-service at myaccount.microsoft.com"
    text: "Sign in to myaccount.microsoft.com with your work or school account, go to Devices, select the locked device, and click View BitLocker key."
  - name: "Contact your IT helpdesk"
    text: "Note the Key ID from the top of the recovery screen and provide it to your IT helpdesk along with the device name or serial number. IT can retrieve the key from Intune or Active Directory."
---

If BitLocker is asking for a recovery key on a work or school laptop, searching your personal Microsoft account will not help — the key is not there. According to official Microsoft documentation, when a device is enrolled in an organisation's Azure Active Directory or joined to a corporate domain, BitLocker automatically saves the recovery key to the organisation's management system. Personal Microsoft accounts and corporate IT systems are entirely separate, and the key is only held in one of them.

There are two ways to retrieve it: a self-service portal, or your IT helpdesk.

## Why the key is not in your personal Microsoft account

According to Microsoft's BitLocker recovery documentation, corporate-managed devices store the recovery key in whichever system the organisation uses to manage devices — Azure Active Directory, Microsoft Intune, or on-premises Active Directory. This happens automatically during device enrolment and is controlled by IT policy, not by the user. No copy is sent to a personal Microsoft account, even if you sign in to Windows with a personal account on the same device.

## How to get the BitLocker recovery key from IT

### Method 1 — Self-service through myaccount.microsoft.com

Some organisations allow employees or students to view their own BitLocker key through Microsoft's account portal. This is the fastest option if your organisation has enabled it.

1. On a separate device, go to **myaccount.microsoft.com**
2. Sign in with your **work or school account** — not your personal Microsoft account
3. Select **Devices** from the navigation menu
4. Find the locked device in the list and click on it
5. Click **View BitLocker key**
6. Copy the 48-digit recovery key and type it into the recovery screen on the locked device

If the **View BitLocker key** option does not appear, your organisation has not enabled self-service access. Proceed to Method 2.

### Method 2 — Contact your IT helpdesk

If self-service access is unavailable or the key does not appear, your IT department can retrieve it directly from the management console.

1. On the BitLocker recovery screen, locate the **Key ID** — an 8-character code shown near the top of the screen
2. Note this Key ID before doing anything else
3. Contact your IT helpdesk by phone, email, or your organisation's ticketing system
4. Provide the **Key ID** and the device's name or serial number
5. IT will look up the matching key in Intune, Azure AD, or Active Directory
6. Enter the 48-digit key they provide into the recovery screen

Giving IT the Key ID allows them to find the correct key in seconds. Without it, they must search by device name or serial number, which takes longer and risks retrieving the wrong key if multiple devices share a similar name.

## What IT administrators see on their side

According to Microsoft's Intune and Active Directory documentation, administrators can retrieve BitLocker recovery keys from the following locations:

- **Microsoft Intune:** Intune admin center → Devices → select the device → Recovery keys
- **Azure Active Directory:** Azure AD portal → Devices → select the device → BitLocker keys
- **On-premises Active Directory:** Active Directory Users and Computers, using the BitLocker Recovery Password Viewer tool

All three surfaces display the Key ID alongside the full recovery key, so the match can be confirmed before the key is shared with you.

## Known limitations

- **Self-service access may be disabled by policy:** Not all organisations allow users to view recovery keys independently. This is a security decision made by IT — if the option is not visible, it has been intentionally restricted.
- **Device not enrolled in management:** If the device was never properly enrolled in Azure AD or Intune — for example, if it was manually connected to a network without formal enrolment — the key may not exist in either system. IT will confirm this during the lookup.
- **Former employer or school:** If the device belonged to an organisation you no longer have an active account with, you will need to contact that organisation's IT department directly. If your account has been deactivated, access to the self-service portal will not be possible, and the former IT team may require identity verification before sharing the key.

## Frequently asked questions

**Is it safe to give the Key ID to my IT department?**
Yes. The Key ID is an identifier that points to the correct recovery key — it cannot be used to unlock the drive on its own. The full 48-digit recovery key is what provides access, and that remains on the IT side until they confirm your identity and share it with you.

**What if IT says they cannot find the key?**
This means the key was never stored in the systems they have access to. This can happen if the device was enrolled improperly, if it was set up outside of IT's standard provisioning process, or if the device predates the current management system. In that case, there is no key to retrieve, and the drive cannot be unlocked.

**My device is enrolled in both a personal and a work account. Which key location should I check first?**
Always check the work or school account first via myaccount.microsoft.com. Corporate devices store the key in the organisation's system regardless of any personal account also present on the device. A personal Microsoft account will never hold the key for a corporate-enrolled device.

**Can I prevent this from happening again?**
If you have ongoing access to the device, ask your IT department whether BitLocker recovery key backup policies are in place for your device. For personally owned devices that connect to work systems but are not fully enrolled, consider backing up your recovery key to your personal Microsoft account via **Manage BitLocker → Back up your recovery key**.
