class Department {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];

    /**
     * Constructor of department
     * @param name
     */
    constructor(private readonly id: string, private name: string){
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department){
        console.log('Department: id='+ this.id + ' Name ' + this.name)
    }

    addEmployee(employee: string){
        // this.id = 2;
        this.employees.push(employee);
    }

    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


const accounting: Department =  new Department('1AC','Accounting');
console.log(accounting)
accounting.describe();

accounting.addEmployee("Seb");
accounting.addEmployee("Max");
accounting.addEmployee("Lucie");

//accounting.employees[3] = "Julien";

accounting.printEmployeesInfo();

// const accountingCopy = { name: "seb", describe: accounting.describe}

// accountingCopy.describe();