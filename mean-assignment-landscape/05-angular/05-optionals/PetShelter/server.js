const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const server = app.listen(8000);
const flash = require('express-flash');

require('./server/config/database');

app.use(bodyParser.json());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.use(
  session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);



require('./server/config/routes')(app);
app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./public/dist/public/index.html'));
});
