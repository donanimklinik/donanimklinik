---
title: "Formatted USB Drive Recovery — Windows Built-in Method"
description: "Accidentally formatted a USB drive? A quick format leaves data recoverable. Use Microsoft's free Windows File Recovery tool to get your files back."
category: computers
pillar: "BitLocker & Data Recovery"
status: published
official_source_url: "https://learn.microsoft.com/en-us/windows/client-management/windows-file-recovery"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-01
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "recover files from formatted usb drive windows"
  - "accidentally formatted usb recovery"
  - "windows file recovery formatted drive"
  - "formatted usb drive file recovery free"
howto_steps:
  - name: "Stop using the USB drive immediately"
    text: "Do not write any new files to the formatted USB drive. Every new byte written reduces the chance of recovering the original data."
  - name: "Install Windows File Recovery from the Microsoft Store"
    text: "Open the Microsoft Store, search for Windows File Recovery, install the free official app, then launch it as administrator from the Start menu."
  - name: "Run the Extensive mode recovery command"
    text: "Open Windows File Recovery as administrator and run: winfr E: D:\\Recovery /extensive — replacing E: with your USB drive letter and D:\\Recovery with a folder on a different drive."
  - name: "Wait for the scan to complete and check the results"
    text: "Extensive mode scans can take 30 minutes to several hours. When finished, open the destination folder and verify the recovered files by opening them."
---

Accidentally formatting a USB drive feels catastrophic, but in most cases the files are still physically present on the drive. According to official Microsoft documentation, a quick format — the default option in Windows — erases only the file system table, not the underlying data. The files become invisible to the operating system, but they remain on the drive until new data overwrites them.

Microsoft's free Windows File Recovery tool can scan the formatted drive and restore those files. The two factors that determine success are the type of format performed and how much the drive has been used since.

## Quick format vs full format — what actually happens

According to Microsoft's documentation, the two format types have very different outcomes for data recovery:

- **Quick format:** Clears the file system index only. The actual file data remains on the drive untouched. Recovery is possible and often highly successful.
- **Full format:** Writes zeroes across every sector of the drive. The original data is overwritten and cannot be recovered by any software tool.

The Windows format dialog has **Quick Format** checked by default. Most accidental formats are therefore quick formats, which means the data is recoverable. If you are unsure which type was used, proceed with the recovery attempt — if the data is gone, the tool will simply find nothing.

## How to recover a formatted USB drive with Windows File Recovery

### Step 1 — Stop using the USB drive immediately

As soon as you realise the drive has been formatted, stop writing anything to it. Copying new files, saving documents, or even allowing Windows to write system data to the drive reduces the amount of original data that can be recovered. Eject the drive if it is not needed for the recovery process.

### Step 2 — Install Windows File Recovery

Windows File Recovery is a free official tool from Microsoft, available through the Microsoft Store.

1. Open the **Microsoft Store** from the Start menu
2. Search for **Windows File Recovery**
3. Click **Get** to install — no cost, no account required beyond the Store sign-in
4. Once installed, open the **Start** menu, type **Windows File Recovery**, right-click the result, and select **Run as administrator**

Administrator privileges are required for the tool to access drive-level data.

### Step 3 — Run the Extensive mode recovery command

USB drives are typically formatted with FAT32 or exFAT. According to Microsoft's documentation, Regular mode does not support these file systems — only **Extensive mode** works for formatted USB drives.

If your USB drive is assigned the letter `E:` and you want to save recovered files to a folder called `Recovery` on your `D:` drive, run:

```
winfr E: D:\Recovery /extensive
```

To recover only specific file types, add the `/n` filter:

```
winfr E: D:\Recovery /extensive /n *.jpg
winfr E: D:\Recovery /extensive /n *.pdf
winfr E: D:\Recovery /extensive /n *.docx
```

Two rules that always apply:
- The **source** (your USB drive) and the **destination** folder must be on different drives. You cannot recover files from `E:` back to `E:`.
- Run the command window as administrator, or the tool will not have the required permissions.

Press **Y** when the tool prompts for confirmation to begin the scan.

### Step 4 — Wait for the scan and review the results

Extensive mode performs a thorough, low-level scan of every sector. Depending on the drive size and your computer's speed, this can take anywhere from 30 minutes to several hours. Do not interrupt the process.

When the scan finishes:

1. Open the destination folder in File Explorer
2. Recovered files may appear in their original folder structure or as individually numbered files
3. Open documents, preview images, and play audio or video files to confirm the content is intact
4. Files that were partially overwritten may open with missing content or errors — this is expected when some sectors have been reused

## Known limitations

- **Full format performed:** If the drive was fully formatted rather than quick formatted, the data has been overwritten and Windows File Recovery will not find recoverable files. No software tool can recover data that has been physically overwritten.
- **Drive used after formatting:** Every file written to the drive after the format reduces the recovery rate proportionally. A drive that has been used heavily since the format will yield fewer results than one that was ejected immediately.
- **Flash-based USB drives with wear levelling:** Some modern USB drives use internal processes similar to TRIM that proactively erase deleted data blocks. In these cases, Extensive mode may return fewer files even on a recently formatted drive.
- **Corrupted file system:** If Windows prompted you to format because it could not read the drive — a sign of file system corruption — the underlying data may have been partially damaged before the format. Recovery results will vary.

## Frequently asked questions

**Windows said "You need to format the disk before you can use it" and I clicked Format. Are my files recoverable?**
In most cases, yes. Windows displays this prompt when it cannot read the file system — often due to minor corruption or an unrecognised format — and the format dialog defaults to Quick Format. As long as Quick Format was used and the drive has not been heavily written to since, recovery is likely possible.

**Can I recover every file that was on the drive?**
Recovery success depends on how much the drive was used after formatting. Files in sectors that have not been overwritten will be recovered intact. Files in sectors that have since been reused may be partially or fully unrecoverable. Running the command immediately after formatting, before any new data is written, gives the best possible outcome.

**How do I find my USB drive letter?**
Open **File Explorer** and look under **This PC**. The USB drive will appear with an assigned letter such as `E:`, `F:`, or `G:`. Use that letter as the source in the winfr command.

**What file types can Windows File Recovery find?**
According to Microsoft's documentation, the tool supports a wide range of formats including photos (JPG, PNG, HEIC), documents (DOCX, PDF, XLSX), video (MP4, MOV), audio (MP3, WAV), and many others. Using the `/n *.extension` filter lets you target specific types and reduces scan time.
