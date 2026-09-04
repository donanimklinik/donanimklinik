---
title: "How to Set Up a WiFi Router"
description: "New WiFi router? This guide covers every step: connecting to your modem, accessing the admin panel, and securing your network."
category: networking
pillar: "Router Setup & Configuration"
status: published
official_source_url: "https://kb.netgear.com/23429/How-do-I-set-up-and-install-my-NETGEAR-router"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 7
schema_type: HowTo
featured: false
top_search_queries:
  - "how to set up wifi router"
  - "router setup"
  - "how to setup a router"
  - "wifi router setup"
  - "how to set up internet router"
howto_steps:
  - name: "Position the router and connect it to power"
    text: "Place the router in a central location — not inside a cabinet or behind a TV. Keep it elevated and away from walls. Connect the power adapter and turn it on. Wait 60 seconds for the router to fully boot before proceeding."
  - name: "Connect the router to your modem with an Ethernet cable"
    text: "Plug one end of the Ethernet cable into your modem's LAN or Ethernet port. Plug the other end into the router's WAN port (also labelled Internet — usually a different color from the LAN ports). The router's WAN LED should light up within 30 seconds."
  - name: "Connect your computer to the router"
    text: "For initial setup, use a wired connection: plug an Ethernet cable from any router LAN port into your computer. If you use WiFi, connect to the router's default network — the network name and temporary password are printed on the label on the bottom of the router."
  - name: "Open the router admin panel"
    text: "Open a web browser and go to the router's admin address — typically 192.168.1.1 or 192.168.0.1 (check the label on your router). Log in with the default credentials printed on the label (usually admin/admin or admin/password). Most routers also offer a setup wizard on first login."
  - name: "Configure your WiFi name (SSID) and password"
    text: "In the admin panel, go to Wireless or WiFi Settings. Change the network name (SSID) to a name you will recognise. Set a strong password — at least 12 characters, mixing letters, numbers, and symbols. Select WPA2-Personal (AES) or WPA3 as the security type. Save and apply settings."
  - name: "Connect your devices to the new network"
    text: "On each device, open WiFi settings and select your new network name. Enter the password you set. For the best performance, connect desktop computers and smart TVs via Ethernet cable — reserve WiFi bandwidth for phones and laptops."
faq:
  - q: "What is the difference between the WAN port and LAN ports on a router?"
    a: "The WAN port connects the router to your modem and receives your internet connection from the ISP. LAN ports connect devices like computers and smart TVs directly to the router via Ethernet. Plugging the modem cable into a LAN port instead of the WAN port is the most common setup mistake."
  - q: "What is the default admin address for most routers?"
    a: "Most routers use 192.168.1.1 or 192.168.0.1 as their admin address. Type this directly into a browser's address bar (not a search engine). The exact address is printed on the label on the bottom of the router."
  - q: "What Wi-Fi security type should I choose when setting up my router?"
    a: "Choose WPA2-Personal (AES) for broad compatibility with all modern devices. WPA3 is more secure but not supported by older devices. Never use WEP, as it is easily broken. Leave security disabled only if you intend to use a completely isolated guest network."
  - q: "How do I change my Wi-Fi name and password after the router is already set up?"
    a: "Log into the router admin panel by typing 192.168.1.1 in a browser, navigate to Wireless or Wi-Fi Settings, update the SSID and password fields, and click Save. All devices will need to reconnect using the new password."
  - q: "Should I keep both 2.4 GHz and 5 GHz bands on my router?"
    a: "Yes. Keep both bands active. The 5 GHz band offers faster speeds for devices close to the router. The 2.4 GHz band has better range for devices further away. Give each band a different name so you can manually choose which band each device connects to."
---

Setting up a new WiFi router takes under 15 minutes when you follow the steps in the right order. According to NETGEAR's official installation documentation, the most common setup mistakes are plugging the Ethernet cable into the wrong port, skipping the admin panel step, and leaving the default password unchanged.

![WiFi router setup in 5 steps: position router centrally, connect to modem, open admin panel at 192.168.1.1, set WiFi name and password, connect all devices](/images/setup-wifi-router-steps.svg)

## What you need before starting

- **WiFi router** (new or factory-reset)
- **Modem** — provided by your ISP or purchased separately
- **Ethernet cable** — to connect the modem and router (usually included with the router)
- **ISP connection** — the coaxial or fiber cable from your wall that connects to the modem

If your ISP provided a combined modem-router (gateway) device, see the [Router and Modem Setup guide](/networking/router-setup-configuration/how-to-set-up-router-and-modem/) instead.

