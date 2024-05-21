// 7. Функція для перевірки наявності текстового фрагменту в масиві
function createChecker(array) {
    return function(text) {
        return array.includes(text);
    };
}

const fruits = ['apple', 'banana', 'cherry'];
const checkFruit = createChecker(fruits);

console.log(checkFruit('banana')); // true
console.log(checkFruit('orange')); // false
