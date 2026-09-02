---
title: "WiFi Connected But No Internet — Fix"
description: "Your device shows Wi-Fi connected but pages won't load? These steps fix the 'no internet access' error on Windows, Android, and Mac."
category: networking
pillar: "WiFi & Internet Connection Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 6
schema_type: HowTo
featured: false
top_search_queries:
  - "wifi connected but no internet"
  - "connected to wifi but no internet"
  - "wifi connected no internet access"
  - "wifi says connected but no internet"
howto_steps:
  - name: "Restart the router and your device"
    text: "Unplug the router's power cable and wait 30 seconds. Plug it back in and wait for all lights to stabilise (about 60 seconds). Then restart your computer or phone. This clears the router's DNS cache and DHCP table, which resolves most 'connected but no internet' errors."
  - name: "Run the Windows Network Troubleshooter"
    text: "On Windows, go to Settings > System > Troubleshoot > Other troubleshooters and click Run next to Internet Connections. The troubleshooter detects common issues such as incorrect DNS settings, adapter configuration errors, and Winsock corruption, and applies fixes automatically."
  - name: "Flush DNS and reset the network stack"
    text: "Open Command Prompt as administrator (right-click Start > Terminal (Admin)). Run these commands in order: ipconfig /flushdns, netsh winsock reset, netsh int ip reset. Restart the computer after all three commands complete. These commands clear corrupted DNS cache and reset TCP/IP settings."
  - name: "Change DNS servers to Google or Cloudflare"
    text: "Go to Settings > Network & internet > Wi-Fi > click your network > Hardware properties. Under DNS server assignment, click Edit, switch to Manual, and enter 8.8.8.8 (Primary) and 8.8.4.4 (Secondary) for Google DNS, or 1.1.1.1 and 1.0.0.1 for Cloudflare DNS. Click Save."
  - name: "Check for a router or ISP outage"
    text: "Connect another device (phone, tablet) to the same Wi-Fi network and check if it has internet access. If all devices show connected but no internet, the issue is with the router or your ISP — not the device. Log into your router's admin page and check the WAN/Internet status. If no WAN IP is assigned, contact your ISP."
---

The **WiFi connected but no internet** error is one of the most common network problems across Windows, Android, and Mac. Your device successfully joins the Wi-Fi network — the Wi-Fi icon appears, the signal bars are full — but web pages refuse to load and apps report no connection.

According to Microsoft's Windows networking troubleshooting documentation, this error occurs when your device connects to the router but the router cannot reach the internet, or when the device has incorrect DNS or IP configuration that prevents it from resolving addresses even with a valid connection.

## What causes "WiFi connected but no internet"

The error appears in two distinct scenarios:

**Scenario 1 — The router has no internet (all devices affected)**
- Your ISP has an outage
- The router's WAN connection dropped (cable unplugged, PPPoE session expired)
- The router needs to be restarted

**Scenario 2 — Only one device has the problem**
- The device received an incorrect IP address (APIPA address: `169.254.x.x`)
- DNS servers are unreachable or returning errors
- The Windows Winsock or TCP/IP stack is corrupted
- A VPN or firewall application is blocking traffic

## How to fix WiFi connected but no internet

### Step 1 — Restart the router and your device

A router restart clears the DHCP lease table and forces all connected devices to request new IP addresses. It also resets the router's WAN connection to the ISP.

1. Unplug the router's power cable from the wall outlet
2. Wait **30 seconds** — this ensures the router's memory fully clears
3. Plug the power cable back in
4. Wait for the **internet indicator light** to become solid (typically 30–90 seconds depending on your ISP)
5. Restart your computer or phone

After both devices restart, check whether the internet is restored before continuing to further steps.

### Step 2 — Run the Windows Network Troubleshooter

Windows includes a built-in diagnostic tool that detects and fixes common network configuration errors automatically.

**On Windows 11:**
1. Go to **Settings** → **System** → **Troubleshoot** → **Other troubleshooters**
2. Click **Run** next to **Internet Connections**
3. Follow the prompts and apply any suggested fixes

