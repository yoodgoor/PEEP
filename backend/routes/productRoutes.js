const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Получение всех продуктов
router.get('/', productController.getProducts);

// Добавление нового продукта
router.post('/', productController.createProduct);

// Получение продукта по ID
router.get('/:id', productController.getProductById);

// Обновление информации о продукте
router.put('/:id', productController.updateProduct);

// Удаление продукта
router.delete('/:id', productController.deleteProduct);

module.exports = router;
