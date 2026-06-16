# icp-demo-packages

Öffentliche **Paketquelle** für die [ICP Supply-Chain Registry](https://github.com/flindensft/icp-supplychain-demo)-Demo.

Enthält die Paket-Artefakte, die in die ICP-Registry publiziert werden. Absichtlich **öffentlich**,
damit der Registry-Canister die Inhalte per HTTPS-Outcall tokenlos gegen `raw.githubusercontent.com`
verifizieren kann (Provenance-Nachweis).

Layout: `<paketname>/<version>/<dateien>` — z. B. `demo-lib/1.1.0/index.js`.

Pakete:
- `demo-lib` 1.0.0, 1.1.0
- `json-utils` 1.0.0
- `http-client` 0.9.0
