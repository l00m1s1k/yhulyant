// 1. Створення масиву persons
const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'John', age: 23, city: 'Boston' }
];

// Встановлення властивостей масиву
persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

// Виведення елементів масиву та властивостей масиву різними версіями циклу for


for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}
console.log(persons.groupName, persons.teacher, persons.year);

for (const person of persons) {
    console.log(person);
}
console.log(persons.groupName, persons.teacher, persons.year);


for (const key in persons) {
    if (persons.hasOwnProperty(key)) {
        console.log(persons[key]);
    }
}
console.log(persons.groupName, persons.teacher, persons.year);
