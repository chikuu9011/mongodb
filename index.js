import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import HawareRoutes from './routes/HawareRoutes.js';
import connection from './connections/connection.js';

const app = express();
const PORT = process.env.PORT || 9000;

// Establish MongoDB connection
connection()
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route setup
app.use('/haware', HawareRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
