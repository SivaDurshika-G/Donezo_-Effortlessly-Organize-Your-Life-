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

  const taskElement = document.createElement('li');
  taskElement.innerHTML = `
    <span>${task.title} - ${task.priority}</span>
    <button onclick="completeTask(this)">✔</button>
    <button onclick="deleteTask(this)">❌</button>
  `;
  taskElement.classList.add(priorityInput.toLowerCase());

  const activeTasksList = document.getElementById('activeTasks');
  activeTasksList.appendChild(taskElement);

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
  taskElement.remove();
}

function clearCompleted() {
  const completedTasks = document.getElementById('completedTasks');
  completedTasks.innerHTML = '';
}