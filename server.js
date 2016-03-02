// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

// =========================
// configuration============
//==========================

mongoose.connect('mongodb://localhost:27017/picnic_house'); // connect to database

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// basic route
app.set('views', __dirname+ '/');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.post('/availability',function(req,res){

});

app.get('/book',function(req, res){
	
});
// =======================
// start the server ======
// =======================
app.listen(6712);
console.log('Picnic House at http://localhost:' + 6712);
