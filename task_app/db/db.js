import { Sequelize } from 'sequelize'; // just 'sequelize'


const sequelize = new Sequelize({
  dialect: 'sqlite',       // <- just a string
  storage: 'C:\\Users\\MushyNuts\\Documents\\Coding\\task_app\\task_app\\db\\sequelize.sqlite'
,
});

export default sequelize
