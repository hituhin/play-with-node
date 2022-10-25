let http = require("http");

let routes = require('./routes');


const server = http.createServer(routes);

server.listen(3000);