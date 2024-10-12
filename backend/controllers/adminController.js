const db = require('../config/database');

// Получение всех пользователей
exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
};

// Получение всех магазинов
exports.getAllStores = (req, res) => {
    const query = 'SELECT * FROM stores';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching stores:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
};

// Создание нового магазина
exports.createStore = (req, res) => {
    const { name, address } = req.body;
    const query = 'INSERT INTO stores (name, address) VALUES (?, ?)';
    db.query(query, [name, address], (err, result) => {
        if (err) {
            console.error('Error creating store:', err);
            res.status(500).send('Server error');
        } else {
            res.status(201).send('Store created');
        }
    });
};

// Обновление магазина
exports.updateStore = (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    const query = 'UPDATE stores SET name = ?, address = ? WHERE id = ?';
    db.query(query, [name, address, id], (err, result) => {
        if (err) {
            console.error('Error updating store:', err);
            res.status(500).send('Server error');
        } else {
            res.send('Store updated');
        }
    });
};

// Удаление магазина
exports.deleteStore = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM stores WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting store:', err);
            res.status(500).send('Server error');
        } else {
            res.send('Store deleted');
        }
    });
};
