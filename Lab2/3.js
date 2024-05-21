// 3. Додавання можливості отримати рік народження без додавання додаткової властивості

Object.defineProperty(persons[0], 'birthYear', {
    get() {
        return new Date().getFullYear() - this.age;
    },
    enumerable: true
});

console.log(persons[0].birthYear);  // Виведе рік народження
