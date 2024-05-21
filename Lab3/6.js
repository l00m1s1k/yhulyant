// 6. Функція, яка повертає функцію для сумування чисел
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5);
console.log(addFive(3)); // 8
console.log(add(10)(5)); // 15
