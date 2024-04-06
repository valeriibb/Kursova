const express = require('express');
require('dotenv').config()

const sequelize = require('./db')
const PORT = process.env.PORT || 4000;
const app = express();


const start = async () =

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
