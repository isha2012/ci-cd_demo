import express, { Request, Response } from 'express';
import  app  from '../server'

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions!' });
});

router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing Pull Request. This route has been updated' });
});
router.get('/about', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! About Us branch.' });
});
router.get('/cache', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing cache.' });
});
router.get('/pullReqTest', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing pull reuqest 2nd time.' });
});
router.get('/getSecrete', (req: Request, res: Response) => {
  res.json({ message: 'Hello, GitHub Actions! Testing Secret Management' });
});

export default router;

// Export the app for testing purposes
