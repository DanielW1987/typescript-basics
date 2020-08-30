type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

type ELevatedEmployee = Admin & Employee;

const e1: ELevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date()
}

console.log(e1);