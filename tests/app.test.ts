// tests/app.test.ts

import request from 'supertest';
import app from '../server';
import http from 'http';

let server: http.Server;

beforeAll(() => {
  // Start the server
  server = app.listen(3000);
});

afterAll((done) => {
  // Close the server after all tests
  server.close(done);
});

describe('Express App', () => {
  it('should return 200 OK and a welcome message for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, GitHub Actions!');
  });

  it('should return 404 for an unknown route', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
  });
});


