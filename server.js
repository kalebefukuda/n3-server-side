// server.js
import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import tutorRoutes from './routes/tutorRoutes.js';
import petRoutes from './routes/petRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/tutor', tutorRoutes);
app.use('/pet', petRoutes);
app.use('/auth', authRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
