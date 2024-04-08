import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.mjs'
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://sheikhsaidee:oyCPn0vIWSN50fJT@cluster0.vqdv1mk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {})
  .then(() => {
    console.log('MongoDB successfully Connected');
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
  });

  app.use('/',userRoute)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });