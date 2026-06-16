// http-client 0.9.0 — minimaler Fetch-Wrapper (Demo-Paket).
export async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
export const VERSION = '0.9.0';
