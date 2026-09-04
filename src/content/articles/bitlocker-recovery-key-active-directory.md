---
title: "How to Get Your BitLocker Recovery Key from Active Directory or Azure AD"
description: "On work and school devices, BitLocker recovery keys are stored in Active Directory or Azure AD — not in your personal Microsoft account. Here is how to retrieve them."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-and-adds-faq"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 6
fix_summary: "IT admins retrieve the key from Active Directory Users and Computers — search by computer name, open Properties > BitLocker Recovery tab to find all stored recovery keys."
fix_time_display: "~3 min"
fix_difficulty: Medium
schema_type: HowTo
featured: false
top_search_queries:
  - "bitlocker recovery key active directory"
  - "bitlocker key azure ad"
  - "find bitlocker key work computer"
  - "bitlocker recovery key domain joined"
howto_steps:
  - name: "Note the 8-digit Key ID from the recovery screen"
    text: "Write down the Key ID displayed on the BitLocker recovery screen before doing anything else. IT administrators need this ID to locate the exact key in Active Directory or Azure AD."
  - name: "Contact your IT administrator with the Key ID"
    text: "Submit a support request to your IT department, including the Key ID and the device name or serial number. On-premises AD admins retrieve the key from Active Directory Users and Computers. Azure AD admins retrieve it from the Azure portal or Intune."
  - name: "Self-service via Azure AD portal (if enabled)"
    text: "If your organisation has enabled self-service recovery, sign in to myaccount.microsoft.com with your work account, go to Devices, select the locked device, and look for the BitLocker Keys section to retrieve the key yourself."
  - name: "Enter the 48-digit key on the recovery screen"
    text: "Type the key exactly as provided. The field accepts the key with or without hyphens. A single incorrect digit causes rejection."
faq:
  - q: "Who can retrieve my BitLocker key from Active Directory?"
    a: "Only IT administrators with the appropriate Active Directory permissions can retrieve the key. Regular users cannot access it themselves unless the organization has enabled a self-service recovery portal."
  - q: "What information do I need to give IT support to get my recovery key?"
    a: "Provide the 8-digit Key ID displayed on the BitLocker recovery screen, along with your device name or serial number. The Key ID lets IT locate the exact key among many records."
  - q: "What if my company uses Microsoft Intune instead of on-premises Active Directory?"
    a: "If the device is enrolled in Intune, the recovery key is stored in the Azure AD portal. IT administrators access it through the Microsoft Intune admin center or the Azure portal under the device record."
  - q: "Can I retrieve a work device's BitLocker key from my personal Microsoft account?"
    a: "No. For domain-joined or Azure AD-joined work devices, the key is stored in the organization's directory, not in your personal Microsoft account. You must contact IT support."
  - q: "How long does it take for IT to retrieve a BitLocker key from Active Directory?"
    a: "Once IT receives your request with the Key ID, an administrator can typically retrieve the key within minutes. The actual wait depends on your organization's IT support response time and ticketing process."
---

Work and school computers managed by an organisation behave differently from personal devices. According to Microsoft's BitLocker and Active Directory FAQ, when a domain-joined or Azure Active Directory-joined device enables BitLocker, the recovery key is automatically escrowed to the organisation's directory — not to the employee's personal Microsoft account.

If you are locked out of a work or school device, your personal Microsoft account page will not contain the key. The key is held by your organisation's IT department.

![BitLocker Active Directory flow: IT admin opens ADUC, finds computer, goes to BitLocker Recovery tab to retrieve 48-digit key](/images/bitlocker-active-directory-flow.svg)

## Where the key is stored on managed devices

**On-premises Active Directory (AD DS):** For devices joined to a traditional Windows domain, the recovery key is stored in the computer object within Active Directory Domain Services. Only users with the appropriate AD permissions — typically IT administrators — can read this value.

