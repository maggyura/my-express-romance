const express = require('express');

const app = express();
const port = 1000;

app.get('/', (req, res)=>{
    res.send("I love My Chemical Romance");
})
app.listen(port, ()=>{
    console.log("Server is ON.");
})

