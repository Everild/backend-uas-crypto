import { Sequelize } from 'sequelize';

const db = new Sequelize('db_pc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;