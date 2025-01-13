document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task");
  const descriptionInput = document.getElementById("description");
  const prioritySelect = document.getElementById("priority");
  const taskList = document.getElementById("tasks");
  const allTasksCount = document.getElementById("all-tasks");
  const activeTasksCount = document.getElementById("active-tasks");
  const completedTasksCount = document.getElementById("completed-tasks");
  const clearCompletedBtn = document.getElementById("clear-completed");
  const timeDisplay = document.getElementById("time");

  // Display current time
  const updateTime = () => {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleString();
  };
  setInterval(updateTime, 1000);

  const tasks = [];

  const updateStats = () => {
    allTasksCount.textContent = tasks.length;
    activeTasksCount.textContent = tasks.filter((task) => !task.completed).length;
    completedTasksCount.textContent = tasks.filter((task) => task.completed).length;
  };

  const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";
      li.innerHTML = `${task.priority} - ${task.name}: ${task.description}
        <button onclick="toggleComplete(${index})">✔</button>
        <button onclick="deleteTask(${index})">❌</button>`;
      taskList.appendChild(li);
    });
  };

  const addTask = (name, description, priority) => {
    tasks.push({ name, description, priority, completed: false });
    renderTasks();
    updateStats();
  };

  const toggleComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    updateStats();
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
    updateStats();
  };

  const clearCompleted = () => {
    for (let i = tasks.length - 1; i >= 0; i--) {
      if (tasks[i].completed) tasks.splice(i, 1);
    }
    renderTasks();
    updateStats();
  };

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(taskInput.value, descriptionInput.value, prioritySelect.value);
    taskInput.value = "";
    descriptionInput.value = "";
  });

  clearCompletedBtn.addEventListener("click", clearCompleted);
  updateStats();
});