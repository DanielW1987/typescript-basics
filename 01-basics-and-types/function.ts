/*
 * Function Types
 */
function print() {
    console.log("Hello World");
}

function addNumbers(a: number, b: number) {
    return a + b;
}

let addFunction: (a: number, b: number) => number;

addFunction = addNumbers;
console.log(addFunction(2, 3)); // prints 5

// addFunction = print; // ERROR

/*
 * Callback Functions
 */ 
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

addAndHandle(5, 10, (result) => {
    console.log(result);
});