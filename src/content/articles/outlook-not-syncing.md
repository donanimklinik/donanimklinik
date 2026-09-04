---
title: "Outlook Not Syncing — Fix"
description: "Outlook not syncing means new emails are not arriving or sent items are not updating. Here are the most effective fixes for desktop and mobile."
category: software
pillar: "Microsoft 365 & Outlook Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/fix-outlook-email-sync-issues-57c3e64b-a3e6-4a17-8c79-2c6c38e04c16"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-03
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "outlook not syncing"
  - "outlook not synchronizing"
  - "outlook does not sync"
  - "outlook not syncing emails"
howto_steps:
  - name: "Run Send/Receive manually"
    text: "Press F9 or click Send/Receive All Folders on the Send/Receive tab. This forces Outlook to contact the mail server immediately. If an error appears during this process, note the error code — it identifies the specific sync problem."
  - name: "Check your sync settings and download interval"
    text: "Go to File > Account Settings > Account Settings. Select your account and click Change. Click More Settings > Advanced. Under Download headers only or Download complete items, ensure the setting matches your needs. Also check that Send/Receive Groups are not set to an unusually long interval."
  - name: "Repair the Outlook data file"
    text: "Close Outlook. Open the Control Panel, search for Mail, and open the Mail setup dialog. Click Data Files, select your account's OST or PST file, and click Settings > Open File Location. Close the dialog, then run the SCANPST.EXE tool (found in the Office installation folder) on that file to repair any corruption."
  - name: "Remove and re-add your email account"
    text: "Go to File > Account Settings > Account Settings. Select your account and click Remove. Confirm the removal, then click New to add the account again with the same credentials. Outlook will recreate the local data file and perform a full sync from the server."
faq:
  - q: "Why does Outlook not sync new emails automatically?"
    a: "Outlook may be in offline mode, have a corrupted local data file (OST), or have a misconfigured sync interval. Press F9 to trigger a manual sync. If that works, check your Send/Receive schedule and ensure Work Offline mode is not active."
  - q: "What is the difference between OST and PST files in Outlook?"
    a: "An OST file is an offline copy of your Exchange or Microsoft 365 mailbox that syncs with the server. A PST file is a local archive that is independent of the server. Sync problems usually involve the OST file. Corrupted OST files can cause sync failures that require the file to be rebuilt."
  - q: "How do I fix a corrupted Outlook OST file?"
    a: "Close Outlook and run the SCANPST.EXE tool (Inbox Repair Tool) found in the Microsoft Office installation folder. Point it at your OST file and click Start. Alternatively, rename or delete the OST file — Outlook will recreate it and perform a fresh full sync from the server."
  - q: "How often does Outlook sync with the mail server?"
    a: "By default, Outlook syncs every 30 minutes in standard mode and more frequently in Cached Exchange Mode. You can change the Send/Receive schedule under Send/Receive > Send/Receive Groups > Define Send/Receive Groups."
  - q: "Why does Outlook mobile sync work but Outlook desktop does not?"
    a: "Desktop Outlook uses a locally cached data file (OST) that can become corrupted or out of date, while mobile uses a direct server connection without local caching. If mobile syncs correctly but desktop does not, the issue is in the local data file or Outlook profile on the desktop."
---

Outlook not syncing means the desktop or mobile application is not reflecting the current state of your mailbox. New emails do not arrive, sent messages do not appear in Sent Items, or folder counts remain stale even when the server has new data.

According to Microsoft's sync troubleshooting documentation, sync failures in Outlook are caused by a handful of well-defined issues: the client is offline, the local data file is corrupted, the sync schedule is misconfigured, or the connection to the Exchange or Microsoft 365 server is being interrupted.

![Outlook sync settings: IMAP subscribed folders vs Exchange cached mode — F9 force sync, rebuild OST file, repair account](/images/outlook-sync-settings.svg)

## What sync means in Outlook

