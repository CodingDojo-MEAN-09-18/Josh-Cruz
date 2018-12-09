const Product = require('../models/product');

module.exports = {
  index(req, res) {
    Product.find({})
      .then(products => res.json(products))
      .catch(console.log(res));
  },
  show(req, res) {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(console.log(res));
  },
  create(req, res) {
    Product.create(req.body)
      .then(product => {
        res.json(product);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(422).json(errors);
      });
  },
  update(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then(product => {
        console.log('from the product.js file', product);
        res.json(product);
      })
      .catch(error => {
        console.log('erroe from product.js', error);
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(422).json(errors);
      });
  },
  delete(req, res) {
    Product.findByIdAndRemove(req.params.id)
      .then(product => res.json(product))
      .catch(console.log(res));
  },
};
