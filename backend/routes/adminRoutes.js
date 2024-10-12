const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Получение всех пользователей (для администратора)
router.get('/users', adminController.getAllUsers);

// Управление магазинами
router.get('/stores', adminController.getAllStores);
router.post('/stores', adminController.createStore);
router.put('/stores/:id', adminController.updateStore);
router.delete('/stores/:id', adminController.deleteStore);

module.exports = router;
