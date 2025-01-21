let tasks = [];
let currentView = 'list'; // Default view

// Toggle Dark Mode
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add Task Function
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = document.getElementById('taskPriority').value;

    if (description.trim() === '') return;

    const newTask = {
        description,
        dueDate,
        priority,
        completed: false,
        id: Date.now(),
        subTasks: []
    };

    tasks.push(newTask);
    renderTasks();
    document.getElementById('taskDescription').value = '';
}

// Render Tasks Based on View
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    let filteredTasks = tasks;

    filteredTasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.className = task.completed ? 'completed' : '';
        taskElement.innerHTML = `
            <span>${task.description} (Due: ${task.dueDate}) - Priority: ${task.priority}</span>
            <input type="checkbox" onclick="toggleCompletion(${task.id})" ${task.completed ? 'checked' : ''}>
            <button class="remove" onclick="removeTask(${task.id})">Remove</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Toggle Task Completion
function toggleCompletion(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

// Remove Task
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Filter Tasks
function filterTasks(status) {
    let filteredTasks = tasks;
    if (status === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (status === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    }
    renderTasks();
}

// Search Tasks
function searchTasks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(searchTerm));
    renderTasks(filteredTasks);
}

// Clear Completed Tasks
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}

// Set View Mode
function setView(view) {
    currentView = view;
    if (view === 'list') {
        renderTasks();
    } else if (view === 'calendar') {
        // Implement Calendar View logic here
    } else if (view === 'kanban') {
        // Implement Kanban View logic here
    }
}