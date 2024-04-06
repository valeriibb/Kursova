import express from 'express'

 const PORT = 8080

 const app = express()

 app.get('/', (req , res) => {
    res.send('Helloc')
})

 app.listen(PORT, () => console.log('Server listen ' + PORT)) 