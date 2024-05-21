// 8. Функція getUserData та showUserInfo

function getUserData(userName) {
    const user = persons.find(person => person.name === userName);
    if (!user) {
        throw new Error('Unable to find user');
    }
    return user;
}

function showUserInfo(userName) {
    console.log('Loading');
    try {
        const user = getUserData(userName);
        console.log(user);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Loading finished');
    }
}

showUserInfo('John');  // Виведе інформацію про користувача
showUserInfo('Jane');  // Виведе помилку
