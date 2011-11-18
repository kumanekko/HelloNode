var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'Text/plain'});
   res.end('Hello World\n');
}).listen(8085);
