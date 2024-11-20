import express from 'express';
import dotenv from 'dotenv';
import router from './src';

const app = express();
dotenv.config();

app.use('/', router);
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;
