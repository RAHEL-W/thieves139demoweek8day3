// 1. Given the data below, define a type alias for representing users.
type user = {
    name : string;
    age:number;
    company?: string ;
}
   


let users = [ 
   

    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// console.log(users)

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type daysofweek = "Monday" | "Tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {
            this.firstName =  firstName,
            this.lastName = lastName
        }
        getter():string {
        return `${this.firstName} ${this.lastName}`
       }
}
const  Person1 = new Person('rahel', 'wonde')
console.log(Person1.getter())
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person{
    constructor(
       firstName:string, lastName:string, public salary: number){
        super(firstName, lastName)
       }
       employeInfo():string{
        return`${this.firstName} ${this.lastName} ${this.salary}`
       }
       }

 const Employee1 = new  Employee('rahel', 'wonde',0)     
 console.log(Employee1.employeInfo())


// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface ADDRESS{
    street:string,
    city: string,
    zipCode: number
}

interface employee{
    name: string,
    salary: number,
    address: ADDRESS
}
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

console.log(employee)