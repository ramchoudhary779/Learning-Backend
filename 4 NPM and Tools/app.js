//core Module
const http = require("http");

//local Module
const RequestHandler = require("./RequestHandler");

function compare(num) {
  if (num = 10){
    console.log("Print num is 10");
  }
  else{
    console.log("Print num is not 10");
  }
}

compare(5);

const server = http.createServer(RequestHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Running at : http://localhost:${PORT}`);
});
