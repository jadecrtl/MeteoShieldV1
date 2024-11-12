const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./database');

const app = express();
app.use(bodyParser.json());

// Route pour l'inscription (SignUp)
app.post('/signup', async (req, res) => {
    const { username, password, email, preferences } = req.body;
    
    try {
        // Crée un nouvel utilisateur avec ou sans le champ "preferences"
        const newUser = await User.create({
            username,
            password,
            email,
            preferences: preferences || {} // Si "preferences" est absent, on met un objet vide
        });
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route pour la connexion (LogIn)
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

// Nouvelle route pour récupérer des données météo
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
        
        // Ici, on pourra appeler une API météo externe avec la géolocalisation fournie.
        // Par exemple, quelque chose comme:
        // const weatherData = await fetchWeatherAPI(geolocation);

        res.status(200).json({ message: 'Weather data fetched successfully', weather: "fakeWeatherData" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
