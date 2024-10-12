const db = require('../config/database');

// Регистрация нового пользователя
exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).send('Server error');
        } else {
            res.status(201).send('User registered');
        }
    });
};

// Авторизация пользователя
exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, result) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send('Server error');
        } else if (result.length === 0) {
            res.status(401).send('Invalid credentials');
        } else {
            res.send('User logged in');
        }
    });
};

// Получение данных о пользователе по ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).send('Server error');
        } else if (result.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json(result[0]);
        }
    });
};
