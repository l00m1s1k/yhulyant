// Функція sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Використання функції sleep
async function demoSleep() {
    console.log('Sleeping for 1 second...');
    await sleep(1000);
    console.log('Awake!');
}

demoSleep();
