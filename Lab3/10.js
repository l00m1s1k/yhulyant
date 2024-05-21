// 10. Функція для виклику коллбеку з переданими аргументами та виведенням інформації
function callWithLogging(callback, ...args) {
    const functionName = callback.name || 'Anonymous function';
    const timeCalled = new Date().toLocaleString();
    console.log(`Calling function ${functionName} with arguments ${args} at ${timeCalled}`);
    callback(...args);
}

function exampleFunction(a, b) {
    console.log(a + b);
}

callWithLogging(exampleFunction, 3, 4); // Виведе інформацію та результат виклику функції
