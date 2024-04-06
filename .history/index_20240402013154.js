
const express = require('express')

 const PORT = process.env.PORT || 8080

 const app = express()

 app.get('/', (req , res) => {
    res.send('Helklo')
})

 app.listen(PORT, () => console.log('Server listen ' + PORT)) 