# Next Generation Concepts

## Arrow Function

Statt:

```typescript
const add = function(a: number, b: number) {
  return a + b;
}

console.log(add(1, 1));
```

kann auch folgendes geschrieben werden:

```typescript
const add = (a: number, b: number) => {
  return a + b;
}

console.log(add(1, 1));
```

Gibt es zwischen den geschweiften Klammern nur einen Ausdruck, können die Klammern und das `return` auch weggelassen werden:

```typescript
const add = (a: number, b: number) => a + b;
```

Wenn TypeScript die Typen der Methodenargumente inferrieren kann, so ist es auch möglich die Typen wegzulassen:

```typescript
button.addEventListener("click", event => console.log(event));
```

## Spread Operator

Wenn ein Funktionsaufruf einen Spread Operator als letztes Argument enthält, entspricht der Spread Operator einer Folge von
diskreten Argumenten.

```typescript
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies); // equivalent with spread operator

// init array with spread operator
const newHobbies = ["foo", ...hobbies, ...activeHobbies];
```

Der Spread Operator kann auch für das Kopieren von Objekten verwendet werden:

```typescript
const person = {
  name: "Max",
  age: 30
}

const copiedPerson = { ...person };
```

## Rest Parameters (Variable arguments)

```typescript
const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const result = add(1, 3, 8, 4, 6, 3, 4);
```

## Array and Object Destructuring

Die destrukturierende Zuweisung ermöglicht es, Daten aus Arrays oder Objekten zu extrahieren, und zwar mit Hilfe einer Syntax,
die der Konstruktion von Array- und Objekt-Literalen nachempfunden ist.

```typescript
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;

// if the hobbies array has more than 2 elements
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);
```

```typescript
const person = {
  name: "Max",
  age: 30
}

const {name: username, age} = person;
console.log(username);
console.log(age);
```

siehe auch:
- <https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung>
- <https://budiirawan.com/typescript-destructuring-array/#:~:text=Literally%2C%20destructuring%20is%20a%20feature,data%20from%20array%20and%20object.>
