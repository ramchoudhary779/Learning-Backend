const http = require("http");
const fs = require('fs');

console.log("I was here");

function requestHandler(req, res) {
  console.log("I was Here in Handler", req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  if (req.url === '/'){ 
    res.write(`<!DOCTYPE html>
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
} else if (req.url === '/products'){
   res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:," />
    <title>Products</title>
</head>
<body>
    <h1>Product list will appear here ...</h1>
</body>
</html>`);
} else if(req.url === '/buy-product') {  
    console.log("Form Data Recieved");
    
    const arr= [];
    req.on('data',(chunk) => {
        console.log(chunk);
        arr.push(chunk);
    });

    req.on('end', () =>{
        const body = Buffer.concat(arr).toString();
        console.log(body);

    })

   

    fs.writeFileSync("buy.txt","Products list");
    res.statusCode= 302;//for redirection
    res.setHeader("location","/products") 
    console.log("Response Send")//abhi data aaya nhi pehli response bhej data isse aage jakar change karenge
  
} 
else {
    res.statusCode= 404 ; //for user side error this is page not found error
   res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:," />
    <title>Page Not found</title>
</head>
<body>
    <h1>404 Page not found</h1>
</body>
</html>`)
}
 
  res.end();
}

const server = http.createServer(requestHandler);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server Running at : http://localhost:${PORT}`);
});
