const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./src/data/fish.json', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error reading fish data.');
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
  });
}).listen(3000, () => {
  console.log('Server running on port 3000');
});