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
        await client.connect();
        const database = client.db(dbName);
        const users = database.collection('users');

        const user = await users.findOne({ email: email, password: password });
        return user !== null;
    } finally {
        await client.close();
    }
}

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    const isValid = await checkCredentials(email, password);

    if (isValid) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid email or password');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Add an event listener to the login form
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the email and password values from the input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Send a POST request to the server with the email and password
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // Process the server's response
            const result = await response.text();
            if (response.ok) {
                alert(result); // Show success message
                window.location.href = 'main_parent.html'; // Redirect on success
            } else {
                alert(result); // Show error message
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});