---
title: "Signs of Hard Drive Failure — And What to Do Before It's Too Late"
description: "Clicking sounds, slow file access, missing files, SMART errors — these are the warning signs that a hard drive is failing and the steps to take before data is lost."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/device-performance-and-health-in-the-windows-security-app-59d8499d-b6fd-6930-7667-ebf8ae10e08d"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 6
fix_summary: "Run the built-in SMART check in Command Prompt: type wmic diskdrive get status — 'OK' means healthy; any other result means back up everything immediately and replace the drive."
fix_time_display: "~3 min"
fix_difficulty: Easy
schema_type: Article
featured: false
top_search_queries:
  - "hard drive failure signs"
  - "failed hard drive"
  - "hard drive failing symptoms"
  - "signs hard drive is dying"
faq:
  - q: "What are the most common signs that a hard drive is failing?"
    a: "The most common warning signs are clicking or grinding sounds during operation, unusually slow file access or application loading, files that unexpectedly become corrupted or disappear, frequent freezes or blue screen errors, and SMART error warnings from diagnostic software."
  - q: "What does a clicking hard drive mean?"
    a: "Clicking from a hard drive is known as the click of death. It indicates the read/write head is repeatedly failing to locate its position on the platters. This is a serious mechanical failure sign. Stop using the drive and back up your data immediately."
  - q: "How do I check if my hard drive is failing?"
    a: "Open Task Manager and check the Disk tab for consistently high disk usage. Run chkdsk C: /f from an administrator Command Prompt to scan for file system errors. Use CrystalDiskInfo or Windows Storage Settings to read the SMART diagnostic data from the drive."
  - q: "How long does a hard drive last before failing?"
    a: "Most hard drives last 3 to 5 years under normal use. Drives used heavily or in hot environments may fail sooner. SMART data shows accumulated wear statistics and can give early warning before complete failure."
  - q: "What should I do if I see a SMART error from my hard drive?"
    a: "A SMART error means the drive's own diagnostics have detected a problem. Back up all important data immediately and start planning to replace the drive. Do not ignore SMART errors, as the drive can fail completely without further warning."
---

Hard drives give warnings before they fail completely. Recognising those warnings early — and acting on them — is the difference between a simple backup and losing everything. Most hard drive failures are gradual, not sudden, which means there is usually a window to save data if you know what to look for.

SSDs fail differently from traditional hard drives (HDDs). This article focuses primarily on HDDs, which have moving parts and exhibit more predictable failure patterns. SSD-specific failure signs are noted where they differ.

![Hard drive failure timeline: 4 stages from Early Warning (clicking, slowness) through Degrading, Critical, to Drive Dead](/images/hard-drive-failure-timeline.svg)

## Warning signs of hard drive failure

### Unusual sounds

Traditional hard drives contain spinning platters and a moving read/write head. A healthy drive is nearly silent during normal operation. These sounds indicate a problem:

- **Clicking or ticking** — the read/write head is repeatedly failing to find its position, known as the "click of death." This is a serious mechanical failure sign. Back up immediately.
- **Grinding or scraping** — physical contact between the read/write head and the platters. Data loss may already be occurring.
- **Loud spinning or whirring** — the motor is struggling, often from bearing wear.

SSDs have no moving parts and make no sounds. Unusual sounds from a system with only SSDs point to a fan or other component, not the storage drive.

### Slow file access and system performance

If copying files, opening documents, or loading applications has become noticeably slower — and the slowdown is inconsistent (sometimes fast, sometimes freezing) — the drive may be developing bad sectors. The drive is retrying read operations multiple times before succeeding, which causes the delay.

A system that was previously fast but now freezes for several seconds when accessing certain files or folders, then continues normally, is showing a classic early-failure pattern.

### Files that were not deleted appearing as missing

If files disappear without being deleted, or folders appear empty when they previously contained files, the file system may be corrupted due to bad sectors or a failing drive controller.

