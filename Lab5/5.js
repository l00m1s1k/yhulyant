// Функція loadUsers
async function loadUsers(ids) {
    try {
        const userPromises = ids.map(id => getUser(id));
        const users = await Promise.all(userPromises);
        return users;
    } catch (error) {
        console.error('Error loading users:', error.message);
        throw error;
    }
}

// Демонстрація роботи функції
loadUsers([0, 1, 2, 4]).then(users => console.log(users)).catch(error => console.error(error.message));
