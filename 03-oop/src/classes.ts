abstract class Department {

    // private readonly id: string;
    // private readonly name: string;
    protected employees: string[] = [];

    // constructor(id: string, name: string) {
    //     this.id = id;
    //     this.name = name;
    // }

    // shorthand initialization
    protected constructor(protected id: string, protected readonly name: string) {}

    abstract describe(): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class AccountingDepartment extends Department {

    private _reports: string[];

    constructor(id: string, reports: string[]) {
        super(id, "Accounting Department")
        this._reports = reports;
    }

    get reports(): string[] {
        return this._reports;
    }

    set reports(value: string[]) {
        this._reports = value;
    }

    describe(): void {
        console.log(`Accounting Department: ${this.id} ${this.name}`);
    }
}

class ITDepartment extends Department {

    private _admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, "IT Department");
        this._admins = admins;
    }

    get admins(): string[] {
        return this._admins;
    }

    set admins(value: string[]) {
        this._admins = value;
    }

    describe(): void {
        console.log(`IT Department: ${this.id} ${this.name}`);
    }
}

const accountingDepartment = new AccountingDepartment("1", ["Report 1"]);
accountingDepartment.addEmployee("Max");
accountingDepartment.addEmployee("Michael");
accountingDepartment.describe();
accountingDepartment.printEmployeeInformation();

const itDepartment = new ITDepartment("1", ["Max"]);
itDepartment.admins = ["Max", "Michael", "David"];
console.log(itDepartment.admins[0]);
