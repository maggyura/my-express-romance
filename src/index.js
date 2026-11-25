const express = require('express');
// module path so that we don't use Absolute Path for rendering html
const path = require('path');
const http = require('http');
const app = express();

const port = 1000;

//logging middleware
app.use(function (req,res,next){
    console.log("Incoming request to"+req.url+"with a request method "+req.method);
    next();
});

/*
Just having fun with testing how middleware works

app.use(function(req,res,next){
    let minute = (new Date().getMinutes());
    if((minute%2) === 0){
        next();
    }
    else{
        res.statusCode = 403;
        res.end("Not authorized");
    }
})*/


app.use(function (req,res){
    res.sendFile(path.join(__dirname,"main.html"));
})

http.createServer(app).listen(port); // app returns reqHandler function so it can be used with http.createServer

module.exports = app;