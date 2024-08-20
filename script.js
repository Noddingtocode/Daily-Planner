// Get references to the DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim()+" ";
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Status button
    const statusBtn = document.createElement('button');
    statusBtn.textContent = 'Not Started';
    statusBtn.classList.add('status-btn');
    statusBtn.addEventListener('click', () => {
        if (statusBtn.textContent === 'Not Started') {
            statusBtn.textContent = 'In Progress';
            statusBtn.style.backgroundColor = '#ff6f00';
        } else if (statusBtn.textContent === 'In Progress') {
            statusBtn.textContent = 'Completed';
            statusBtn.style.backgroundColor = '#388e3c';
            li.classList.add('completed');
        } else {
            statusBtn.textContent = 'Not Started';
            statusBtn.style.backgroundColor = '#ffb300';
            li.classList.remove('completed');
        }
    });


    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            li.remove();
        }
    });

    // Add buttons to list item
    li.appendChild(statusBtn);
    li.appendChild(deleteBtn);

    // Add list item to the list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = "";
}

// Event listener for the add button
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
