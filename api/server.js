const express = require('express');
const cors = require('cors');

const postsRouter = require('../posts/posts-router');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send(`
        <h2>Lambda Chat API<h2>
    `);
});

server.use('/api/posts', postsRouter);

module.exports = server;

