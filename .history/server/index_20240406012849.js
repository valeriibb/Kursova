const express = require('express');
const app = express();

const port = 7000;

app.use(
    '/uploads',
    express.static(`${__dirname}/assets/images`)
);
app.use('/styles', express.static(`${__dirname}/css`));

app.listen(port, host, function () {
    console.log(`Server listens ${port}`);
});