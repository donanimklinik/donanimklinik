---
title: "Outlook Calendar Not Syncing — Fix"
description: "Outlook calendar not syncing means meetings and events are missing or not updating. Here is how to fix it for Exchange, Microsoft 365, and Google."
category: software
pillar: "Microsoft 365 & Outlook Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/troubleshoot-calendar-sync-issues-in-outlook-52bc1a6f-7c10-4d39-9d56-b0c0c6c4b38e"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-04
read_time: 5
fix_summary: "Go to File > Account Settings, select your Exchange or Microsoft 365 account, click Repair, and follow the prompts — this refreshes calendar sync without losing any data."
fix_time_display: "~5 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "outlook calendar not syncing"
  - "outlook calendar is not syncing"
  - "outlook calendars not syncing"
  - "outlook calendar not updating"
howto_steps:
  - name: "Force a Send/Receive to trigger calendar sync"
    text: "Press F9 or click Send/Receive All Folders on the Send/Receive tab. Calendar data is synced through the same channel as email in Exchange and Microsoft 365. A forced Send/Receive often resolves calendar delays immediately."
  - name: "Check which calendar is set as the default"
    text: "Go to File > Account Settings > Account Settings > Data Files tab. The default data file is marked with a checkmark. If a local PST file is set as default instead of your Exchange or Microsoft 365 account, new meetings will be saved locally and will not sync to the server or other devices."
  - name: "Remove and re-subscribe to the calendar"
    text: "In Outlook, right-click the calendar in the navigation pane and select Delete Calendar. Then re-add it: for shared calendars, go to Home > Open Calendar > Open Shared Calendar and enter the owner's name. For internet calendars (ICS), go to File > Account Settings > Internet Calendars tab, remove the subscription, and re-add the URL."
  - name: "Clear the Outlook cache for calendar data"
    text: "Close Outlook. Press Win+R and type %localappdata%\\Microsoft\\Outlook and press Enter. Look for files with .OST extension associated with your account. Rename the file by adding .old to the end. Restart Outlook — it will recreate the file and perform a full sync including calendar data."
faq:
  - q: "Why is my Outlook calendar not syncing across devices?"
    a: "Calendar sync relies on the same Exchange or Microsoft 365 connection that handles email. Common causes include a corrupted local cache (OST file), the wrong calendar set as default, or a permissions issue with a shared calendar. Force a Send/Receive with F9 to trigger an immediate sync."
  - q: "How do I check which calendar is my default in Outlook?"
    a: "Go to File > Account Settings > Account Settings > Data Files tab. The account with a checkmark is the default. If a local PST file is set as default instead of your Exchange account, new meetings are saved locally and do not sync to other devices."
  - q: "Why are meetings from colleagues not appearing in my Outlook calendar?"
    a: "If shared calendar updates from colleagues are missing, check your calendar permissions. In Exchange environments, calendar sharing permissions can expire or be changed by administrators. Ask the colleague to re-share the calendar or contact your IT department."
  - q: "Can I sync my Outlook calendar with Google Calendar?"
    a: "Microsoft's official support for syncing Outlook with Google Calendar directly is limited. The most reliable method is to use Microsoft 365's connected accounts feature or a third-party sync tool. Native ICS subscription links offer a one-way read-only sync."
  - q: "How long does it take for Outlook calendar to sync after a change?"
    a: "In Exchange or Microsoft 365 environments, calendar changes typically sync within seconds to a minute. Delays longer than a few minutes usually indicate a sync configuration issue or a corrupted local cache that needs to be rebuilt."
---

When Outlook calendar is not syncing, meetings created or accepted on one device do not appear on others, shared calendar updates from colleagues are missing, or calendar events from mobile are absent on the desktop. The calendar appears frozen at a point in the past.

According to Microsoft's calendar troubleshooting documentation, calendar sync relies on the same Exchange or Microsoft 365 connection that handles email. A calendar sync failure is therefore often a symptom of a broader account sync issue — but calendars can also fail independently due to permission problems, data file configuration, or a corrupted local calendar cache.

