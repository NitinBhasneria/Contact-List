// Importing Module
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser'); 
var cors = require('cors');
var path = require('path'); //haven't installed path because its one of the code module so we dont have to install it seperately

// For using express we need to assign the express method to a variable
var app = express();

// port number 
const port = 3000;

// we need to add a route so that if we go to localhost:3000 then we neeed to specify what it needs to render for that homepage route.
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// bind server with this port number
app.listen(port, ()=>{
    console.log("Server started at port:"+port);
})