// controllers/authController.js
import Tutor from '../models/tutor.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  const { email, senha } = req.body;
  
  try {
    const tutor = await Tutor.findOne({ where: { email } });
    if (!tutor) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const validPassword = await bcrypt.compare(senha, tutor.senha);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: tutor.id, email: tutor.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};
