
const express = require('express')

 const PORT = process.env.PORT || 8080

 const app = express()

 app.get('/', (req , res) => {
})

 app.listen(PORT, () => console.log('Server listen ' + PORT)) 