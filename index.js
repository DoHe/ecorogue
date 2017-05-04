const connect = require('connect');
const serveStatic = require('serve-static');

const port = process.env.PORT || 5000;
const server = connect().use(serveStatic('static'));
server.listen(port, () => console.log(`Server running on ${port}...`));
