// Import required modules
const express = require('express');
const path = require('path'); // For handling file paths
const app = express();
const PORT = 3002;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the correct path to the "views" folder
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// GET route - show form
app.get('/', (req, res) => {
  res.render('index', { name: null }); // Pass name as null initially
});

// POST route - handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.render('index', { name }); // Render again with name
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});