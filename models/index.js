// models/index.js
import sequelize from '../config/database.js';
import Tutor from './tutor.js';
import Pet from './pet.js';
import Altura from './altura.js';

const models = {
  Tutor: Tutor.init(sequelize),
  Pet: Pet.init(sequelize),
  Altura: Altura.init(sequelize),
};

// Se houver associações para definir, você pode definir aqui
Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;
