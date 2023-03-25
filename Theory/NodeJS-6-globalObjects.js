/*

Global object are the inbuilt modules no need to import for usage and available in all modules

examples
A. CLASS
1. buffer 
2. console
3. process -- instance of event emitter used to get info of current process
4. global --- used for variable declaration eg : var 
5. URL
6. URLSearchParams

B. Methods
    setImmediate()
    setTimeout()
    setInterval()
    clearInterval()
    clearTimeout()
    clearImmediate()

C. WebAssembly
    require(id)
    exports
    module
    __dirname
    __filename

*/


const buffer= new Buffer.alloc(5,"abcde");
console.log(buffer);

const url= new URL("/foo" , "https://www.helloworld.org/");
console.log(url)

console.log("directory : " , __dirname , "\n " ,"file Name : " , __filename)