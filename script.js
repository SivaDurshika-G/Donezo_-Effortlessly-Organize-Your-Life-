// script.js

// Display current date and time
const dateElement = document.getElementById("current-date");
const timeElement = document.getElementById("current-time");

setInterval(() => {
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString();
    timeElement.textContent = now.toLocaleTimeString();
}, 1000);

// Task management
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const descriptionInput = document.getElementById("description-input");
const prioritySelect = document.getElementById("priority-select");
const tasksList = document.getElementById("tasks");

const allTasks = document.getElementById("all-tasks");
const activeTasks = document.getElementById("active-tasks");
const completedTasks = document.getElementById("completed-tasks");

let tasks = [];

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = {
        name: taskInput.value,
        description: descriptionInput.value,
        priority: prioritySelect.value,
        completed: false,
    };

    tasks.push(task);
    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    tasksList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <div>
                <strong>${task.name}</strong> - ${task.priority}
                <p>${task.description}</p>
            </div>
            <button onclick="toggleComplete(${index})">${
            task.completed ? "Undo" : "Complete"
        }</button>
        `;
        tasksList.appendChild(taskItem);
    });

    updateStats();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function updateStats() {
    allTasks.textContent = tasks.length;
    activeTasks.textContent = tasks.filter((task) => !task.completed).length;
    completedTasks.textContent = tasks.filter((task) => task.completed).length;
}

document.getElementById("clear-completed").addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);
    renderTasks();
});