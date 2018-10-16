const mongoose = require('mongoose'),

User = mongoose.model('User');

module.exports = function(app){
  // Root Request
  app.get('/', function (req, res) {
    res.render('index');
  });

  // Add User Request
  app.post('/process', function (req, res) {
    console.log('POST DATA', req.body);
    var user = new User({ name: req.body.name, quotes: req.body.quote });
    var wisdom = [];

    User.findOneAndUpdate({ name: user.name }, { name: user.name, $push: { quotes: { quote: req.body.quote, createdAt: Date.now() } } }, { upsert: true, new: true }, function (err, doc) {
      if (err) { return res.send(500, { error: err }); }
      console.log('doc: ', doc);
      console.log('error:', err);
      return res.redirect('/wall');
    });
  });

    app.get('/wall', function (req, res) {
      User.find({}, function (err, users) {
        console.log(users);
        res.render('wall', { users });
      });
    });



  };
