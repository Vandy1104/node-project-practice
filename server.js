//Core Modules
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
  // res.writeHead(200, {'content-Type' : 'text/plain'})
  // res.write('Hey lady');
  // res.end();
  console.log(`${req.method} request for ${req.url}`);

  if(req.method === 'GET'){
    if (req.url === '/'){
      fs.readFile('./public/index.html','UTF-8',(err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/index.html') {
      fs.readFile('./public/index.html','UTF-8', (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/about.html') {
      fs.readFile('./public/about.html','UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/contact.html') {
      fs.readFile('./public/contact.html','UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    }
  } // Method
});

server.listen(3000);
console.log('Hey congrats! Your server is running');
