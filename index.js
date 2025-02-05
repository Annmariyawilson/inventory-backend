import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'express.json';
import { config } from 'dotenv';
import authRoutes from './routes/authRoutes';
import inventoryRoutes from './routes/inventoryRoutes';

config();

const app = express();

app.use(cors());
app.use(bodyParser());

connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

app.get('/', (req, res) => {
    res.send('Backend is working');
});

export default app; 
