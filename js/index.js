const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection URI and database name
const uri = 'mongodb://localhost:27017';
const dbName = 'UserData';

// Function to check user credentials
async function checkCredentials(email, password) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const database = client.db(dbName);
        const users = database.collection('users');

        // Query the collection for a matching email and password
        const user = await users.findOne({ email, password });

        // Return true if a matching user is found, otherwise false
        return !!user;
    } catch (error) {
        console.error('Error checking credentials:', error);
        return false;
    } finally {
        // Ensure the client is closed
        await client.close();
    }
}

// Login route
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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});