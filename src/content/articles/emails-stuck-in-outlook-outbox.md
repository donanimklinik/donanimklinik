---
title: "Emails Stuck in Outlook Outbox — Fix"
description: "Emails stuck in Outlook's outbox won't send until the underlying connection or attachment issue is resolved. Here is how to clear the outbox."
category: software
pillar: "Microsoft 365 & Outlook Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/email-is-stuck-in-outbox-cc425a65-3bbe-4c7d-8ce2-1a87b5e8f5e2"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-02
read_time: 4
fix_summary: "Stuck Outbox emails are almost always caused by a large attachment — right-click the stuck email > Delete, then resend without the attachment or with a compressed version."
fix_time_display: "~3 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "emails stuck in outbox outlook"
  - "emails stuck in outbox"
  - "email stuck in outbox outlook"
  - "outbox not sending outlook"
howto_steps:
  - name: "Disable Work Offline mode"
    text: "Click the Send/Receive tab in Outlook. If the Work Offline button is highlighted, click it to turn it off. Outlook will not attempt to send any message while in offline mode — this is the most common reason emails remain in the Outbox."
  - name: "Move the stuck email to Drafts"
    text: "Open the Outbox folder. Do not double-click the stuck message — this can lock it further. Instead, right-click it and choose Move > Other Folder, or drag it directly to the Drafts folder. Once in Drafts, you can open and edit it safely."
  - name: "Remove large attachments"
    text: "Open the moved message from Drafts. If it contains attachments, check their total size — Microsoft 365 and most providers reject messages over 25 MB. Remove the attachment, save it to OneDrive or a file sharing service, and paste a link into the message body instead. Then click Send."
  - name: "Restart Outlook in Safe Mode"
    text: "Hold Ctrl and click the Outlook icon to start in Safe Mode. In Safe Mode, all add-ins are disabled. If the email sends successfully in Safe Mode, a third-party add-in is blocking delivery. Go to File > Options > Add-ins to identify and disable the conflicting add-in."
faq:
  - q: "Why is my email stuck in the Outlook Outbox and not sending?"
    a: "The most common causes are that Outlook is in Work Offline mode, the message has an attachment that exceeds the server's size limit, or a previous failed send attempt locked the message in the queue. Disable Work Offline mode and move the stuck email to Drafts to clear the queue."
  - q: "Can I delete an email that is stuck in the Outlook Outbox?"
    a: "Yes, but be careful. Do not double-click the message first, as opening it can lock it and prevent deletion. Right-click the message and select Delete, or drag it to Drafts first and then delete it from there."
  - q: "Why shouldn't I double-click an email stuck in the Outbox?"
    a: "Double-clicking a message in the Outbox while Outlook is trying to send it can lock the message in a sending state, making it impossible to edit or delete. Move it to Drafts by right-clicking or dragging instead."
  - q: "What is the maximum attachment size in Outlook?"
    a: "Microsoft 365 and most major email providers reject messages with attachments over 25 MB total. If your stuck message has large attachments, move it to Drafts, remove the attachments, upload them to OneDrive or another file sharing service, and send a link instead."
  - q: "How do I find which add-in is causing emails to get stuck in the Outbox?"
    a: "Start Outlook by holding Ctrl while clicking its icon to launch in Safe Mode with add-ins disabled. If email sends normally in Safe Mode, an add-in is the cause. Go to File > Options > Add-ins and disable add-ins one at a time until you find the one causing the problem."
---

When an email is stuck in the Outlook Outbox, it means Outlook has accepted the message for sending but has not transmitted it to the mail server. The message sits in the Outbox folder, sometimes showing as italic (which indicates Outlook is actively attempting to send it), and no subsequent emails can be sent until the queue clears.

According to Microsoft's Outlook documentation, emails get stuck in the Outbox for three primary reasons: Outlook is in offline mode, the message itself has a problem (typically an oversized attachment), or a third-party add-in is interfering with the send process.

