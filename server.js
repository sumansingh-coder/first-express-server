//jshint esversion:6
const express = require("express");

const app = express();

app.get('/', (req,res)=>{
    res.send("<h1>hello</h1>");
});

app.get('/contact', (req, res)=>{
    res.send("<h1>Contact me : suman159singh@gmail.com</h1>");
});

app.get('/about-us',(req, res)=>{
    res.send("<h1>Suman Singh , Programmer</h1>");
})

app.listen(3000, ()=>{
    console.log("My first Server has started!");
});