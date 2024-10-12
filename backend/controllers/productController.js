const db = require('../config/database');

// Получение всех продуктов
exports.getProducts = (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
};

// Создание нового продукта
exports.createProduct = (req, res) => {
    const { name, description, price, store_id } = req.body;
    const query = 'INSERT INTO products (name, description, price, store_id) VALUES (?, ?, ?, ?)';
    db.query(query, [name, description, price, store_id], (err, result) => {
        if (err) {
            console.error('Error creating product:', err);
            res.status(500).send('Server error');
        } else {
            res.status(201).send('Product created');
        }
    });
};

// Получение продукта по ID
exports.getProductById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM products WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error fetching product:', err);
            res.status(500).send('Server error');
        } else if (result.length === 0) {
            res.status(404).send('Product not found');
        } else {
            res.json(result[0]);
        }
    });
};

// Обновление информации о продукте
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, store_id } = req.body;
    const query = 'UPDATE products SET name = ?, description = ?, price = ?, store_id = ? WHERE id = ?';
    db.query(query, [name, description, price, store_id, id], (err, result) => {
        if (err) {
            console.error('Error updating product:', err);
            res.status(500).send('Server error');
        } else {
            res.send('Product updated');
        }
    });
};

// Удаление продукта
exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting product:', err);
            res.status(500).send('Server error');
        } else {
            res.send('Product deleted');
        }
    });
};
