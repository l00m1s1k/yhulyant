document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task !== '') {
            addTask(task);
            taskInput.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        saveTasks();
    }

    function saveTasks() {
        const tasks = Array.from(taskList.querySelectorAll('li')).map(li => li.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task));
    }

    loadTasks();
});
