class Department {

    // private readonly id: string;
    // private readonly name: string;
    private employees: string[] = [];

    // constructor(id: string, name: string) {
    //     this.id = id;
    //     this.name = name;
    // }

    // shorthand initialization
    constructor(private id: string, private readonly name: string) {}

    describe() {
        console.log(`Department: ${this.id} ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

const accounting = new Department("1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Michael");
accounting.describe();
accounting.printEmployeeInformation();
