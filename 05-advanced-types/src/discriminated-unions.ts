// Discriminated Union: On common property in both types
// You cannot use instanceof with interfaces
interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    // if (animal instanceof Bird) {} // does not compile
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }

    console.log("Moving with speed: " + speed);
}

moveAnimal({
    type: "bird",
    flyingSpeed: 10
})
