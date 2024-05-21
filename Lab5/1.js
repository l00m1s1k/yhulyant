// Функція invokeAfterDelay
function invokeAfterDelay(fn, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, delay);
    });
}

// Демонстрація роботи функції
invokeAfterDelay(() => Math.floor(Math.random() * 11), 1000)
    .then(result => console.log(`Random number: ${result}`));
