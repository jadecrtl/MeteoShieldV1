const { Sequelize } = require('sequelize');

// Configuration de la base PostgreSQL
const sequelize = new Sequelize('meteo_shield_db', 'meteo_user', 'motdepasse', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log // Affiche les requêtes SQL dans la console
});

const User = sequelize.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    preferences: {
        type: Sequelize.JSON,
        allowNull: true
    }
});

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

module.exports = { sequelize, User };
