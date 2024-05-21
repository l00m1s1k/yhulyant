// 7. Деструктуризація об'єкта person та першого елемента масиву persons

const { name, city } = persons[0];
console.log(name, city);

const [firstPerson] = persons;
console.log(firstPerson);
