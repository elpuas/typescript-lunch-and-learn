// Defining Classes
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    personData(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

let john = new Person("John", 30);

console.log(john.personData());