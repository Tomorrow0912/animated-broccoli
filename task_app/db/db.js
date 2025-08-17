import { Sequelize } from 'sequelize'; // just 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',       // <- just a string
  storage: 'sequelize.sqlite',
});


sequelize.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(err => console.error("Connection failed:", err));
