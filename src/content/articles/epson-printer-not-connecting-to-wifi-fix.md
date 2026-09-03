---
title: "Epson Printer Not Connecting to WiFi — Fix"
description: "Epson printer won't connect to Wi-Fi? These official Epson steps walk you through reconnecting your wireless printer to your home or office network."
category: peripherals
pillar: "Printer Errors"
status: published
official_source_url: "https://epson.com/support"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "epson printer not connecting to wifi"
  - "epson printer won't connect to wifi"
  - "epson printer wifi not working"
  - "my epson printer is not connecting to wifi"
howto_steps:
  - name: "Restart the printer and router"
    text: "Turn off the Epson printer. Unplug the router and wait 60 seconds. Plug the router back in and wait for all lights to stabilise. Turn on the Epson printer and wait for it to complete its startup sequence before attempting to reconnect."
  - name: "Run the Epson Wi-Fi Setup Wizard"
    text: "On the printer's control panel, press the Home button, select Wi-Fi Setup or Network, then select Wi-Fi Setup Wizard. Select your network from the list and enter your Wi-Fi password. The printer attempts to connect and displays a confirmation when successful."
  - name: "Reset the printer's network settings"
    text: "On the control panel, go to Settings > Network Settings > Restore Default Settings (or Wi-Fi Setup > Other Methods > Restore Wi-Fi Default Settings). After the reset completes, run the Wi-Fi Setup Wizard to reconnect with fresh settings."
  - name: "Check the Wi-Fi band and router security settings"
    text: "Epson consumer printers support only the 2.4 GHz band. Log into your router and confirm the 2.4 GHz band is enabled. Also check that the router security is set to WPA2-Personal (AES) — some Epson models have difficulty connecting to networks using mixed WPA/WPA2 or WPA3 security settings."
  - name: "Use Epson Connect to re-register the printer"
    text: "Download Epson Connect Printer Setup from epson.com. Run the utility and follow the prompts to register or re-register your printer on the Epson network. This resets the cloud connection and re-establishes full wireless functionality including mobile printing."
---

Epson printers lose their Wi-Fi connection after a router change, password update, or network reset. The printer's wireless light may blink or remain off, and Windows shows the printer as offline or unavailable.

According to Epson's official wireless troubleshooting documentation, the most common causes are stale network credentials stored on the printer, 5 GHz band incompatibility, and router security settings that conflict with the printer's wireless adapter.

![Epson printer not connecting to WiFi: use WiFi Setup on printer control panel or Epson Smart Panel app — blue steady light means connected, 2.4 GHz only, WPA2 required](/images/epson-printer-wifi-connect.svg)

## What causes Epson printer Wi-Fi connection failures

Epson printers store the network name (SSID) and password internally. Connection failures occur when:

- **The Wi-Fi password changed** — the printer still holds the old credentials
- **The router was replaced** — even with the same SSID, a new router has a different configuration
- **5 GHz band only** — Epson consumer models (EcoTank, WorkForce, Expression) support only 2.4 GHz
- **Router security type incompatibility** — WPA3 or mixed WPA/WPA2 can block some Epson models
- **Temporary network error** — the printer's wireless adapter locked after a power interruption

## How to fix Epson printer not connecting to Wi-Fi

### Step 1 — Restart the printer and router

Epson's official support guide lists a full restart as the first required step for any wireless connection issue. Many connection failures are temporary and clear on their own after a restart.

1. Press the **Power** button to turn off the Epson printer
2. Unplug the router's power cable from the wall
3. Wait **60 seconds**
4. Plug the router back in and wait until the internet and Wi-Fi lights are stable (30–60 seconds)
5. Turn on the Epson printer and wait for the startup sequence to finish

Check the wireless light on the printer:
- **Solid blue/green** — connected
- **Blinking** — attempting to connect or not connected
- **Off** — wireless is disabled

If the light is off, wireless may have been disabled. Press and hold the **Wi-Fi** button on the printer for 3 seconds to re-enable it.

### Step 2 — Run the Epson Wi-Fi Setup Wizard

