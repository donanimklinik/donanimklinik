---
title: "Brother Printer Not Connecting to WiFi — Fix"
description: "Brother printer stuck on 'Connecting WLAN' or won't find your network? Follow these official Brother steps to restore the wireless connection."
category: peripherals
pillar: "Printer Errors"
status: published
official_source_url: "https://support.brother.com/g/s/en/install/win/index.htm"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "brother printer not connecting to wifi"
  - "brother printer won't connect to wifi"
  - "brother printer stuck on connecting wlan"
  - "cannot connect brother printer to wifi"
howto_steps:
  - name: "Restart the printer, router, and computer"
    text: "Turn off the Brother printer. Unplug the router and wait 60 seconds. Plug the router back in and wait for the connection lights to stabilise. Turn on the Brother printer and wait for it to complete startup before attempting reconnection."
  - name: "Run the Brother Wireless Setup Wizard"
    text: "On the printer's control panel, press Menu or the Settings icon, navigate to Network > WLAN or Wi-Fi, and select Setup Wizard. Select your network from the list and enter your Wi-Fi password. The printer attempts to connect and confirms with a Connected message."
  - name: "Reset the Brother printer's network settings"
    text: "On the control panel, go to Menu > Network > Network Reset. Confirm the reset. This clears all stored Wi-Fi credentials and returns the network adapter to factory defaults. After the reset, run the Setup Wizard to reconnect."
  - name: "Check the 2.4 GHz band and WPA2 security"
    text: "Brother consumer printers support only the 2.4 GHz Wi-Fi band. Log into your router and confirm the 2.4 GHz band is active. Set the security mode to WPA2-Personal (AES). Brother printers may fail to connect to WPA3 networks or networks with mixed WPA/WPA2 settings."
  - name: "Use Brother iPrint&Scan to reinstall the connection"
    text: "Download Brother iPrint&Scan from brother.com. Open the application, click Add Printer, and follow the on-screen guide to locate the Brother printer on the network and install the correct driver and connection settings for your Windows version."
faq:
  - q: "Why won't my Brother printer connect to Wi-Fi?"
    a: "The most common causes are outdated credentials stored on the printer after a router change, a 5 GHz band incompatibility (Brother printers only support 2.4 GHz), or a router security setting like WPA3 that the printer cannot handle. Reset the network settings and reconnect using the control panel Wireless Setup Wizard."
  - q: "Do Brother printers work on 5 GHz Wi-Fi?"
    a: "No. Brother consumer printers support only the 2.4 GHz Wi-Fi band. If your router broadcasts both bands under the same network name, the printer may try to connect to the 5 GHz band and fail. Create a separate 2.4 GHz SSID or connect the printer with WPS."
  - q: "How do I reset the Wi-Fi settings on a Brother printer?"
    a: "On the control panel, go to Menu > Network > Network Reset. Confirm the reset. This clears all stored wireless credentials and returns the network adapter to factory defaults. After the reset, run the Wireless Setup Wizard to reconnect with your current password."
  - q: "What does 'Connecting WLAN' mean on a Brother printer?"
    a: "Connecting WLAN means the printer is actively trying to establish a wireless connection. If it stays at this message without connecting, the credentials are wrong, the network name does not match, or the router settings are incompatible. Try resetting the network settings and reconnecting."
  - q: "Can Brother iPrint&Scan fix Wi-Fi connection problems?"
    a: "Yes. Brother iPrint&Scan includes a built-in setup wizard that can detect the printer on the network and reinstall the connection with the correct driver and settings. Download it from brother.com if manual setup through the control panel does not work."
---

A Brother printer that won't connect to Wi-Fi displays a blinking WLAN light, shows "Connecting WLAN" on the control panel, or appears offline in Windows. This is one of the most reported Brother printer issues after a router change, firmware update, or network password update.

According to Brother's official wireless troubleshooting documentation, the most common causes are outdated credentials stored on the printer, 5 GHz band incompatibility, and router security settings that block the printer's wireless adapter.

![Brother printer not connecting to WiFi: use wireless setup wizard on printer or Brother iPrint app — factory reset clears old WiFi settings, 2.4 GHz only, WPA2 required](/images/brother-printer-wifi-connect.svg)

## What causes Brother printer Wi-Fi connection failures

Brother printers store the Wi-Fi SSID and password internally. Connection failures occur when:

- **Router or password changed** — the printer still holds old credentials
- **5 GHz only network** — Brother consumer models (DCP, MFC, HL series) support only 2.4 GHz
- **WPA3 security** — many Brother models cannot connect to WPA3-encrypted networks
- **DHCP lease expired** — the printer's IP address reservation expired and the slot was taken
- **Interference or signal weakness** — the printer is too far from the router

## How to fix Brother printer not connecting to Wi-Fi

