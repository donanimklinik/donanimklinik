---
title: "Best Free Data Recovery Software for Windows (2026)"
description: "Deleted files, formatted drives, corrupted partitions — these are the free Windows data recovery tools that actually work and when to use each one."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/recover-your-files-in-windows-61f5b28a-f5b8-3cc2-0f8e-a63cb4e1d4c4"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 6
fix_summary: "Recuva (free, by Piriform) recovers most accidentally deleted files in minutes — download from piriform.com, run Deep Scan, and restore files before they get overwritten."
fix_time_display: "~15 min"
fix_difficulty: Easy
schema_type: Article
featured: false
top_search_queries:
  - "best data recovery software windows"
  - "windows data recovery software"
  - "data recovery programs for windows"
  - "data recovery tool for windows"
faq:
  - q: "Which free data recovery software works best for Windows?"
    a: "Microsoft's Windows File Recovery is the safest starting point since it is an official tool. Recuva is the best choice for a graphical interface and casual use. TestDisk and PhotoRec are best for formatted drives or when the file system is corrupted."
  - q: "Can free data recovery software recover files from a formatted drive?"
    a: "Yes, in many cases. After formatting, files are often still physically present on the drive. Tools like TestDisk and Windows File Recovery in Extensive mode can scan the raw drive data and recover files before new data overwrites them."
  - q: "What is the most important thing to do before running data recovery software?"
    a: "Stop writing any new data to the drive immediately. Every file saved, program installed, or even browsing session on the system drive can overwrite deleted file data, making recovery impossible."
  - q: "Is paid data recovery software better than free tools?"
    a: "For most common scenarios such as accidentally deleted files on a healthy drive, free tools work equally well. Paid tools offer more polished interfaces and better support for complex cases like damaged partitions or very old deleted files."
  - q: "Can data recovery software fix a clicking or grinding hard drive?"
    a: "No. Software recovery tools require the drive to be physically functional and detectable by Windows. A clicking or grinding drive has a mechanical failure that software cannot address. In that case, a professional hardware recovery service is required."
---

When files disappear — deleted by accident, lost after a format, or made inaccessible by corruption — the right recovery tool depends on what went wrong. Three free tools cover the vast majority of data recovery scenarios on Windows: Microsoft's own Windows File Recovery, Recuva, and TestDisk. Each solves a different problem.

The most important rule applies before opening any tool: stop writing new data to the drive. Every file you save overwrites the space where deleted data may still exist.

![Data recovery software comparison: Recuva free start-here, Disk Drill free 500MB good UI, PhotoRec open source, R-Studio professional paid](/images/data-recovery-software-comparison.svg)

## Windows File Recovery — Microsoft's official tool

**Best for:** Recently deleted files on healthy drives and formatted drives

Windows File Recovery is a free, official Microsoft tool available in the Microsoft Store. It runs from the Command Prompt and works on Windows 10 (version 2004 and later) and Windows 11.

**Basic scan (recently deleted files on an intact file system):**
```
winfr C: D:\Recovery\ /regular
```

**Deep scan (formatted drives or older deletions):**
```
winfr C: D:\Recovery\ /extensive
```

Replace `C:` with the drive containing the lost files and `D:\Recovery\` with a folder on a **different** drive for recovered output. Never save recovered files to the same drive being scanned.

According to Microsoft's documentation, the `/regular` mode works fastest on NTFS drives with recently deleted files. The `/extensive` mode takes longer but recovers more — use it after a format or when `/regular` finds nothing.

**Limitations:** Command-line only (no graphical interface), does not work on hardware-failed drives, requires Windows 10 2004 or later.

## Recuva — Best graphical interface

**Best for:** Users who prefer a visual interface, photo recovery, deep scans on USB and memory cards

Recuva (developed by Piriform, now owned by Avast) is the most widely used free graphical recovery tool for Windows. It scans for deleted files and displays their recoverability status — green (good), orange (poor), red (overwritten).

**How to use it:**
1. Download and install Recuva from the official Piriform website — install to your main drive, not the drive being recovered
2. Launch Recuva and select the file type you are looking for, or choose "All Files"
3. Select the drive or folder to scan
4. Enable **Deep Scan** mode for formatted drives or when a standard scan finds nothing
5. Review results — filter by recoverability status
6. Select files and save them to a different drive

**Limitations:** The free version is fully functional. Deep scans on large drives can take over an hour. Performance on SSDs is weaker than on traditional hard drives due to TRIM operations that erase deleted data blocks.

## TestDisk and PhotoRec — Best for corrupted file systems

**Best for:** Drives showing as RAW, unreadable partitions, recovering files when the file system is severely damaged

TestDisk is a free, open-source tool that repairs partition tables and recovers lost partitions — problems that Windows File Recovery and Recuva cannot address. It is bundled with a companion tool called PhotoRec, which recovers individual files by scanning for known file signatures regardless of file system condition.

Despite the name, PhotoRec recovers far more than photos — documents, archives, videos, and hundreds of other file types are supported.

**When to use TestDisk instead of the others:**
- Windows shows the drive as RAW and asks you to format it
- The drive is not visible in File Explorer but appears in Disk Management
- `chkdsk` reports the volume is not a recognised file system

TestDisk has a text-based menu interface. The [official TestDisk documentation](https://www.cgsecurity.org/wiki/TestDisk_Step_By_Step) provides a step-by-step walkthrough.

**Limitations:** Steeper learning curve than Recuva. Does not recover files to the original filenames and folder structure — PhotoRec uses numbered output folders. Read-only by default, so it will not make changes to the drive unless you explicitly confirm.

## Which tool to use

| Situation | Tool |
|-----------|------|
| Accidentally deleted files, drive is working normally | Windows File Recovery or Recuva |
| Drive was quick-formatted | Windows File Recovery (extensive) or Recuva (deep scan) |
| Drive shows as RAW or unreadable | TestDisk / PhotoRec |
| Prefer a graphical interface | Recuva |
| Comfortable with command line | Windows File Recovery |
| Need to repair partition table | TestDisk |

## What no free tool can fix

Software recovery tools read what is physically present on the storage media. They cannot recover data when:

- The drive's controller chip has failed and the drive is not detected
- The NAND flash on an SSD has been physically damaged
- A secure erase or full format (not quick format) has been run — this overwrites actual data
- TRIM has already run on an SSD after deletion (on most modern SSDs, deleted data is erased quickly)

In these cases, professional data recovery services — which directly access the storage chips — are the only remaining option.

## Frequently asked questions

**Do I need to install the recovery tool on the same drive I am recovering from?**
No. Install the tool on a different drive. Installing software to the drive being recovered can overwrite the deleted files you are trying to find.

**I ran a scan and found my files, but they open as blank or corrupted. Why?**
The file directory entry still existed (so the tool found the filename), but the data blocks have been partially or fully overwritten. The file cannot be restored. This is why stopping all writes immediately is the single most important step.

**Can these tools recover files from a BitLocker-encrypted drive?**
Only if the drive is already unlocked. You must decrypt or unlock the drive with the recovery key first. The recovery tools then scan the decrypted data normally.
