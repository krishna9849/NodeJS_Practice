/*
    Modules are similar as JS library (A set funcs include in our app)

    inbuilt Modules --- Http, fs, events, etc
    custom modules --- we can create and export the module 
    using 'exports' to export the module , 'require()' to import module to use
    
*/

exports.customModule=function (){
    
    const start = new Date();

    return start;
}

//exports.customModule;