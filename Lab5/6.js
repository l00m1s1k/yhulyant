// Функція logCall
function logCall(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentTime = new Date().toLocaleTimeString();
            console.log(`Current time: ${currentTime}`);
            callback();
            resolve();
        }, 1000);
    });
}

// Послідовний виклик logCall
logCall(() => console.log('Callback 1 executed'))
    .then(() => logCall(() => console.log('Callback 2 executed')))
    .then(() => logCall(() => console.log('Callback 3 executed')))
    .then(() => logCall(() => console.log('Callback 4 executed')));
