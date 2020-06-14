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

```typescript
let value: any;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
value = Symbol("type");   // OK

value.foo.bar;  // OK
value.trim();   // OK
value();        // OK
new value();    // OK
value[0][1];    // OK
```

## Union Type

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

## Alias Type

Alias Types können bspw. dafür benutzt werden, Unition Types einem konkreten Typ zuzuordnen:

```typescript
type NumberOrString = number | string;
function square(n: NumberOrString): number {
    /// Do Something
}
```

Außerdem können Alias Types auch mit Literal Types verwendet werden:

```typescript
type num = 1 | 2; // variable can be 1 or 2
type str = 'cat' | 'dog' // variable can be cat or dog
type func = (() => string) | (() => void); // function
```

Type Aliases können auch verwendet werden, um Objekttypen zu deklarieren:

```typescript
type User = {
    name: string,
    city: string,
    age: number
}

const user: User = {
    name: "John",
    city: "Berlin",
    age: 30
}
```

## Unknown Type

`unknown` ist das typensichere Gegenstück zu `any`. Alles ist `unknown` zuweisbar, aber `unknown` ist nur sich selbst und `any` zuweisbar. Gleichermaßen sind keine Operationen auf einem `unknown` zulässig, ohne dass sie zuvor auf einen spezifischeren Typ festgelegt wird.

<https://mariusschulz.com/blog/the-unknown-type-in-typescript>

```typescript
let value: unknown;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
value = Symbol("type");   // OK

let value1: unknown = value;   // OK
let value2: any = value;       // OK
let value3: boolean = value;   // Error
let value4: number = value;    // Error
let value5: string = value;    // Error
let value6: object = value;    // Error
let value7: any[] = value;     // Error
let value8: Function = value;  // Error

value.foo.bar;  // Error
value.trim();   // Error
value();        // Error
new value();    // Error
value[0][1];    // Error
```

## Never Type

Der Typ `never` gibt an, dass eine Methode niemals einen Wert zurückgeben wird, weils sie bspw. einen Error wirft.

```typescript
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    while (true) {
         console.log('I always does something and never ends.')
    }
}
```

## Function Types

Es ist auch möglich einer Varibalen eine Funktion bw. ein Pointer zu einer Funktion zuzuweisen, so dass die Funktion später über die Variable ausgeführt werden kann:

```typescript
function print() {
    console.log("Hello World");
}

function add(a: number, b: number) {
    return a + b;
}

let addFunction: Function;
addFunction = add;
console.log(addFunction(2, 3)); // prints 5

addFunction = print; // also work
```

Das Snippet ist aber noch insoweit ungenau, als dass man der Variablen `addFunction` nun jede beliebige Funktion zuweisen kann. Möchte man die Anzahl und Typen der Parameter als auch den Rückgabetyp genau vorgeben, so funktioniert dies wie folgt:

```typescript
let addFunction: (a: number, b: number) => number;

addFunction = add;
console.log(addFunction(2, 3)); // prints 5

addFunction = print; // ERROR
```
