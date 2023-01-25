// Interfaces

interface intPerson {
    name: string;
    age: number;
}

interface Point {
    x: number;
    y: number;
}

let person: intPerson = {
    name: "John",
    age: 30
};

let point: Point = {
    x: 10,
    y: 20
};

// Interfaces can be used to describe function types
interface Add {
    (x: number, y: number): number;
}

function Add(x: number, y: number): number {
    return x + y;
}

