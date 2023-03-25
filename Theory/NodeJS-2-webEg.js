/*
    1. import modules
    2. create server
    3. read request and return response
*/
var http=require('http');
http.createServer((req,res)=>{
    console.log("welcome to server");
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end("hello Krishna");
    
}).listen(8081);

console.log("server running.....")