// database.js
require('dotenv').config();

const mongoose = require('mongoose');
const dbHost = process.env.DB_HOST;

const connectToDB = async () => {
  try {
    await mongoose.connect('MONGODB_URI', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
