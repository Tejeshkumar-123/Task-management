// Get elements
const taskForm = document.getElementById('taskForm');
const taskContainer = document.getElementById('taskContainer');

// Add event listener for form submission
taskForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const taskName = document.getElementById('taskName').value;
  const taskPriority = document.getElementById('taskPriority').value;
  const dueDate = document.getElementById('dueDate').value;

  // Create task element
  const taskItem = document.createElement('li');
  taskItem.classList.add(
    `priority-${taskPriority.toLowerCase()}`
  );
  taskItem.innerHTML = `
    <strong>${taskName}</strong> 
    <p>Priority: ${taskPriority}</p>
    <p>Due: ${dueDate}</p>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskContainer.removeChild(taskItem);
  });

  // Append task to container
  taskContainer.appendChild(taskItem);

  // Reset form
  taskForm.reset();
});
