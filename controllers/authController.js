// controllers/authController.js

import Tutor from '../models/tutor.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { cpf, nome, email, senha } = req.body;

  try {
    // Verifica se já existe um tutor com o mesmo CPF
    const existingTutor = await Tutor.findOne({ where: { cpf } });
    if (existingTutor) {
      return res.status(409).json({ message: "CPF já registrado." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);

    const tutor = await Tutor.create({
      cpf,
      nome,
      email,
      senha: hashedPassword
    });

    res.status(201).json({ message: "Tutor registrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao registrar usuário: ", error);
    res.status(500).json({ message: "Erro ao registrar usuário." });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const tutor = await Tutor.findOne({ where: { email } });
    if (!tutor) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const isValid = await bcrypt.compare(senha, tutor.senha);
    if (!isValid) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    const token = jwt.sign({ id: tutor.id, email: tutor.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Login bem-sucedido!", token });
  } catch ( error) {
    console.error("Erro interno: ", error);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};
