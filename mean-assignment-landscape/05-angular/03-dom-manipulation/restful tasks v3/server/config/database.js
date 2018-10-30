const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const modelsPath = path.join(__dirname, '../models' );


mongoose.connect(
  'mongodb://localhost/task_api',
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach (file => {
  if ( file.endsWith('.js') ){
    require(path.join(modelsPath, file ));
  }
});


