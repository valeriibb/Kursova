import express from 'express';
const PORTv= 5000

const app = express()

app.listen(PORT, ()=>console.log(`App listen port${PORT}`))