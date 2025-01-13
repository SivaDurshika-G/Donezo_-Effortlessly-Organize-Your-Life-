function addTask() {
    const taskInput = document.getElementById('taskInput');
    const priority = document.getElementById('priority').value;
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');

        listItem.textContent = taskText;
        if (priority === 'high') {
            listItem.classList.add('high');
        }

        listItem.onclick = () => listItem.classList.toggle('completed');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = (e) => {
            e.stopPropagation();
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}