# Compilation and Debugging

## Compile single file

Die manuelle Kompilierung erfolgt mit dem Kommando:

```bash
tsc typescript-file.ts
```

## Compile whole project

Um das ganze Projekt zu kompilieren, muss das Projekt als TypeScript-Projekt konfiguriert werden:

```bash
tsc --init
```

Dies erzeugt die Datei `tsconfig.json`, in der Einstellungen zur Kompilierung vorgenommen werden können. Die manuelle Kompilierung des Projektes erfolgt nun via Kommando `tsc`.

Möchte man eine fortwährende Kompilierung, so erreicht man dies mit `tsc --watch` oder `tsc -w`.

## tsconfig.json

In der Datei `tsconfig.json` sind folgende Einstellungen möglich:

- .ts-Dateien von der Kompilierung ausschließen (Wildcards sind möglich)
  - `*.dev.ts`
  - `**/*.dev.ts`
- Explizit festlegen, welche .ts-Dateien kompiliert werden sollen
- Festlegen einer Zielversion (Default: ES5)
- Import von JavaScript Librarys
  - Wenn nicht explizit angegeben, sind per Default alle Dom Libs importiert
  - Welche Libs konkret importiert werden, ist abhängig vom Compilation Target
- Mit der Option `"sourceMap": true` wird eine Source Map / Bridge erstellt, so dass man den TypeScript Code über den Browser debuggen kann
- Out-Folder für JavaScript-Dateien festlegen
- Keine JavaScript-Dateien erzeugen, wenn es Compiler-Fehler gibt

Weitere Informationen sind hier zu finden:

- <https://www.typescriptlang.org/docs/handbook/compiler-options.html>
- <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

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

## Debugging

<https://code.visualstudio.com/docs/typescript/typescript-debugging>
