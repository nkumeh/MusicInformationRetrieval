// Artist.js
const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  birthDay: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('artist', ArtistSchema);
