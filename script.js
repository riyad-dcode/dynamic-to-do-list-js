document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');


    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task!');
        }
    }


    // Function to create a new task element
    function createTaskElement(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(taskDiv);
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(removeBtn);
        return taskDiv;
    }

    
    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
