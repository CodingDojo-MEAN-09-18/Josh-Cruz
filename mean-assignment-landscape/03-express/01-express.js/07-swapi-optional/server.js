var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
const axios = require('axios');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, './static')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


let count = 0;
let planetcount = 0;
// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render('index');
});




app.get('/people', function (req, res) {
    let path = '';
    try {
        count++;
        path = '?page=' + count;
    } catch (error) {
        count = 1;
    };

    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get('https://swapi.co/api/people/' + path)
        .then(response => {
            // log the data before moving on!
            // console.log(response.data);
            // rather than rendering, just send back the json data!
            res.json(response.data.results);
        })
        .catch(error => {
            // log the error before moving on!
            console.log(error);
            res.json(error);
        });
});


app.get('/planets', function (req, res) {
    let path = '';
    try {
        planetcount++;
        path = '?page=' + planetcount;
    } catch (error) {
        planetcount = 1;
    };

    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get('https://swapi.co/api/planets/' + path)
        .then(response => {
            // log the data before moving on!
            // console.log(response.data);
            // rather than rendering, just send back the json data!
            res.json(response.data.results);
        })
        .catch(error => {
            // log the error before moving on!
            console.log(error);
            res.json(error);
        });
});


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log('listening on port 8000');
});