![Outlook calendar sync issues: shared calendar permissions, mobile sync off, delegate access, corrupted data — universal fix is remove and re-add account](/images/outlook-calendar-sync.svg)

## Why Outlook calendar stops syncing

**Wrong default data file.** If Outlook is configured to save new items to a local PST file rather than the Exchange mailbox, calendar events created on the desktop stay local and never reach the server or other devices.

**Shared calendar permission change.** If a colleague changed your access level to a shared calendar — or if the original owner's account was modified — Outlook may lose the ability to receive updates for that calendar.

**Corrupted local calendar cache.** The calendar data stored in the OST file can become corrupted, causing Outlook to display stale data even though the server has current information.

**Internet calendar (ICS) subscription error.** Calendars subscribed via ICS URL (such as a Google Calendar or a team schedule) require Outlook to periodically fetch the ICS file. If the URL changes or the remote server is temporarily unavailable, the subscription stops updating.

## Step 1 — Force a Send/Receive

Calendar data syncs through the same connection as email. Press **F9** or click **Send/Receive All Folders** on the Send/Receive tab to force an immediate sync attempt.

If calendar data appears after this, the issue was simply a delayed sync. Outlook's automatic sync interval may be set too long — check under **Send/Receive Groups > Define Send/Receive Groups** and set the interval to 5 minutes if it is currently longer.

## Step 2 — Verify the default data file

New calendar events are saved to whichever data file is set as the default in Outlook.

1. Go to **File > Account Settings > Account Settings**
2. Click the **Data Files** tab
3. Look for the file marked with a checkmark — this is the default

If the default is a local PST file (shown as a file path on your local drive) rather than your Exchange or Microsoft 365 account (shown as your email address), new events are being saved locally and will not sync.

To fix this: select your Exchange or Microsoft 365 account file and click **Set as Default**.

## Step 3 — Remove and re-subscribe to shared calendars

For shared calendars (calendars owned by another person or a resource):

1. In the navigation pane, right-click the calendar under **Other Calendars** or **Shared Calendars**
2. Select **Delete Calendar** — this removes the local subscription but does not delete the calendar from the server
3. To re-add it: click **Home > Open Calendar > Open Shared Calendar**
4. Type the owner's name or email address and click **OK**

Outlook will fetch a fresh copy of the calendar from the server.

For ICS internet calendars:
1. Go to **File > Account Settings > Internet Calendars**
2. Select the affected subscription and click **Remove**
3. Re-add it using the original ICS URL

## Step 4 — Clear the Outlook calendar cache

If the calendar displays events that no longer exist on the server, or is missing events that do exist, the local cache is out of sync with the server.

1. Close Outlook
2. Press **Win+R**, type `%localappdata%\Microsoft\Outlook` and press Enter
3. Find the OST file associated with your account (it will include your email address in the filename)
4. Rename it by adding `.old` to the end of the filename (for example: `yourname.ost.old`)
5. Restart Outlook

Outlook will create a new OST file and perform a full sync from the server, including all calendar data. Depending on mailbox size, this may take several minutes.

## Outlook calendar not syncing with Google Calendar

If you use the **Outlook.com Google Calendar sync** or a third-party sync tool:

1. Open the sync tool's settings and verify the Google account credentials are current — a Google password change or permission revocation stops the sync
2. Re-authorize the sync tool with your Google account
3. If you are using Outlook on desktop to subscribe to a Google Calendar ICS feed, ensure the ICS URL has not changed — Google occasionally rotates these URLs

## Frequently asked questions

**Calendar syncs on mobile but not on the desktop Outlook app.**
The Exchange connection on the desktop client has an issue specific to that machine. This usually means a corrupted OST file. Follow Step 4 to clear the cache and rebuild the local data file.

**New meetings appear in calendar but do not show in Teams or Outlook mobile.**
The meeting was saved to a local PST rather than the Exchange mailbox. Check Step 2 to verify the default data file. Meetings must be saved to the Exchange account to appear across all devices.

**A shared calendar shows one week behind — events are delayed, not missing.**
This is a cache delay. Right-click the shared calendar in the navigation pane, select **Properties**, and click **Clear Offline Items**. Outlook will re-download all calendar data for that calendar from the server.
