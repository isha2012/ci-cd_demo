import express, { Request, Response } from 'express';
import app  from './server';

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions!' });
});

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing Pull Request. This route has been updated' });
});
app.get('/about', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! About Us branch.' });
});
app.get('/cache', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing cache.' });
});
app.get('/pullReqTest', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing pull reuqest 2nd time.' });
});
app.get('/getSecrete', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing Secret Management' });
});

// Export the app for testing purposes
