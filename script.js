document.getElementById('dateTime').innerHTML = new Date().toLocaleString();

function addTask() {
  const taskInput = document.getElementById('task').value;
  const descriptionInput = document.getElementById('description').value;
  const priorityInput = document.getElementById('priority').value;

  if (taskInput.trim() === '') return;

  const task = {
    title: taskInput,
    description: descriptionInput,
    priority: priorityInput,
    completed: false
  };

  const taskList = document.getElementById('taskList');
  const activeTasks = document.getElementById('activeTasks');
  const completedTasks = document.getElementById('completedTasks');

  const taskElement = document.createElement('li');
  taskElement.innerHTML = `
    <span>${task.title} - ${task.priority}</span>
    <button onclick="completeTask(this)">✔</button>
    <button onclick="deleteTask(this)">❌</button>
  `;

  taskElement.classList.add(task.priority.toLowerCase());
  taskList.appendChild(taskElement);
  activeTasks.appendChild(taskElement);
  document.getElementById('task').value = '';
  document.getElementById('description').value = '';
}

function completeTask(button) {
  const taskElement = button.parentElement;
  taskElement.classList.add('completed');
  document.getElementById('completedTasks').appendChild(taskElement);
  document.getElementById('activeTasks').removeChild(taskElement);
}

function deleteTask(button) {
  const taskElement = button.parentElement;
  taskElement.parentElement.removeChild(taskElement);
}

function clearCompleted() {
  const completedTasks = document.getElementById('completedTasks');
  completedTasks.innerHTML = '';
}