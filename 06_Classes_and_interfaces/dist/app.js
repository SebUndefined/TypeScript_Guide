"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log('Department: id=' + this.id + ' Name ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeesInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('1AC', 'Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee("Seb");
accounting.addEmployee("Max");
accounting.addEmployee("Lucie");
accounting.printEmployeesInfo();
//# sourceMappingURL=app.js.map