import express from 'express'

const express = requ

 const PORT = 5000

 const app = express()

 app.get('/', (req , res) => {
    console.log(req.query)

    res.status(200).json("Server  work")})

 app.listen(PORT, () => console.log('Server listen ' + PORT)) 