// Метод для визначення, чи об'єкти одного класу
function areSameClass(obj1, obj2) {
    if (obj1.constructor === obj2.constructor) {
        console.log(`Both objects are instances of ${obj1.constructor.name}`);
    } else {
        console.log(`Object 1 is an instance of ${obj1.constructor.name}, Object 2 is an instance of ${obj2.constructor.name}`);
    }
}

const person2 = new Person('Alice', 'Johnson', 1995);
const car5 = new Car('Tesla', 'Model 3', 2021);

areSameClass(person1, person2); // Both objects are instances of Person
areSameClass(person1, car5); // Object 1 is an instance of Person, Object 2 is an instance of Car
