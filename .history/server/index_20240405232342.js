const express = require('express');

const PORT = 7800;
const app = express();

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
