const express = require('express');
const router = express.Router();
const controller = require('../controllers/penghuniController');

// GET semua penghuni
router.get('/', controller.getAllPenghuni);

// POST tambah penghuni
router.post('/', controller.createPenghuni);

// PUT update penghuni
router.put('/:id', controller.updatePenghuni);

// DELETE hapus penghuni
router.delete('/:id', controller.deletePenghuni);

module.exports = router;