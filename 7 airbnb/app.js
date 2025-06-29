const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const hostRouter = require('./routers/hostRouter');
const storeRouter = require("./routers/storeRouter");
const rootDir = require('./utils/path-util');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method, req.body);
  next();
});


app.use(storeRouter);
app.use('/host',hostRouter);


app.use((req, res, next) => {
  res.statusCode = 404; //for user side error this is page not found error
  res.sendFile(path.join(rootDir,"views","index.html"))
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server Running at : http://localhost:${PORT}`);
});
