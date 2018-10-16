module.exports = {
  index: function (req, res) {
    res.render('index');
  },
  createOrUpdate: function (req, res) {
    var user = new User({ name: req.body.name, quotes: req.body.quote });
    var wisdom = [];

    User.findOneAndUpdate({ name: user.name }, { name: user.name, $push: { quotes: { quote: req.body.quote, createdAt: Date.now() } } }, { upsert: true, new: true }, function (err, doc) {
      if (err) { return res.send(500, { error: err }); }
      return res.redirect('/wall');
    });
  },
  display: function (req, res) {
    User.find({}, function (err, users) {
      res.render('wall', { users });
    });
  }
};