### Step 1 — Restart the printer, router, and computer

Brother's support documentation requires a full three-device restart as the first troubleshooting step. Many connection failures are temporary and resolve with this alone.

1. Press the **Power** button to turn off the Brother printer
2. Unplug the router's power cable from the wall
3. Wait **60 seconds**
4. Plug the router back in — wait until all indicator lights are stable (30–60 seconds)
5. Turn on the Brother printer and allow it to complete its startup sequence (up to 90 seconds)
6. Restart the Windows computer as well

After all three devices have restarted, check the **WLAN** or **Wi-Fi** indicator on the printer. A solid light indicates a successful connection.

### Step 2 — Run the Wireless Setup Wizard

If the printer did not automatically reconnect, use the built-in Setup Wizard to enter your network credentials manually.

**On Brother models with a touchscreen (MFC-J series, DCP-J series):**
1. Tap **Settings** or the **wrench icon**
2. Tap **All Settings** → **Network** → **WLAN** (or **Wi-Fi**)
3. Tap **Setup Wizard**
4. Select your Wi-Fi network from the list
5. Enter the Wi-Fi password — it is case-sensitive
6. Tap **OK** and wait for the **Connected** confirmation

**On Brother models with a numeric keypad:**
1. Press **Menu**
2. Use the arrow keys to navigate to **Network** and press **OK**
3. Navigate to **WLAN** → **Setup Wizard**
4. Select your network and enter the password

After the wizard confirms a connection, print a **Network Configuration Report** (Menu → Print Reports → Network Config) to verify the IP address and SSID.

### Step 3 — Reset the network settings

If the Setup Wizard fails or the printer keeps disconnecting, a network reset clears all stored credentials and resolves conflicts from previous network configurations.

1. Press **Menu** on the printer's control panel
2. Navigate to **Network** → **Network Reset**
3. Press **Yes** to confirm

The printer's wireless adapter resets — the WLAN light will blink as it restarts. After the reset, the printer has no stored network information. Run the **Setup Wizard** again to reconnect.

### Step 4 — Check router band and security settings

**Wi-Fi band:** Brother consumer printers — including DCP, MFC, and most HL wireless models — support only **2.4 GHz**.

1. Log into your router's admin page (usually `192.168.1.1` or `192.168.0.1`)
2. Go to **Wireless Settings** or **Wi-Fi**
3. Confirm the **2.4 GHz band** is enabled
4. If both bands use the same SSID, create separate SSIDs (for example `Network-2.4G` and `Network-5G`) so you can connect the printer specifically to 2.4 GHz

**Security type:** Set the 2.4 GHz network security to **WPA2-Personal (AES)**. Brother printers may fail to connect to:
- **WPA3** networks
- **WPA/WPA2 mixed mode** networks
- Networks using **TKIP** encryption

After changing the router settings, run the **Setup Wizard** on the printer again.

### Step 5 — Use Brother iPrint&Scan

Brother iPrint&Scan is the official Brother application for managing printer connections and settings on Windows and Mac.

1. Download **Brother iPrint&Scan** from [brother.com](https://www.brother.com)
2. Open the application
3. Click **Add Printer** or the printer icon
4. The application scans the network for Brother devices
5. Select your printer and follow the prompts to install the driver and configure the connection

If the printer is not found on the network, iPrint&Scan offers a USB connection option to install the driver locally, after which you can switch to wireless.

## How to verify the fix

1. Print a **Network Configuration Report**: **Menu** → **Print Reports** → **Network Config**
2. Confirm the report shows:
   - **Connection Status: Connected**
   - Your correct **SSID**
   - An assigned **IP address** (not 0.0.0.0)
3. On Windows, go to **Settings** → **Bluetooth & devices** → **Printers & scanners** and confirm the Brother printer shows **Ready**
4. Send a **test print**

## Frequently asked questions

**Brother printer stuck on "Connecting WLAN" and never connects.**
This indicates the printer can see the network but cannot complete the handshake. The most common causes are an incorrect password, a WPA3 or mixed-mode security setting, or a 5 GHz only broadcast. Verify the password, set router security to WPA2 (AES), and confirm the 2.4 GHz band is active.

**Brother printer connects to Wi-Fi but won't print from Windows.**
After reconnecting, the printer may have a new IP address. In Windows, go to **Devices and Printers**, right-click your Brother printer, select **Printer Properties** → **Ports** tab, and update the IP address to match what is shown on the Network Configuration Report.

**Brother printer drops Wi-Fi connection after every restart.**
A printer that reconnects after manual setup but drops the connection on restart usually has a changing IP address (dynamic DHCP). Log into your router and set a **DHCP reservation** for the printer's MAC address (shown on the Network Configuration Report) to give it a permanent IP.
