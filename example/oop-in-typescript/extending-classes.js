"use strict";
// Extending Classes
class Zombie {
    constructor(name, age, rotten) {
        this.name = name;
        this.age = age;
        this.rotten = rotten;
    }
    personData() {
        return `Name: ${this.name}, Age: ${this.age}, Rotten: ${this.rotten}`;
    }
}
let zombie = new Zombie("Alfredo", 30, true);
console.log(zombie.personData());
