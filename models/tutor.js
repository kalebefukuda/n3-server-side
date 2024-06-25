// models/tutor.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Tutor extends Model {}

Tutor.init({
  cpf: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'tutor',
  tableName: 'TUTORS',  // Assegure-se de definir o nome da tabela se estiver usando maiúsculas
  timestamps: false  // Ajuste conforme a necessidade de createdAt e updatedAt
});

export default Tutor;
