// Метод для перетворення екземпляра Person у екземпляр ObservedPerson
function toObservedPerson(person) {
    let callCount = 0;

    return new Proxy(person, {
        get(target, prop) {
            if (typeof target[prop] === 'function') {
                return function(...args) {
                    callCount++;
                    console.log(`Method ${prop} called ${callCount} times`);
                    return target[prop].apply(target, args);
                };
            }
            return target[prop];
        }
    });
}

const observedPerson = toObservedPerson(person1);
observedPerson.getFullName(); // Виведе повідомлення про виклик та поверне ім'я
observedPerson.getAge(); // Виведе повідомлення про виклик та поверне вік
