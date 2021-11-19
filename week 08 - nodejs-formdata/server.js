const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  let body = '';
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    fs.readFile('./form.html', 'UTF-8', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });

  } 

  else if (req.method === 'GET') {
    const address = req.url;
    const query = url.parse(address, true);
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(JSON.stringify(query.query), 'utf-8');
    res.end();
  } 

  else if (req.method === 'POST') {
    req.on('data', (data1) => {
      body += data1;
    });
    req.on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(body, () => {
        res.end();
      });
    });
  } 

  else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    res.end(`< h1 > 404< /h1>`);
  }
}).listen(3000);
