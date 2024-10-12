const mysql = require('mysql2');
const dotenv = require('dotenv');

// Загрузка переменных окружения из .env
dotenv.config();

// Настройки базы данных
const db_config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

let connection;

// Функция для подключения к базе данных
function handleDisconnect() {
    connection = mysql.createConnection(db_config);

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            setTimeout(handleDisconnect, 2000); // Попытка переподключения через 2 секунды
        } else {
            console.log('Connected to the database.');
        }
    });

    // Обрабатываем разрывы соединения
    connection.on('error', (err) => {
        console.error('Database error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Reconnecting to the database...');
            handleDisconnect(); // Переподключение при потере соединения
        } else {
            throw err; // Для всех других ошибок
        }
    });
}

// Инициализация подключения
handleDisconnect();

module.exports = connection;
