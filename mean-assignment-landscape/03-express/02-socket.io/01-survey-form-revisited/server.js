var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
const math = require('mathjs');
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

app.post('/process', function(req, res){


});
 function randNum() {
     return math.floor(math.random() * 1001);
     
 }


io.sockets.on('connection', function (socket) {
    //server listens to "posting_form" event
    socket.on("posting_form", function (data) {
        //generate a random number
        var random_number = Math.floor((Math.random() * 1000) + 1);
        //will emit the data to the client
        socket.emit('updated_message', { response: data });
        socket.emit('random_number', { response: random_number });
    })
})




