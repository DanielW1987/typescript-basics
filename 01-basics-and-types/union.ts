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
