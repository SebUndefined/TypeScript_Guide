abstract class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    /**
     * Constructor of department
     * @param name
     */
    constructor(protected readonly id: string, protected name: string){
        // this.id = id;
        // this.name = name;
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        // this.id = 2;
        this.employees.push(employee);
    }

    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployees(name: string){
        return {name : name}
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, name: string, admins: string[]){
        super(id, name);
        this.admins = admins;
    }
    describe(this: ITDepartment){
        console.log('Department: id='+ this.id + ' Name ' + this.name)
    }
}

class AccountingDepartment extends Department {
    reports: string[];
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        else {
            throw new Error('No report found');
        }
        
    }
    set mostRecentReport(value: string){
        if(!value){
            throw new Error("Please pass a valid value")
        }
        this.addReports(value);
    }
    constructor(id: string, name: string, reports: string[]){
        super(id, name);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name: string){
        if (name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReports(text: string): void {
        this.reports.push(text);
        this.lastReport = text;
    }

    describe(this: AccountingDepartment){
        console.log('Department: id='+ this.id + ' Name ' + this.name)
    }

    
}

class SingleOne {
    private text: string;
    private static instance: SingleOne;
    private constructor(text: string) {
        this.text = text;
    }
    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        else {
            this.instance = new SingleOne("text");
            return this.instance;
        }
    }

    public describe(){
        console.log(this.text);
    }
}


const emp = Department.createEmployees("semmmm");
console.log(emp)


const accounting: AccountingDepartment =  new AccountingDepartment('1AC','Accounting', []);
console.log(accounting)
accounting.addReports("Un rapport")
console.log(accounting.mostRecentReport)
accounting.mostRecentReport = "Test";
console.log(accounting.mostRecentReport)
accounting.describe();

accounting.addEmployee("Seb");
accounting.addEmployee("Max");
accounting.addEmployee("Lucie");

//accounting.employees[3] = "Julien";

accounting.printEmployeesInfo();

// const accountingCopy = { name: "seb", describe: accounting.describe}

// accountingCopy.describe();

const itone: ITDepartment =  new ITDepartment('1IT','IT',['seb']);
console.log(itone)
itone.describe();

itone.addEmployee("Seb");
itone.addEmployee("Max");
itone.addEmployee("Lucie");