const express = require('express');
require('dgram').config()
const PORT = process.env.PORT || 4000;
const app = express();

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
