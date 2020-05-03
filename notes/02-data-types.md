# Data Types

Dokumentation: <https://www.typescriptlang.org/docs/handbook/basic-types.html>

## const vs. let

`const` wird als Schlüsselwort für Variablen verwendet, deren Wert sich nach der Zuweisung nicht mehr ändern. `let` wird hingegen für Variablen mit sich verändernden Werten verwendet.

## Type Inference

TypeScript verfügt über Type Inference. Bei Deklaration und Initialisierung einer Variablen ist es daher nicht notwendig den Datentypen anzugeben.

## Primitive Datentypen

TypeScript unterstützt die folgenden primitiven Datentypen:

- number (1, 5.3, -10)
- string ('Hello', "Hello", \`Hello\`)
- boolean

## Objekttypen

Objekte können on the fly wie folgt definiert werden:

```typescript
const person = {
    name: "John Doe",
    age: 30
}
```

TypeScript leitet daraus folgenden Objektdatentyp ab:

```typescript
person: {
    name: string;
    age: number;
}
```

## Arrays

Arrays werden in TypeScript wie folgt abgebildet:

```typescript
let myArray1 = ['Apple', 'Banana', 'Orange'];
let myArray2 = string[];
let myArray3 = any[]; // can contain any type of data
```

## Tuple

Tuples sind Arrays mit einer festen Länge von 2 (Key/Value Pair). Ein Tuple kann nicht inferiert werden, sondern muss explizit deklariert werden:

```typescript
let myTuple = [number, string];
myTuple = [0, 'user'];
```

## Enums

Enums können wie folgt erstellt werden:

```typescript
enum Role { AMIN, READ_ONLY, AUTHOR }
```

Es ist ebenso möglich optionale Enum values zu definieren:

```typescript
enum Role { ADMIN = 'Administrator', READ_ONLY = 'Read only', AUTHOR = 'Author' }
console.log(Role.ADMIN.toString()); // prints 'Administrator'
```

## Any

Der Datentyp `any` kann jeden beliebigen Wert aufnehmen. Ist eine Variable vom Typ `any` verhält sie sich wie eine untypisierte Variable.

## Union

Mit dem Typ `union` kann man ausdrücken, dass ein Parameter entweder eine Zahl oder eine Zeichenfolge ist:

```typescript
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}
```
