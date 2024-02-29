const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader("Content-Type", "text/html");
  let path = "./pages/";

  switch (req.url) {
    case "/": {
      path += "index.html";
      break;
    }
    case "/about": {
      path += "about.html";
      break;
    }
    case "/contact": {
      path += "contact.html";
      break;
    }
    default: {
      path += "404.html";
    }
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else res.end(data);
  });
});

server.listen(8000, () => {
  console.log("listening");
});
