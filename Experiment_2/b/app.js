const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// GET route - display form
app.get('/', (req, res) => {
  res.render('form', { formData: null }); // No data yet
});

// POST route - handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.render('form', { formData: { name, email } });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});