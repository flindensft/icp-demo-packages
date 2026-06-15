# icp-demo-packages

Öffentliche **Paketquelle** für die [ICP Supply-Chain Registry](https://github.com/flindensft/icp-supplychain-demo)-Demo.

Dieses Repo enthält die Paket-Artefakte, die in die ICP-Registry publiziert werden. Es ist
absichtlich **öffentlich**, damit der Registry-Canister die Inhalte per HTTPS-Outcall tokenlos
gegen `raw.githubusercontent.com` verifizieren kann (Provenance-Nachweis: „die on-chain
ausgelieferten Bytes stammen exakt aus diesem GitHub-Commit").

Layout: `<paketname>/<dateien>` — z. B. `demo-lib/index.js`.
