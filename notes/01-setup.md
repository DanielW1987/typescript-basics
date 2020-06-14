# Setup

Die Initialisierung eines Projektes erfolgt mit dem Kommando:

```bash
npm init
```

## Lite Server

Beim Tool `lite-server` handelt es sich um einen leichtgewichtigen node Server, der eine Webanwendung ausliefert und aktualisiert, wenn html- oder Javascript-Änderungen vorgenommen werden, CSS-Änderungen über Sockets injiziert und eine Ausweichseite hat, wenn eine Route nicht gefunden wird. Der Einsatz wird nur für die Entwicklung empfohlen.

Die Installation erfolgt wie folgt:

```bash
npm install --save-dev lite-server
```

Der Lite Server wird anschließend in der Datei `package.json` wie folgt aktiviert:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "lite-server"
  },
```

Der Start des Lite Server erfolgt in einem eigenen Terminalfenster über:

```bash
npm run dev
```
