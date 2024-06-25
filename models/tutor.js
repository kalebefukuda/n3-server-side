// models/tutor.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Pet from './pet.js';

const Tutor = sequelize.define('Tutor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tutors',
  timestamps: false,
});

Tutor.hasMany(Pet, { foreignKey: 'tutorId' });
Pet.belongsTo(Tutor, { foreignKey: 'tutorId' });

export default Tutor;
