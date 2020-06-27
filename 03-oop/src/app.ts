interface Named {
    readonly name: string;
    outputName?: string;

    printOutputName?(): void;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;

    constructor(name: string = "Michael") {
        this.name = name;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Greetable = new Person("Max");
let user2: Greetable = new Person(); // Michael
user1.greet("Hi there,");
user2.greet("Hello");
