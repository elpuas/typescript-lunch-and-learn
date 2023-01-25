// Extending Classes
class Zombie {
    name: string;
    age: number;
    rotten: boolean;
    constructor(name: string, age: number, rotten: boolean) {
        this.name = name;
        this.age = age;
        this.rotten = rotten;
    }
    personData(): string {
        return `Name: ${this.name}, Age: ${this.age}, Rotten: ${this.rotten}`;
    }
}

let zombie = new Zombie("Alfredo", 30, true);

console.log(zombie.personData());
