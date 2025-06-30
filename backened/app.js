const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./Models/user');



const app = express();

// View engine setup
app.set("view engine", "ejs");

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use((req, res, next) => {
  console.log("✅ This is a custom middleware");
  next();
});

// MongoDB connection
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
  res.render('index'); // views/index.ejs
});
 
app.get('/about', (req, res) => {
  res.send('📘 This is the About Page');
});

app.get('/profile', (req, res) => {
  res.send('👤 This is the Profile Page');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("📨 Form Data:", req.body);

  const user = new User({ email, password });
  await user.save();

  res.send('✅ Login data saved to MongoDB!');
});

// Start server
app.listen(3002, () => {
  console.log("🚀 Server started at http://localhost:3002");
});
