// Функція showUsers з симуляцією завантаження
async function showUsers(ids) {
    console.log('Loading...');
    try {
        const users = await loadUsers(ids);
        console.log(users);
    } catch (error) {
        console.error('Failed to load users:', error.message);
    } finally {
        console.log('Loading finished');
    }
}

// Демонстрація роботи функції
showUsers([0, 1, 2, 3]);
