// Клас Person без використання синтаксису class
function Person(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
}

Person.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe', 1990);
console.log(person1.getAge()); // Виведе вік
console.log(person1.getFullName()); // Виведе повне ім'я
