//  Необхідні модулі
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;


// Аппка для json файлів
app.use(express.json());
const cors = require('cors');
app.use(cors());


// З єднання з БД
const uri = 'mongodb://localhost:27017';
const dbName = 'UserData';

// Перевіряєм дані
async function checkCredentials(email, password) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // До монго сервера підключаємось
        await client.connect();

        // Звертаємось до ДБ
        const database = client.db(dbName);
        const users = database.collection('users');

        // пошук у ДБ
        const user = await users.findOne({ email, password });

        // Якшо юзера знайдено то ретурним тру
        return !!user; // !!-конвертує в бул
    } catch (error) {
        console.error('Error checking credentials:', error);
        return false;
    } finally {
        // Закриваємо підключення до клієнта
        await client.close();
    }
}

// Шлях логіну 
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    try {
        const isValid = await checkCredentials(email, password);

        if (isValid) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('An error occurred. Please try again.');
    }
});

// Запускаємо сервер
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});