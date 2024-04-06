
const express = require('express')

 const PORT = process.env.PORT

 const app = express()

 app.get('/', (req , res) => {
    console.log(req.query)

    res.status(200).json("Server  work")})

 app.listen(PORT, () => console.log('Server listen ' + PORT)) 