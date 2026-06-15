// demo-lib — Beispielpaket für die ICP Supply-Chain Registry.
// Der Inhalt ist bewusst trivial; entscheidend ist, dass seine Integrität
// und Herkunft on-chain nachweisbar sind.

export function greet(name) {
  return `Hallo, ${name}! Dieses Paket wurde manipulationssicher über ICP ausgeliefert.`;
}

export const VERSION = '1.0.0';
