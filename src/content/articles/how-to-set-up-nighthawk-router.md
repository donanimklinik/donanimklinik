---
title: "How to Set Up a Nighthawk Router"
description: "Set up your NETGEAR Nighthawk router using the Nighthawk app or web browser. Covers physical installation and WiFi configuration."
category: networking
pillar: "Router Setup & Configuration"
status: published
official_source_url: "https://kb.netgear.com/000057419/How-do-I-set-up-my-NETGEAR-Nighthawk-router-for-the-first-time"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "nighthawk router setup"
  - "netgear nighthawk setup"
  - "nighthawk setup"
  - "how to set up nighthawk router"
  - "netgear nighthawk router setup"
howto_steps:
  - name: "Connect the Nighthawk to your modem"
    text: "Unplug your modem. Connect an Ethernet cable from the modem's Ethernet port to the Nighthawk router's yellow Internet (WAN) port. Plug the modem back in and wait 60 seconds. Then plug the Nighthawk into power using the included AC adapter and wait 60 seconds for the Power LED to turn solid white or green."
  - name: "Connect to the Nighthawk default WiFi network"
    text: "On your phone, open WiFi settings and connect to the Nighthawk's default network. The WiFi name (SSID) and WiFi password (WiFi Passphrase) are printed on the label on the bottom of the router. The default name looks like NETGEAR_xxxx or Nighthawk_xxxx."
  - name: "Open the Nighthawk app and follow setup"
    text: "Download the Nighthawk app (iOS or Android). Open the app and tap Set Up a New Router. The app detects the Nighthawk automatically. Follow the prompts to set a new WiFi name, WiFi password, and admin password. The app also updates the router firmware if a newer version is available."
  - name: "Alternatively, set up through the web browser"
    text: "Open a browser and go to routerlogin.net or type 192.168.1.1. Log in with username admin and password password (or the label password). The Smart Setup Wizard runs automatically. Follow the wizard to configure internet connection type, WiFi name, and password."
  - name: "Reconnect all devices to the new WiFi network"
    text: "After setup completes, the Nighthawk broadcasts with your new WiFi name. On each device, open WiFi settings, select your new network name, and enter the new password. Connect desktop computers and smart TVs to the Nighthawk's Ethernet ports for the fastest speeds."
---

The NETGEAR Nighthawk line includes high-performance routers (RAX series, R7000, R8000, and others) designed for demanding home networks. According to NETGEAR's official Nighthawk documentation, setup using the Nighthawk app takes under 10 minutes and is the recommended method for first-time installation.

![Home network topology: Internet connects to modem, modem connects to router via Ethernet, router broadcasts WiFi to devices](/images/router-network-topology.svg)

## Nighthawk models covered

This guide applies to all NETGEAR Nighthawk routers including:
- Nighthawk RAX series (WiFi 6 and WiFi 6E)
- Nighthawk R7000, R7000P, R7800
- Nighthawk R8000, R8500
- Nighthawk XR series (gaming routers)

## How to set up a Nighthawk router

### Step 1 — Connect the hardware

1. **Unplug your modem** — do not skip this. The modem needs to reset to accept the new router
2. **Remove any existing router** from the modem connection
3. Connect the included **Ethernet cable**:
   - One end into the **modem's Ethernet port**
   - Other end into the Nighthawk's **yellow Internet (WAN) port**
4. **Plug the modem back in** — wait **60 seconds**
5. **Plug the Nighthawk in** using the included power adapter — wait **60 seconds**
6. Check the LEDs:
   - **Power LED** — solid white or green when ready
   - **Internet LED** — solid when the router received an IP address from the modem

### Step 2 — Connect to the default Nighthawk network

1. On your phone or computer, open **WiFi Settings**
2. Look for the Nighthawk's default network — typically `NETGEAR_xxxx` or `Nighthawk_xxxx`
3. The **WiFi Passphrase** is printed on the **label on the bottom of the router**
4. Connect using that passphrase

### Step 3a — Set up with the Nighthawk app

The app is the fastest and most guided method:

1. Download the **Nighthawk** app:
   - **iOS:** App Store → search "Nighthawk"
   - **Android:** Google Play → search "Nighthawk"
2. Open the app and tap **Set Up a New Router**
3. The app detects your Nighthawk automatically over WiFi
4. Follow the step-by-step prompts:
   - **WiFi Name (SSID):** enter your chosen network name
   - **WiFi Password:** enter a strong password (12+ characters)
   - **Admin Password:** set a unique login password for the router admin panel
5. The app checks for firmware updates and installs them automatically
6. Setup completes with a success screen — your Nighthawk is ready

### Step 3b — Set up with a web browser

1. Open any browser and go to **routerlogin.net** or type **192.168.1.1**
2. Enter the default admin credentials:
   - **Username:** admin
   - **Password:** password (or the password on the router label)
3. The **Smart Setup Wizard** launches automatically
4. The wizard walks through:
   - **Internet connection check** — confirms the Nighthawk can reach the internet
   - **WiFi name and password setup**
   - **Admin password change**
5. Click **Apply** to save — the router restarts with the new settings

### Step 4 — Connect your devices

After setup, the Nighthawk broadcasts with your new WiFi name:

1. On each device, open **WiFi Settings**
2. Select your new network name
3. Enter the password you set during setup

**Performance tips for Nighthawk:**
- Connect the **2.4 GHz band** to: smart home devices, IoT sensors, devices far from the router
- Connect the **5 GHz band** to: laptops, phones, streaming boxes near the router
- Use **Ethernet cables** for desktop computers and game consoles — Gigabit Ethernet eliminates WiFi congestion for high-bandwidth devices

## Advanced Nighthawk features (optional)

**MU-MIMO and Beamforming:**
These are enabled by default on Nighthawk routers — they intelligently direct WiFi signal toward devices rather than broadcasting in all directions. Leave them enabled.

**Quality of Service (QoS):**
In the admin panel under **Advanced → Setup → QoS**, you can prioritize gaming, streaming, or voice traffic over other network activity.

**Dynamic QoS:**
Available on newer Nighthawk models — automatically detects and prioritizes bandwidth-intensive applications.

## Frequently asked questions

**The Nighthawk Internet LED is not turning on.**
The modem did not release its IP lease to the new router. Restart the modem: unplug for 30 seconds, plug back in, wait 90 seconds. If the Internet LED stays off, confirm the cable is in the yellow WAN port (not a LAN port) and try a different Ethernet cable.

**The Nighthawk app cannot find my router.**
Make sure your phone is connected to the Nighthawk's WiFi. Turn off mobile data on your phone — the app only works over the local WiFi connection, not the cellular network. If the app still cannot find it, close and reopen the app.

**I need to reset the Nighthawk to factory settings.**
Press and hold the **Reset button** on the back of the router for 10 seconds until the Power LED blinks. The router resets and reboots with factory defaults — you will need to redo the setup.
