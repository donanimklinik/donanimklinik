---
title: "How to Access Your Router Settings"
description: "How to log in to your router admin panel using 192.168.1.1 or the router's address — on any browser, Windows, Mac, or mobile."
category: networking
pillar: "Router Setup & Configuration"
status: published
official_source_url: "https://kb.netgear.com/27262/How-do-I-log-in-to-my-NETGEAR-router-using-a-web-browser"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "how to access router settings"
  - "access router settings"
  - "how to get into router settings"
  - "router admin panel"
  - "how to access my router"
howto_steps:
  - name: "Find your router's admin address"
    text: "The admin address is printed on the label on the bottom or back of the router. Common addresses are 192.168.1.1 (NETGEAR, TP-Link, Linksys), 192.168.0.1 (ASUS, D-Link), and 192.168.10.1 (some TP-Link models). On Windows, you can also find it by opening Command Prompt and running ipconfig — the Default Gateway line shows the router address."
  - name: "Open a browser and type the address directly"
    text: "Open Chrome, Edge, Firefox, or Safari. Click the address bar and type the router's IP address — for example 192.168.1.1. Do not type it in a search bar and do not add www. Press Enter. A login page appears if the address is correct."
  - name: "Enter the admin username and password"
    text: "Type the admin credentials printed on the router label. The username is usually admin. The password is usually admin, password, or a unique code on the label. If these do not work, someone changed the credentials — reset the router using the reset button on the back (hold 10 seconds)."
  - name: "Navigate to the setting you need to change"
    text: "After logging in, use the menu to find the section you need: Wireless or WiFi Settings for network name and password, WAN or Internet for connection type, Advanced for port forwarding and firewall, Administration for admin password and firmware updates."
---

The router admin panel — also called the router settings page or router dashboard — is accessed through any web browser using the router's local IP address. According to NETGEAR's documentation, the most common mistake is typing the router's address into a search engine instead of the browser's address bar, which takes you to a web search instead of the router login page.

![How to access router settings: open browser, type 192.168.1.1, log in with admin credentials, see router settings panel](/images/router-admin-panel.svg)

## Finding your router's admin address

The admin address is the router's local IP address on your home network. Every router has one, and it is almost always one of these:

| Router Brand | Admin Address | Also try |
|-------------|---------------|----------|
| NETGEAR | 192.168.1.1 or routerlogin.net | — |
| TP-Link | 192.168.0.1 or tplinkwifi.net | 192.168.1.1 |
| ASUS | 192.168.1.1 or router.asus.com | 192.168.0.1 |
| Linksys | 192.168.1.1 or myrouter.local | — |
| D-Link | 192.168.0.1 or dlinkrouter.local | 192.168.1.1 |
| Cisco | 192.168.1.1 | 192.168.15.1 |
| Belkin | 192.168.2.1 | — |

The exact address is always printed on the **label on the bottom or back of the router**.

### Find the address automatically (Windows)

1. Open **Command Prompt** (search `cmd` in the Start menu)
2. Type `ipconfig` and press **Enter**
3. Find the section for your active network connection (Ethernet or WiFi)
4. The **Default Gateway** line shows the router's admin address

```
Default Gateway . . . . . . . . : 192.168.1.1
```

### Find the address automatically (Mac)

1. Open **Terminal** (Finder → Applications → Utilities → Terminal)
2. Type `netstat -nr | grep default` and press **Enter**
3. The first result shows the router's address

## How to access your router settings

### Step 1 — Connect to the router's network

You must be connected to the router — either via **Ethernet cable** or the router's **WiFi network** — to reach the admin panel. You cannot access it over the internet or from a different network.

If you are connected to a WiFi extender or a different router, you may be accessing a different device's admin panel, not your main router.

### Step 2 — Open the router login page

1. Open a web browser — **Chrome, Edge, Firefox, or Safari** all work
2. Click the **address bar** at the top of the browser (where URLs appear)
3. **Type the router address** — for example: `192.168.1.1`
   - Do **not** search for it — type it directly in the address bar
   - Do **not** add `www.` before the address
   - Press **Enter**
4. A router login page appears

**If you see "This site can't be reached" or an error:**
- Try `http://192.168.1.1` (with the `http://` prefix — some browsers block plain IP addresses)
- Try the alternative address (192.168.0.1 if 192.168.1.1 failed, or vice versa)
- Confirm you are connected to the router's network, not a mobile hotspot or VPN

### Step 3 — Log in with admin credentials

Enter the admin username and password:

**Default credentials (printed on the router label):**
- Username: usually `admin`
- Password: usually `admin`, `password`, `1234`, or a unique code on the label

**If the default credentials do not work:**
The password was changed by someone previously. Your options:
1. Try passwords you may have set in the past
2. Check if the password is saved in your browser's saved passwords
3. **Reset the router:** hold the Reset button on the back for 10 seconds — this restores factory defaults including the original admin password (all settings will be lost)

### Step 4 — Navigate to the setting you want to change

After logging in, the admin panel home screen typically shows a status overview. Use the navigation menu to find what you need:

| Section | What you find there |
|---------|---------------------|
| **Wireless / WiFi Settings** | Network name (SSID), WiFi password, security type, channel |
| **WAN / Internet** | Connection type (DHCP/PPPoE), IP address, DNS servers |
| **LAN Settings** | Local IP range, DHCP server settings |
| **Advanced** | Port forwarding, DMZ, firewall rules, QoS |
| **Administration** | Admin password, firmware update, backup/restore settings |
| **Parental Controls** | Website blocking, device scheduling |

## Common router settings to change

**Change WiFi name and password:**
`Wireless Settings` → change SSID and Password → Apply

**Change DNS servers:**
`WAN Settings` or `Internet Settings` → DNS → enter `8.8.8.8` (Google) or `1.1.1.1` (Cloudflare)

**Update firmware:**
`Administration` → `Firmware Update` → Check for Updates → Install

**Set up guest network:**
`Wireless Settings` → `Guest Network` → Enable → set a separate SSID and password

## Frequently asked questions

**The browser says the connection is not private when opening 192.168.1.1.**
This is normal. Some routers use HTTPS with a self-signed certificate that browsers flag as untrusted. Click **Advanced** → **Proceed to 192.168.1.1** (or the equivalent in your browser). This is your local router — the warning does not mean it is unsafe.

**I can reach the login page but the admin password is wrong.**
The password was changed. If you do not remember it, hold the **Reset button** on the back of the router for 10 seconds. The router restores all factory defaults, including the original admin password. You will need to reconfigure the WiFi name and password.

**The router admin page loads but all changes say "Insufficient permissions."**
Some routers have a separate read-only user account and an admin account. Log out and log back in using the `admin` username specifically — not a custom username that may have limited permissions.
