// Importing Module
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser'); 
var cors = require('cors');
var path = require('path'); //haven't installed path because its one of the code module so we dont have to install it seperately

// For using express we need to assign the express method to a variable
var app = express();

const route = require('./routes/route');

// port number 
const port = 3000;


//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log('Error in Database Connection:'+err);
    }
});

// static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

// we need to add a route so that if we go to localhost:3000 then we need to specify what it needs to render for that homepage route.
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// bind server with this port number
// The app. listen() function is used to bind and listen the connections on the specified host and port. 
app.listen(port, ()=>{
    console.log("Server started at port:"+port); // output will be seen in terminal.
})