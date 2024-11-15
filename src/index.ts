import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions!' });
});
app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing Pull Request.' });
});
app.get('/prTest', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing merges.' });
});

// Export the app for testing purposes
export default app;