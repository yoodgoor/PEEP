const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Регистрация пользователя
router.post('/register', userController.registerUser);

// Авторизация пользователя
router.post('/login', userController.loginUser);

// Получение данных о пользователе
router.get('/:id', userController.getUserById);

module.exports = router;
