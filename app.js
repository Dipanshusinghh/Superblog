// app.js
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const User = require('./Models/user'); // Mongoose model

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Parse JSON request body

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/myDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('✅ Backend is running...');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("📨 Received Login Data:", email, password);

  try {
    const user = new User({ email, password });
    await user.save();
    console.log("✅ User saved");
    res.send('✅ Login data saved to MongoDB!');
  } catch (err) {
    console.error('❌ Error saving to MongoDB:', err);
    res.status(500).send('❌ Server error while saving login');
  }
});

// Start Server
app.listen(3002, () => {
  console.log('🚀 Server started at http://localhost:3002');
});
