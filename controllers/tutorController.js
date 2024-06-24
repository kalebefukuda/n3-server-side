// controllers/tutorController.js
import Tutor from '../models/tutor.js';
import Pet from '../models/pet.js';

export const createTutor = async (req, res) => {
  try {
    const { cpf, nome, email, senha } = req.body;
    const newTutor = await Tutor.create({ cpf, nome, email, senha });
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.findAll();
    res.status(200).json(tutors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTutorById = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await Tutor.findByPk(id, { include: Pet });
    if (tutor) {
      res.status(200).json(tutor);
    } else {
      res.status(404).json({ error: 'Tutor not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const { cpf, nome, email, senha } = req.body;
    const [updated] = await Tutor.update({ cpf, nome, email, senha }, {
      where: { id }
    });
    if (updated) {
      const updatedTutor = await Tutor.findByPk(id);
      res.status(200).json(updatedTutor);
    } else {
      res.status(404).json({ error: 'Tutor not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tutor.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Tutor deleted' });
    } else {
      res.status(404).json({ error: 'Tutor not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
