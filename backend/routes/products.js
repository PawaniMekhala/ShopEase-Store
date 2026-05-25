const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');

router.get('/', ctrl.getAllProducts);          // Read (list) + optional search
router.get('/:id', ctrl.getProductById);       // Read single
router.post('/', ctrl.createProduct);          // Create
router.put('/:id', ctrl.updateProduct);        // Update
router.delete('/:id', ctrl.deleteProduct);     // Delete

module.exports = router;
