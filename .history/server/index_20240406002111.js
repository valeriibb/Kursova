const express = require('express');
require('dotenv').config()

const sequelize = require('./db')
const PORT = process.env.PORT || 4000;
const app = express();


const start = async () => {
    try {

    } catch (e) {

    }
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
