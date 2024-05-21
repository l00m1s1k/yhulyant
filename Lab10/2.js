window.addEventListener('storage', function (e) {
    if (e.key === 'tasks') {
        taskList.innerHTML = '';
        JSON.parse(e.newValue).forEach(task => addTask(task));
    }
});
