// 9. Приклади використання call, apply, bind
const person = {
    name: 'Alice',
    greet(greeting) {
        console.log(`${greeting}, ${this.name}`);
    }
};

const anotherPerson = { name: 'Bob' };

// call
person.greet.call(anotherPerson, 'Hello'); // Hello, Bob

// apply
person.greet.apply(anotherPerson, ['Hi']); // Hi, Bob

// bind
const greetBob = person.greet.bind(anotherPerson, 'Hey');
greetBob(); // Hey, Bob
