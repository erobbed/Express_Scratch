var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to mongoose
mongoose.connect('mongodb://localhost/expresstest', {useMongoClient: true});

var db = mongoose.connection;


//Routes setup
app.get('/', (req, res) => res.send('Please use api/v1 endpoint.'))

app.listen(3000);
console.log('Running on port 3000')
