// 2. Функція values
function values(f, low, high) {
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
}

function square(x) {
    return x * x;
}

console.log(values(square, 1, 5)); // [1, 4, 9, 16, 25]
