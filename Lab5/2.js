// Функція produceRandomAfterDelay на базі invokeAfterDelay
function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(() => Math.floor(Math.random() * 11), delay);
}

// Виклик двох функцій та друк суми
Promise.all([produceRandomAfterDelay(1000), produceRandomAfterDelay(1000)])
    .then(results => {
        const sum = results[0] + results[1];
        console.log(`Sum of random numbers: ${sum}`);
    });
