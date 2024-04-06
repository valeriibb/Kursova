const express = require('express')

const app = express()

const PORT = process.env.PORT || 400

app.listen(PORT, () => console.log(`App listen port${PORT}`))

