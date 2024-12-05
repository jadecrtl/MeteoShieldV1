const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User } = require('./database');

const app = express();
app.use(cors()); // Permettre les requêtes cross-origin
app.use(bodyParser.json());

// Route pour l'inscription
app.post('/signup', async (req, res) => {
    const { username, password, email, preferences } = req.body;
    try {
        const newUser = await User.create({
            username,
            password,
            email,
            preferences: preferences || {}
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route pour la connexion
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username, password } });
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route pour récupérer les données météo (exemple)
app.post('/weather', async (req, res) => {
    const { username, geolocation } = req.body;
    if (!geolocation) {
        return res.status(400).json({ message: 'Geolocation is required' });
    }

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Simule des données météo
        const weatherData = {
            temperature: '20°C',
            condition: 'Sunny',
            location: geolocation
        };

        res.status(200).json({ message: 'Weather data fetched successfully', weather: weatherData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
