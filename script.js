// Display current date and time
function updateDateTime() {
    const now = new Date();
    document.getElementById("date-time").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);

// Task management
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDesc = document.getElementById("task-desc");
const prioritySelect = document.getElementById("priority");
const tasksContainer = document.getElementById("tasks");
const allTasksCount = document.getElementById("all-tasks");
const activeTasksCount = document.getElementById("active-tasks");
const completedTasksCount = document.getElementById("completed-tasks");

let tasks = [];

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = {
        name: taskInput.value,
        description: taskDesc.value,
        priority: prioritySelect.value,
        completed: false,
    };

    tasks.push(task);
    taskInput.value = "";
    taskDesc.value = "";

    updateTasks();
});

function updateTasks() {
    tasksContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.name} (${task.priority})</span>
            <button onclick="toggleComplete(${index})">${task.completed ? "Undo" : "Complete"}</button>
        `;
        tasksContainer.appendChild(li);
    });

    allTasksCount.textContent = tasks.length;
    activeTasksCount.textContent = tasks.filter((task) => !task.completed).length;
    completedTasksCount.textContent = tasks.filter((task) => task.completed).length;
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

document.getElementById("clear-completed").addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);
    updateTasks();
});