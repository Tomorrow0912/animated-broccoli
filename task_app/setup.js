import Task from './models/task.js';
import sequelize from './db/db.js';


sequelize.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(err => console.error("Connection failed:", err));

  async function createTasks () {
    await Task.sync(); // creates the table if it doesn't exist
    console.log('Tasks table created!');
    const test = await Task.create({taskName: 'Test', taskStatus: 'pending', taskCompleted: false, dueDate: '01/01/2025'});
    console.log('Tasks created successfuly!');
  }

  createTasks();
