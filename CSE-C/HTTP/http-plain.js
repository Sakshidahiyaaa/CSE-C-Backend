// http se server bnayege 

const http = require('http');
const fs = require("fs/promises");
const port =3000;// to handle the request

const server = http.createServer(async(req,res)=>{    //to create the server

   // res.statusCode=200;
   // res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200,{'Content-Type': 'text/html'});

    //res.write("Hello CSE-C  Student");

    const readdata= await fs.readFile("./home.html","utf8");
    res.end(readdata);// node --watch http-plain.js


});      //to create the server

server.listen(port ,()=>{
    console.log(`Server is running on port ${port}`)
})  //

