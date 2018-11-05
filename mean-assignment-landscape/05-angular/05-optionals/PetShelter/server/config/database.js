const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const modelsPath = path.join(__dirname, '../models');

mongoose
  .connect(
    'mongodb://localhost/pets',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to mongo'))
  .catch(err => console.log(err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected successfully');
});



mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
  if (file.endsWith('.js')) {
    require(path.join(modelsPath, file));
  }
});
