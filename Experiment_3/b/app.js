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

// Dummy users (in-memory database)
const users = [
  { id: 1, username: 'admin', password: 'password' },
  { id: 2, username: 'user', password: '1234' }
];

// Root route - redirect to login
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Show login form
app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    req.session.user = { id: user.id, username: user.username };
    return res.redirect('/dashboard');
  }

  // If invalid credentials
  res.render('login', { error: 'Invalid username or password' });
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