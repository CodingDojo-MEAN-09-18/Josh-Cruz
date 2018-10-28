const mongoose = require('mongoose');
const tasks = require('../controllers/tasks');

User = mongoose.model('Task');

module.exports = function(app) {


  // // Root Request
  // app.get('/', function(req, res) {
  //   tasks.index(req, res);
  // });

  // // Add User Request
  // app.post('/process', function(req, res) {
  //   tasks.createOrUpdate(req, res);
  // });

  // //Display Content
  // app.get('/wall', function(req, res) {
  //   tasks.display(req, res);
  // });

  // Shows All Tasks
  app.get('/api/tasks', tasks.index);

  //Adds a New Task
  app.post('/api/tasks', tasks.create);

  //Find one task with id
  app.get('/api/tasks/:id', tasks.show);

  //Find and update one task with id
  app.put('/api/tasks/:id', tasks.update);

  //Find and delete one task with id
  app.delete('/api/tasks/:id', tasks.delete );

  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  });

};
