const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route with form
app.get('/', (req, res) => {
  res.send(`
    <h1>Send Data</h1>
    <form method="POST" action="/data">
      <input type="text" name="name" placeholder="Enter your name" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received successfully!",
    payload: data
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});