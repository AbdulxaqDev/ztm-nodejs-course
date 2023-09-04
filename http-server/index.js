const http = require("http");

const PORT = 7777;

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(res);
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("hello, there");
});

server.listen(PORT, console.log("working"));
