// Функція getUser
const users = [
    { id: 0, name: 'Alice', age: 25, city: 'New York' },
    { id: 1, name: 'Bob', age: 30, city: 'Los Angeles' },
    { id: 2, name: 'Charlie', age: 35, city: 'Chicago' },
    { id: 3, name: 'David', age: 40, city: 'Houston' }
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

// Демонстрація роботи функції
getUser(1).then(user => console.log(user)).catch(error => console.error(error.message));
getUser(5).then(user => console.log(user)).catch(error => console.error(error.message));
