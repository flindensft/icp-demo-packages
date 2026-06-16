// json-utils 1.0.0 — kleine JSON-Helfer (Demo-Paket).
export function safeParse(text, fallback = null) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}
export function pretty(value) {
  return JSON.stringify(value, null, 2);
}
export const VERSION = '1.0.0';
