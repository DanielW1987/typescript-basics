interface ErrorContainer {
    // id: string; // valid, because it's a string
    //count: number // not valid, because you have to use the type from index property
    [prop: string]: string;
}

// treats like a map in java
const errorBag: ErrorContainer = {
    email: "Not a valid email",
    username: "Must start with a capital character"
};

console.log(errorBag["email"]);
console.log(errorBag["username"]);
