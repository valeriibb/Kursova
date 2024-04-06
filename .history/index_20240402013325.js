import express from 'express'

 const PORT = 8080

 const app = express()

 app.get('/', (req , res) => {
    res.send('Helklo')
})

 app.listen(PORT, () => console.log('Server listen ' + PORT)) 