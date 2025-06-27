//core Module
const http = require("http");
const fs = require("fs");
const { URLSearchParams } = require("url");
const bodyParser = require('body-parser');

//External Module
const express = require('express');

// //local Module
// const RequestHandler = require("./RequestHandler");

const app = express();//express hume app deta hai 

app.use(bodyParser.urlencoded());//yeah body dega

app.use((req, res , next) =>{
  console.log("First Middleware",req.url , req.method, req.body);
  next(); //res and next dono me ek call/use karna jaruri hai next aagle middleware ke pass jata 
} )

app.get("/" ,(req, res , next) =>{
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:," />
    <title>Myntra</title>
</head>
<body>
    <h1>Welcome to Ram Worlds</h1>
    <form action="buy-product" method="POST">
        <input type="text" placeholder="Enter the product that you want" name="product">
        <br />
        <input type="text" placeholder="Enter your budget" name="budget">
        <br />
        <input type="submit">

    </form>
</body>
</html>`);
} )

app.get("/products",(req,res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:," />
    <title>Products</title>
</head>
<body>
    <h1>Product list will appear here ...</h1>
</body>
</html>`);
})

app.post("/buy-product",(req,res , next) =>{
        console.log(JSON.stringify(req.body));
        fs.writeFile("buy.json", JSON.stringify(req.body), (err) => {
          res.statusCode = 302; //for redirection
          res.setHeader("location", "/products");
          res.end();
          console.log("Response Send");
        });
      });


app.use((req, res , next) => {
    res.statusCode = 404; //for user side error this is page not found error
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:," />
    <title>Page Not found</title>
</head>
<body>
    <h1>404 Page not found</h1>
</body>
</html>`);
    res.end();
  })


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server Running at : http://localhost:${PORT}`);
});
