const mongoose = require('mongoose');
const pets = require('../controllers/pets');
Pets = mongoose.model('Pet');

module.exports = function(app) {

  // Shows All Pets
  app.get('/api/pets', pets.index);

  //Adds a New Pet
  app.post('/api/pets', pets.create);

  //Find one Pet with id
  app.get('/api/pets/:id', pets.show);

  //Find and update one Pet with id
  app.put('/api/pets/:id', pets.update);

  //Find and delete one Pet with id
  app.delete('/api/pets/:id', pets.delete );


};
