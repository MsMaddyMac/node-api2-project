const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2>Lambda Chat API<h2>`);
});

const port = 4004;
server.listen(port, () => console.log(`API listening on port ${port}!`));