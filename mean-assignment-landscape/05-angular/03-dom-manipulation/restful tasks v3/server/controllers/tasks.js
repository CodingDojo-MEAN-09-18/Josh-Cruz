// const Task = require('mongoose').model( 'User' );

const Task = require('../models/task');

module.exports = {
  index(req, res) {
    Task.find({})
      .then(tasks => res.json(tasks))
      .catch(console.log);
  },
  show(req, res) {
    Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(console.log);
  },
  create(req, res) {
    Task.create(req.body)
      .then(task => res.json(task))
      .catch(console.log);
  },
  update(req, res) {

    Task.findByIdAndUpdate(req.params.id, req.body, { new : true })
      .then(task => res.json(task))
      .catch(console.log);
  },
  delete(req, res) {
    Task.findByIdAndRemove(req.params.id)
      .then(task => res.json(task))
      .catch(console.log);
  },
};

// module.exports = {
//   index: function (req, res) {
//     res.render('index');
//   },

//   find: function(req, res ) {
//     // if (err) {
//     //   console.log('Returned error', err);
//     //   // respond with JSON
//     //   res.json({ message: 'Error', error: err });
//     // } else {
//     //   // respond with JSON
//     //   res.json({ message: 'Success', data: quotes });
//     // }
//   },

//   createOrUpdate: function (req, res) {
//     var task = new Task({ title: req.body.title, description: req.body.description });

//     Task.findOneAndUpdate({ title: task.title }, { title: task.title, description: req.body.description, createdAt: Date.now(),  updatedAt: Date.now() }, { upsert: true, new: true }, function (err, doc) {
//       if (err) { return res.send(500, { error: err }); }
//       // return res.redirect('/wall');
//     });
//   },

//   display: function (req, res) {
//     Task.find({}, function (err, users) {
//       res.render('wall', { users });
//     });
//   }
// };
