"use strict";
let users = [
    {
        name: 'Shoha Tsuchida',
        age: 99,
        company: 'Coding Temple'
    },
    {
        name: 'Dylan Katina',
        age: 99
    }
];
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName,
            this.lastName = lastName;
    }
    getter() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const Person1 = new Person('rahel', 'wonde');
console.log(Person1.getter());
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    employeInfo() {
        return `${this.firstName} ${this.lastName} ${this.salary}`;
    }
}
const Employee1 = new Employee('rahel', 'wonde', 0);
console.log(Employee1.employeInfo());
let employee = {
    name: 'Christian Askew',
    salary: 1000000,
    address: {
        street: 'Thieves st',
        city: 'Seattle',
        zipCode: 98101
    }
};
console.log(employee);
