const http = require('http');
var fs = require('fs')

http.createServer((req, res) => {


  fs.readFile('index.html', function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });

}).listen(8080);

console.log('server running on port 8080');