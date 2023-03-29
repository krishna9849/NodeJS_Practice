const http = require("http");
const dt=require("./NodeJS-3-modules");
console.log("Hi Node");
http.createServer((req, res,err) => {
    if(err){
        console.log("Server is not responding");
        
    }

  res.writeHead(200, { "Content-Type": "text/html" });
  
  let time=dt.customModule();
  console.log("Server running at " , time)
  res.end("Hello geek ");
   
}).listen(8081);


