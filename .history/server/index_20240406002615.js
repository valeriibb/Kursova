const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

const sequelize = require('./db'); // Assuming ./db.js exports a Sequelize instance
const PORT = process.env.PORT || 4000; // Use PORT from environment variable or default to 4000
const app = express();

const start = async () => {
    try {
        // Authenticate with the database
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Synchronize models with the database (this will create tables if they don't exist)
        await sequelize.sync();
        console.log('All models were synchronized successfully.');

        // Start the Express.js server
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process with an error
    }
};


start();
