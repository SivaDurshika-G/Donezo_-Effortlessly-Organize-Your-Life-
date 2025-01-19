// Add a task to the list
function addTask() {
  const taskInput = document.getElementById('task').value;
  const descriptionInput = document.getElementById('description').value;
  const priorityInput = document.getElementById('priority').value;

  if (taskInput.trim() === '') return; // Do not add empty tasks

  const task = {
    title: taskInput,
    description: descriptionInput,
    priority: priorityInput,
    completed: false
  };

  // Create new task element
  const taskElement = document.createElement('li');
  taskElement.innerHTML = `
    <span>${task.title} - ${task.priority}</span>
    <button onclick="completeTask(this)">✔</button>
    <button onclick="deleteTask(this)">❌</button>
  `;
  taskElement.classList.add(priorityInput.toLowerCase());

  // Append the new task to the active tasks list
  const activeTasksList = document.getElementById('activeTasks');
  activeTasksList.appendChild(taskElement);

  // Clear input fields
  document.getElementById('task').value = '';
  document.getElementById('description').value = '';
}

// Mark task as completed
function completeTask(button) {
  const taskElement = button.parentElement;
  taskElement.classList.add('completed');
  document.getElementById('completedTasks').appendChild(taskElement);
  document.getElementById('activeTasks').removeChild(taskElement);
}

// Delete a task
function deleteTask(button) {
  const taskElement = button.parentElement;
  taskElement.remove();
}

// Clear completed tasks
function clearCompleted() {
  const completedTasks = document.getElementById('completedTasks');
  completedTasks.innerHTML = '';
}