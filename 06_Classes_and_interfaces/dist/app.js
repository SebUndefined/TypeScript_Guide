"use strict";
var Person = (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('seb', 31);
user1.greet("Hello");
var add;
add = function (a, b) {
    return a + b;
};
//# sourceMappingURL=app.js.map