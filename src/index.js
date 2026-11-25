// Modules
const express = require('express');
const path = require('path');// module path so that we don't use Absolute Path for rendering html
const http = require('http');
const app = express();
const logger = require('morgan') //logger middleware
// ---
const port = 1000;

//logging middleware
app.use(logger("short"));


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