If the printer did not automatically reconnect after the restart, use the built-in setup wizard to manually enter your network credentials.

On the **printer's control panel**:

1. Press **Home** (or the menu button)
2. Navigate to **Wi-Fi Setup** or **Network Settings**
3. Select **Wi-Fi Setup Wizard**
4. The printer scans for nearby networks — select your home or office Wi-Fi network
5. Enter the Wi-Fi password carefully (it is case-sensitive)
6. Wait for the printer to confirm the connection

After the setup completes, print the **Network Status Sheet** from **Settings** → **Network Settings** → **Print Status Sheet** to confirm the connection details and IP address.

### Step 3 — Reset network settings and reconnect

If the Setup Wizard fails or shows a connection error, the printer's stored network configuration may be causing conflicts. A network settings reset clears all stored Wi-Fi profiles.

1. On the control panel, go to **Settings** → **Network Settings**
2. Select **Restore Default Settings** or **Wi-Fi Setup** → **Other Methods** → **Restore Wi-Fi Default Settings**
3. Confirm the reset — the printer restarts its wireless adapter
4. Run the **Wi-Fi Setup Wizard** again to reconnect

This step is necessary when the SSID or password has changed and the previous credentials are interfering with the new connection attempt.

### Step 4 — Check Wi-Fi band and router security settings

**Band compatibility:** Epson consumer printers — including EcoTank (ET series), WorkForce, and Expression models — support only the **2.4 GHz** Wi-Fi band. If your router broadcasts exclusively on 5 GHz, the printer cannot connect.

1. Log into your router admin page (usually `192.168.1.1` or `192.168.0.1`)
2. Go to **Wireless Settings**
3. Confirm the **2.4 GHz** band is active and broadcasting
4. If your router uses a single SSID for both bands, create a separate SSID for 2.4 GHz

**Security settings:** Some Epson models have difficulty connecting to networks using **WPA3** or **mixed WPA/WPA2** security.

1. In your router's wireless security settings, set the security type to **WPA2-Personal (AES)** for the 2.4 GHz network
2. Try connecting the Epson printer again using the Setup Wizard

### Step 5 — Use Epson Connect Printer Setup

Epson Connect is Epson's cloud printing platform. If the basic wireless setup steps do not resolve the issue, the Epson Connect setup utility can re-register the printer and restore full wireless functionality.

1. On the Windows PC, go to [epson.com](https://epson.com) and search for **Epson Connect Printer Setup**
2. Download and run the utility
3. Select your Epson printer from the list
4. Follow the prompts to sign into or create an Epson account and register the printer
5. The tool reinstalls the wireless driver and reconnects the printer to the network

## How to verify the fix

1. Print the **Network Status Sheet**: **Settings** → **Network Settings** → **Print Status Sheet**
2. Confirm the sheet shows: **Connection Type: Wi-Fi**, your correct **SSID**, and an assigned **IP address**
3. On Windows, go to **Settings** → **Bluetooth & devices** → **Printers & scanners** and confirm the Epson printer shows **Ready**
4. Send a test print

## Frequently asked questions

**Epson printer connects to Wi-Fi but Windows still shows it offline.**
After reconnecting to Wi-Fi, the printer may have a new IP address that Windows does not recognise. Open **Devices and Printers**, right-click your Epson printer, go to **Printer Properties** → **Ports**, and update the IP address to match the one shown on the Network Status Sheet.

**Epson printer keeps disconnecting from Wi-Fi.**
A printer that repeatedly disconnects usually has a signal strength problem or an IP address that changes with every connection. Check signal strength on the Network Status Sheet — if signal is weak, move the router or printer closer. To stop the IP from changing, log into your router and assign a static IP to the printer using DHCP reservation (bind the IP to the printer's MAC address).

**Epson printer won't connect to Wi-Fi after Windows update.**
Windows updates can change network adapter settings or replace Epson drivers with generic versions. Reinstall the full Epson driver from epson.com, then run the Wi-Fi Setup Wizard again.
