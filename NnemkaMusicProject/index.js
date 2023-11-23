// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const Artist = require('./artist'); // Import your model

const app = express();
app.use(bodyParser.json());

connectDB(); // Connect to the database

// Create an artist
app.post('/artists', async (req, res) => {
    try {
      const artist = new Artist(req.body);
      await artist.save();
      res.status(201).send(artist);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Read all artists
  app.get('/artists', async (req, res) => {
    try {
      const artists = await Artist.find();
      res.status(200).send(artists);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Update an artist
  app.put('/artists/:id', async (req, res) => {
    try {
      const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!artist) {
        return res.status(404).send();
      }
      res.send(artist);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Delete an artist
  app.delete('/artists/:id', async (req, res) => {
    try {
      const artist = await Artist.findByIdAndDelete(req.params.id);
      if (!artist) {
        return res.status(404).send();
      }
      res.send(artist);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
