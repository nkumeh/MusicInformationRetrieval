// Artist.js

const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  birthDay: {
    type: Date,
    // required: true,
  },
  genre: {
    type: String,
    required: true,
  },
//   artist can have more than 1 album
  albums: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Album',
    // required: true,
  }]
});

module.exports = mongoose.model('Artist', ArtistSchema);





  
 
  
