/**
 * One-time GSC OAuth2 setup helper.
 * Run locally: node scripts/gsc-oauth-setup.mjs
 *
 * Prerequisites:
 *   1. Google Cloud Console → new project → Enable "Google Search Console API"
 *   2. Credentials → OAuth 2.0 Client ID → Desktop App
 *   3. Download JSON → copy client_id and client_secret
 *   4. Set env vars: GSC_CLIENT_ID, GSC_CLIENT_SECRET
 *   5. Run this script → opens browser → paste auth code → get refresh token
 *   6. Add refresh token as GitHub Secret: GSC_REFRESH_TOKEN
 */

import { createServer } from 'http';
import { exec } from 'child_process';

const CLIENT_ID     = process.env.GSC_CLIENT_ID;
const CLIENT_SECRET = process.env.GSC_CLIENT_SECRET;
const REDIRECT_URI  = 'http://localhost:3456/callback';
const SCOPE         = 'https://www.googleapis.com/auth/webmasters.readonly';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('ERROR: GSC_CLIENT_ID ve GSC_CLIENT_SECRET env var eksik.\n');
  console.error('Kullanım:');
  console.error('  $env:GSC_CLIENT_ID="your-client-id"');
  console.error('  $env:GSC_CLIENT_SECRET="your-client-secret"');
  console.error('  node scripts/gsc-oauth-setup.mjs');
  process.exit(1);
}

const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
authUrl.searchParams.set('client_id', CLIENT_ID);
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('scope', SCOPE);
authUrl.searchParams.set('access_type', 'offline');
authUrl.searchParams.set('prompt', 'consent');

console.log('\n=== DK Admin — GSC OAuth Setup ===\n');
console.log('Tarayıcıda şu URL açılıyor:\n');
console.log(authUrl.toString());
console.log('\n(Otomatik açılmazsa yukarıdaki URL\'yi tarayıcıya yapıştır)\n');

// Try to open browser
const openCmd = process.platform === 'win32'
  ? `start "" "${authUrl.toString()}"`
  : process.platform === 'darwin'
    ? `open "${authUrl.toString()}"`
    : `xdg-open "${authUrl.toString()}"`;

exec(openCmd, () => {});

// Local server to catch the OAuth callback
const server = createServer(async (req, res) => {
  if (!req.url?.startsWith('/callback')) {
    res.end('Bekliyor...');
    return;
  }

  const url = new URL(req.url, 'http://localhost:3456');
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h2>Hata: ${error}</h2><p>Pencereyi kapat ve tekrar dene.</p>`);
    server.close();
    process.exit(1);
  }

  if (!code) {
    res.end('Code yok — tekrar dene.');
    return;
  }

  // Exchange code for tokens
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
  });

  const tokens = await tokenRes.json();

  if (tokens.error) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h2>Token hatası: ${tokens.error}</h2><p>${tokens.error_description}</p>`);
    server.close();
    process.exit(1);
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <html><body style="font-family:monospace;padding:20px;background:#060D08;color:#4ADE80">
    <h2>✓ Başarılı!</h2>
    <p style="color:#8CAA8C">Bu pencereyi kapat, terminale bak.</p>
    </body></html>
  `);
  server.close();

  console.log('\n=== BAŞARILI ===\n');
  console.log('Refresh Token (GitHub Secret olarak kaydet):');
  console.log('\n  ' + tokens.refresh_token + '\n');
  console.log('GitHub Actions → Settings → Secrets and variables → Actions:');
  console.log('  GSC_CLIENT_ID     =', CLIENT_ID.slice(0, 20) + '...');
  console.log('  GSC_CLIENT_SECRET = (gizli)');
  console.log('  GSC_REFRESH_TOKEN =', tokens.refresh_token?.slice(0, 20) + '...');
  console.log('  GSC_SITE_URL      = https://www.donanimklinik.com/');
  console.log('\nAyrıca Vercel env var\'larına da ekle:');
  console.log('  ADMIN_HASH = <sha256 of your admin password>');
  console.log('\nAdmin şifresi hash oluştur:');
  console.log('  node -e "const c=require(\'crypto\');console.log(c.createHash(\'sha256\').update(\'SIFRENIZ\').digest(\'hex\'))"');
  console.log('\n');

  process.exit(0);
});

server.listen(3456, () => {
  console.log('Callback dinleniyor: http://localhost:3456/callback');
  console.log('Google hesabına giriş yap ve izin ver...\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 3456 meşgul. Başka bir program kapatıp tekrar dene.');
  } else {
    console.error('Server hatası:', err.message);
  }
  process.exit(1);
});
