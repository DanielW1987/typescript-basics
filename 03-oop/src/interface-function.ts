interface AddFunction {
    (a: number, b: number): number;
}

let add: AddFunction;

add = (a: number, b: number) => {
    return a + b;
}

console.log(add(1, 2));
