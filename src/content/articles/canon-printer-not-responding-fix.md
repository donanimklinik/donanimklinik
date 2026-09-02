---
title: "Canon Printer Not Responding — Fix"
description: "Canon printer not responding to print commands in Windows? These official Canon steps resolve driver errors, queue blockages, and connection issues."
category: peripherals
pillar: "Printer Errors"
status: published
official_source_url: "https://support.usa.canon.com/kb/index?page=content&id=ART109546"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "canon printer not responding"
  - "canon printer not responding to print commands"
  - "canon the printer is not responding"
  - "canon printer stopped responding"
howto_steps:
  - name: "Restart the printer and the Print Spooler service"
    text: "Turn the Canon printer off and back on. Then press Win+R, type services.msc, find Print Spooler in the list, right-click it, and select Restart. The Print Spooler manages all communication between Windows and printers — restarting it clears the connection state."
  - name: "Clear all stuck print jobs"
    text: "Go to Settings > Bluetooth & devices > Printers & scanners, click your Canon printer, and select Open print queue. Press Ctrl+A to select all jobs, then press Delete. Confirm the cancellation. A stuck job from a previous print attempt is the most common reason a printer stops responding."
  - name: "Check the USB cable or Wi-Fi connection"
    text: "For USB-connected printers, unplug the USB cable from both the printer and computer and plug it back in. Try a different USB port on the computer. For wireless printers, confirm the wireless light on the printer is solid (not blinking) indicating an active connection."
  - name: "Set the Canon printer as the default printer"
    text: "Go to Settings > Bluetooth & devices > Printers & scanners. Turn off Let Windows manage my default printer. Click your Canon printer and select Set as default. Windows may be sending jobs to a different printer, causing the Canon to appear unresponsive."
  - name: "Reinstall the Canon printer driver"
    text: "Go to Settings > Bluetooth & devices > Printers & scanners, click your Canon printer, and select Remove device. Download the latest driver for your Canon model from support.usa.canon.com. Install it and reconnect the printer when the installer prompts you."
---

A Canon printer that is not responding receives the print command from Windows but does not act on it. The printer may be powered on, connected, and showing no error — yet jobs accumulate in the queue without printing.

According to Canon's official troubleshooting documentation, a non-responding printer is almost always a communication issue between Windows and the printer, not a hardware failure. The most common causes are a blocked print queue, a stalled Print Spooler service, or a lost connection.

![Canon printer not responding: printer is online but PC cannot communicate — check USB cable, restart print spooler, reinstall driver, or clear Windows spool folder](/images/canon-printer-not-responding.svg)

## What causes Canon printer not responding

Canon printers stop responding to print commands for specific reasons:

- **Stuck print job in the queue** — one failed job blocks all subsequent jobs
- **Print Spooler service stalled** — the Windows service managing printer communication has stopped or frozen
- **Lost USB or wireless connection** — Windows still recognises the printer but cannot reach it
- **Wrong default printer** — Windows is routing jobs to a different device
- **Driver corruption** — after a Windows update, the Canon driver may be incompatible

## How to fix Canon printer not responding

### Step 1 — Restart the printer and the Print Spooler

The first step is to reset the communication path between Windows and the Canon printer.

**Restart the printer:**
1. Press the **Power** button to turn the Canon printer off
2. Wait **30 seconds**
3. Press the **Power** button to turn it back on
4. Wait for the printer to complete its startup and show a ready status

**Restart the Print Spooler:**
1. Press **Win+R**, type `services.msc`, press **Enter**
2. Scroll to **Print Spooler** in the list
3. Right-click it and select **Restart**
4. The service stops and restarts — this typically takes 10–15 seconds

After both restarts, try sending a single test print. In many cases this alone restores the printer's response.

### Step 2 — Clear all stuck print jobs

A single stuck job holds the entire queue. Even if you can see the printer is ready, Windows will not send new jobs until the queue is cleared.

1. Go to **Settings** → **Bluetooth & devices** → **Printers & scanners**
2. Click your Canon printer
3. Select **Open print queue**
4. Press **Ctrl+A** to select all jobs
5. Press **Delete** or right-click and select **Cancel All Documents**

If jobs refuse to delete, stop the Print Spooler first:

1. In `services.msc`, right-click **Print Spooler** and select **Stop**
2. Open **File Explorer** and navigate to `C:\Windows\System32\spool\PRINTERS\`
3. Delete all files in this folder (do not delete the folder itself)
4. Return to `services.msc` and **Start** the Print Spooler again

### Step 3 — Check the physical or wireless connection

A lost connection causes Windows to hold jobs in the queue indefinitely.

**For USB-connected Canon printers:**
1. Unplug the USB cable from the printer
2. Unplug the USB cable from the computer
3. Wait 15 seconds
4. Reconnect the cable — try a different USB port on the computer if available
5. Windows should detect the printer and reinstall it automatically

**For wireless Canon printers:**
1. Check the **wireless light** on the printer's control panel — it should be solid, not blinking
2. If blinking, run the **Wi-Fi Setup** from the printer's menu to reconnect
3. Print the **Network Status Sheet** (**Settings** → **Network Settings** → **Print Status Sheet**) to confirm the printer has an IP address

### Step 4 — Set the Canon as the default printer

If Windows is set to manage the default printer automatically, it may have switched the default to another device — Microsoft Print to PDF, OneNote, or a previously connected printer. Jobs sent to the Canon then go to the wrong destination.

1. Go to **Settings** → **Bluetooth & devices** → **Printers & scanners**
2. Scroll down and turn off **Let Windows manage my default printer**
3. Click your Canon printer
4. Click **Set as default**

Send a test print immediately after setting the default to confirm the printer responds.

### Step 5 — Reinstall the Canon driver

If the printer remains unresponsive after the above steps, the driver is the likely cause — particularly after a recent Windows feature update.

1. Go to **Settings** → **Bluetooth & devices** → **Printers & scanners**
2. Click your Canon printer and select **Remove device**
3. Go to [support.usa.canon.com](https://support.usa.canon.com) and search for your specific Canon model
4. Download the latest **full software and driver package**
5. Run the installer and follow all prompts
6. When the installer asks to connect the printer, do so via USB first to complete the installation, then switch to wireless if preferred

## How to verify the fix

1. Go to **Settings** → **Bluetooth & devices** → **Printers & scanners** and confirm the Canon shows **Ready**
2. Right-click the printer and select **Print test page** (in Printer Properties)
3. Confirm the test page prints within 30 seconds of the command

## Frequently asked questions

**Canon printer says ready but does not print.**
If the printer shows Ready and accepts the job but produces nothing, check the ink levels and run a nozzle check. A printer with an empty cartridge may show Ready but refuse to print.

**Canon printer not responding after Windows update.**
Windows updates sometimes replace manufacturer drivers with generic versions. Go to **Device Manager** (right-click Start → Device Manager), expand **Printers**, right-click the Canon printer, and select **Update driver** → **Search automatically**. If Windows installs a generic driver, uninstall it and reinstall the full Canon driver from canon's support site.

**Canon printer not responding on one computer but works on another.**
This confirms the printer hardware is functioning. The issue is with the driver or connection settings on the affected computer. Remove the printer from that computer, download the latest Canon driver, and reinstall from scratch.
