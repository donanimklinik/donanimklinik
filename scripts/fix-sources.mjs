import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const replacements = {
  // Adobe HelpX (paths reorganized)
  'https://helpx.adobe.com/acrobat/kb/acrobat-reader-not-launching.html':
    'https://helpx.adobe.com/acrobat/kb/unable-to-launch-acrobat-on-windows.html',
  'https://helpx.adobe.com/acrobat/using/crashes.html':
    'https://helpx.adobe.com/acrobat/desktop/troubleshoot/performance-issues/acrobat-crashes.html',
  'https://helpx.adobe.com/acrobat/using/troubleshoot-pdf-display.html':
    'https://helpx.adobe.com/acrobat/kb/cant-view-pdf-web.html',

  // Microsoft Learn BitLocker (slug prefix removed)
  'https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-recovery-overview':
    'https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/recovery-overview',
  'https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-operations-guide':
    'https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/operations-guide',

  // Microsoft Learn Windows File Recovery (moved to MS Store)
  'https://learn.microsoft.com/en-us/windows/client-management/windows-file-recovery':
    'https://apps.microsoft.com/detail/9n26s50ln705',

  // Microsoft OneDrive (GUID changed)
  'https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-945b-b26b8f33d400':
    'https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-95b2-e4cc8c4670b2',

  // Microsoft Outlook (articles reorganized)
  'https://support.microsoft.com/en-us/office/email-is-stuck-in-outbox-cc425a65-3bbe-4c7d-8ce2-1a87b5e8f5e2':
    'https://support.microsoft.com/en-us/topic/outlook-email-stuck-5c945f98-415e-58f2-8476-b76e59dfd2e3',
  'https://support.microsoft.com/en-us/office/troubleshoot-calendar-sync-issues-in-outlook-52bc1a6f-7c10-4d39-9d56-b0c0c6c4b38e':
    'https://support.microsoft.com/en-us/outlook/',
  'https://support.microsoft.com/en-us/office/fix-problems-with-outlook-won-t-send-or-receive-email-57c3e64b-a3e6-4a17-8c79-2c6c38e04c16':
    'https://support.microsoft.com/en-us/outlook/i-can-t-send-or-receive-messages-in-outlook',
  'https://support.microsoft.com/en-us/office/error-message-when-you-send-or-receive-email-in-microsoft-outlook-0x800ccc0e-cc5bd71a-0543-4e3e-a1d4-29a1e19eff78':
    'https://support.microsoft.com/en-us/office/users-get-errors-0x800ccc0e-0x800ccc0f-synchronizing-gmail-and-yahoo-accounts-in-classic-outlook-e5a7b684-7c5c-4848-ab2d-d48291451f67',
  'https://support.microsoft.com/en-us/office/fix-outlook-email-sync-issues-57c3e64b-a3e6-4a17-8c79-2c6c38e04c16':
    'https://support.microsoft.com/en-us/outlook/fix-email-sync-issues-by-removing-a-device-from-your-outlook-mailbox',
  'https://support.microsoft.com/en-us/office/i-can-t-send-or-receive-email-in-outlook-7df52d3b-9de5-11e8-8800-056d99fd44f7':
    'https://support.microsoft.com/en-us/office/i-can-t-send-or-receive-messages-in-outlook-97748418-bbd5-4743-a05b-581f22a466dd',

  // Microsoft Word / PowerPoint (articles reorganized)
  'https://support.microsoft.com/en-us/office/word-is-not-responding-or-hangs-e07d20e8-e7ab-4f2f-9cf7-43af94dd8e6c':
    'https://support.microsoft.com/en-us/office/how-to-troubleshoot-problems-that-occur-when-you-start-or-use-word-c58cf51c-eff7-4205-89ce-1a23f8f8096e',
  'https://support.microsoft.com/en-us/office/open-and-repair-a-file-in-office-4f59f0fa-8416-43a1-a6c7-5dd5e2bb8a23':
    'https://support.microsoft.com/en-us/word/open-a-document-after-a-file-corruption-error',
  'https://support.microsoft.com/en-us/office/powerpoint-is-not-responding-hangs-or-freezes-90680b2e-1318-4d1b-a54b-fe4f7e89a4c2':
    'https://support.microsoft.com/en-us/office/powerpoint-isn-t-responding-hangs-or-freezes-652ede6e-e3d2-449a-a07f-8c800dfb948d',

  // Microsoft Windows Activation (articles reorganized)
  'https://support.microsoft.com/en-us/topic/error-code-0x8007232b-or-0x8007007b-when-you-try-to-activate-windows-f5fde2b8-57e0-8284-8c5a-e44085a88b09':
    'https://support.microsoft.com/en-us/windows/activate-windows-c39005d4-95ee-b91e-b399-2820fda32227',
  'https://support.microsoft.com/en-us/windows/get-help-with-windows-activation-errors-09d8fb64-6768-4815-8057-6b9b3ef04e7f':
    'https://support.microsoft.com/en-us/windows/get-help-with-windows-activation-errors-09d8fb64-6768-4815-0c30-159fa7d89d85',
  'https://support.microsoft.com/en-us/windows/activate-windows-c39005d4-5837-5c23-b9f8-78e0f6f0f1f7':
    'https://support.microsoft.com/en-us/windows/activate-windows-c39005d4-95ee-b91e-b399-2820fda32227',

  // Microsoft Windows Update / Ethernet / Storage
  'https://support.microsoft.com/en-us/windows/fix-ethernet-connection-problems-in-windows-11-a49f3ce7-7541-47a2-a15b-3d3d0c8f1f8e':
    'https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-ethernet-connection-problems-in-windows',
  'https://support.microsoft.com/en-us/windows/check-your-storage-device-health-in-windows-8b7a3835-1e95-4b82-b397-f5a4c9f07db4':
    'https://support.microsoft.com/en-us/windows/device-performance-and-health-in-the-windows-security-app-59d8499d-b6fd-6930-7667-ebf8ae10e08d',
  'https://support.microsoft.com/en-us/topic/error-0x80070005-access-denied-when-you-try-to-install-windows-updates-b3e87c27-9d8a-5101-59e9-e7da98d4c2a3':
    'https://support.microsoft.com/en-us/windows/troubleshoot-problems-updating-windows-188c2b0f-10a7-d72f-65b8-32d177eb136c',
  'https://support.microsoft.com/en-us/topic/windows-update-error-0x800f0922-7be9b1e7-8a98-b59c-bf63-dbad2f5e866d':
    'https://support.microsoft.com/en-us/windows/troubleshoot-problems-updating-windows-188c2b0f-10a7-d72f-65b8-32d177eb136c',
  'https://support.microsoft.com/en-us/windows/windows-update-troubleshooter-19bc41ca-ad72-ae67-af3a-89292d261e4b':
    'https://support.microsoft.com/en-us/windows/windows-update-troubleshooter-19bc41ca-ad72-ae67-af3c-89ce169755dd',
  'https://support.microsoft.com/en-us/topic/windows-10-upgrade-error-0xc1900101-0x20017-a07b4db1-da25-c028-8c32-d00f8f8a2e0d':
    'https://support.microsoft.com/en-us/windows/get-help-with-windows-upgrade-and-installation-errors-ea144c24-513d-a60e-40df-31ff78b3158a',

  // Dropbox (slug changed)
  'https://help.dropbox.com/sync/not-syncing':
    'https://help.dropbox.com/sync/files-not-syncing',

  // Google Drive (article consolidated)
  'https://support.google.com/drive/answer/2633000':
    'https://support.google.com/drive/answer/2565956',

  // Seagate (moved from /support/ to /products/)
  'https://www.seagate.com/support/rescue-data-recovery-services/':
    'https://www.seagate.com/products/rescue-data-recovery/',
};

const articlesDir = 'src/content/articles';
const files = readdirSync(articlesDir).filter(f => f.endsWith('.md'));

let changed = 0;
let unchanged = 0;

for (const file of files) {
  const path = join(articlesDir, file);
  let content = readFileSync(path, 'utf8');
  let modified = false;

  for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    if (content.includes(oldUrl)) {
      content = content.replaceAll(oldUrl, newUrl);
      modified = true;
      console.log(`✓ ${file.replace('.md', '')}: updated`);
    }
  }

  if (modified) {
    writeFileSync(path, content, 'utf8');
    changed++;
  } else {
    unchanged++;
  }
}

console.log(`\nDone: ${changed} files updated, ${unchanged} unchanged.`);
