const mongoose = require('mongoose');
const products = require('../controllers/products');
Products = mongoose.model('Product');

module.exports = function(app) {

  // Shows All Products
  app.get('/api/products', products.index);

  //Adds a New Product
  app.post('/api/products', products.create);

  //Find one Product with id
  app.get('/api/products/:id', products.show);

  //Find and update one Product with id
  app.put('/api/products/:id', products.update);

  //Find and delete one Product with id
  app.delete('/api/products/:id', products.delete );


};
