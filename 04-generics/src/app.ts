// Arrays are generic types
const names: Array<string> = [] // is the same as: const names: string[] = [];

// Promises are another build-in generic type
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});

// Readonly are another build-in generic type
const firstNames: Readonly<string[]> = ["Max", "Anna"];
// firstNames.push("Manuel"); // does not compile
// firstNames.pop(); // does not compile

// Generic function (returns the intersection of type T and U)
function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

const mergedObj = merge({name: "Max"}, {age: 30});
console.log(`${mergedObj.name} is ${mergedObj.age}`);

// Working with constraints
interface MyType {
    readonly firstName: string;
    readonly lastName: string;
}

function mergeWithConstraints<T extends MyType, U extends MyType>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

// You can define your own interfaces and use it with string or arrays even if they don't implement the interface
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = "Got no vaule.";
    if (element.length >= 1) {
        descriptionText = `Got ${element.length} element(s).`;
    }

    return [element, descriptionText]
}

console.log(countAndDescribe("Hello World"));
console.log(countAndDescribe(["Hello", "World"]));

// keyof operator
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: "Max"}, "name"); // returns 'Max'