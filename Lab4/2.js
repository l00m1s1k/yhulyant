// Створення екземплярів класу Car з використанням Object.create
const carProto = {
    make: '',
    model: '',
    year: 0,
    initialize(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
};

const car3 = Object.create(carProto);
car3.initialize('Ford', 'Mustang', 2019);

const car4 = Object.create(carProto);
car4.initialize('Chevrolet', 'Camaro', 2020);

console.log(car3);
console.log(car4);
