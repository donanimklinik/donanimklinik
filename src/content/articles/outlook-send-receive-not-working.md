---
title: "Outlook Send and Receive Not Working — Fix"
description: "Outlook send and receive not working stops all email flow. Here are the steps to restore it using the Send/Receive troubleshooter and account repair."
category: software
pillar: "Microsoft 365 & Outlook Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/outlook/fix-email-sync-issues-by-removing-a-device-from-your-outlook-mailbox"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-05
read_time: 5
fix_summary: "Press F9 to force a Send/Receive — if it hangs, go to File > Account Settings > select account > Repair. This refreshes the authentication token that most commonly causes this error."
fix_time_display: "~3 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "outlook send receive not working"
  - "outlook send and receive not working"
  - "outlook not sending and receiving"
  - "outlook send receive error"
howto_steps:
  - name: "Disable Work Offline and test your connection"
    text: "On the Send/Receive tab, check if Work Offline is highlighted. If so, click it to disable it. Then confirm your internet connection is active by opening a browser. Once online and offline mode is off, press F9 to run Send/Receive manually."
  - name: "Identify the error code from the Send/Receive dialog"
    text: "Click Send/Receive > Show Progress. After the sync attempt, click Details to see the full log. Note any error codes shown — each code points to a specific cause such as a server connection failure (0x80042108), authentication error (0x800CCC90), or SMTP failure (0x800CCC0E). The error code is the fastest path to the correct fix."
  - name: "Repair your Outlook profile"
    text: "Go to Control Panel > Mail > Show Profiles. Select your current profile and click Properties > Email Accounts. Remove your account, then add it back using the same credentials. Outlook will rebuild the local data files and reconnect to the server."
  - name: "Run the Microsoft Support and Recovery Assistant"
    text: "Download the Microsoft Support and Recovery Assistant (SaRA) from Microsoft's support site. Select Outlook as the product and choose I can't send or receive email as the problem. SaRA runs a full diagnostic of your Outlook profile, account settings, and server connection, and applies fixes automatically where possible."
faq:
  - q: "Why is Outlook send and receive not working at all?"
    a: "A complete send and receive failure means Outlook cannot connect to the mail server in either direction. The most common causes are Work Offline mode being active, your internet connection being down, or the Outlook profile becoming corrupted."
  - q: "What does pressing F9 do in Outlook?"
    a: "Pressing F9 manually triggers a Send/Receive cycle, forcing Outlook to immediately attempt to connect to the mail server, send queued outgoing messages, and download waiting incoming messages. This is useful for testing whether the connection is working."
  - q: "How do I read the Outlook Send/Receive error log?"
    a: "Click Send/Receive > Show Progress to open the progress dialog during a sync. After the attempt completes, click Details to see the full activity log including any error codes. The error code identifies the specific cause of the failure."
  - q: "What is an Outlook profile and why does it become corrupted?"
    a: "An Outlook profile stores your account settings, server connection details, and references to your data files. Profiles can become corrupted due to improper shutdowns, software conflicts, or data file errors. Creating a new profile in Control Panel > Mail resets these settings and often resolves persistent send/receive failures."
  - q: "Can a VPN or firewall block Outlook send and receive?"
    a: "Yes. VPNs that route traffic through corporate firewalls can block the ports that Outlook uses (SMTP 587 or 465, IMAP 993, Exchange HTTPS). If Outlook stopped working after connecting to a VPN, try disconnecting the VPN and testing. Contact your IT administrator to configure VPN split tunneling or firewall exceptions for Outlook."
---

When Outlook send and receive is not working, no email can be sent or received — the mailbox is completely disconnected from the server. This is different from a one-directional failure (sending works but not receiving, or vice versa). A complete send and receive failure means the connection between Outlook and the mail server has broken down.

According to Microsoft's Outlook troubleshooting documentation, a complete send and receive failure is usually caused by one of three things: Outlook is in offline mode, the connection to the mail server is blocked or unavailable, or the Outlook profile has become corrupted.

![Outlook send receive fix: F9 force sync, disable antivirus email scan, create new Outlook profile to remove corruption](/images/outlook-send-receive-fix.svg)

## Understanding the Send/Receive function

In Outlook, Send/Receive is the process that synchronizes the local mailbox with the mail server. It sends queued outgoing messages via SMTP, and downloads new incoming messages via IMAP or Exchange ActiveSync.

