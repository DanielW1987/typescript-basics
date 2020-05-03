/*
 * primitive types
 */
function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

/*
 * Enums
 */
enum Role { ADMIN = 'Administrator', READ_ONLY = 'Read only', AUTHOR = 'Author' }
console.log(Role.ADMIN.toString());

/*
 * Object Types
 */
const person = {
    name: "John Doe",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
}

let favoritesActivities: string[];
favoritesActivities = ['Sports'];

let anyTypes: any[];
anyTypes = ['Sports', 123, false];

/*
 * Union
 */
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}

console.log(padLeft("Hello World", 4));


for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase);
}
