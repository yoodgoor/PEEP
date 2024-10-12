const Store = require('../models/storeModel');

// Получение всех магазинов
exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера при получении магазинов' });
  }
};

// Создание нового магазина
exports.createStore = async (req, res) => {
  const { name, address, owner } = req.body;
  try {
    const newStore = new Store({ name, address, owner });
    await newStore.save();
    res.status(201).json(newStore);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера при создании магазина' });
  }
};
