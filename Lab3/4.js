// 4. Функція з методами increment і getValue
function createCounter() {
    let value = 0;

    return {
        increment() {
            value++;
        },
        getValue() {
            return value;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
