---
title: "Outlook Error 0x800CCC0E — Fix"
description: "Error 0x800CCC0E means Outlook cannot connect to the outgoing mail server. Here is how to fix it by checking SMTP settings and authentication."
category: software
pillar: "Microsoft 365 & Outlook Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/error-message-when-you-send-or-receive-email-in-microsoft-outlook-0x800ccc0e-cc5bd71a-0543-4e3e-a1d4-29a1e19eff78"
source_last_verified_at: 2026-09-01
written_at: 2026-09-01
published_at: 2026-09-03
read_time: 5
fix_summary: "This error means Outlook can't reach the mail server — go to File > Account Settings and verify your SMTP server (smtp.office365.com) and port (587 with TLS/STARTTLS)."
fix_time_display: "~5 min"
fix_difficulty: Medium
schema_type: HowTo
featured: false
top_search_queries:
  - "0x800ccc0e"
  - "0x800ccc0e outlook"
  - "error 0x800ccc0e"
  - "outlook 0x800ccc0e"
howto_steps:
  - name: "Verify SMTP server name and port"
    text: "Go to File > Account Settings > Account Settings. Select your account and click Change > More Settings > Advanced. Check the Outgoing server (SMTP) port. It must be 587 (with STARTTLS) or 465 (with SSL/TLS). Port 25 is blocked by most ISPs for outbound email from personal connections — change it if it is set there."
  - name: "Enable SMTP authentication"
    text: "In the same More Settings dialog, click the Outgoing Server tab. Ensure My outgoing server (SMTP) requires authentication is checked, and select Use same settings as my incoming mail server. Without authentication, many modern mail servers reject all outgoing connections with 0x800CCC0E."
  - name: "Check if antivirus is scanning email traffic"
    text: "Some antivirus programs inspect outgoing email on port 25 and interfere with encrypted SMTP on other ports. Temporarily disable email scanning in your antivirus (not the entire program) and attempt to send. If it succeeds, configure the antivirus to exclude Outlook from email scanning."
  - name: "Re-enter your email password"
    text: "A password change — on the server, in Microsoft 365 admin, or through a provider portal — causes Outlook to fail authentication silently, producing 0x800CCC0E. Go to File > Account Settings, select your account, click Change, and re-enter your current password. Tick Remember password and click Next."
faq:
  - q: "What does Outlook error 0x800CCC0E mean?"
    a: "Error 0x800CCC0E means Outlook could not establish a connection to the outgoing SMTP mail server. The server either did not respond or rejected the connection before authentication could complete."
  - q: "What SMTP port should I use to fix 0x800CCC0E?"
    a: "Change the SMTP port to 587 with STARTTLS or 465 with SSL/TLS. Port 25 is blocked by most internet service providers for outbound mail. Go to File > Account Settings > select your account > Change > More Settings > Advanced to update the port number."
  - q: "Can a wrong password cause Outlook error 0x800CCC0E?"
    a: "Yes. If your email password changed and Outlook still has the old password, authentication fails and can produce 0x800CCC0E. Go to your account settings and re-enter the current password to resolve it."
  - q: "Does antivirus software cause Outlook error 0x800CCC0E?"
    a: "Yes. Some antivirus programs intercept email traffic and can block or corrupt the SMTP connection. Temporarily disable the email scanning component of your antivirus (not full protection) and test whether Outlook can send. If successful, add Outlook to the antivirus exclusion list."
  - q: "Is 0x800CCC0E only an outgoing email error?"
    a: "Primarily yes. The 0x800CCC0E error code is associated with the SMTP subsystem, which handles outgoing mail. However, similar connection failures can occur on incoming mail connections and may produce related error codes in the 0x800CCC range."
---

Error **0x800CCC0E** appears in Outlook with the message: "The connection to the server failed. Account: [your account], Server: [server name], Protocol: SMTP, Port: [port], Secure(SSL): No/Yes, Socket Error: 10060, Error Number: 0x800CCC0E."

This error means Outlook attempted to connect to the outgoing mail server (SMTP) and the connection failed before authentication could complete. It is a connection-level failure, not an authentication failure — the server did not respond at all, or the response was rejected by Outlook.

According to Microsoft's documentation on Outlook error codes, 0x800CCC0E is produced specifically by the SMTP subsystem when a TCP connection to the outgoing server cannot be established or is interrupted before the exchange completes.

![Outlook error 0x800CCC0E: SMTP connection fails — correct port is 587 STARTTLS or 465 SSL, not blocked port 25. Check SMTP authentication settings](/images/outlook-error-0x800ccc0e.svg)

## What causes 0x800CCC0E