When Send/Receive fails, Outlook displays errors in the **Send/Receive Progress** dialog. These errors are the primary diagnostic tool — reading them correctly identifies the cause and the appropriate fix.

## Step 1 — Disable Work Offline and verify your connection

The first check is always whether Outlook is in Work Offline mode:

1. Click the **Send/Receive** tab
2. If **Work Offline** appears highlighted or pressed, click it once to disable it
3. The status bar at the bottom of the Outlook window should change from **Working Offline** to **Connected** or your account name

After disabling offline mode, press **F9** to run Send/Receive manually.

Also confirm your internet connection is active by opening a browser and loading a page. If the internet is down, Outlook cannot connect to the mail server regardless of its settings.

## Step 2 — Read the error code

Outlook's Send/Receive dialog provides specific error codes for every type of failure. To see them:

1. On the **Send/Receive** tab, click **Show Progress**
2. After the sync attempt completes (or fails), click **Details**
3. Read the log entries — errors are shown with their code and description

Common error codes and what they mean:

| Error Code | Cause | Fix |
|------------|-------|-----|
| 0x800CCC0E | SMTP server unreachable | Check SMTP port and settings |
| 0x80042108 | IMAP/incoming server unreachable | Check incoming server settings |
| 0x800CCC90 | Username or password rejected | Re-enter credentials |
| 0x800CCC0F | Connection dropped during sync | Check firewall and antivirus |
| 0x8004010F | Outlook data file cannot be found | Repair or recreate the profile |

Each error code points to a specific layer of the problem — server settings, credentials, network, or local data file. Fixing the right layer avoids trial and error.

## Step 3 — Repair the Outlook profile

If the error code suggests a profile or data file problem (particularly 0x8004010F or errors referencing a missing data file), repairing the profile is the most effective fix:

1. Close Outlook
2. Open **Control Panel**
3. Search for **Mail** and open the **Mail Setup** dialog
4. Click **Show Profiles**
5. Select your current profile and click **Properties > Email Accounts**
6. In the Account Settings dialog, select your account and click **Remove**
7. Click **New** and add the account again with the same email address and password

Outlook will create a new OST data file and perform a full sync from the server. This process effectively rebuilds the Outlook installation for your account without affecting your data on the server.

## Step 4 — Run Microsoft Support and Recovery Assistant

For problems that do not resolve with manual steps, Microsoft's **Support and Recovery Assistant (SaRA)** provides an automated diagnosis:

1. Download SaRA from [Microsoft's support site](https://support.microsoft.com/en-us/office/about-the-microsoft-support-and-recovery-assistant-e90bb691-c2a7-4697-a94f-88836856c72f)
2. Run the installer and select **Outlook**
3. Select **I can't send or receive email**
4. SaRA will test your Outlook profile, account settings, connection to the mail server, and local data files

SaRA can automatically repair corrupted profiles, update incorrect server settings, and clear send/receive errors that resist manual fixes.

## Additional checks

**Check if the issue is account-specific.** If you have multiple email accounts in Outlook, check whether all accounts fail or only one. If only one account fails, the issue is with that account's settings rather than Outlook itself.

**Test Outlook Web Access.** Sign in to your email via browser (for Microsoft 365: outlook.office.com). If web access works, the account is functional and the issue is specific to the desktop Outlook client. If web access also fails, the account or server has a broader problem.

**Check firewall rules.** Windows Firewall or a third-party firewall may be blocking Outlook's outbound connections. Check that **Outlook.exe** is allowed through the firewall for both private and public networks.

## Frequently asked questions

**Send/Receive worked yesterday but stopped today with no obvious change.**
Check whether a Windows Update ran overnight — updates can reset certain security policies that affect Outlook's server connection. Also check if your email password has been changed by an administrator.

**Outlook shows Connected in the status bar but Send/Receive still fails.**
"Connected" in the status bar indicates a network connection is present, but it does not confirm the mail server is responding correctly. Run Send/Receive and check the error details — the server may be available but rejecting Outlook's authentication.

**The Send/Receive button is grayed out.**
This happens when Outlook is still processing a previous Send/Receive request or when it is in a disconnected state. Wait 30 seconds, then try again. If it remains grayed out, close and restart Outlook.
