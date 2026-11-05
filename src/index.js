const express = require('express');

// module path so that we don't use Absolute Path for rendering html
const path = require('path');

const app = express();
const port = 1000;

app.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname,'main.html')); //__dirname is needed cuz we all have different absolute paths
})

app.listen(port, ()=>{
    console.log("Server is ON.");
})

