"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeesInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.createEmployees = function (name) {
        return { name: name };
    };
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, name, admins) {
        var _this = _super.call(this, id, name) || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('Department: id=' + this.id + ' Name ' + this.name);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, name, reports) {
        var _this = _super.call(this, id, name) || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            else {
                throw new Error('No report found');
            }
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass a valid value");
            }
            this.addReports(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Department: id=' + this.id + ' Name ' + this.name);
    };
    return AccountingDepartment;
}(Department));
var SingleOne = (function () {
    function SingleOne(text) {
        this.text = text;
    }
    SingleOne.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new SingleOne("text");
            return this.instance;
        }
    };
    SingleOne.prototype.describe = function () {
        console.log(this.text);
    };
    return SingleOne;
}());
var emp = Department.createEmployees("semmmm");
console.log(emp);
var accounting = new AccountingDepartment('1AC', 'Accounting', []);
console.log(accounting);
accounting.addReports("Un rapport");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Test";
console.log(accounting.mostRecentReport);
accounting.describe();
accounting.addEmployee("Seb");
accounting.addEmployee("Max");
accounting.addEmployee("Lucie");
accounting.printEmployeesInfo();
var itone = new ITDepartment('1IT', 'IT', ['seb']);
console.log(itone);
itone.describe();
itone.addEmployee("Seb");
itone.addEmployee("Max");
itone.addEmployee("Lucie");
//# sourceMappingURL=classes.js.map