## How to set up a WiFi router

### Step 1 — Position the router and connect power

Router placement directly affects signal strength and coverage.

**Where to place it:**
- A central location in your home — the signal radiates outward in all directions
- An elevated surface (shelf or desk) — not on the floor
- Away from thick walls, microwaves, baby monitors, and cordless phones
- Not inside a cabinet or entertainment unit — heat buildup reduces performance

Connect the power adapter to the router and plug it into the wall. Turn the router on using the power button if it has one. Wait **60 seconds** for it to fully boot — the LEDs on the front panel will stabilise when it is ready.

### Step 2 — Connect the router to your modem

This is the most critical physical step. Using the Ethernet cable:

1. Plug one end into the **modem's LAN or Ethernet port** (a single port on the modem, separate from the coax/phone cable input)
2. Plug the other end into the **router's WAN port** — this is usually:
   - Labelled **WAN**, **Internet**, or **INTERNET**
   - A different color from the four LAN ports (often blue or yellow)
   - Located separately from the other ports

The router's **WAN LED** or **Internet LED** should light up within 30 seconds. A solid or blinking light confirms the modem and router are communicating.

### Step 3 — Connect your computer to the router

For initial setup, a **wired connection** is more reliable than WiFi:

1. Plug an Ethernet cable from any **LAN port** on the router into your computer
2. If your computer does not have an Ethernet port, connect to the router's **default WiFi network** — the network name and temporary password are printed on the label on the bottom or back of the router

The default network name typically looks like `NETGEAR-xxxx`, `TP-Link_xxxx`, or `ASUS_xxxx`.

### Step 4 — Access the router admin panel

![Router admin panel wireless settings: change SSID network name, set security to WPA2-Personal AES, enter strong password minimum 12 characters, apply settings](/images/wifi-settings-panel.svg)

1. Open any web browser (Chrome, Edge, Firefox)
2. Type the router's admin address in the address bar — do **not** search for it, type it directly:
   - **192.168.1.1** — most common (NETGEAR, TP-Link, Linksys)
   - **192.168.0.1** — ASUS, D-Link, some others
   - Check the label on the bottom of your router if neither works
3. A login page appears — enter the default credentials from the router label:
   - Username: typically `admin`
   - Password: typically `admin`, `password`, or printed on the label
4. On first login, most routers launch a **Setup Wizard** automatically — follow its prompts

### Step 5 — Set your WiFi name and password

This is the most important security step.

1. Navigate to **Wireless** or **WiFi Settings** in the admin panel
2. **Network Name (SSID):** Change from the default to a name you will recognise — avoid using your name or address
3. **Security:** Select **WPA2-Personal (AES)** — the most widely compatible secure option. If all your devices are recent (2019 or newer), WPA3 provides better security
4. **Password:** Set a strong password — at least 12 characters with letters, numbers, and a symbol
5. Click **Save** or **Apply**

Your router will briefly restart to apply the new settings. Reconnect your devices using the new network name and password.

### Step 6 — Connect your devices

1. On each phone, laptop, or tablet, open **WiFi Settings**
2. Select your new network name from the list
3. Enter the password you just set
4. Verify internet access by opening a browser

**For best performance:**
- Connect desktop computers, smart TVs, and game consoles via **Ethernet cable** to the router's LAN ports
- Reserve WiFi bandwidth for devices that cannot use cables

## How to verify the setup

1. Open a browser on any device and load a page
2. Open Command Prompt (Windows) or Terminal (Mac) and run `ping 8.8.8.8` — you should see replies, not timeouts
3. Check the router admin panel — the **WAN Status** or **Internet Status** section should show a valid external IP address

## Frequently asked questions

**The router's WAN LED is not lighting up.**
Check that the Ethernet cable is plugged into the WAN/Internet port on the router, not one of the LAN ports. Also confirm the modem is powered on and fully booted. Try a different Ethernet cable — cable faults are common.

**I can connect to the router but have no internet.**
The modem may not be recognising the new router. Restart the modem (unplug for 30 seconds, replug), then restart the router. Some ISPs require the modem to learn the new router's MAC address — a modem restart forces this.

**I cannot reach 192.168.1.1.**
Ensure your computer is connected to the router (not a different network). Some routers use a different address — check the label on the router bottom. If still unreachable, hold the router's reset button for 10 seconds to restore factory defaults.

**Should I change the router's admin password?**
Yes — immediately after setup, go to **Administration** or **Advanced** in the admin panel and change the admin login password. Leaving it at the default exposes your router to anyone on your local network.
