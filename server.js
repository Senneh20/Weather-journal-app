// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3000;
const server = app.listen(port,listening);

function listening (){
    console.log('server is running');
    console.log(`running on the localhost:$(port)`);
}

//Setting up the GET request

app.get('\all', sendData);

function sendData (req, res) {
    res.send(projectData);

}

//Setting up the POST request

app.post('/add', weatherInfo);

function weatherInfo(req,res){
  res.send('POST received');
}

const data = [];

app.post('\add', entryHolder);

function entryHolder (req, res){
    console.log(req.body)
   let newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }
    data.push(newEntry);
}


