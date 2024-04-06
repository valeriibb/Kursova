
require('dotenv').config()

import express from 'express'


const PORT = process.env.PORT 

const app = express()

app.listen(PORT, () => console.log(`App listen port${PORT}`))

