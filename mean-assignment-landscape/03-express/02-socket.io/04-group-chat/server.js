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

let number = 0;
let users = [];
let msg_history = [];

io.sockets.on('connection', function (socket) {
    console.log('sockets are connected dawg!');

    //server listens for an event
    socket.on('user_connected', function (user) {
        number += 1;
        session.id = number;
        console.log('user: ' + user , 'id: ' + session.id  );

        let userinfo =
        { 'id': number,
          'name': user
        };

        users.push(userinfo);
        console.log(users);
        io.sockets.emit('new_user', userinfo);
    });

    socket.on('new_message', function (name, message) {
        let msg_info ={user: name,
             message: message };
        msg_history.push(msg_info);
        console.log(msg_info);
        io.sockets.emit('add_message', msg_info);
    });
});




