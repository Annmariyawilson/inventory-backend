const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('express').json;
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Backend is working');
});

module.exports = app;
