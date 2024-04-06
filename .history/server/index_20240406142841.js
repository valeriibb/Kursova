require('dotenv').config()
const express = require('express')
const sequelize = require('./db'); // Assuming './db' is the path to the Sequelize instance file

const PORT = process.env.PORT || 5000

const app = express()



app.listen(PORT, () => console.log(`Server started port ${PORT}`))
