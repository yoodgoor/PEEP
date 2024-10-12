const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Middleware для обработки JSON
app.use(express.json());

// Маршруты
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// Главный маршрут
app.get('/', (req, res) => {
  res.send('PEEP backend is running');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
