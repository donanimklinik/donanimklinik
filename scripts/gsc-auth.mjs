/**
 * GSC OAuth2 — refresh token → access token
 * Env vars required: GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN
 */
export async function getAccessToken() {
  const { GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN } = process.env;

  if (!GSC_CLIENT_ID || !GSC_CLIENT_SECRET || !GSC_REFRESH_TOKEN) {
    throw new Error(
      'Missing GSC credentials. Set GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN in environment.'
    );
  }

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: GSC_CLIENT_ID,
      client_secret: GSC_CLIENT_SECRET,
      refresh_token: GSC_REFRESH_TOKEN,
    }),
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`GSC auth failed: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}
