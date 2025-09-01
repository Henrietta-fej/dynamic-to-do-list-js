// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new li element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove the task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener for button click
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on page load
    addTask();
});

