var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
const server = app.listen(1337);
const io = require('socket.io')(server);


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

var number = 0;

io.sockets.on('connection', function (socket) {
    console.log('sockets are connected dawg!');
    //server listens to "posting_form" event
    socket.on('plus_one', function () {
        number += 1;
        io.emit('updated_number', number);
    });
    socket.on('clear_num', function () {
        number = 0;
        io.emit('updated_number', number);
    });
});




