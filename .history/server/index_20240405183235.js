const express = require('express')
re

const PORT = process.env.PORT 

const app = express()

app.listen(PORT, () => console.log(`App listen port${PORT}`))

