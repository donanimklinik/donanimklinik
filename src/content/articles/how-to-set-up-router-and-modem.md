---
title: "How to Set Up Router and Modem Together"
description: "How to set up a modem and router together for the first time, covering physical connections, admin panel access, and WiFi configuration."
category: networking
pillar: "Router Setup & Configuration"
status: published
official_source_url: "https://kb.netgear.com/21618/How-do-I-connect-a-NETGEAR-router-to-my-existing-home-network"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 6
fix_summary: "Connect modem to router's WAN port, wait 2 minutes for both to boot, then connect your device to the router's WiFi — check the router's bottom label for the default WiFi name and password."
fix_time_display: "~10 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "how to set up a router and modem"
  - "how to setup modem and router"
  - "setting up router and modem"
  - "how to set up modem and router"
  - "router and modem setup"
howto_steps:
  - name: "Activate the modem with your ISP"
    text: "Before connecting anything, call your ISP or log into your ISP account online and register the modem's MAC address (printed on the modem label). ISPs require the modem to be registered before it can connect to the internet. Cable ISPs (Xfinity, Spectrum, Cox) can usually be activated online in a few minutes."
  - name: "Connect the ISP cable to the modem"
    text: "Connect the cable from your wall outlet to the modem's input port: coaxial cable for cable internet, phone cable (RJ11) for DSL, or fiber cable for fiber internet. Plug the modem into power. Wait 2 minutes for the modem to connect to your ISP — the Online or Internet LED should become solid."
  - name: "Connect the modem to the router via Ethernet"
    text: "Take the included Ethernet cable. Plug one end into the modem's Ethernet/LAN port (the only Ethernet port on most modems). Plug the other end into the router's WAN port (labelled WAN, Internet, or a different color from the LAN ports). Then plug the router into power."
  - name: "Wait for the router to get an IP address"
    text: "After powering on the router, wait 90 seconds. The router's WAN or Internet LED should turn solid green, indicating the modem assigned it an IP address. If the LED stays red or amber, restart the modem (unplug 30 seconds), wait 60 seconds, then restart the router."
  - name: "Configure WiFi in the router admin panel"
    text: "Connect a device to the router's default WiFi (name and password on the router label). Open a browser and go to 192.168.1.1 or 192.168.0.1. Log in and set a new WiFi name (SSID) and strong password. Apply the settings and reconnect all devices to the new network."
faq:
  - q: "Do I need to register a new modem with my ISP before it works?"
    a: "Yes. Most cable ISPs (such as Xfinity, Spectrum, and Cox) require the modem's MAC address to be registered before it can connect to the internet. You can usually do this online through your ISP's account portal. DSL and fiber providers have different activation processes."
  - q: "What is the correct order to power on a modem and router?"
    a: "Always power on the modem first. Wait 60 to 90 seconds until the modem's Online or Internet LED is solid. Then power on the router and wait 60 seconds. This order ensures the modem has a valid ISP connection before the router requests an IP address from it."
  - q: "What does the WAN LED on the router indicate?"
    a: "A solid green WAN LED means the router successfully received an IP address from the modem and has an active internet connection. A red or amber WAN LED means the connection failed, usually because the modem is not fully online or the Ethernet cable is in the wrong port."
  - q: "Can I use any modem with any router?"
    a: "Generally yes for cable internet. The modem connects to the ISP and the router to the modem via a standard Ethernet cable. However, ensure the modem is certified or approved by your ISP, as some providers only support their own equipment or a list of approved third-party modems."
  - q: "My router gets internet but the WAN LED is amber or red. Is that normal?"
    a: "A green WAN LED is the expected indicator of a successful connection. Amber or red can indicate partial connection or that the router received an IP but is flagging a quality issue. Check your ISP connection and the Ethernet cable between modem and router if this persists."
---

Setting up a modem and router together involves two separate processes: getting the modem online with your ISP, then connecting the router to share that connection. According to NETGEAR's networking documentation, the most common mistake is connecting the router before the modem has fully registered with the ISP — which causes the internet connection to fail even when all cables are correctly installed.

![Correct power-on sequence: unplug both, plug modem first and wait 60 seconds for Online LED, then plug router and wait 60 seconds, check WAN LED green](/images/modem-router-power-sequence.svg)

## Understanding the two-device setup

| Device | Role | Connects to |
|--------|------|-------------|
| Modem | Converts ISP signal to Ethernet | Wall (ISP cable) + Router |
| Router | Shares connection, creates WiFi | Modem + All home devices |

