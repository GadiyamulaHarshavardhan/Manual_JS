import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ]);

  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      const newItemObj = {
        id: Date.now(),
        name: newItem
      };
      setItems([...items, newItemObj]);
      setNewItem('');
    }
  };

  return (
    <div style={styles.container}>
      <h1>React List Rendering</h1>

      {/* List */}
      <ul style={styles.list}>
        {items.map(item => (
          <li key={item.id} style={styles.listItem}>
            {item.name}
          </li>
        ))}
      </ul>

      {/* Add Item Form */}
      <div style={styles.form}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={styles.input}
        />
        <button onClick={addItem} style={styles.button}>
          Add
        </button>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    padding: '40px'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 'auto',
    maxWidth: '300px',
    textAlign: 'left'
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  },
  form: {
    marginTop: '30px'
  },
  input: {
    padding: '10px',
    width: '200px',
    fontSize: '16px'
  },
  button: {
    marginLeft: '10px',
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);