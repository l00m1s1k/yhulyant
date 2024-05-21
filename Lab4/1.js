// Функція-конструктор для автомобіля
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Створення екземпляра автомобіля
const car1 = new Car('Toyota', 'Corolla', 2020);
console.log(car1);



// Клас для автомобіля
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// Створення екземпляра автомобіля
const car2 = new Car('Honda', 'Civic', 2021);
console.log(car2);
