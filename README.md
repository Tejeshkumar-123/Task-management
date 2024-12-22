<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Management Tool</title>
  <style>
    /* CSS Code */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background: #f4f4f9;
      color: #333;
    }

    header {
      background: #4CAF50;
      color: #fff;
      padding: 10px 20px;
      text-align: center;
    }

    main {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .task-form h2, .task-list h2 {
      margin-bottom: 10px;
    }

    .task-form label, .task-form input, .task-form select {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }

    .task-form button {
      background: #4CAF50;
      color: white;
      border: none;
      padding: 10px;
      width: 100%;
      border-radius: 5px;
      cursor: pointer;
    }

    .task-form button:hover {
      background: #45a049;
    }

    .task-list ul {
      list-style: none;
      margin-top: 10px;
    }

    .task-list li {
      padding: 10px;
      background: #f9f9f9;
      border: 1px solid #ddd;
      margin-bottom: 5px;
      border-radius: 5px;
    }

    .task-list .priority-high {
      border-left: 5px solid #e74c3c;
    }

    .task-list .priority-medium {
      border-left: 5px solid #f39c12;
    }

    .task-list .priority-low {
      border-left: 5px solid #2ecc71;
    }
  </style>
</head>
<body>
  <header>
    <h1>Collaborative Task Management</h1>
  </header>
  <main>
    <section class="task-form">
      <h2>Create Task</h2>
      <form id="taskForm">
        <label for="taskName">Task Name:</label>
        <input type="text" id="taskName" placeholder="Enter task name" required>

        <label for="taskPriority">Priority:</label>
        <select id="taskPriority" required>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" required>

        <button type="submit">Add Task</button>
      </form>
    </section>
    <section class="task-list">
      <h2>Task List</h2>
      <ul id="taskContainer"></ul>
    </section>
  </main>
  <script>
    // JavaScript Code
    const taskForm = document.getElementById('taskForm');
    const taskContainer = document.getElementById('taskContainer');

    taskForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form data
      const taskName = document.getElementById('taskName').value;
      const taskPriority = document.getElementById('taskPriority').value;
      const dueDate = document.getElementById('dueDate').value;

      // Create task element
      const taskItem = document.createElement('li');
      taskItem.classList.add(`priority-${taskPriority.toLowerCase()}`);
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
  </script>
</body>
</html>
