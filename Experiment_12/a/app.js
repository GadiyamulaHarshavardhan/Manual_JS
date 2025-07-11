require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set mode-based optimizations
const webpackModeConfig = (env, argv) => {
  if (argv.mode === 'development') {
    app.use((req, res, next) => {
      console.log(`[DEV] Request: ${req.method} ${req.url}`);
      next();
    });
  }
};

webpackModeConfig(null, { mode: process.env.NODE_ENV || 'production' });

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const todoRoutes = require('./routes/todoRoutes');
app.use(todoRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });