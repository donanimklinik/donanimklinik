---
title: "Ethernet Connected But No Internet — Fix"
description: "Ethernet cable connected but no internet access? These steps fix the no-internet error on wired connections in Windows 10 and 11."
category: networking
pillar: "WiFi & Internet Connection Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/windows/fix-ethernet-connection-problems-in-windows-11-a49f3ce7-7541-47a2-a15b-3d3d0c8f1f8e"
source_last_verified_at: 2026-09-02
written_at: 2026-09-02
published_at: 2026-09-02
read_time: 5
schema_type: HowTo
featured: false
top_search_queries:
  - "ethernet connected but no internet"
  - "ethernet cable connected but no internet"
  - "ethernet is connected but no internet"
  - "ethernet not working but wifi is"
howto_steps:
  - name: "Check the cable and swap ports"
    text: "Unplug the Ethernet cable from both the computer and the router. Check the cable for visible damage — bent pins in the RJ45 connector, kinks, or cuts. Plug it back in firmly until it clicks. Try a different port on the router. Try a different Ethernet cable if one is available. A faulty cable or loose connection is the most common cause of wired no-internet errors."
  - name: "Restart the router and disable then re-enable the Ethernet adapter"
    text: "Unplug the router for 30 seconds and plug it back in. While waiting, open Device Manager (right-click Start > Device Manager), expand Network adapters, right-click the Ethernet adapter, and select Disable device. After the router restarts, enable the Ethernet adapter again. This resets both sides of the connection simultaneously."
  - name: "Run network reset commands"
    text: "Open Command Prompt as administrator and run: netsh winsock reset, netsh int ip reset, ipconfig /flushdns, ipconfig /release, ipconfig /renew. Restart after all commands complete. These fix corrupted IP and DNS settings that cause no-internet errors on wired connections."
  - name: "Change DNS servers"
    text: "Go to Control Panel > Network and Sharing Center > Change adapter settings. Right-click your Ethernet adapter > Properties > Internet Protocol Version 4 (TCP/IPv4) > Properties. Select Use the following DNS server addresses. Enter 8.8.8.8 and 8.8.4.4. Click OK. ISP DNS failures are a common cause of no-internet errors on otherwise-working connections."
  - name: "Update or reinstall the Ethernet adapter driver"
    text: "In Device Manager, right-click the Ethernet adapter and select Update driver > Search automatically. If no update is found, right-click > Uninstall device, restart the computer, and let Windows reinstall the driver. If the issue persists, download the Ethernet driver from the computer manufacturer's support site and install it manually."
---

An Ethernet connection that shows as connected in Windows — the cable icon appears in the system tray, Device Manager shows the adapter working — but produces no internet access is almost always a software configuration issue rather than a hardware failure.

According to Microsoft's Windows Ethernet troubleshooting documentation, the most common causes are a corrupted IP or DNS configuration, a driver that needs updating, or a loose cable that appears connected but is not transmitting reliably.

