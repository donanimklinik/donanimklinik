---
title: "Excel File Not Opening — Fix"
description: "Excel shows 'cannot open the file' or a blank screen on a spreadsheet? Fix Protected View, repair the file, and clear the Office cache. Step-by-step guide."
category: software
pillar: "Office Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/repair-a-corrupted-workbook-153a45f4-6cab-44b1-93ca-801ddcd4ea53"
source_last_verified_at: 2026-09-05
written_at: 2026-09-05
published_at: 2026-09-05
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "excel file not opening"
  - "excel cannot open the file"
  - "cannot open excel file"
  - "xlsx file not opening"
howto_steps:
  - name: "Check if the file is blocked by Protected View"
    text: "Excel's Protected View quarantines files downloaded from the internet or received by email. When a file opens in Protected View, a yellow warning bar appears at the top. Click Enable Editing to open the file normally. If no yellow bar appears and Excel shows an error instead, Protected View is not the issue — proceed to the next step. To permanently allow files from specific locations, go to File > Options > Trust Center > Trust Center Settings > Trusted Locations."
  - name: "Use Excel's built-in Open and Repair"
    text: "Open Excel without opening any file. Go to File > Open > Browse, navigate to the problem file, but do not double-click it. Instead, click the dropdown arrow next to the Open button and select Open and Repair. In the dialog that appears, click Repair first. If Repair fails, repeat the process and click Extract Data instead — this recovers the cell values and formulas even from severely corrupted workbooks."
  - name: "Clear the Office document cache"
    text: "A corrupted Office cache can cause Excel to fail on files it previously opened successfully. Open the Office Upload Center (search for it in the Start menu) or open any Office application, go to File > Options > Save, and click Delete Cached Files. Alternatively, navigate to C:\\Users\\[YourName]\\AppData\\Local\\Microsoft\\Office\\16.0\\OfficeFileCache and delete all files inside. Restart Excel and try opening the file again."
  - name: "Check the file extension and format"
    text: "A file saved as .xlsx but containing .xls content (or vice versa) causes Excel to display a format mismatch error. Right-click the file in File Explorer, select Properties, and check the file type. If the extension does not match the actual format, rename the file with the correct extension. Also check if the file was created by a non-Microsoft application — some accounting or ERP systems export files labeled as .xlsx that use an incompatible format."
  - name: "Update Microsoft Excel"
    text: "Older Excel versions cannot open files created with newer Office features or saved in newer formats. Open any Excel file, go to File > Account > Update Options > Update Now. Install all available updates and restart. If Excel is managed by your organization and updates are restricted, contact your IT administrator — the file may require a newer Excel version than the one deployed in your organization."
faq:
  - q: "Why does Excel say 'cannot open the file because the format or extension is not valid'?"
    a: "This error means the file's internal format does not match its extension, or the file is corrupted. The most common cause is a file that was renamed by changing the extension without actually converting the format. Try opening the file with Open and Repair (File > Open > click the dropdown next to Open > Open and Repair). If that fails, try opening the file in Google Sheets or LibreOffice Calc — these applications are more tolerant of format inconsistencies."
  - q: "Why does Excel open but show a blank screen instead of my spreadsheet?"
    a: "A blank screen in Excel usually means the worksheet is hidden, the window is minimized behind the Excel frame, or the file opened in Protected View and is waiting for you to click Enable Editing. Check View > Unhide to see if the workbook window is hidden. Also check View > Window > Arrange All to bring all open windows into view."
  - q: "Can I recover data from an Excel file that won't open?"
    a: "Yes. Use File > Open > Open and Repair, then select Extract Data when Repair fails. This recovers cell values and basic formulas. For more severely corrupted files, copy the file to a different folder first (sometimes the file path length causes issues), then try opening from the new location. Google Sheets can also open corrupted .xlsx files and recover data that Excel cannot access."
  - q: "Why can't Excel open a file sent by email?"
    a: "Email attachments open in Protected View by default, which blocks editing. Click Enable Editing in the yellow bar. If the file still won't open, save the attachment to your Desktop first (do not open directly from the email), then open it from File Explorer. Files opened directly from email clients sometimes remain in a temporary folder with restricted permissions."
  - q: "Why does a large Excel file open very slowly or appear to freeze while opening?"
    a: "Excel processes all formulas, external links, and conditional formatting rules during file load. A file with thousands of formulas or links to external workbooks can take several minutes to open. Switch Excel's calculation mode to Manual (File > Options > Formulas > Manual) before opening large files — this prevents Excel from recalculating everything on load and dramatically reduces open time."
---

**Excel file not opening** means the application launches but a specific spreadsheet fails to load — you see an error message such as "Excel cannot open the file because the format or extension is not valid," a blank screen, or the file appears to open but shows no content. According to Microsoft's Office support documentation, this problem is almost always caused by file corruption, a Protected View restriction, or a format mismatch between the file's extension and its actual content.

![Excel file not opening: Protected View check, Open and Repair, cache clear, format fix, update — decision path by error type](/images/excel-file-not-opening-fix.svg)

## What causes Excel files not to open

**Protected View blocking the file** — Excel quarantines files from the internet, email attachments, and untrusted locations in Protected View. These files open in a read-only sandbox and display a yellow warning bar. Clicking Enable Editing exits Protected View and opens the file normally.

**Corrupted file structure** — Incomplete downloads, abrupt power loss during save, or storage media errors can corrupt an .xlsx file's internal ZIP structure. Excel cannot read a damaged file and displays an error instead of opening it.

**Format and extension mismatch** — Files created by third-party software and labeled as .xlsx sometimes use an incompatible internal format. Excel detects the mismatch and refuses to open the file.

**Outdated Excel version** — Microsoft regularly introduces new Excel features and functions. A file created with a newer Excel version may use functions or formatting that an older version cannot parse, resulting in an error on open.

## How to fix Excel file not opening

Start with step 1 (Protected View) — this resolves the majority of cases involving downloaded or emailed files. If no Protected View bar appears, proceed directly to step 2 (Open and Repair).

## How to verify the fix

After applying each step, try opening the file and check that all sheets, data, and formatting are visible and intact. If the file opens but some data appears missing, use File > Open > Open and Repair > Extract Data to recover the full content.
