// test functions in Album.js

const mongoose = require('mongoose');
const Album = require('./Album'); // Adjust the path as necessary
const database = require('./database.js'); // Adjust the path to your database.js

// Replace 'your_artist_id_here' with a valid ObjectId from your Artist collection
const testAlbum = new Album({
  title: "Test Album",
  releaseYear: 2021,
  artist: '621d5eb9f1b86cd7973b2e7a',
  tracks: [] // You can add track IDs here if available
});

testAlbum.save()
  .then(doc => {
    console.log("Album Saved Successfully:", doc);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error Saving Album:", err);
    mongoose.connection.close();
  });
