// test.js
// Test file to test our functions
require('dotenv').config();


const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('./index'); // Import your Express app
// const Artist = require('./Artist');

describe('Testing CRUD operations', () => {
  beforeAll(async () => {
    const url = 'MONGODB_URI';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  });

  // Add tests here
  // Example Test: Testing POST /artists
  it('POST /artists', async () => {
    const data = { name: 'Test Artist', genre: 'Rock' };
    await supertest(app).post('/artists').send(data).expect(201);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});


