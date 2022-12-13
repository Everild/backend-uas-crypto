import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Komponen = db.define(
    'komponenPc', 
    {
        uuid: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            validate: {
            notEmpty: true,
            },
        },
        nama : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100],
            },
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        harga: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        Image: DataTypes.STRING,
        url: DataTypes.STRING,

    // nama: DataTypes.STRING,
    // harga: DataTypes.STRING,
    // jenis: DataTypes.STRING,
    // merek: DataTypes.STRING,
    }, {
    freezeTableName: true
    });

export default Komponen;

(async() => {
    await db.sync();
})();