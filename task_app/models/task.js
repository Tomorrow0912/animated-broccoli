import { Sequelize, DataTypes } from 'sequelize'; // '@sequelize/core' is fine too
import sequelize from '../db/db.js'; 

const Task = sequelize.define('Task', {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taskStatus: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  taskCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  dueDate: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Task;
