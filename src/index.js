// Modules
const express = require('express');
const path = require('path');// module path so that we don't use Absolute Path for rendering html
const http = require('http');
const app = express();
const logger = require('morgan') //logger middleware
// ---
const port = 2000;

let pathToSrc = path.resolve(__dirname,"public");

//logging middleware
app.use(logger("short"));
// statics from public folder. It will be replaced by React folders
app.use(express.static(pathToSrc, {
    index: "main.html",
    extensions: ["html"]
}));

app.use(function(req,res){
    res.statusCode = 404;
    res.end("Can't find that");
});

if(require.main === module){
    http.createServer(app).listen(port); // app returns reqHandler function so it can be used with http.createServer
}

module.exports = app;