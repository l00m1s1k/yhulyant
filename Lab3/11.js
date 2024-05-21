// 11. Функція для кешування останнього виклику на 10 секунд
function createCachedFunction(fn) {
    let lastCall = null;
    let cache = null;

    return function(...args) {
        const now = Date.now();
        if (lastCall && (now - lastCall < 10000)) {
            console.log('Returning cached value');
            return cache;
        }

        lastCall = now;
        cache = fn(...args);
        return cache;
    };
}

function expensiveCalculation(x) {
    console.log('Performing calculation...');
    return x * x;
}

const cachedCalculation = createCachedFunction(expensiveCalculation);

console.log(cachedCalculation(5)); // Performing calculation... 25
console.log(cachedCalculation(5)); // Returning cached value 25 (if within 10 seconds)
setTimeout(() => console.log(cachedCalculation(5)), 11000); // Performing calculation... 25 (after 10 seconds)
