const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Session middleware setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Use true if HTTPS is enabled
}));

// Dummy user (for demo purposes)
const validUser = {
  username: 'admin',
  password: 'password'
};

// Routes

// Root route - new!
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Show login form
app.get('/login', (req, res) => {
  res.render('login');
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validUser.username && password === validUser.password) {
    req.session.user = { username };
    return res.redirect('/dashboard');
  }

  res.send('Invalid credentials!');
});

// Dashboard (Protected Route)
app.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  res.render('dashboard', { username: req.session.user.username });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/dashboard');
    }
    res.redirect('/login');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});