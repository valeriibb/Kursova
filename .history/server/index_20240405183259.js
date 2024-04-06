const express = require('express')
require('dotenv') = require('express')

const PORT = process.env.PORT 

const app = express()

app.listen(PORT, () => console.log(`App listen port${PORT}`))