![Outlook outbox stuck: go offline first, delete the stuck message, resize attachment if over 25MB, then go online and resend](/images/outlook-outbox-stuck.svg)

## Why emails get stuck

**Offline mode is active.** This is the most common cause. Outlook's Work Offline mode suspends all sending and receiving. It can be enabled accidentally by clicking the button on the Send/Receive tab, or it may have activated automatically when Outlook could not reach the server during a previous session.

**The message is too large.** Microsoft 365 and most email providers impose a maximum message size, typically 25 MB including attachments. Messages that exceed this limit are rejected by the server and remain in the Outbox. Outlook does not always display a clear error when this happens.

**An add-in is intercepting the send.** Security software, CRM plugins, and email management add-ins hook into Outlook's send process. A faulty or outdated add-in can prevent the send request from reaching the mail server.

**A corrupted OST file.** The local Outlook data file (OST) can become corrupted, particularly after an unexpected shutdown. A corrupted OST may prevent Outlook from syncing new sends to the server.

## Step 1 — Disable Work Offline mode

On the **Send/Receive** tab, check the **Work Offline** button. If it appears pressed or highlighted, click it once to disable it.

After disabling it, press **F9** or click **Send/Receive All Folders** to force Outlook to attempt delivery immediately.

## Step 2 — Move the stuck email to Drafts

A message shown in italics in the Outbox is currently being processed by Outlook. Do not double-click it — opening it while Outlook is sending can lock it in place.

To move it safely:
1. Right-click the message in the Outbox
2. Select **Move > Other Folder**
3. Choose **Drafts**

Alternatively, drag the message from the Outbox to the Drafts folder in the folder panel on the left.

Once in Drafts, the message is no longer queued for sending. You can open it, edit it, and click Send again when ready.

## Step 3 — Remove large attachments

With the message open in Drafts, check the total size of any attachments. The combined size of all attachments must stay under your provider's limit:

- Microsoft 365: 25 MB per message
- Outlook.com: 20 MB per message
- Gmail accounts connected to Outlook: 25 MB

If the attachment exceeds these limits:
1. Remove it from the message
2. Save the file to **OneDrive** and use **Insert > Link** to share it, or upload to another file sharing service
3. Paste the sharing link into the message body
4. Click Send

This approach also benefits the recipient — large attachments slow down delivery and may be blocked by their mail server.

## Step 4 — Restart Outlook in Safe Mode

If the email is not oversized and offline mode is disabled but the message still will not send, restart Outlook with add-ins disabled:

1. Close Outlook
2. Hold **Ctrl** and click the Outlook icon in the taskbar or Start menu
3. When prompted, confirm you want to start in Safe Mode

In Safe Mode, attempt to send the message again. If it sends successfully, an add-in is the cause.

To identify the add-in:
1. Restart Outlook normally
2. Go to **File > Options > Add-ins**
3. At the bottom, set **Manage** to **COM Add-ins** and click **Go**
4. Uncheck add-ins one at a time, restarting Outlook and testing after each removal

## If the Outbox is empty but emails are still not arriving

If the Outbox appears empty but recipients are not receiving your emails, the issue is likely upstream from Outlook — the mail server may be rejecting messages silently. Check your Sent Items folder: if the message appears there, it was transmitted from Outlook and the problem is with delivery on the server side.

## Frequently asked questions

**The stuck email shows in italics and I cannot select it.**
Italics means Outlook is actively trying to send it. Switch to offline mode temporarily (Send/Receive > Work Offline), then try moving the message. Switching offline stops the send attempt, which releases the lock on the message.

**I deleted the stuck email but a new one gets stuck immediately.**
The issue is with your email account settings or server connection, not the individual message. Run the Microsoft Support and Recovery Assistant (SaRA) to diagnose the account configuration.

**The Outbox gets stuck only when sending to certain recipients.**
The recipient's mail server may be blocking your messages. This could be due to a spam filter, a size limit at their end, or a policy blocking your domain. Try sending from a webmail client to rule out an Outlook-specific issue.
