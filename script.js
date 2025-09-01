// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field
    const taskList = document.getElementById('task-list'); // Task list container

    // Function to add a task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeBtn);

        // Append li to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key in input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Call addTask on DOMContentLoaded (as required)
    addTask();
});
