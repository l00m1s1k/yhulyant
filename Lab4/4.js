// Субклас Employee, який наслідує Person
function Employee(firstName, lastName, birthYear, position) {
    Person.call(this, firstName, lastName, birthYear);
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}, ${this.position}`;
};

const employee1 = new Employee('Jane', 'Smith', 1985, 'Manager');
console.log(employee1.getAge()); // Виведе вік
console.log(employee1.getFullName()); // Виведе повне ім'я з посадою
