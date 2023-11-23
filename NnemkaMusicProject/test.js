// test.js
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('./index'); // Import your Express app
const Artist = require('./artist');

describe('Testing CRUD operations', () => {
  beforeAll(async () => {
    const url = 'your-mongodb-atlas-test-connection-string';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  // Add tests here

  afterAll(async () => {
    await mongoose.connection.close();
  });
});

// Example Test: Testing POST /artists
it('POST /artists', async () => {
  const data = { name: 'Test Artist', genre: 'Rock' };
  await supertest(app).post('/artists').send(data).expect(201);
});
