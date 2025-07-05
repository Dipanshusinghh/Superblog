// app.js
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const User = require('./Models/user'); // your user model

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/myDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.log('❌ Connection error:', err);
});

// Routes
app.get('/', (req, res) => {
  res.send('✅ Backend is running...');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("📨 Received Login Data:", req.body);

  try {
    const user = new User({ email, password });
    await user.save();
    res.send('✅ Login data saved to MongoDB!');
  } catch (err) {
    console.error('❌ Error saving to MongoDB:', err);
    res.status(500).send('Server error');
  }
});

// Start Server
app.listen(3002, () => {
  console.log('🚀 Server started at http://localhost:3002');
});
