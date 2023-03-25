/*
Modules  usage in two main functionality

1. encapsulate 
2. re-usage


3 types
  
    1. core modules -- (global objects) many built in modules in nodeJS platform , to use in the program we need to load using "require"
            Examples : http , fs , process , URL , etc..
    
    2. local modules -- user need to build and use in the another program by "export.module"

    3.third party modules -- npm  ( these modules we need to install as per requirement of the project using npm)
            Examples : express , mongoose , jwt etc..

*/


//third part module

// const express=require('express');
// const app=express();

//core module 

const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type" : "text/plain"})
    res.end("Core module");
}).listen(8082);


//local module

//exports.module=app

