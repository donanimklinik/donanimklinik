/**
 * One-time script: add fix_summary, fix_time_display, fix_difficulty
 * to all articles that don't have it yet.
 * Usage: node scripts/add-fix-summary.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ARTICLES_DIR = './src/content/articles';

// Hub pages — use PillarHubLayout, AnswerCard doesn't render there
const HUB_SLUGS = new Set([
  'adobe-acrobat-errors.md',
  'cloud-storage-sync-errors.md',
  'office-errors.md',
  'windows-update-errors.md',
]);

const FIX_DATA = {
  // ── Adobe Acrobat ─────────────────────────────────────────────
  'adobe-acrobat-keeps-crashing-fix.md': {
    summary: 'Clearing the Acrobat cache (%AppData%\\Adobe\\Acrobat\\DC\\Cache) and disabling Protected Mode (Edit > Preferences > Security (Enhanced)) stops most Acrobat crash loops.',
    time: '~6 min', difficulty: 'Easy',
  },
  'adobe-acrobat-not-opening-fix.md': {
    summary: 'Renaming the Acrobat settings folder (%AppData%\\Adobe\\Acrobat\\DC\\) forces Acrobat to rebuild its configuration — fixes most won\'t open issues without reinstalling.',
    time: '~4 min', difficulty: 'Easy',
  },
  'adobe-acrobat-not-responding-fix.md': {
    summary: 'Disabling Protected Mode (Edit > Preferences > Security (Enhanced) > uncheck Enable Protected Mode) eliminates most Acrobat freezes caused by sandboxing conflicts with Windows.',
    time: '~3 min', difficulty: 'Easy',
  },
  'adobe-acrobat-not-working-fix.md': {
    summary: 'Running Acrobat\'s built-in Repair (Help > Repair Installation) replaces corrupted program files and fixes most not working issues without a full reinstall.',
    time: '~5 min', difficulty: 'Easy',
  },
  'adobe-reader-not-opening-pdf-fix.md': {
    summary: 'Right-click the PDF > Open with > Adobe Acrobat to bypass the broken file association — then go to Settings > Default Apps to make Acrobat the permanent default PDF opener.',
    time: '~3 min', difficulty: 'Easy',
  },
  'cannot-open-pdf-fix.md': {
    summary: 'Right-click the PDF and select Open with > Adobe Acrobat Reader — this bypasses the broken file association that makes PDFs open in the wrong app or fail to open entirely.',
    time: '~2 min', difficulty: 'Easy',
  },

  // ── BitLocker & Data Recovery ─────────────────────────────────
  'aka-ms-myrecoverykey.md': {
    summary: 'Visiting aka.ms/myrecoverykey redirects to your Microsoft account\'s BitLocker key page — sign in to instantly see all 48-digit recovery keys stored for your devices.',
    time: '~2 min', difficulty: 'Easy',
  },
  'bitlocker-recovery-key-active-directory.md': {
    summary: 'IT admins retrieve the key from Active Directory Users and Computers — search by computer name, open Properties > BitLocker Recovery tab to find all stored recovery keys.',
    time: '~3 min', difficulty: 'Medium',
  },
  'bitlocker-recovery-key-dell.md': {
    summary: 'Dell laptops save the BitLocker key to the Microsoft account linked at first setup — check account.microsoft.com/devices, or contact Dell ProSupport for organization-managed devices.',
    time: '~3 min', difficulty: 'Easy',
  },
  'bitlocker-recovery-key-not-working.md': {
    summary: 'If your 48-digit key is rejected, the key may be from a different recovery point — try all keys listed at account.microsoft.com/devices, as Windows stores multiple keys per device.',
    time: '~5 min', difficulty: 'Medium',
  },
  'bitlocker-recovery-screen-after-windows-update.md': {
    summary: 'BitLocker triggers after updates that modify the boot configuration — enter your 48-digit recovery key (from account.microsoft.com/devices) and BitLocker resumes automatically after login.',
    time: '~3 min', difficulty: 'Easy',
  },
  'bitlocker-suspended-mode-how-to-re-enable.md': {
    summary: 'BitLocker suspended means encryption is paused, not off — re-enable it in Control Panel > BitLocker Drive Encryption > Resume Protection with one click and no data loss.',
    time: '~2 min', difficulty: 'Easy',
  },
  'preparing-bitlocker-recovery.md': {
    summary: 'Save your BitLocker recovery key to your Microsoft account now before a lockout — go to Settings > Privacy & Security > Device Encryption > Manage BitLocker > Back up your recovery key.',
    time: '~3 min', difficulty: 'Easy',
  },
  'unlock-bitlocker-without-recovery-key.md': {
    summary: 'Without the recovery key your options are: check all Microsoft accounts ever linked to the device, check Azure AD (work devices), or contact your IT admin — there is no bypass method.',
    time: '~5 min', difficulty: 'Hard',
  },
  'accidentally-deleted-files-windows-file-recovery.md': {
    summary: 'Windows File Recovery (free Microsoft Store app) scans your drive and recovers deleted files before they\'re overwritten — run it as soon as you notice files are missing.',
    time: '~10 min', difficulty: 'Medium',
  },
  'best-data-recovery-software-windows.md': {
    summary: 'Recuva (free, by Piriform) recovers most accidentally deleted files in minutes — download from piriform.com, run Deep Scan, and restore files before they get overwritten.',
    time: '~15 min', difficulty: 'Easy',
  },
  'hard-drive-failure-signs.md': {
    summary: 'Run the built-in SMART check in Command Prompt: type wmic diskdrive get status — "OK" means healthy; any other result means back up everything immediately and replace the drive.',
    time: '~3 min', difficulty: 'Easy',
  },
  'hard-drive-recovery-services-when-diy-fails.md': {
    summary: 'DIY tools fix logical failures (deleted files, corrupted filesystem) — clicking sounds or motor failure require a professional clean-room service; attempting DIY on physical damage destroys data.',
    time: '~10 min', difficulty: 'Hard',
  },
  'onedrive-deleted-files-recovery.md': {
    summary: 'Deleted files stay in OneDrive\'s Recycle Bin for 30–93 days — go to onedrive.com, click Recycle Bin in the left sidebar, select your files, and click Restore.',
    time: '~2 min', difficulty: 'Easy',
  },
  'recuva-data-recovery.md': {
    summary: 'Run Recuva\'s Deep Scan on the target drive — even after emptying the Recycle Bin, Recuva finds recoverable files that haven\'t yet been overwritten by new data.',
    time: '~15 min', difficulty: 'Easy',
  },
  'recover-usb-flash-drive.md': {
    summary: 'Right-click the USB in File Explorer > Properties > Previous Versions for a quick restore. For formatted drives, run Recuva\'s Deep Scan before copying anything new to the drive.',
    time: '~10 min', difficulty: 'Medium',
  },
  'ssd-recovery-after-failure.md': {
    summary: 'If the SSD is undetected, try a different SATA or USB port first — connection issues mimic failure. If truly failed, professional recovery is the only option; never freeze an SSD.',
    time: '~5 min', difficulty: 'Hard',
  },

  // ── Printer Errors ────────────────────────────────────────────
  'brother-printer-not-connecting-to-wifi-fix.md': {
    summary: 'Hold the WiFi button on the Brother printer for 3 seconds (WPS mode), then press the WPS button on your router within 2 minutes — the connection completes automatically without a password.',
    time: '~5 min', difficulty: 'Easy',
  },
  'canon-printer-not-connecting-to-wifi-fix.md': {
    summary: 'On Canon printers, go to Menu > WLAN Setup > Cableless Setup to enter WPS mode, then press the router\'s WPS button within 2 minutes — no password needed.',
    time: '~5 min', difficulty: 'Easy',
  },
  'canon-printer-not-printing-fix.md': {
    summary: 'Open the print queue (Settings > Printers > your printer > Open print queue), delete stuck jobs with Ctrl+A then Delete, then restart the Print Spooler service in services.msc.',
    time: '~5 min', difficulty: 'Easy',
  },
  'canon-printer-not-printing-straight-lines-fix.md': {
    summary: 'Run the Canon print head alignment utility from the printer\'s control panel menu — this corrects the misalignment causing diagonal or wavy lines without any manual adjustment.',
    time: '~8 min', difficulty: 'Easy',
  },
  'canon-printer-not-responding-fix.md': {
    summary: 'Turn the Canon printer off, unplug it for 60 seconds, plug back in, and clear the print queue — this power cycle resets the printer\'s internal state and fixes most not responding errors.',
    time: '~5 min', difficulty: 'Easy',
  },
  'epson-printer-not-connecting-to-wifi-fix.md': {
    summary: 'On Epson printers, go to Settings > Network Settings > Wi-Fi Setup > Wi-Fi Setup Wizard and select your network — or press the WPS buttons on both printer and router simultaneously.',
    time: '~5 min', difficulty: 'Easy',
  },
  'hp-printer-connected-wifi-but-offline-fix.md': {
    summary: 'Even when connected to WiFi, HP printers show offline if "Use Printer Offline" is checked — open the print queue and uncheck it under the Printer menu.',
    time: '~3 min', difficulty: 'Easy',
  },
  'hp-printer-not-connecting-to-wifi-fix.md': {
    summary: 'Run HP Print and Scan Doctor (free from hp.com/go/tools) — it automatically detects and fixes most HP WiFi connection issues including IP conflicts and firewall blocks.',
    time: '~8 min', difficulty: 'Easy',
  },
  'printer-paper-jam-but-no-paper-fix.md': {
    summary: 'Open ALL access panels (front, back, and top) and check for small torn paper fragments near the rollers — a single shred of paper left behind keeps triggering the jam sensor.',
    time: '~5 min', difficulty: 'Easy',
  },

  // ── WiFi & Internet ───────────────────────────────────────────
  'ethernet-connected-but-no-internet-fix.md': {
    summary: 'Flushing DNS (ipconfig /flushdns) and resetting TCP/IP stack (netsh int ip reset) clears the stale network state causing "connected but no internet" on Ethernet — run both and restart.',
    time: '~5 min', difficulty: 'Easy',
  },
  'hotspot-connected-but-no-internet-fix.md': {
    summary: 'Forget the hotspot network and reconnect — if that fails, toggle Airplane mode on the hotspot device to restart its mobile connection, then reconnect your device.',
    time: '~3 min', difficulty: 'Easy',
  },
  'internet-keeps-disconnecting-fix.md': {
    summary: 'Changing DNS to Google (8.8.8.8 / 8.8.4.4) in Network Settings > Adapter Options > IPv4 Properties fixes most random disconnections caused by your ISP\'s unstable DNS resolver.',
    time: '~5 min', difficulty: 'Easy',
  },
  'laptop-wont-connect-to-wifi-fix.md': {
    summary: 'Press Fn + the WiFi key (or toggle the physical WiFi switch) first — if WiFi is still missing from the taskbar, right-click the adapter in Device Manager and select Enable Device.',
    time: '~3 min', difficulty: 'Easy',
  },
  'wifi-keeps-disconnecting-fix.md': {
    summary: 'Disabling Wi-Fi adapter power saving (Device Manager > your adapter > Properties > Power Management > uncheck "Allow computer to turn off this device") stops Windows from dropping WiFi.',
    time: '~4 min', difficulty: 'Easy',
  },

  // ── Router Setup ──────────────────────────────────────────────
  'how-to-access-router-settings.md': {
    summary: 'Type 192.168.1.1 (or 192.168.0.1) in your browser\'s address bar — log in with admin/admin or admin/password if you haven\'t changed the defaults (check the label on the router).',
    time: '~2 min', difficulty: 'Easy',
  },
  'how-to-change-router-dns-settings.md': {
    summary: 'Log in at 192.168.1.1, find DNS under WAN or Internet Setup, and enter 8.8.8.8 (primary) and 8.8.4.4 (secondary) — faster and more reliable than your ISP\'s default DNS.',
    time: '~5 min', difficulty: 'Easy',
  },
  'how-to-configure-wifi-router.md': {
    summary: 'Connect to 192.168.1.1, run the Quick Setup wizard, select DHCP as your internet type (for most home users), set a strong WiFi name and password, and save — takes under 10 minutes.',
    time: '~8 min', difficulty: 'Easy',
  },
  'how-to-connect-router-to-internet.md': {
    summary: 'Connect the router\'s WAN port to your modem, access 192.168.1.1, and run the Setup wizard — select DHCP unless your ISP provided specific PPPoE credentials.',
    time: '~10 min', difficulty: 'Easy',
  },
  'how-to-connect-router-to-modem.md': {
    summary: 'Use an Ethernet cable from the modem\'s LAN port to the router\'s WAN (Internet) port — NOT the router\'s LAN ports. Reboot the modem first, then the router.',
    time: '~5 min', difficulty: 'Easy',
  },
  'how-to-set-up-netgear-router.md': {
    summary: 'Connect to routerlogin.net (or 192.168.1.1) after plugging in the Netgear router and run the Setup Wizard — most home connections use DHCP and need no ISP credentials.',
    time: '~10 min', difficulty: 'Easy',
  },
  'how-to-set-up-nighthawk-router.md': {
    summary: 'Use the Nighthawk app (iOS/Android) for guided setup — it auto-detects your internet type and configures optimal settings. Alternatively go to routerlogin.net in a browser.',
    time: '~10 min', difficulty: 'Easy',
  },
  'how-to-set-up-router-and-modem.md': {
    summary: 'Connect modem to router\'s WAN port, wait 2 minutes for both to boot, then connect your device to the router\'s WiFi — check the router\'s bottom label for the default WiFi name and password.',
    time: '~10 min', difficulty: 'Easy',
  },
  'how-to-set-up-wifi-router.md': {
    summary: 'Plug in power and WAN cable, go to 192.168.1.1 in a browser, run Quick Setup, choose your WiFi name and password, and save — your network is ready in under 10 minutes.',
    time: '~8 min', difficulty: 'Easy',
  },
  'how-to-set-up-wireless-router.md': {
    summary: 'Place the router centrally, connect it to the modem via the WAN port, access 192.168.1.1, and run the setup wizard — use WPA3 or WPA2 security with a strong unique password.',
    time: '~8 min', difficulty: 'Easy',
  },

  // ── Windows Activation ────────────────────────────────────────
  'windows-activation-error-0x8007232b.md': {
    summary: 'This error means Windows can\'t find the KMS server — if on a work network, connect via VPN first. For home users, use the phone activation method at Settings > Activation > Activate by phone.',
    time: '~5 min', difficulty: 'Medium',
  },
  'windows-activation-error-0xc004c008.md': {
    summary: 'This license is already in use on another PC — call Microsoft\'s activation hotline (1-888-571-2048) and explain you replaced hardware to get a new activation confirmation ID.',
    time: '~10 min', difficulty: 'Medium',
  },
  'windows-activation-error-0xc004c060.md': {
    summary: 'Run "slmgr /ato" in an elevated Command Prompt to force online activation — if this fails, the product key may need to be deactivated on the old PC before it can activate here.',
    time: '~5 min', difficulty: 'Medium',
  },
  'windows-activation-error-0xc004f050.md': {
    summary: 'The product key is invalid for this Windows edition — run "winver" to confirm your edition (Home/Pro/Enterprise) and make sure your key matches. Keys are edition-specific.',
    time: '~3 min', difficulty: 'Easy',
  },
  'windows-activation-error-0xc004f074.md': {
    summary: 'Run "slmgr /skms kms.core.windows.net" then "slmgr /ato" in an elevated Command Prompt — this points Windows to Microsoft\'s public KMS server and forces activation.',
    time: '~5 min', difficulty: 'Medium',
  },
  'windows-digital-license-not-working.md': {
    summary: 'A digital license is tied to your motherboard — after hardware replacement, run the Activation Troubleshooter (Settings > Activation > Troubleshoot) and select "I changed hardware recently".',
    time: '~5 min', difficulty: 'Medium',
  },
  'windows-phone-activation.md': {
    summary: 'Call 1-888-571-2048, follow the automated prompts, enter your Installation ID from the activation screen, and the system gives you a Confirmation ID to complete activation.',
    time: '~10 min', difficulty: 'Easy',
  },
  'windows-product-key-not-working.md': {
    summary: 'If the key was bought from an unofficial seller it may be invalid or already used — buy from microsoft.com. Legitimate keys rejected once can be retried after 24 hours.',
    time: '~5 min', difficulty: 'Medium',
  },

  // ── Microsoft 365 / Outlook ───────────────────────────────────
  'emails-stuck-in-outlook-outbox.md': {
    summary: 'Stuck Outbox emails are almost always caused by a large attachment — right-click the stuck email > Delete, then resend without the attachment or with a compressed version.',
    time: '~3 min', difficulty: 'Easy',
  },
  'outlook-calendar-not-syncing.md': {
    summary: 'Go to File > Account Settings, select your Exchange or Microsoft 365 account, click Repair, and follow the prompts — this refreshes calendar sync without losing any data.',
    time: '~5 min', difficulty: 'Easy',
  },
  'outlook-error-0x800ccc0e.md': {
    summary: 'This error means Outlook can\'t reach the mail server — go to File > Account Settings and verify your SMTP server (smtp.office365.com) and port (587 with TLS/STARTTLS).',
    time: '~5 min', difficulty: 'Medium',
  },
  'outlook-not-receiving-emails.md': {
    summary: 'Check Junk Email first, then go to Home > Rules > Manage Rules to confirm no rule is redirecting messages. Also check File > Info > Mailbox Cleanup to see if storage is full.',
    time: '~5 min', difficulty: 'Easy',
  },
  'outlook-not-sending-email.md': {
    summary: 'Check your Outbox for stuck messages, then go to File > Account Settings > Test Account Settings to verify SMTP credentials — wrong port (use 587 with TLS) causes most send failures.',
    time: '~5 min', difficulty: 'Easy',
  },
  'outlook-not-syncing.md': {
    summary: 'Press F9 (Send/Receive All Folders) to force a manual sync — if sync fails with an error, go to File > Account Settings > select account > Repair to reset the Exchange connection.',
    time: '~3 min', difficulty: 'Easy',
  },
  'outlook-send-receive-not-working.md': {
    summary: 'Press F9 to force a Send/Receive — if it hangs, go to File > Account Settings > select account > Repair. This refreshes the authentication token that most commonly causes this error.',
    time: '~3 min', difficulty: 'Easy',
  },

  // ── Cloud Storage ─────────────────────────────────────────────
  'dropbox-not-syncing-fix.md': {
    summary: 'Click the Dropbox tray icon > your avatar > Pause Syncing, wait 30 seconds, then Resume — this restarts the sync engine and clears most stuck sync states without signing out.',
    time: '~3 min', difficulty: 'Easy',
  },
  'dropbox-not-updating-fix.md': {
    summary: 'Check available disk space first (Dropbox stops syncing with less than 200MB free) — if space is fine, click the tray icon > your avatar > Check for Updates to get the latest version.',
    time: '~3 min', difficulty: 'Easy',
  },
  'google-drive-not-syncing-fix.md': {
    summary: 'Click the Drive for Desktop tray icon > gear icon > Quit Google Drive, wait 30 seconds, then relaunch — this restarts the sync daemon and fixes most stuck sync issues.',
    time: '~3 min', difficulty: 'Easy',
  },
  'onedrive-not-syncing-fix.md': {
    summary: 'Right-click the OneDrive tray icon > Settings > Account > Unlink this PC, then sign back in — this resets sync state and fixes persistent errors without deleting your files.',
    time: '~5 min', difficulty: 'Easy',
  },
  'onedrive-not-working-fix.md': {
    summary: 'Reset OneDrive by running "%localappdata%\\Microsoft\\OneDrive\\onedrive.exe /reset" in the Run dialog (Win+R) — it restarts with fresh settings and re-syncs without deleting files.',
    time: '~5 min', difficulty: 'Easy',
  },
  'onedrive-sync-pending-fix.md': {
    summary: 'Files stuck on sync pending usually have the file open in another app — close all Office apps, wait 60 seconds. If still pending, right-click the file > Always keep on this device.',
    time: '~3 min', difficulty: 'Easy',
  },

  // ── Windows Update ────────────────────────────────────────────
  'windows-update-error-0x80070005-fix.md': {
    summary: 'This Access Denied error means Windows Update lacks write permission — run the Windows Update Troubleshooter first (Settings > Update & Security > Troubleshoot > Windows Update).',
    time: '~5 min', difficulty: 'Easy',
  },
  'windows-update-error-0x800f0922-fix.md': {
    summary: 'This error means the System Reserved partition is full or update servers are unreachable — disable VPN if connected, then run "sfc /scannow" in an elevated Command Prompt.',
    time: '~8 min', difficulty: 'Medium',
  },
  'windows-update-error-0xc1900101-fix.md': {
    summary: 'This driver compatibility error during feature updates is fixed by uninstalling incompatible drivers (especially graphics and antivirus) before running the update again.',
    time: '~15 min', difficulty: 'Medium',
  },
  'windows-update-not-working-fix.md': {
    summary: 'Run the Windows Update Troubleshooter first (Settings > Update & Security > Troubleshoot > Windows Update > Run the troubleshooter) — it fixes most update issues automatically.',
    time: '~5 min', difficulty: 'Easy',
  },
  'windows-update-stuck-fix.md': {
    summary: 'If stuck for over 2 hours, restart the Windows Update service: open services.msc, find Windows Update, click Stop, wait 30 seconds, then Start — and try the update again.',
    time: '~5 min', difficulty: 'Easy',
  },
  'windows-update-troubleshooter-fix.md': {
    summary: 'Open Settings > Update & Security > Troubleshoot > Additional troubleshooters > Windows Update > Run the troubleshooter — it automatically detects and repairs the most common update blockers.',
    time: '~5 min', difficulty: 'Easy',
  },
};

let updated = 0;
let skipped = 0;

for (const [filename, data] of Object.entries(FIX_DATA)) {
  if (HUB_SLUGS.has(filename)) { skipped++; continue; }

  const filePath = join(ARTICLES_DIR, filename);
  let content;
  try {
    content = readFileSync(filePath, 'utf-8');
  } catch {
    console.log(`  ⚠️  Not found: ${filename}`);
    continue;
  }

  if (content.includes('fix_summary:')) {
    console.log(`  ⏭  Already has fix_summary: ${filename}`);
    skipped++;
    continue;
  }

  // Insert after read_time line
  const readTimeMatch = content.match(/^read_time:.*$/m);
  if (!readTimeMatch) {
    console.log(`  ⚠️  No read_time field: ${filename}`);
    continue;
  }

  const insertion = [
    `fix_summary: "${data.summary}"`,
    `fix_time_display: "${data.time}"`,
    `fix_difficulty: ${data.difficulty}`,
  ].join('\n');

  const newContent = content.replace(
    readTimeMatch[0],
    readTimeMatch[0] + '\n' + insertion
  );

  writeFileSync(filePath, newContent, 'utf-8');
  console.log(`  ✅ ${filename}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
