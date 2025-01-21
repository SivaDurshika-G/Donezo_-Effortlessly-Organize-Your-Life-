document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add Task Function
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create Task Item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Mark as Completed
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Add Remove Button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        // Clear Input Field
        taskInput.value = '';
    });

    // Handle Enter Key Press for Adding Task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});