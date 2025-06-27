//core Module
const http = require("http");

//local Module
const RequestHandler = require("./RequestHandler");



const server = http.createServer(RequestHandler);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server Running at : http://localhost:${PORT}`);
});
