// 5. Функція getGreeting з кешуванням
function getGreeting() {
    let cache = {};

    return function(name) {
        if (cache[name]) {
            return cache[name];
        }
        const greeting = `Hello ${name}`;
        cache[name] = greeting;
        return greeting;
    };
}

const greet = getGreeting();
console.log(greet('Alice')); // Hello Alice
console.log(greet('Alice')); // Hello Alice (cached)
console.log(greet('Bob')); // Hello Bob
