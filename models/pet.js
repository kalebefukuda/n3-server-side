// models/pet.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Altura from './altura.js';
import Tutor from './tutor.js';

const Pet = sequelize.define('Pet', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo_pet: DataTypes.STRING,
    nome_pet: DataTypes.STRING,
    genero_pet: DataTypes.STRING,
    altura_valor: DataTypes.FLOAT,
    alturaId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Altura',
            key: 'id_altura'
        }
    },
    tutorId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Tutors',
            key: 'id'
        }
    }
}, {
    tableName: 'pet',
    timestamps: false
});

Tutor.hasMany(Pet, { foreignKey: 'tutorId' });
Pet.belongsTo(Tutor, { foreignKey: 'tutorId' });

export default Pet;
