// models/tutor.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Tutor = sequelize.define('Tutor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpf: {
        type: DataTypes.STRING,
        unique: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
}, {
    timestamps: false
});

export default Tutor;
