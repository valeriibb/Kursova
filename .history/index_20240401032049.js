import express from 'express'


 const PORT = 5000

 const app = express()

 app.get('/', (req , res) => {res.status(200).json("Server no work")})

 app.listen(PORT, () => console.log('Server listen ' + PORT))