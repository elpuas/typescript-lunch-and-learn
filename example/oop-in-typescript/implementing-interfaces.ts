// Implementing Interfaces
interface Point {
    x: number;
    y: number;
}

class Point3D implements Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    distanceFromOrigin() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let point3D = new Point3D(10, 20);