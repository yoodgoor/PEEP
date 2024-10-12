const db = require('../config/database');

// Получение истории изменения цен
exports.getPriceHistory = (req, res) => {
    const { product_id } = req.params;
    const query = 'SELECT * FROM price_history WHERE product_id = ?';
    db.query(query, [product_id], (err, results) => {
        if (err) {
            console.error('Error fetching price history:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
};