**On Windows 10:**
1. Go to **Settings** → **Update & Security** → **Troubleshoot** → **Additional troubleshooters**
2. Click **Internet Connections** → **Run the troubleshooter**

The troubleshooter checks DNS resolution, adapter configuration, and Windows network services. It can detect and fix corrupted adapter settings that are not visible through the network settings menu.

### Step 3 — Flush DNS and reset the network stack

A corrupted DNS cache or a damaged Winsock configuration prevents Windows from translating website names into IP addresses — even when the physical connection is working.

1. Right-click the **Start** button and select **Terminal (Admin)** or **Command Prompt (Admin)**
2. Run each command, pressing **Enter** after each one:

```
ipconfig /flushdns
netsh winsock reset
netsh int ip reset
```

3. **Restart the computer** after all three commands complete — the Winsock reset only takes effect after a restart

After restarting, check whether internet access is restored.

### Step 4 — Change DNS servers

Your ISP's default DNS servers can become slow or unresponsive, causing the "no internet" error even when the connection itself is working. Switching to a public DNS server (Google or Cloudflare) bypasses the ISP's DNS.

**On Windows 11:**
1. Go to **Settings** → **Network & internet** → **Wi-Fi**
2. Click your connected Wi-Fi network
3. Click **Hardware properties**
4. Under **DNS server assignment**, click **Edit**
5. Switch from **Automatic (DHCP)** to **Manual**
6. Enable **IPv4** and enter:
   - Preferred DNS: `8.8.8.8` (Google) or `1.1.1.1` (Cloudflare)
   - Alternate DNS: `8.8.4.4` (Google) or `1.0.0.1` (Cloudflare)
7. Click **Save**

**On Windows 10:**
1. Go to **Control Panel** → **Network and Sharing Center** → **Change adapter settings**
2. Right-click your Wi-Fi adapter → **Properties**
3. Select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**
4. Select **Use the following DNS server addresses** and enter the values above

### Step 5 — Check for a router or ISP outage

If the steps above have not resolved the issue, confirm whether the problem is with your device or with the router and ISP.

**Check other devices:** Connect a phone or tablet to the same Wi-Fi network. If it also shows no internet, the problem is with the router or ISP — not your computer.

**Check the router's WAN status:**
1. Open a browser and go to `192.168.1.1` or `192.168.0.1` (your router's admin page)
2. Log in with the router's admin credentials (usually printed on the router label)
3. Look for **WAN Status**, **Internet Status**, or **Connection Status**
4. If it shows **Disconnected**, **No IP**, or **0.0.0.0**, the router is not receiving an internet connection from the ISP

If the router shows no WAN IP, contact your ISP. If the router shows a valid WAN IP but devices still have no internet, factory reset the router as a last resort.

## How to verify the fix

1. Open a browser and navigate to a website you have not visited recently (to avoid cached results)
2. Open Command Prompt and run `ping 8.8.8.8` — you should see replies, not timeouts
3. Also run `ping google.com` — if this works but `8.8.8.8` did not, there is a specific DNS issue

## Frequently asked questions

**WiFi connected but no internet only on one website.**
If most sites work but specific ones do not, the problem is with those servers or your DNS cache for those domains. Run `ipconfig /flushdns` and try again. If the site is down, the issue is not on your end.

**Phone shows WiFi connected but no internet.**
On Android: go to Settings → Network & internet → Wi-Fi → tap your network → Modify network → Advanced → IP settings → switch from DHCP to Static, and enter the DNS values manually (8.8.8.8 / 8.8.4.4). On iPhone: go to Settings → Wi-Fi → tap the ⓘ next to your network → Configure DNS → Manual → add 8.8.8.8.

**VPN is connected and now there's no internet.**
A VPN that routes all traffic but cannot reach its server causes the "connected but no internet" error. Disconnect the VPN, check if internet is restored, then reconnect the VPN. If the VPN itself is the cause, contact the VPN provider or check the server status.
