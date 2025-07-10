const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// In-memory "database"
let items = [];
let id = 1;

// Layout function with embedded CSS
const layout = (content) => `
<html>
<head>
  <title>Simple CRUD</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f4f6f8; }
    .container { max-width: 500px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    h1 { text-align: center; color: #333; }
    ul { list-style: none; padding-left: 0; }
    li { padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; }
    input[type="text"] { width: 100%; padding: 10px; margin-top: 10px; border: 1px solid #ccc; border-radius: 4px; }
    button { background: crimson; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
    .btn-submit { background: #007BFF; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    ${content}
  </div>
</body>
</html>`;

// Show all items
app.get('/', (req, res) => {
  const list = items.length
    ? `<ul>${items.map(i => `<li>${i.name} <form action="/delete/${i.id}" method="POST"><button type="submit">Delete</button></form></li>`).join('')}</ul>`
    : '<p>No items yet.</p>';

  const html = layout(`
    <h1>My Items</h1>
    ${list}
    <form method="POST" action="/add">
      <input type="text" name="name" placeholder="Enter item name" required />
      <button type="submit" class="btn-submit">Add Item</button>
    </form>
  `);
  res.send(html);
});

// Add item
app.post('/add', (req, res) => {
  items.push({ id: id++, name: req.body.name });
  res.redirect('/');
});

// Delete item
app.post('/delete/:id', (req, res) => {
  items = items.filter(i => i.id != req.params.id);
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});