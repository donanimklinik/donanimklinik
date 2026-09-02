---
title: "Outlook Not Sending Email — Fix"
description: "Outlook is not sending email? The most common causes are offline mode, server connectivity, or a stuck outbox. Here are the steps to fix it."
category: software
pillar: "Microsoft 365 & Outlook Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/fix-problems-with-outlook-won-t-send-or-receive-email-57c3e64b-a3e6-4a17-8c79-2c6c38e04c16"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-02
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "outlook not sending email"
  - "outlook won't send email"
  - "outlook not sending emails but receiving"
  - "outlook email not sending"
howto_steps:
  - name: "Check Work Offline mode"
    text: "In Outlook, click the Send/Receive tab. If Work Offline is highlighted or active, click it once to disable it. Outlook shows 'Working Offline' in the status bar when this mode is on — no emails will send or receive while it is active."
  - name: "Run a manual Send/Receive"
    text: "Press F9 or click Send/Receive All Folders on the Send/Receive tab. This forces Outlook to attempt delivery of all queued messages. Watch the progress bar at the bottom — if it stops with an error, note the error code or message."
  - name: "Move the stuck message out of Outbox"
    text: "Open the Outbox folder. If a message is there, do not double-click it — this can lock it. Instead, drag it to the Drafts folder. Once moved, open it from Drafts, remove any large attachments, and click Send again."
  - name: "Verify your SMTP server settings"
    text: "Go to File > Account Settings > Account Settings. Select your email account and click Change. Under More Settings > Outgoing Server, ensure My outgoing server (SMTP) requires authentication is checked. Under Advanced, confirm the SMTP port is 587 (TLS) or 465 (SSL) — not 25, which many ISPs block."
---

Outlook not sending email is one of the most common issues reported across Microsoft 365, Outlook 2019, 2021, and Outlook.com. The message is written, you click Send, and it sits in the Outbox — or disappears with no confirmation that it was delivered.

According to Microsoft's Outlook troubleshooting documentation, the failure to send email falls into a small number of categories: the client is offline, the outgoing mail server settings are wrong, the message itself is blocking the queue, or a local data file is corrupted.

![Outlook sending flow: Compose to SMTP Auth (common fail point with wrong port or password) to Mail Server to delivery — fix checklist on right](/images/outlook-sending-flow.svg)

## Step 1 — Check Work Offline mode

Outlook has a Work Offline mode designed for use without an internet connection. If this mode is active, no emails will be sent or received regardless of your connection status.

On the **Send/Receive** tab in the Outlook ribbon, look at the **Work Offline** button. If it appears highlighted or pressed, click it once to deactivate it.

The status bar at the bottom of the Outlook window also shows **Working Offline** when this mode is on. Once you disable it, the status bar should return to **Connected** or show your account status.

After disabling Work Offline, Outlook will attempt to send any queued messages automatically.

## Step 2 — Run a manual Send/Receive

After confirming Work Offline is disabled, force Outlook to attempt delivery:

- Press **F9**, or
- Click **Send/Receive All Folders** on the Send/Receive tab

Outlook will attempt to send all messages in the Outbox and download new mail. If a specific error occurs during this attempt, Outlook displays an error code and message in the Send/Receive Progress dialog. Note this code — it identifies the precise reason delivery failed.

Common error codes during Send/Receive:
| Code | Meaning |
|------|---------|
| 0x800CCC0E | Cannot connect to outgoing mail server |
| 0x800CCC13 | Cannot connect to the server |
| 0x80042108 | Cannot connect to your incoming mail server |

## Step 3 — Clear a stuck message from the Outbox

A single stuck message in the Outbox can block all subsequent messages from sending. This happens when a message is too large, has a corrupted attachment, or was partially transmitted.

To clear it:

1. Open the **Outbox** folder
2. Do **not** double-click the message — opening it while Outlook is trying to send it can lock it in place
3. Instead, drag the message to the **Drafts** folder
4. Once it is in Drafts, open it
5. If it has a large attachment, remove the attachment and save the file separately
6. Click **Send** again

If the message cannot be moved by dragging, restart Outlook in safe mode: hold **Ctrl** while clicking the Outlook icon. In safe mode, add-ins are disabled, which sometimes releases a locked Outbox message.

## Step 4 — Verify SMTP settings

If the previous steps did not resolve the issue, the outgoing mail server configuration may be incorrect. This is particularly common after a password change, account migration, or when using a third-party email provider.

1. Go to **File > Account Settings > Account Settings**
2. Select your email account and click **Change**
3. Click **More Settings**
4. On the **Outgoing Server** tab: confirm **My outgoing server (SMTP) requires authentication** is checked, and **Use same settings as my incoming mail server** is selected
5. On the **Advanced** tab: set the SMTP port to **587** with **STARTTLS**, or **465** with **SSL/TLS**

Port 25 is blocked by most internet service providers for outbound email from personal connections. If port 25 is set, change it to 587.

For Microsoft 365 and Outlook.com accounts, the SMTP server is **smtp.office365.com** (port 587) or **smtp-mail.outlook.com** (port 587).

## If the issue persists

If these steps do not resolve the problem:

- **Run Microsoft Support and Recovery Assistant (SaRA):** Download it from Microsoft's support site. It diagnoses common Outlook send/receive issues automatically and applies fixes where possible.
- **Repair your Outlook profile:** Go to **Control Panel > Mail > Show Profiles**, select your profile, and click **Properties > Email Accounts**. Remove and re-add your account.
- **Recreate the Outlook data file:** If your OST file is corrupted, Outlook may fail to send. Close Outlook, locate the OST file (typically in `%localappdata%\Microsoft\Outlook\`), rename it with a `.old` extension, and restart Outlook. Outlook will create a new OST and resync.

## Frequently asked questions

**Outlook shows the email as sent but the recipient never received it.**
Check your Sent Items folder to confirm the message appears there. If it does, the issue is delivery — contact your email administrator or check your domain's spam reputation. If it is not in Sent Items, the message was never transmitted.

**The email sends from Outlook Web Access but not from the desktop app.**
This confirms the account and server are working. The issue is specific to the desktop client. Start with an Outlook profile repair or check if a third-party add-in is interfering.

**Outlook says "The server rejected the recipient's email address."**
This is a delivery error from the recipient's server, not an Outlook configuration problem. Verify the recipient's email address is typed correctly. If it is correct, the recipient's server may be blocking your domain or the address may no longer exist.
