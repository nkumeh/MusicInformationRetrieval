// Track Schema
const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    title: {
      type: String, 
      // required: true 
    },
    duration: {
      type: Number, 
      // required: true  
    },
    album: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Album',
      // required: true 
    }
  });

  module.exports = mongoose.model('Track', TrackSchema);

