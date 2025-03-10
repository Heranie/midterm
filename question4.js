// Task Management System

class Task {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  // Array to store tasks
  let tasks = [];
  let nextId = 1; // For auto-incrementing IDs
  
  // Add a new task
  function createTask(name, description) {
    const task = new Task(nextId++, name, description);
    tasks.push(task);
    console.log(`Task created with ID: ${task.id}`);
    return task;
  }
  
  // Get all tasks
  function getAllTasks() {
    return tasks;
  }
  
  // Get a specific task by ID
  function getTaskById(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
      console.log(`Task with ID ${id} not found.`);
      return null;
    }
    return task;
  }
  
  // Modify an existing task
  function updateTask(id, updatedName, updatedDescription) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex === -1) {
      console.log(`Task with ID ${id} not found. Update failed.`);
      return false;
    }
    
    tasks[taskIndex].name = updatedName;
    tasks[taskIndex].description = updatedDescription;
    console.log(`Task with ID ${id} updated successfully.`);
    return true;
  }
  
  // Delete: Remove a task by ID
  function deleteTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    
    if (tasks.length === initialLength) {
      console.log(`Task with ID ${id} not found. Delete failed.`);
      return false;
    }
    
    console.log(`Task with ID ${id} deleted successfully.`);
    return true;
  }
  
  // Display all tasks in a formatted way
  function displayAllTasks() {
    if (tasks.length === 0) {
      console.log("No tasks available.");
      return;
    }
    
    console.log("\n===== TASK LIST =====");
    tasks.forEach(task => {
      console.log(`ID: ${task.id}`);
      console.log(`Name: ${task.name}`);
      console.log(`Description: ${task.description}`);
      console.log("---------------------");
    });
  }
  
  // Example usage
  // Create some tasks
  createTask("Complete project", "Finish the JavaScript project by Friday");
  createTask("Buy groceries", "Milk, eggs, bread, and vegetables");
  createTask("Call mom", "Remember to call mom on her birthday");
  
  // Display all tasks
  displayAllTasks();
  
  // Read a specific task
  const task2 = getTaskById(2);
  console.log("\nTask 2 details:", task2);
  
  // Update a task
  updateTask(1, "Complete project", "Finish the JavaScript project by Monday - deadline extended");
  console.log("\nAfter update:");
  displayAllTasks();
  
  // Delete a task
  deleteTask(2);
  console.log("\nAfter deletion:");
  displayAllTasks();