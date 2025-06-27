const http = require("http");

console.log("I was here");

function requestHandler(req, res) {
  console.log("I was Here in Handler", req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  // res.write('<!DOCTYPE html>');
  // res.write('<html lang="en">');
  // res.write('<head>');
  // res.write('<title>Document</title>');
  // res.write('</head>');
  // res.write('<body>');
  // res.write('<p>Welcome to Ram Worlds</p>');
  // res.write('</body>');
  // res.write('</html>');

  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:," />
    <title>Document</title>
</head>
<body>
    <p>Welcome to Ram Worlds</p>
</body>
</html>`);
  res.end();
}

const server = http.createServer(requestHandler);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server Running at : http://localhost:${PORT}`);
});
