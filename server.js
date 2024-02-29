const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/": {
      res.setHeader("Content-Type", "html");
      res.end("./index.html");
    }
    case "./about": {
      res.setHeader("Content-Type", "html");
      res.end("./about.html");
    }
    case "./contact": {
      res.setHeader("Content-Type", "html");
      res.end("./contact.html");
    }
    default: {
      res.setHeader("Content-Type", "html");
      res.end("/404.html");
    }
  }
});

server.listen(8000);
