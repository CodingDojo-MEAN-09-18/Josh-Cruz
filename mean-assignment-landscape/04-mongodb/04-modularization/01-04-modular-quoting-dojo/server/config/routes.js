const mongoose = require('mongoose');
const quotes = require('../controllers/quotes');
User = mongoose.model('User');

module.exports = function(app){
  // Root Request
  app.get('/', function (req, res) {
    quotes.index(req, res);
  });

  // Add User Request
  app.post('/process', function (req, res) {
    quotes.createOrUpdate(req, res);
  });

  //Display Content
    app.get('/wall', function (req, res) {
      quotes.display(req, res);
    });



  };