**Note:** If your ISP gave you a single combined device, it is a **gateway** (modem-router combo) — you only need one device, not two. This guide covers separate modem and router devices.

## How to set up a modem and router together

### Step 1 — Activate the modem with your ISP

A modem must be registered with your ISP before it can connect to the internet. This is done using the modem's **MAC address** — a unique identifier printed on the label on the modem.

**For cable internet (Xfinity, Spectrum, Cox, Optimum):**
1. Log into your ISP's account portal
2. Look for **Manage Equipment**, **My Devices**, or **Activate Equipment**
3. Enter the modem's **MAC address** (labelled CM MAC or HFC MAC on the modem)
4. Follow the activation steps — takes 5–15 minutes

**For fiber or DSL:**
Your ISP may need to activate the line remotely. Call the ISP support line and provide the modem model and MAC address. They activate the line from their end.

Do not skip this step — an unregistered modem cannot get online regardless of how correctly everything else is connected.

### Step 2 — Connect the ISP cable to the modem

1. Locate the **cable coming from your wall** — this is your ISP's signal:
   - **Coaxial (round, copper pin center)** — for cable internet
   - **RJ11 (phone jack, narrow)** — for DSL
   - **SC/APC or LC optical connector** — for fiber
2. Connect this cable to the **input port** on the modem (labelled `Cable In`, `DSL`, or `Fiber In`)
3. Plug the modem into a power outlet
4. Wait **2–3 minutes** for the modem to connect to your ISP

**Modem LEDs to watch:**
- `Power` — solid green when powered on
- `DS/US` (Downstream/Upstream) or `Cable` — solid when connected to ISP
- `Online` or `Internet` — solid green means successfully connected to ISP ✓

Do not proceed until the **Online LED is solid**.

### Step 3 — Connect the modem to the router

1. Take the Ethernet cable (usually included with the router)
2. **Modem end:** plug into the modem's **Ethernet/LAN port** — the single Ethernet port on the modem body (not the coax input)
3. **Router end:** plug into the router's **WAN port** — labelled `WAN`, `Internet`, or a distinct color (often yellow or blue)

After plugging in, power on the router.

### Step 4 — Wait for the router to get an IP address

1. Power on the router and wait **90 seconds**
2. Watch the router's **WAN** or **Internet** LED:
   - **Solid green** — modem assigned the router an IP address — connection successful ✓
   - **Blinking amber** — still negotiating
   - **Solid amber/red** — failed to get IP address (see FAQ)
3. If the WAN LED does not turn green within 2 minutes, restart the modem:
   - Unplug modem power, wait 30 seconds, replug
   - Wait 60 seconds for modem to reconnect to ISP
   - The router should then receive an IP address

### Step 5 — Access the router admin panel and set up WiFi

1. Connect your laptop or phone to the router's default WiFi network:
   - Network name and temporary password are on the label on the **bottom of the router**
2. Open a browser and go to **192.168.1.1** or **192.168.0.1** (check the router label)
3. Log in with the default admin credentials (on the label — typically `admin` / `admin` or `admin` / `password`)
4. The Setup Wizard launches — follow its steps:
   - **Internet Connection Type:** usually set automatically (DHCP for cable, PPPoE for DSL — your ISP tells you which)
   - **WiFi Network Name (SSID):** change from default
   - **WiFi Password:** set a strong password (12+ characters)
   - **Admin Password:** change from default
5. Apply settings — router restarts with the new configuration

## How to verify the full setup

After the router restarts:

1. **Internet LED on modem:** solid green
2. **WAN LED on router:** solid green
3. **WiFi:** your new network name appears on connected devices
4. **Browser test:** open any website — pages load normally
5. **Command Prompt:** run `ping 8.8.8.8` — get replies with response times

## Frequently asked questions

**The modem online LED is solid but the router WAN LED is amber.**
Restart the modem without changing anything (unplug 30 seconds, replug). Some modems cache the MAC address of the previous device and take up to 2 minutes to accept the new router. Give the router 2 minutes after the modem fully reboots.

**The ISP says my modem is not compatible.**
ISPs maintain a list of approved modem models. Check your ISP's compatibility list (usually on their website under Approved Modems or Equipment). If your modem is not listed, you must use the ISP's provided equipment or purchase a compatible model.

**Do I need a modem if my ISP provided an all-in-one gateway?**
No. An ISP gateway (Arris, Netgear CM1000, Motorola MB8611) combines the modem and router into one device. You only need a separate router if you want to replace the ISP's gateway router with a better one.
