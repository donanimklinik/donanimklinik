/**
 * GSC auth — returns access token.
 * In GitHub Actions: GSC_ACCESS_TOKEN is injected by google-github-actions/auth@v2 (WIF).
 * Locally: set GSC_ACCESS_TOKEN manually for testing.
 */
export async function getAccessToken() {
  const { GSC_ACCESS_TOKEN } = process.env;

  if (!GSC_ACCESS_TOKEN) {
    throw new Error(
      'Missing GSC_ACCESS_TOKEN. In GitHub Actions this is set by the google-github-actions/auth step.'
    );
  }

  return GSC_ACCESS_TOKEN;
}