### Frequent crashes or blue screens

If Windows crashes with blue screen errors that reference disk-related error codes — such as `CRITICAL_PROCESS_DIED`, `INACCESSIBLE_BOOT_DEVICE`, or `DISK_READ_ERROR` — the drive should be checked immediately.

### Windows prompts to format the drive

If Windows suddenly asks you to format a drive that was working normally, the file system has become unreadable. This can happen due to file system corruption or bad sectors in critical areas of the drive. **Do not format.** Run a recovery tool first (see below).

### SMART errors reported by Windows or diagnostic tools

SMART (Self-Monitoring, Analysis, and Reporting Technology) is a built-in monitoring system in most hard drives and SSDs. Windows can display SMART status, and third-party tools provide more detail.

A SMART error message from Windows — typically shown as "Hard disk problem detected" in the notification area — means the drive has reported one or more failure indicators to Windows. This is a reliable warning that the drive is at elevated risk of failure.

## How to check drive health in Windows

**Using Windows Storage Health:**
Windows 11 includes a built-in storage health tool. Go to Settings > System > Storage > Disks & volumes, select a drive, and click Properties. The Health field shows the current status based on SMART data.

**Using WMIC from Command Prompt (Windows 10 and 11):**
```
wmic diskdrive get status
```
An "OK" result means SMART has not reported a problem. Any other result warrants further investigation.

**Using third-party SMART tools:**
Free tools such as CrystalDiskInfo provide detailed SMART attribute readings. Attributes in yellow (caution) or red (bad) indicate specific types of degradation — reallocated sectors, pending sectors, and uncorrectable errors are the most significant.

## What to do if you see these signs

### Immediately: back up data

If a drive is showing any of the above signs, back up all important data before doing anything else. Copy files to a different drive — an external hard drive, USB drive, or cloud storage. Do not attempt repairs until data is backed up.

If the drive is too slow or unreliable to copy files normally, try:
- Copying smaller batches of files at a time
- Connecting the drive externally via USB if it is an internal drive
- Using a tool such as Recuva or TestDisk if files are already missing

### Run chkdsk to check for and repair file system errors

Open an administrator Command Prompt and run:
```
chkdsk C: /f /r
```

The `/f` flag fixes file system errors. The `/r` flag locates bad sectors and attempts to recover readable data. This requires a restart if run on the system drive.

Note: `chkdsk /r` does not repair a failing drive — it marks bad sectors so the operating system avoids them. If the drive has many bad sectors, they will continue to multiply.

### Replace the drive promptly

A drive that has triggered SMART warnings or shown physical symptoms should be treated as unreliable, even if it appears to be functioning normally after a scan. The failure pattern of a degrading hard drive is unpredictable — it may continue working for months or fail the next day.

Replace the drive and restore from backup while data is still accessible.

## When to stop and call a professional

Do not attempt software recovery if:

- The drive makes clicking or grinding noises — running software tools on a mechanically failing drive can cause further damage
- The drive is not detected at all, even in BIOS or Disk Management
- The drive appears and disappears intermittently from Windows

In these cases, professional data recovery services that work at the component level are the only option if the data is critical.

## Frequently asked questions

**My drive passed a SMART check but is making clicking sounds. Which should I trust?**
Trust the sounds. SMART is useful for detecting gradual degradation but does not always catch mechanical failures before they become severe. A clicking drive should be treated as failing regardless of SMART status.

**How long does a hard drive last before failing?**
Most hard drives are rated for three to five years of use, but failure rates vary widely by manufacturer and model. Environmental factors — heat, vibration, and movement — accelerate wear. There is no reliable way to predict exactly when a specific drive will fail.

**Is a slow computer always a sign of a failing hard drive?**
No. Slow performance has many causes — malware, insufficient RAM, a full drive, or software issues. A failing drive is indicated by the combination of slowness with other symptoms: inconsistent freezing, missing files, sounds, or SMART warnings.
