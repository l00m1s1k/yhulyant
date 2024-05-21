// 4. Способи об'єднання двох масивів

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Спосіб 1: concat
const combined1 = array1.concat(array2);

// Спосіб 2: Spread оператор
const combined2 = [...array1, ...array2];

// Спосіб 3: push.apply
const combined3 = [];
Array.prototype.push.apply(combined3, array1);
Array.prototype.push.apply(combined3, array2);

console.log(combined1);
console.log(combined2);
console.log(combined3);
