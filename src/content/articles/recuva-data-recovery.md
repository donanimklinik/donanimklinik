---
title: "How to Use Recuva to Recover Deleted Files"
description: "Recuva is a free tool that scans your drive for deleted files and recovers them. Here is how to use it correctly and what to do when a standard scan is not enough."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://www.ccleaner.com/recuva/download"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "recuva data recovery"
  - "recuva recover deleted files"
  - "how to use recuva"
  - "recuva deep scan"
howto_steps:
  - name: "Download and install Recuva on a different drive"
    text: "Download Recuva from the official Piriform website and install it to your main system drive — not the drive you are trying to recover files from. Installing to the same drive can overwrite the deleted files."
  - name: "Select the file type and drive to scan"
    text: "Launch Recuva and choose the type of file you are looking for (pictures, documents, music, etc.) or select All Files. Then specify the drive or folder to scan."
  - name: "Run the scan and check recoverability"
    text: "After the scan completes, Recuva displays found files with a colour-coded status: green means good chance of recovery, orange means poor condition, red means overwritten. Sort by status to find your best candidates."
  - name: "Enable Deep Scan if the standard scan finds nothing"
    text: "If the initial scan does not find what you need, go to Options > Actions and enable Deep Scan, then scan again. Deep Scan ignores the file system and searches raw data — it takes longer but finds more."
  - name: "Select files and recover to a different drive"
    text: "Tick the files you want to recover, click Recover, and choose a destination folder on a different drive. Never recover files back to the same drive being scanned."
faq:
  - q: "Is Recuva free to use?"
    a: "Yes. Recuva is free for personal use. A paid Professional version adds automatic updates and virtual hard drive support, but the free version includes all core recovery features including deep scan."
  - q: "Why should I install Recuva on a different drive than the one I'm recovering from?"
    a: "Installing software to the same drive you are trying to recover overwrites the sectors where deleted file data may still exist. Install Recuva on your system drive or a USB drive, then scan the target drive without writing to it."
  - q: "What do the green, orange, and red indicators mean in Recuva?"
    a: "Green means the file has a good chance of full recovery. Orange means the file is recoverable but may be partially damaged. Red means the file's data has been overwritten and recovery is unlikely or impossible."
  - q: "When should I use Recuva's Deep Scan?"
    a: "Use Deep Scan when a standard scan finds nothing or misses files you know were deleted. Deep Scan ignores the file system index and searches raw drive data. It takes significantly longer but recovers more files, especially from formatted drives."
  - q: "Can Recuva recover files from an empty Recycle Bin?"
    a: "Yes. Once the Recycle Bin is emptied, files are marked as deleted but are often still physically present on the drive. Recuva scans for these and can recover them as long as the drive space has not been overwritten by new data."
---

Recuva is a free file recovery tool developed by Piriform. When a file is deleted from a drive, the data is not immediately erased — the space is simply marked as available. Recuva scans the drive for this data before it gets overwritten and allows you to restore it.

Before opening Recuva, stop using the drive you are trying to recover from. Every write operation — including saving new files, installing software, or even browsing the web if the drive is your system drive — reduces the chance of successful recovery.

![Recuva scan guide: Recuva window with color-coded dots — green Excellent means high recovery chance, orange Poor means partial, red Overwritten means gone](/images/recuva-scan-guide.svg)

## Step 1 — Download and install Recuva

Download Recuva from the official Piriform website. The free version is fully functional — the paid version adds automatic updates and virtual hard drive support, which most users do not need.

Install Recuva to your **main system drive** (usually C:), not to the drive you plan to scan. Installing to the target drive risks overwriting the deleted files you want to recover.

## Step 2 — Choose what to look for

When Recuva launches, a wizard walks you through the setup:

1. **File type** — Select the category that matches what you lost (Pictures, Music, Documents, Video, Compressed) or choose **All Files** if you are unsure
2. **File location** — Select the specific drive or folder, or choose **I'm not sure** to scan everything

If you know the filename or part of it, you can enter it in the filename field to narrow the results.

## Step 3 — Run the scan

Click **Start** to begin the scan. A standard scan typically takes a few minutes. When it finishes, Recuva shows a list of found files with three pieces of information:

- **Filename and path** — where the file was before deletion
- **Size** — the file's original size
- **State** — colour-coded recoverability:
  - **Green dot** — Excellent condition, high recovery chance
  - **Orange dot** — Poor condition, may be partially overwritten
  - **Red dot** — Unrecoverable, data has been overwritten

Sort by State to prioritise green-dot files. Red-dot files are shown in case the filename itself is useful, but the contents are gone.

## Step 4 — Enable Deep Scan if needed

If the standard scan does not find the files you are looking for, enable Deep Scan:

1. Click **Switch to advanced mode** in the top right
2. Go to **Options** > **Actions**
3. Check **Deep Scan (increases scan time)**
4. Close Options and run the scan again

Deep Scan ignores the file system entirely and reads the drive sector by sector, looking for file signatures (the identifying patterns at the start of each file type). This finds files even after a quick format or when the file system directory has been damaged. The trade-off is time — a deep scan on a large drive can take one to several hours.

Deep Scan recovers files without their original filenames. Files are named by type and sequence number (e.g., `0001234.jpg`). The original folder structure is also lost.

## Step 5 — Recover to a different drive

Select the files you want to recover by ticking their checkboxes. Click **Recover** and choose a destination folder — this **must** be on a different drive from the one being scanned. Recovering files to the same drive can overwrite other deleted files still waiting to be found.

Verify the recovered files open correctly before closing Recuva.

## When Recuva will not help

Recuva reads data that is physically present on the drive. It cannot recover files when:

- **The drive is not detected** — a hardware failure (failed controller chip or damaged platters) requires professional recovery
- **A full format was run** — unlike a quick format, a full format overwrites actual data
- **An SSD has processed TRIM** — on most modern SSDs, deleted data is actively erased; Recuva may find nothing or very little
- **Secure erase was used** — data overwritten deliberately cannot be recovered by any software

## Recuva and SSDs

Recuva works on SSDs, but results are less reliable than on traditional hard drives. The TRIM command, which most Windows systems send automatically to SSDs after file deletion, erases the underlying data shortly after deletion. On SSDs with TRIM enabled, deleted files may be gone within minutes. If you are attempting SSD recovery, the sooner you try, the better — though success is not guaranteed.

## Frequently asked questions

**Recuva found my file but it opens as blank or shows errors. Why?**
The file system directory entry was recovered (so Recuva could find the filename and location), but the data blocks have been partially or fully overwritten. The contents are gone. This is why stopping all writes immediately is the most important first step.

**The file I want shows as red. Is there anything I can do?**
A red status means the data has been overwritten. Recuva cannot restore it. No other software can either — overwritten data does not exist on the drive anymore.

**Can Recuva recover files from a memory card or USB drive?**
Yes. Recuva works on any drive that Windows can detect, including SD cards, USB flash drives, and external hard drives. The same rules apply — stop using the device as soon as you realise files are missing.
