// Require necessary modules
require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

// Define the port number from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Create an Express application
const app = express();

// Define a function to start the server
const start = async () => {
    try {
        // Authenticate Sequelize connection
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Synchronize Sequelize models with the database
        await sequelize.sync();
        console.log('All models were synchronized successfully.');

        // Start the Express server
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        // Handle and log any errors that occur during startup
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process with an error status
    }
};

// Invoke the start function to begin server initialization
start();