**Azure Active Directory (Azure AD / Entra ID):** For devices joined to Azure AD or enrolled in Microsoft Intune, the recovery key is stored in the Azure portal under the device record. Administrators access it through the Azure portal or the Intune admin centre. Depending on your organisation's configuration, end users may also be able to retrieve their own key through the self-service portal.

**Hybrid joined devices:** Devices that are both domain-joined and Azure AD-joined may have the key stored in one or both directories depending on the policy applied during BitLocker activation.

## How to retrieve the key

### Step 1 — Note the Key ID from the recovery screen

The BitLocker recovery screen displays an 8-digit Key ID directly above the entry field. Write it down before doing anything else. This is the identifier your IT administrator will use to find the exact matching key — it prevents them from providing a key for a different drive or device.

Also note the device name (visible in the recovery screen header on some versions of Windows) and the device serial number if you have access to it.

### Step 2 — Contact your IT administrator

Submit a support request to your IT helpdesk. Include:

- The 8-digit Key ID from the recovery screen
- The device name or model
- The serial number if available
- Your user account name

**For on-premises AD environments:** Your administrator opens Active Directory Users and Computers, locates the computer object, and views the BitLocker Recovery tab to find the matching key by Key ID.

**For Azure AD / Intune environments:** Your administrator signs into the Azure portal, navigates to Azure Active Directory > Devices, locates the device, and opens the BitLocker Keys section. The portal shows the Key ID alongside the 48-digit recovery key.

### Step 3 — Self-service retrieval (if your organisation allows it)

Some organisations configure BitLocker self-service so employees can retrieve their own keys without contacting IT. To check:

1. On another device, go to [myaccount.microsoft.com](https://myaccount.microsoft.com) and sign in with your **work or school account** (not your personal Microsoft account)
2. Select **Devices**
3. Click on the locked device
4. Look for a **BitLocker Keys** or **Recovery Keys** section

If this section is present, the key is listed with its Key ID. If it is not present, your organisation has not enabled self-service and you must contact IT.

### Step 4 — Enter the key

Type the 48-digit recovery key exactly as provided by your administrator or the portal. The entry field accepts the key with or without the hyphen separators. Every digit must be correct — there is no indication of which position is wrong if the key is rejected.

## Why the key is not in your personal Microsoft account

This is the most common source of confusion. When a device is joined to a corporate domain or Azure AD at the time BitLocker activates, Windows sends the recovery key to the organisation's directory rather than the signed-in user's personal Microsoft account. The device is managed by the organisation, so the key is held by the organisation.

This is the expected and correct behaviour according to Microsoft's documentation. It ensures that IT departments maintain control over corporate device encryption, which is a requirement for many compliance frameworks.

## What IT administrators need to know

To configure automatic key escrow to Active Directory, Group Policy must have **Computer Configuration > Administrative Templates > Windows Components > BitLocker Drive Encryption > Store BitLocker recovery information in Active Directory Domain Services** enabled before BitLocker is activated. Keys for drives encrypted before this policy was applied are not retroactively backed up.

For Azure AD, key escrow to the Azure portal occurs automatically when the device is Azure AD-joined and BitLocker is managed through Intune or the built-in Azure AD device settings.

## Frequently asked questions

**The IT department says they cannot find the key. Why?**
The most likely cause is that BitLocker was enabled before the key escrow policy was in place, or the device was not joined to the directory at the time of encryption. In this case, the key was never backed up to AD or Azure AD, and it exists only in any manual backups made during setup.

**Can I retrieve the key myself without IT if I am an administrator?**
Yes. If you have AD domain admin rights or Azure AD administrator access, you can retrieve the key yourself using the methods described above for IT administrators.

**The device was re-enrolled in a new Azure AD tenant. Is the old key still available?**
No. When a device is removed from one tenant and joined to another, the recovery keys stored in the original tenant are not migrated. If the drive is encrypted, the old key must be retrieved from the original tenant before re-enrollment, or the drive must be decrypted first.
