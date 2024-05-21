// Абстрактний клас Shape
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Cannot instantiate abstract class Shape directly');
        }
    }

    getArea() {
        throw new Error('Must implement getArea method');
    }

    getPerimeter() {
        throw new Error('Must implement getPerimeter method');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
