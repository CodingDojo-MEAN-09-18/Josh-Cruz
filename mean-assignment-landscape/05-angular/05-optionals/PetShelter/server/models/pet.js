const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    type: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true, minlength: 3 },
    skills: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pet', PetSchema);


