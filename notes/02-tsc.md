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
