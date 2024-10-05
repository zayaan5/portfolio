// Get references to DOM elements
const taskInput = document.getElementById('taskInput'); // Input field for tasks
const addTaskButton = document.getElementById('addTaskButton'); // Button to add tasks
const taskList = document.getElementById('taskList'); // List to display tasks

// Function to add a task
function addTask() {
    const taskText = taskInput.value; // Get the value from input

    // Check if input is not empty
    if (taskText.trim() !== '') {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the text of the list item

        const deleteButton = document.createElement('button'); // Create a delete button
        deleteButton.textContent = 'Del'; // Set button text
        deleteButton.onclick = function() {
            taskList.removeChild(li); // Remove the task from the list
        };

        li.appendChild(deleteButton); // Add the delete button to the list item
        taskList.appendChild(li); // Add the list item to the task list
        taskInput.value = ''; // Clear the input field
    }
}

// Add event listener to the button
addTaskButton.addEventListener('click', addTask);

// Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(); // Call addTask function if 'Enter' is pressed
    }
});
