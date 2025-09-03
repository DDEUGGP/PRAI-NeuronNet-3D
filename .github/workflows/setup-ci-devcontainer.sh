#!/bin/bash

echo "🚀 Starte CI/Devcontainer Setup für @RFOF-NETWORK & @PRAIAI-Axiom"

# 1. Projektstruktur anzeigen
echo "📁 Projektpfade:"
echo "🔹 Repo Root: $(pwd)"
echo "🔹 PRAIAI-Modul: $(pwd)/PRAI-NeuronNet-3D"
echo "🔹 RFOF-Netzwerk: $(pwd)/RFOF-NETWORK"
echo "🔹 Devcontainer: $(pwd)/.devcontainer"

# 2. Devcontainer erstellen
mkdir -p .devcontainer
cat <<EOF > .devcontainer/devcontainer.json
{
  "name": "RFOF-PRAIAI-Quantum-Dev",
  "image": "mcr.microsoft.com/vscode/devcontainers/python:3.8",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "18"
    },
    "ghcr.io/devcontainers/features/docker-in-docker:1": {}
  },
  "postCreateCommand": "npm install && npm run lint",
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
EOF

echo "✅ Devcontainer-Konfiguration erstellt."

# 3. CI-Checks vorbereiten
echo "🔍 Starte CI-Checks..."

# Check: package.json vorhanden?
if [ -f "PRAI-NeuronNet-3D/package.json" ]; then
  echo "📦 package.json gefunden – installiere Dependencies..."
  cd PRAI-NeuronNet-3D
  npm install
  npm run lint
  cd ..
else
  echo "❌ package.json fehlt in PRAI-NeuronNet-3D – bitte hinzufügen!"
fi

# 4. GitHub Actions Trigger (optional)
echo "🔁 Trigger für GitHub Actions vorbereiten..."
echo "🔹 Workflow-Datei: .github/workflows/github-network.yml"
echo "🔹 Deployment-Ziel: Quantum-Ready Integration"

# 5. Quantum-Ready Hinweis
echo "🧠 Hinweis: Für Quantum-Integration siehe [Microsoft Quantum Ready Guide](https://quantum.microsoft.com/en-us/quantum-ready/get-started)[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://quantum.microsoft.com/en-us/quantum-ready/get-started?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")"
echo "🔗 RFOF/PRAIAI-Axiom: Integration via [RFOF Blockchain System](https://rfof-network.github.io/Comprensive-rfof-bitcoin.org-PRAI-BOx-Blockchain-System_Programm-Fusions-Reactor-System/) – ⚠️ derzeit nicht erreichbar"

echo "🎉 Setup abgeschlossen. Du kannst jetzt den Devcontainer in VS Code öffnen und loslegen!"
