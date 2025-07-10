const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Base HTML + CSS Template
const layout = (title, content) => `
<html>
<head>
  <title>${title}</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f9f9f9; }
    .container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    h1,h2 { color: #333; text-align: center; }
    a { color: #007BFF; text-decoration: none; display: block; margin: 10px 0; }
    input[type="text"] { width: 100%; padding: 10px; margin-top: 10px; border: 1px solid #ccc; border-radius: 5px; }
    .btn { background: #007BFF; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
    footer { margin-top: 40px; text-align: center; color: #888; font-size: 0.9em; }
  </style>
</head>
<body>
  <div class="container">
    ${content}
    <footer>&copy; 2025 Express Demo</footer>
  </div>
</body>
</html>`;

// Home route
app.get('/', (req, res) => {
  const html = layout('Home', `
    <h1>Welcome to Express</h1>
    <a href="/about">About Us</a>
    <a href="/user/123">User 123</a>
    <a href="/search?term=nodejs">Search Node.js</a>
    <h3>Submit Your Name</h3>
    <form method="POST" action="/submit">
      <input type="text" name="username" placeholder="Enter name" required />
      <button type="submit" class="btn">Submit</button>
    </form>
  `);
  res.send(html);
});

// About route
app.get('/about', (req, res) => {
  res.send(layout('About', `<h2>About Page</h2><a href="/">← Back</a>`));
});

// Route parameter example
app.get('/user/:id', (req, res) => {
  res.send(layout('User Profile', `<h2>User ID: ${req.params.id}</h2><a href="/">← Back</a>`));
});

// Query parameter example
app.get('/search', (req, res) => {
  const term = req.query.term || 'none';
  res.send(layout('Search', `<h2>Searched for: "${term}"</h2><a href="/">← Back</a>`));
});

// POST route
app.post('/submit', (req, res) => {
  const name = encodeURIComponent(req.body.username);
  res.redirect(`/greet?name=${name}`);
});

// Greeting page
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(layout('Hello', `<h1>Hello, ${name}!</h1><a href="/">← Back</a>`));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});