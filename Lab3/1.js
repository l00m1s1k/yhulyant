// 1. Функція average
function average(...args) {
    const sum = args.reduce((acc, val) => acc + val, 0);
    return sum / args.length;
}

console.log(average(1, 2, 3, 4, 5)); // 3
console.log(average(10, 20, 30)); // 20
