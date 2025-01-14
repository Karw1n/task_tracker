// server.mjs
// built in module that allows us to create a server
import { createServer } from 'node:http'; 
import { readFile } from 'node:fs';

// This is actually creates the server
// req = request, res = response
// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' }); //sends the status code
//   res.end('Hello Test!\n'); // sends and displays the message
//   // res.end('Testing!\n');
// });


const server = createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type':'text/html'});
    // Read the HTML file and send its content
    readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error\n');
      } else {
        res.end(data)
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type':'text\plain'});
    res.end('Page not found')
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
