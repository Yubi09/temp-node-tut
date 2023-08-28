const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our page");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to short history");
    return;
  }
  res.end(`
    <h1>OOPs!!!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5000);
