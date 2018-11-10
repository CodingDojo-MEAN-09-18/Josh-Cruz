const Pet = require('../models/pet');


module.exports = {
  index(req, res) {
    Pet.find({})
      .then(pets => res.json(pets))
      .catch(console.log(res));
  },
  show(req, res) {
    Pet.findById(req.params.id)
      .then(pet => res.json(pet))
      .catch(console.log(res));
  },
  create(req, res) {
    Pet.create(req.body)
      .then(pet => {
        res.json(pet);
      })
      .catch(console.log(res));
  },
  update(req, res) {
    Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(pet => res.json(pet))
      .catch(console.log(res));
  },
  delete(req, res) {
    Pet.findByIdAndRemove(req.params.id)
      .then(pet => res.json(pet))
      .catch(console.log(res));
  },

};
