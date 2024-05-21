// 3. Функція callWithContext
function callWithContext(obj, callback) {
    callback.call(obj);
}

const person = {
    name: 'John',
    age: 25
};

function birthdayMessage() {
    const date = new Date().toDateString();
    console.log(`Today is ${date}! Happy birthday ${this.name}.`);
}

callWithContext(person, birthdayMessage); // Today is ...! Happy birthday John.
