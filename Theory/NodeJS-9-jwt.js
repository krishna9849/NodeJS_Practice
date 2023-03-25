const jwt = require('jsonwebtoken');

const token = jwt.sign({foo : 'bar' }, 'shhhhh');

const token1 = jwt.sign({foo : 'bar'} , 'privateKey' , {expiresIn : 60 * 60});

console.log("Token : " , token)
console.log("Token1 : " , token1)

jwt.verify(token, 'shhhhh' , (err,decode)=>{
    if(err)
    return console.log("incorrect key")
    console.log(decode.foo)
})