![Ethernet no internet layer stack: Physical cable, Network Adapter, TCP/IP stack, Router DNS — each layer's fix](/images/ethernet-no-internet-layers.svg)

## What causes Ethernet connected but no internet

The Windows status "Connected" for an Ethernet connection means the adapter detected a link signal from the router — it does not confirm that internet traffic is flowing. No internet errors occur when:

- **IP address not assigned** — the adapter shows `169.254.x.x` (APIPA), which means DHCP failed and no valid IP was received from the router
- **DNS failure** — the adapter has an IP but cannot resolve domain names
- **Corrupted Winsock or TCP/IP stack** — Windows cannot process network traffic correctly
- **Router WAN issue** — the router itself has no internet, affecting all connected devices
- **Faulty cable or port** — the cable is intermittently connected, causing a "Connected" status but no reliable data flow
- **Outdated Ethernet driver** — the driver does not correctly manage the adapter's connection state

## How to fix Ethernet connected but no internet

### Step 1 — Check the cable and try a different port

A cable that appears connected — the plug is inserted, the adapter shows a link — can still be faulty. The RJ45 connector may have bent pins that pass a link signal but drop data packets.

1. Unplug the Ethernet cable from the **computer's Ethernet port**
2. Unplug it from the **router or switch**
3. Inspect both connectors for **bent or damaged pins**
4. Check the cable for **kinks, cuts, or tight bends** — damage to the cable jacket often causes intermittent failure
5. Plug the cable back in firmly at both ends — you should hear a click
6. Try a **different port on the router** — some router ports fail while others work
7. If you have a spare cable, swap it to eliminate the cable as the cause

### Step 2 — Restart the router and reset the adapter

Restarting both the router and the Ethernet adapter simultaneously clears the DHCP lease and forces a fresh connection negotiation.

**Restart the router:**
1. Unplug the router's power cable
2. Wait **30 seconds**

**While waiting, reset the Ethernet adapter:**
1. Right-click **Start** → **Device Manager**
2. Expand **Network adapters**
3. Right-click your **Ethernet adapter** (typically labelled "Gigabit Ethernet," "Realtek PCIe," "Intel Ethernet," etc.)
4. Select **Disable device**

**Reconnect:**
1. Plug the router back in and wait for it to fully start (60–90 seconds)
2. In Device Manager, right-click the Ethernet adapter → **Enable device**

Windows requests a new IP address from the router as the adapter enables. Check whether internet access is restored.

### Step 3 — Reset the network stack

A corrupted Winsock or TCP/IP configuration prevents Windows from processing Ethernet traffic correctly — even when the adapter is connected and the router is working.

1. Right-click **Start** → **Terminal (Admin)** or **Command Prompt (Admin)**
2. Run each command in sequence:

```
netsh winsock reset
netsh int ip reset
ipconfig /flushdns
ipconfig /release
ipconfig /renew
```

3. **Restart the computer** after all commands complete

After restarting, check whether the Ethernet connection now has internet access.

To confirm the IP address was properly assigned after the restart:
1. Open **Command Prompt**
2. Run `ipconfig`
3. Under your Ethernet adapter, the **IPv4 Address** should be in your network's range (typically `192.168.1.x` or `192.168.0.x`) — not `169.254.x.x`, which indicates DHCP failure

### Step 4 — Change DNS servers

If the IP address is correctly assigned but internet access is still unavailable, the DNS servers provided by your ISP may be unresponsive.

1. Go to **Control Panel** → **Network and Sharing Center** → **Change adapter settings**
2. Right-click your **Ethernet adapter** → **Properties**
3. Select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**
4. Select **Use the following DNS server addresses**
5. Enter:
   - Preferred DNS server: `8.8.8.8`
   - Alternate DNS server: `8.8.4.4`
6. Click **OK** → **Close**

Test internet access immediately after changing DNS — no restart is required for DNS changes to take effect.

### Step 5 — Update or reinstall the Ethernet driver

An outdated or corrupted Ethernet driver can cause the adapter to report a connection while failing to pass traffic correctly.

**Update the driver:**
1. In **Device Manager**, right-click the Ethernet adapter → **Update driver** → **Search automatically for drivers**
2. If Windows finds and installs an update, restart and test

**Reinstall the driver:**
1. Right-click the Ethernet adapter → **Uninstall device**
2. If the option appears, check **Attempt to remove the driver for this device**
3. Click **Uninstall**
4. Restart the computer — Windows reinstalls the driver automatically

**If Windows does not find a driver:**
1. Go to the **computer manufacturer's support site** (Dell, HP, Lenovo, etc.)
2. Search for your model and download the **LAN** or **Ethernet** driver
3. Install it manually

## How to verify the fix

1. Open **Command Prompt** and run `ipconfig` — confirm the Ethernet adapter shows a valid IPv4 address (not `169.254.x.x`)
2. Run `ping 8.8.8.8` — you should see replies with response times, not "Request timed out"
3. Run `ping google.com` — if `8.8.8.8` works but `google.com` does not, DNS is still the issue
4. Open a browser and load a page

## Frequently asked questions

**Ethernet works on one computer but not another on the same cable.**
This confirms the cable and router port are working. The issue is with the second computer's adapter, driver, or network configuration. Follow Steps 3–5 on the affected computer.

**Ethernet stopped working after a Windows update.**
Windows updates occasionally replace OEM Ethernet drivers with generic versions. Download the Ethernet driver directly from the computer manufacturer's support site (not Windows Update) and reinstall it.

**Ethernet shows "Unidentified network" and no internet.**
An "Unidentified network" status means Windows received either no IP address or an APIPA address (`169.254.x.x`). The router's DHCP server is not responding. Restart the router, reset the adapter, and run the network reset commands in Step 3.
