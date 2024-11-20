import request from 'supertest';
import app from '../server'; // Assuming your app is exported from the server file
import http from 'http';

let server: http.Server;
let port: number;

beforeAll((done) => {
  // Start the server on a random port
  server = app.listen(0, () => {
    // Get the assigned port
    port = (server.address() as http.AddressInfo).port;
    console.log(`Server is running on http://localhost:${port}`);
    done();
  });
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
