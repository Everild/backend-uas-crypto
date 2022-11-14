import { Sequelize } from 'sequelize';

const db = new Sequelize('komponen_pc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;