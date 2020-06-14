# tsc

TypeScript-Dateien werden mit dem CLI-Tool `tsc` kompiliert:

```bash
tsc {{ typescript file }}
```

Um die Datei nach jeder Änderung automatisch zu kompilieren, reicht der Aufruf von:

```bash
tsc {{ typescript file }} -w
```

Das Terminalfenster darf anschließend nicht geschlossen werden.

Um alle TypeScript-Dateien des Projektes zu kompilieren, genügt der Aufruf von `tsc` im Projektverzeichnis. Vorher ist das Projekt mit `tsc --init` zu initialisieren.

Das Ganze kann wieder wie folgt automatisiert werden:

```bash
tsc -w
tsc --watch
```

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
