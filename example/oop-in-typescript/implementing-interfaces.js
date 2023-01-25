"use strict";
class Point3D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distanceFromOrigin() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
let point3D = new Point3D(10, 20);
