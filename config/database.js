import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('TUTOR_PET', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;