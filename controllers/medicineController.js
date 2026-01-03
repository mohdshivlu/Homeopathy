const { Medicine } = require('../models');
const { Op } = require('sequelize');

const getAllMedicines = async (req, res, next) => {
  try {
    const { search, prakriti } = req.query;
    const where = {};

    if (search) {
      where[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { rogName: { [Op.iLike]: `%${search}%` } },
        { rogGati: { [Op.iLike]: `%${search}%` } },
        { rogiPrakriti: { [Op.iLike]: `%${search}%` } },
        { mansikLakshan: { [Op.iLike]: `%${search}%` } },
        { vishishtLakshan: { [Op.iLike]: `%${search}%` } },
        { vyapakLakshan: { [Op.iLike]: `%${search}%` } }
      ];
    }

    if (prakriti) {
      where.prakriti = prakriti;
    }

    // Use id as fallback for ordering to avoid collation issues with Hindi text
    const medicines = await Medicine.findAll({
      where,
      order: [['id', 'ASC']]
    });
    
    // Sort in memory by name if needed (handles Hindi text better)
    medicines.sort((a, b) => {
      const nameA = (a.name || '').toLowerCase();
      const nameB = (b.name || '').toLowerCase();
      return nameA.localeCompare(nameB, 'hi');
    });

    res.json(medicines);
  } catch (error) {
    next(error);
  }
};

const getMedicineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medicine = await Medicine.findByPk(id);

    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    res.json(medicine);
  } catch (error) {
    next(error);
  }
};

const createMedicine = async (req, res, next) => {
  try {
    const {
      name,
      prakriti,
      shakti,
      rogName,
      rogGati,
      rogiPrakriti,
      mansikLakshan,
      vishishtLakshan,
      vyapakLakshan,
      utkatIchha,
      masikDharm,
      puranak,
      saman,
      virodhi,
      notes
    } = req.body;

    if (!name || !prakriti) {
      return res.status(400).json({ message: 'Name and prakriti are required' });
    }

    const medicine = await Medicine.create({
      name,
      prakriti,
      shakti,
      rogName,
      rogGati,
      rogiPrakriti,
      mansikLakshan,
      vishishtLakshan,
      vyapakLakshan,
      utkatIchha,
      masikDharm,
      puranak,
      saman,
      virodhi,
      notes
    });

    res.status(201).json(medicine);
  } catch (error) {
    next(error);
  }
};

const updateMedicine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medicine = await Medicine.findByPk(id);

    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    await medicine.update(req.body);
    res.json(medicine);
  } catch (error) {
    next(error);
  }
};

const deleteMedicine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medicine = await Medicine.findByPk(id);

    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    await medicine.destroy();
    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine
};

