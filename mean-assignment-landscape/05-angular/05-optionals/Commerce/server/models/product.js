const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name field is required.'],
      minlength: 3
       },
    quantity: {
      type: Number,
      required: [true, 'Quantity field is required.'],
      min: [0, "The Quantity Can't Be Any Lower Than 0."]
       },
    price: {
      type: Number,
      required: [true, 'Price field is required.'],
      min: [0, "The Price Can't Be Any Lower Than 0."]
       },

  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);


