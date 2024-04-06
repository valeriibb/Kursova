const express = require('express');
const app = express();

const host = '127.0.0.1';
const port = 7000;

app.use(
    '/server',
    express.static(`${__dirname}`)
);
app.use('/styles', express.static(`${__dirname}/css`));

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});