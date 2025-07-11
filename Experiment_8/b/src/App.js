import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setDisplayText(text);
    }
  };

  const addToList = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div style={styles.container}>
      <h1>React: Updating the Screen</h1>

      {/* Input Form */}
      <form onSubmit={handleSubmit} style={styles.section}>
        <input
          type="text"
          placeholder="Type something"
          value={text}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Show Text</button>
      </form>

      {/* Display Updated Text */}
      {displayText && (
        <div style={styles.output}>
          <h2>You typed:</h2>
          <p>{displayText}</p>
        </div>
      )}

      <hr style={styles.hr} />

      {/* Dynamic List Section */}
      <div style={styles.section}>
        <h2>Fruits List</h2>
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>{item}</li>
          ))}
        </ul>

        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Add new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={styles.input}
          />
          <button onClick={addToList} style={styles.button}>Add Item</button>
        </div>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '40px',
    textAlign: 'center'
  },
  section: {
    marginBottom: '40px'
  },
  input: {
    width: '250px',
    padding: '10px',
    fontSize: '16px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  output: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    border: '1px solid #cce0ff',
    borderRadius: '5px',
    display: 'inline-block',
    maxWidth: '500px'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'left',
    display: 'inline-block',
    width: '100%'
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #eee'
  },
  formGroup: {
    marginTop: '20px'
  },
  hr: {
    margin: '40px 0'
  }
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);