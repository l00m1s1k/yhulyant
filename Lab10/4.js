let db;

const request = window.indexedDB.open('tasksDB', 1);

request.onupgradeneeded = function (e) {
    const db = e.target.result;
    const objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('task', 'task', { unique: false });
};

request.onsuccess = function (e) {
    db = e.target.result;
    loadTasksFromIndexedDB();
};

request.onerror = function (e) {
    console.error('IndexedDB error:', e.target.errorCode);
};

function addTaskToIndexedDB(task) {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.add({ task: task });

    request.onsuccess = function () {
        console.log('Task added to IndexedDB');
    };

    transaction.oncomplete = function () {
        loadTasksFromIndexedDB();
    };

    transaction.onerror = function (e) {
        console.error('Transaction error:', e.target.errorCode);
    };
}

function loadTasksFromIndexedDB() {
    const transaction = db.transaction(['tasks'], 'readonly');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.getAll();

    request.onsuccess = function () {
        taskList.innerHTML = '';
        request.result.forEach(task => addTask(task.task));
    };

    transaction.onerror = function (e) {
        console.error('Transaction error:', e.target.errorCode);
    };
}
