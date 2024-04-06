import express from 'express';

const PORT = 2000

const app = express()

app.listen(PORT, () => console.log(`App listen port${PORT}`))

