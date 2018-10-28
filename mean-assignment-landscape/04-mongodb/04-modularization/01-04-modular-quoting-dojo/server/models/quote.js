const mongoose = require('mongoose');

  const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, minlength: 4 },
      quotes: [
        {
          quote: {
            type: String,
            required: true,
            minlength: 6,
          },
          createdAt: Number,
        },
      ],
      // quotes: [QuoteSchema],
    },
    { timestamps: true }
  );

module.exports = mongoose.model('User', UserSchema);

