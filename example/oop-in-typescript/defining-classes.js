"use strict";
// Defining Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    personData() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
let john = new Person("John", 30);
console.log(john.personData());
