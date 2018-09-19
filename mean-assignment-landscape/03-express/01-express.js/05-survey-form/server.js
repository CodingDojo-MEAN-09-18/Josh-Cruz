var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');


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

// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render('index');
});

app.post('/process', function(req, res){
    console.log('POST DATA \n\n', req.body);
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.comments = req.body.comments;
    res.redirect('/results');
});

app.get('/results', function(req, res){
    res.render('results', {
        name: req.session.name,
        location: req.session.location,
        comments: req.session.comments });
});





// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log('listening on port 8000');
});
