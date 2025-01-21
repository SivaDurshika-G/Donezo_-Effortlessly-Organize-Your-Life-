document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const totalTasks = document.getElementById('totalTasks');
    const completedTasks = document.getElementById('completedTasks');
    const progressBar = document.querySelector('.progress');

    let tasks = [];

    // Add Task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (!taskText) {
            alert('Task cannot be empty!');
            return;
        }

        const task = { text: taskText, priority, completed: false };
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    });

    // Render Tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.classList.toggle('completed', task.completed);
            li.innerHTML = `
                ${task.text} (${task.priority})
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="removeTask(${index})">❌</button>
            `;
            taskList.appendChild(li);
        });

        updateProgress();
    }

    // Toggle Task Completion
    window.toggleTask = function (index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

    // Remove Task
    window.removeTask = function (index) {
        tasks.splice(index, 1);
        renderTasks();
    };

    // Clear All Tasks
    clearAllBtn.addEventListener('click', () => {
        tasks = [];
        renderTasks();
    });

    // Update Progress
    function updateProgress() {
        const total = tasks.length;
        const completed = tasks.filter(task => task.completed).length;

        totalTasks.textContent = total;
        completedTasks.textContent = completed;

        const progressPercent = total === 0 ? 0 : (completed / total) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
});