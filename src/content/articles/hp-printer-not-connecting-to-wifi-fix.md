---
title: "HP Printer Not Connecting to WiFi — Fix"
description: "HP printer won't connect to Wi-Fi? Follow these official HP steps to reconnect your wireless printer to your network in Windows 10 and 11."
category: peripherals
pillar: "Printer Errors"
status: published
official_source_url: "https://support.hp.com/us-en/document/c03521161"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "hp printer not connecting to wifi"
  - "hp printer won't connect to wifi"
  - "hp printer not connecting to wireless network"
  - "hp printer wifi not working"
howto_steps:
  - name: "Restart the printer, router, and computer"
    text: "Turn off the HP printer using the power button. Turn off your router and wait 60 seconds. Turn the router back on and wait for it to fully reconnect, then power on the printer. This clears temporary network state and is HP's first recommended step for wireless connection failures."
  - name: "Run the HP Wireless Setup Wizard"
    text: "On the printer's control panel, go to the Wireless or Network Setup menu and select Wireless Setup Wizard. Follow the on-screen prompts to select your Wi-Fi network and enter the password. The wizard guides the printer through the full wireless connection process."
  - name: "Restore network settings on the printer"
    text: "If the Wireless Setup Wizard cannot find the network, restore the printer's network settings first. On the control panel, go to Settings > Network Setup > Restore Network Settings. After the reset, run the Wireless Setup Wizard again to reconnect from a clean state."
  - name: "Run HP Print and Scan Doctor"
    text: "Download HP Print and Scan Doctor from the official HP support site and run it. Select your printer, then choose Fix Printing. The tool detects connection issues, reinstalls the wireless driver if needed, and re-establishes communication between the printer and your network."
  - name: "Check the 2.4 GHz vs 5 GHz band"
    text: "HP printers, particularly older models, support only the 2.4 GHz Wi-Fi band. If your router uses a combined SSID or broadcasts only on 5 GHz, the printer cannot connect. Log into your router settings and ensure the 2.4 GHz band is active and has a separate SSID the printer can join."
---

An HP printer that won't connect to Wi-Fi is one of the most common printer issues reported on Windows. The printer may have connected previously and lost the network after a router change, password update, or network reset — or it may be connecting for the first time.

According to HP's wireless printer setup documentation, the most frequent causes are temporary network faults that a restart resolves, Wi-Fi band incompatibility (5 GHz only routers), or an incorrect password entered during setup.

## What causes HP printer Wi-Fi connection failures

HP printers communicate with your network through an internal wireless adapter. Connection failures occur when:

- **Network credentials changed** — if the Wi-Fi password was updated, the printer still holds the old password
- **Router was replaced or reset** — new routers broadcast a different network, even if the SSID looks the same
- **5 GHz band only** — many HP consumer printers only support 2.4 GHz
- **IP address conflict** — another device on the network took the printer's previous IP
- **Printer wireless adapter needs reset** — the adapter can lock after a firmware update or power interruption

## How to fix HP printer not connecting to Wi-Fi

### Step 1 — Restart the printer, router, and computer

HP's official wireless troubleshooting guide recommends a full restart of all devices as the first step. Temporary network state issues resolve in most cases without any further action.

1. Turn off the HP printer using the **Power** button
2. Turn off your router by unplugging the power cable
3. Wait **60 seconds**
4. Plug the router back in and wait until the internet light is stable (typically 30–60 seconds)
5. Turn on the HP printer
6. Wait for the wireless light on the printer to stop blinking and stay solid

Once the wireless light is solid blue, the printer has rejoined the network. Try printing a test page before continuing to further steps.

### Step 2 — Run the Wireless Setup Wizard on the printer

If the printer did not automatically reconnect after the restart, use the built-in Wireless Setup Wizard to reconnect manually.

1. On the printer's control panel, press the **Wireless** icon or navigate to **Settings**
2. Select **Network Setup** or **Wireless Setup**
3. Select **Wireless Setup Wizard**
4. The printer scans for available networks — select your Wi-Fi network from the list
5. Enter your Wi-Fi password exactly as it is set on the router (passwords are case-sensitive)
6. Wait for the printer to confirm the connection

After the wizard completes, print the **Wireless Network Test Report** from the same menu to confirm the connection status, signal strength, and IP address.

### Step 3 — Restore network settings and reconnect

If the Wireless Setup Wizard fails to find your network or shows an error during connection, the printer's stored network profile may be corrupted. Restoring network settings clears all saved networks and starts fresh.

1. On the printer's control panel, go to **Settings** → **Network Setup**
2. Select **Restore Network Settings** (sometimes called **Restore Network Defaults**)
3. Confirm the reset — the printer restarts its wireless adapter
4. Run the **Wireless Setup Wizard** again to reconnect

This step is particularly effective after a router replacement or if the printer previously connected to a different network.

### Step 4 — Check the Wi-Fi band (2.4 GHz vs 5 GHz)

Most HP Deskjet, Envy, and OfficeJet models support only the **2.4 GHz** Wi-Fi band. If your router broadcasts exclusively on 5 GHz, or uses a combined SSID where 5 GHz is preferred, the HP printer cannot establish a connection.

To check and separate your Wi-Fi bands:

1. Log into your router's admin page (usually `192.168.1.1` or `192.168.0.1`)
2. Navigate to **Wireless Settings**
3. Confirm the **2.4 GHz** band is enabled
4. If both bands share the same SSID, create a separate SSID for 2.4 GHz (for example, `Home-Network` and `Home-Network-5G`)
5. Connect the printer to the 2.4 GHz SSID using the Wireless Setup Wizard

HP LaserJet Pro and PageWide models generally support both bands — check your printer's specifications if unsure.

### Step 5 — Run HP Print and Scan Doctor

If the above steps do not resolve the issue, HP Print and Scan Doctor can identify driver problems, port mismatches, and network configuration errors that are not visible through the printer's own setup menu.

1. Download **HP Print and Scan Doctor** from [support.hp.com](https://support.hp.com)
2. Run the file — no installation required
3. Click **Start** and wait for it to detect your HP printer
4. If the printer is not detected, click **My printer is not listed** and enter the printer's IP address (found by printing the Wireless Network Test Report)
5. Select **Fix Printing** and follow the prompts

The tool reinstalls the wireless driver, resets the port assignment, and re-establishes the connection between Windows and the printer.

## How to verify the fix

After reconnecting:

1. Print the **Wireless Network Test Report** from the printer's control panel (**Settings** → **Print Reports** → **Wireless Test Report**)
2. Confirm the report shows: **Pass** for all tests, the correct SSID, and an assigned IP address
3. On Windows, go to **Settings** → **Bluetooth & devices** → **Printers & scanners** and confirm the HP printer shows **Ready**
4. Send a test print

## Frequently asked questions

**HP printer connects to Wi-Fi but won't print.**
A connected printer that won't print is usually an issue with the printer's IP address changing after a router restart. Check the IP address in the printer's Network menu and compare it to the port listed under **Printer Properties** → **Ports** in Windows. Update the port if they differ, or configure a static IP address in the router.

**HP printer shows connected on the printer screen but offline in Windows.**
The printer's wireless light and screen show the Wi-Fi connection. The offline status in Windows is separate — it reflects whether Windows can communicate with the printer at its current IP address. Run HP Print and Scan Doctor to resync the printer's IP address with Windows.

**Wi-Fi password was changed and now the printer won't connect.**
The printer stores the previous password. Run the Wireless Setup Wizard, select your network, and enter the new password. The printer will not prompt automatically for a new password — you must initiate this manually through the wizard.