**Wrong SMTP port.** Port 25 — the traditional SMTP port — is blocked by most ISPs for outbound email from residential and business connections. If Outlook is configured to use port 25, connections will time out, producing 0x800CCC0E. The correct ports are 587 (STARTTLS) or 465 (SSL/TLS).

**SMTP authentication not enabled.** Modern mail servers require Outlook to authenticate before accepting outgoing mail. If the authentication setting is disabled in Outlook's account configuration, the server closes the connection immediately.

**Antivirus email scanning interference.** Antivirus software that inspects email traffic can intercept and terminate the SMTP connection, particularly when the connection uses encryption (TLS/SSL). The antivirus may misinterpret the encrypted handshake as suspicious.

**Password change not updated in Outlook.** If your email password has been changed — through a Microsoft 365 admin portal, your email provider, or Active Directory — Outlook continues using the old credentials. The server rejects authentication, but the error presented to the user can appear as a connection failure rather than an authentication error.

**Firewall blocking the SMTP port.** Windows Firewall, a router firewall, or a corporate network firewall may be blocking outbound connections on port 587 or 465. This is more common on managed corporate networks.

## Step 1 — Verify SMTP server name and port

1. Go to **File > Account Settings > Account Settings**
2. Select your email account and click **Change**
3. Click **More Settings**
4. Open the **Advanced** tab
5. Check the **Outgoing server (SMTP)** port number

The correct values depend on your email provider:

| Provider | SMTP Server | Port | Encryption |
|----------|-------------|------|------------|
| Microsoft 365 / Outlook.com | smtp.office365.com | 587 | STARTTLS |
| Gmail | smtp.gmail.com | 587 | STARTTLS |
| Yahoo Mail | smtp.mail.yahoo.com | 587 | STARTTLS |
| iCloud | smtp.mail.me.com | 587 | STARTTLS |

If port 25 is listed, change it to 587 and set encryption to **STARTTLS**.

## Step 2 — Enable SMTP authentication

In the **More Settings** dialog:
1. Click the **Outgoing Server** tab
2. Check **My outgoing server (SMTP) requires authentication**
3. Select **Use same settings as my incoming mail server**

Click OK and test by sending an email. SMTP authentication is required by all major email providers and must be enabled in Outlook's account settings.

## Step 3 — Check antivirus email scanning

Common antivirus programs — including Norton, McAfee, AVG, and Avast — include an email scanning feature that monitors outgoing SMTP traffic. This feature can intercept TLS-encrypted SMTP connections and cause 0x800CCC0E.

To test whether antivirus is the cause:
1. Open your antivirus settings
2. Locate the email protection or email scanning module
3. Temporarily disable only the email scanning component (not the entire antivirus)
4. Attempt to send an email from Outlook

If the email sends successfully, the antivirus email scanning is the cause. Configure it to exclude Outlook.exe from email scanning, or disable the email scanning module permanently — modern mail servers use TLS encryption that makes client-side email scanning redundant.

## Step 4 — Re-enter your email credentials

1. Go to **File > Account Settings > Account Settings**
2. Select your account and click **Change**
3. In the Password field, clear the existing entry and type your current password
4. Tick **Remember password**
5. Click **Next** and then **Finish**

If you are using Microsoft 365 with multi-factor authentication (MFA) enabled, Outlook may require an **app password** rather than your regular account password. Generate an app password from your Microsoft account security settings and use it in place of your regular password in Outlook.

## Checking your network and firewall

If all account settings are correct and the error persists:

1. Test whether the SMTP port is accessible: open Command Prompt and run:
   ```
   telnet smtp.office365.com 587
   ```
   If the connection times out with no response, the port is blocked at the firewall or ISP level.

2. Contact your network administrator or ISP to confirm outbound access to port 587.

## Frequently asked questions

**Error 0x800CCC0E appears only on one computer but not another.**
The account settings on the affected computer are likely different. Compare the SMTP server, port, and authentication settings between the working and non-working machines. Also check whether the affected machine has antivirus email scanning enabled.

**I use Microsoft 365 and the SMTP settings look correct but the error persists.**
Ensure your Microsoft 365 account has SMTP AUTH enabled. In the Microsoft 365 Admin Center, go to Users > Active Users, select the user, click Mail, then Manage email apps, and confirm Authenticated SMTP is checked. This setting can be disabled by an admin.

**The error started after I changed my Microsoft password.**
Outlook cached the old password. Follow Step 4 to re-enter the new password. If you use Windows Hello or a PIN to sign into Windows, also update the saved credentials in Windows Credential Manager: search for **Credential Manager** in the Start menu, find entries for your email account, and update the password there.
