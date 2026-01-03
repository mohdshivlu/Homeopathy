const express = require('express');
const router = express.Router();
const {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine
} = require('../controllers/medicineController');
const authMiddleware = require('../middleware/auth');

// Public routes
router.get('/', getAllMedicines);
router.get('/:id', getMedicineById);

// Admin routes
router.post('/', authMiddleware, createMedicine);
router.put('/:id', authMiddleware, updateMedicine);
router.delete('/:id', authMiddleware, deleteMedicine);

module.exports = router;

