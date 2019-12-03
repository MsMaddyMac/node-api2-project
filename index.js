const server = require('./api/server');

const port = 4004;

server.listen(port, () => {
    console.log(`API listening on port http://localhost:${port}!`)
});