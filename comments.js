// Create web server
// Create a web server that listens for requests on a given port and responds with a given status code and content type.

const http = require('http');

const port = 3000;
const host = 'localhost';

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end('{"message": "This is a JSON response"}');
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});