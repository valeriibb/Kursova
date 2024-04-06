const express = require('express');

const PORT = 5000;


const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json("Server work");
});

app.listen(PORT, () => console.log('Server listen ' + PORT));
