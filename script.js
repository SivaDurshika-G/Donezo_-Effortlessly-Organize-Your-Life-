document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const totalTasks = document.getElementById('totalTasks');
    const completedTasks = document.getElementById('completedTasks');
    const pendingTasks = document.getElementById('pendingTasks');
    const categorySelect = document.getElementById('categorySelect');
    const prioritySelect = document.getElementById('prioritySelect');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const searchInput = document.getElementById('searchInput');

    let tasks = [];

    // Add a Task
    addTaskBtn.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (!taskName) {
            alert('Task cannot be empty!');
            return;
        }

        const category = categorySelect.value;
        const priority = prioritySelect.value;

        tasks.push({ name: taskName, category, priority, completed: false });
        renderTasks();
        taskInput.value = '';
    });

    // Render Tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${task.name} [${task.category}] (${task.priority})
                <button onclick="removeTask(${index})">Remove</button>
            `;
            taskList.appendChild(li);
        });
        updateSummary();
    }

    // Update Task Summary
    function updateSummary() {
        totalTasks.textContent = tasks.length;
        completedTasks.textContent = tasks.filter(t => t.completed).length;
        pendingTasks.textContent = tasks.filter(t => !t.completed).length;
    }

    // Clear All Tasks
    clearAllBtn.addEventListener('click', () => {
        tasks = [];
        renderTasks();
    });
});