Outlook stores a local copy of your mailbox in an Offline Storage Table (OST) file. When sync is working, changes on the server — new mail, deletions, flag changes — are reflected in the OST file, and vice versa. When sync fails, the local and server states diverge.

This is different from Outlook failing to open or failing to connect entirely. A sync issue means the connection exists but data is not being exchanged correctly.

## Step 1 — Run a manual Send/Receive

The first step is always to force a sync attempt:

- Press **F9**, or
- Click **Send/Receive All Folders** on the Send/Receive tab, or
- Press **Ctrl + M**

Outlook will attempt to synchronize all folders with the server. Watch the progress dialog at the bottom of the window. If sync fails, an error code and description will appear — this is the most direct indicator of the underlying problem.

If sync completes with no errors but the mailbox still looks out of date, the issue is with Outlook's folder view rather than the sync itself. Try pressing **F5** to refresh the current folder.

## Step 2 — Check sync settings

Outlook allows you to configure which folders sync and how frequently.

**For Microsoft 365 / Exchange accounts:**
1. Go to **File > Account Settings > Account Settings**
2. Select your account and click **Change**
3. Click **More Settings > Advanced**
4. Under **Cached Exchange Mode**, ensure **Use Cached Exchange Mode** is enabled
5. Check the **Mail to keep offline** slider — if set to a short period (e.g., 1 month), older messages will not be downloaded

**For Send/Receive interval:**
1. On the **Send/Receive** tab, click **Send/Receive Groups > Define Send/Receive Groups**
2. Select your group and confirm **Schedule an automatic send/receive every** is set to a reasonable interval (5–10 minutes is typical)

## Step 3 — Repair the local data file

A corrupted OST file can cause Outlook to appear stuck on outdated data even when the server connection is healthy.

To repair it:
1. Close Outlook completely
2. Open **Control Panel > Mail** (search for "Mail" in the Control Panel search box)
3. Click **Data Files**, select the file associated with your account, and click **Open File Location**
4. Note the file path, then close the Mail dialog
5. Navigate to the Microsoft Office installation folder — typically `C:\Program Files\Microsoft Office\root\Office16\` — and run **SCANPST.EXE**
6. In SCANPST, click **Browse** and open the OST file from the path you noted
7. Click **Start** and follow the prompts to repair the file

After the repair, reopen Outlook and run Send/Receive.

## Step 4 — Remove and re-add the account

If the OST repair does not resolve the sync issue, recreating the account forces a fresh sync from the server:

1. Go to **File > Account Settings > Account Settings**
2. Select your account and click **Remove** — this removes the account from Outlook but does not delete any data from the server
3. Close the Account Settings dialog
4. Click **File > Add Account** and add the account again using the same email address and credentials

Outlook will create a new OST file and perform a complete sync. Depending on mailbox size, this may take several minutes to hours.

## Outlook mobile not syncing

For the Outlook mobile app (iOS or Android):

1. Open the app and tap your account avatar in the top left
2. Tap **Settings** (gear icon) > select your account
3. Scroll down and tap **Reset Account**

This clears the local cache and forces a full resync from the server. If this does not resolve it, remove the account from the app and add it again.

## Frequently asked questions

**Outlook syncs on my phone but not on the desktop.**
This confirms the account and server are functioning. The issue is specific to the desktop client — the local OST file or account configuration on that machine. Run SCANPST on the OST file or recreate the account.

**Only certain folders are not syncing.**
Shared mailboxes and public folders sometimes have separate sync settings. In Outlook, right-click the folder, select **Properties**, and check the **Synchronization** tab. If it shows errors or outdated counts, click **Clear offline items** to force a resync of that folder only.

**Sync was working and stopped after a Windows Update.**
A Windows Update can reset certain security policies that affect the Exchange connection. Check if Work Offline mode was enabled automatically, and verify the account settings under File > Account Settings have not changed.
