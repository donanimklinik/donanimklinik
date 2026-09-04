---
title: "Windows Update Errors — Fix Guide"
description: "A complete index of Windows Update error codes and fix guides. Find the specific error you are seeing and follow the step-by-step solution."
category: computers
pillar: "Windows Update Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/update-windows-3c5ae7fc-9fb6-9af1-1984-b5e0412c556a"
source_last_verified_at: 2026-09-03
written_at: 2026-09-03
published_at: 2026-09-03
read_time: 3
schema_type: Article
featured: false
top_search_queries:
  - "windows update errors"
  - "windows update error codes"
  - "fix windows update"
  - "windows update not working"
faq:
  - q: "Why does Windows Update keep failing?"
    a: "The most common causes are a stopped Windows Update service, a corrupted SoftwareDistribution download cache, or insufficient disk space on the C: drive. Run the Windows Update Troubleshooter first — it automatically detects and fixes the most frequent causes without manual steps."
  - q: "How do I fix Windows Update when it stops working?"
    a: "Start with the Windows Update Troubleshooter in Settings > System > Troubleshoot. If that does not help, restart the Windows Update service in services.msc, clear the SoftwareDistribution folder, and check that drive C: has at least 10 GB free. If a specific error code appears, use the matching fix guide for that code."
  - q: "Is it safe to turn off the PC while Windows Update is running?"
    a: "No. Turning off the PC during an active update can corrupt Windows system files. If the update appears completely frozen for more than 2 hours with no progress, it is safe to hold the power button to shut down — Windows will attempt to roll back the partial update automatically on the next boot."
  - q: "What is the SoftwareDistribution folder and can I delete it?"
    a: "The SoftwareDistribution folder at C:\\Windows\\SoftwareDistribution stores downloaded update packages temporarily. You can safely delete the contents of the Download subfolder after stopping the Windows Update service — Windows rebuilds the cache on the next update check. Deleting it does not affect installed updates or Windows settings."
  - q: "Can Windows Update errors damage my PC?"
    a: "Update errors themselves do not damage your PC — they simply prevent the update from installing. However, leaving your PC without security updates for extended periods increases vulnerability to malware. Fix the update error as soon as possible to ensure security patches are applied."
---

Windows Update errors stop your PC from receiving security patches, feature updates, and driver upgrades. According to Microsoft's official documentation, most update failures fall into three categories: service configuration problems, corrupted update caches, and network or disk space constraints.

![Windows Update error troubleshooting map: three error categories — service errors, stuck downloads, and error codes — each with fix paths](/images/windows-update-errors.svg)

This hub covers the most common Windows Update problems. Select the guide that matches your situation.

## Fix guides in this pillar

### [Windows Update Not Working — Fix](/computers/windows-update-errors/windows-update-not-working-fix/)

Windows Update opens but nothing downloads, the progress bar does not move, or every update attempt ends with a generic error. This guide walks through the Windows Update Troubleshooter, restarting the Windows Update service, clearing the SoftwareDistribution cache, and resetting update components via the command line.

**Best for:** Updates stuck at 0%, repeated failures with no specific error code, Windows Update opening to a blank screen.

---

### [Windows Update Stuck — Fix](/computers/windows-update-errors/windows-update-stuck-fix/)

The update begins downloading or installing but freezes and never completes — the percentage counter stops moving, or the "Working on updates" screen stays on indefinitely after a restart. This guide covers safe forced restarts, booting into Safe Mode, clearing the SoftwareDistribution folder, running DISM and SFC scans, and downloading updates manually from the Microsoft Update Catalog.

**Best for:** Stuck at 0%, 30%, 100% during install; "Working on updates — Do not turn off your PC" loop; update appears to install but reverts on reboot.

---

### [Windows Update Troubleshooter — How to Run](/computers/windows-update-errors/windows-update-troubleshooter-fix/)

The Windows Update Troubleshooter is the correct first step for almost every update problem. This guide shows how to open it on both Windows 10 and Windows 11, what it automatically fixes, how to read the results report, and what to do if the troubleshooter itself fails to run or completes without fixing anything.

**Best for:** Any Windows Update problem — always run this first before manual fixes.

---

## How Windows Update works

Windows Update downloads update packages from Microsoft's servers and stores them temporarily in `C:\Windows\SoftwareDistribution\Download`. The Windows Update service (`wuauserv`) manages the download, verification, and installation process. If any part of this chain breaks — the service crashes, the cache becomes corrupted, or disk space runs low — the update fails.

Understanding this helps explain why the fixes in these guides work: clearing the SoftwareDistribution folder removes corrupted package data, restarting the service restores a crashed component, and DISM repairs the underlying Windows image that the update modifies.

## When to contact Microsoft Support

If you have worked through all guides in this pillar and updates still fail, Microsoft offers direct support at [support.microsoft.com](https://support.microsoft.com/). Provide the specific error code from Settings → Windows Update — this is the fastest way to get a targeted fix.
