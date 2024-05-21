// 8. Функція для зміни властивості об'єктів на велику літеру
const capitalizeProperty = (arr, prop) => arr.map(obj => ({
    ...obj,
    [prop]: obj[prop].charAt(0).toUpperCase() + obj[prop].slice(1)
}));

const people = [
    { name: 'john', age: 30 },
    { name: 'jane', age: 25 }
];

console.log(capitalizeProperty(people, 'name'));
// [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
