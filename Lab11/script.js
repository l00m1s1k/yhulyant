document.getElementById('fib-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    if (!isNaN(number)) {
        calculateFibonacci(number);
    }
});

function calculateFibonacci(number) {
    const worker = new Worker('fibonacciWorker.js');
    worker.postMessage(number);

    worker.onmessage = function (e) {
        const result = e.data;
        showNotification(`Fibonacci of ${number} is ${result}`);
    };
}

function showNotification(message) {
    const notification = new Notification('Fibonacci Calculation Result', {
        body: message
    });
}
