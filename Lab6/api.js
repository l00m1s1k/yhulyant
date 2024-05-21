// api.js

const users = [
    { firstname: 'John', lastname: 'Doe', score: 45 },
    { firstname: 'Jane', lastname: 'Smith', score: 55 },
    { firstname: 'Billy', lastname: 'Joe', score: 35 },
    { firstname: 'Amanda', lastname: 'White', score: 65 },
    { firstname: 'Tom', lastname: 'Brown', score: 40 },
    { firstname: 'Sara', lastname: 'Green', score: 50 },
    { firstname: 'Michael', lastname: 'Johnson', score: 70 },
    { firstname: 'Anna', lastname: 'Lee', score: 80 },
    { firstname: 'Chris', lastname: 'King', score: 60 },
    { firstname: 'Megan', lastname: 'Fox', score: 85 },
    { firstname: 'Jessica', lastname: 'Alba', score: 30 },
    { firstname: 'Robert', lastname: 'Downey', score: 90 },
    { firstname: 'Scarlett', lastname: 'Johansson', score: 95 },
    { firstname: 'Will', lastname: 'Smith', score: 20 },
    { firstname: 'Brad', lastname: 'Pitt', score: 75 },
    { firstname: 'Leonardo', lastname: 'DiCaprio', score: 85 },
    { firstname: 'Johnny', lastname: 'Depp', score: 60 },
    { firstname: 'Angelina', lastname: 'Jolie', score: 40 },
    { firstname: 'Tom', lastname: 'Cruise', score: 50 },
    { firstname: 'George', lastname: 'Clooney', score: 35 }
];

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const shuffled = users.sort(() => 0.5 - Math.random());
            resolve(shuffled.slice(0, 10));
        }, 1000);
    });
}

function getNewUsers() {
    return users.slice(0, 5);
}
