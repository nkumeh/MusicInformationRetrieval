// Album.js

const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
//   dont needd full date time
  releaseYear: {
    type: Number,
    required: true,
  },
//   album is only one artist
  artist: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Artist',
    required: true,
  },
//   album has multiple tracks
  tracks: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Track',
    // required: true,
  }]
});

module.exports = mongoose.model('Album', AlbumSchema);
