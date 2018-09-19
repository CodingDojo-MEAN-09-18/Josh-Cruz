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
    try {
        req.session.count += 1;
        console.log(req.session.count)
    } catch (error) {
        req.session.count = 0;
    }

    res.render('index', { counter: req.session.count });
});

app.post('/plus2', function(req, res){
    req.session.count += 1;
    res.redirect('/');
});

app.post('/reset', function(req, res){
    req.session.destroy();
    res.redirect('/');
});


// post route for adding a user
app.post('/users', function (req, res) {
    console.log('POST DATA', req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
});


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log('listening on port 8000');
});
