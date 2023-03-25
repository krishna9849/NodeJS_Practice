const fs=require('fs');

//Asynchronous 

fs.readFile('input.txt' , (err,data)=>{
    if(err){
        return console.log(err);
    }
    console.log("ASynchronous file data : " ,data.toString());
})

console.log("Asynchronous file read")

//Synchronous

const data=fs.readFileSync('input.txt')
console.log("Synchronous file data : " ,data.toString());

console.log("Synchronous file read")




fs.open("input.txt" ,'r+', (err,data)=>{
    if(err){
        return console.log("Unable to read the file")
    }
    const str = data.toString() + " \n" + "Data to be added";
    fs.writeFile("input.txt" , str , (err)=>{
        if(err){
            return console.log("Unable to write the file");
        }
    })
    
})