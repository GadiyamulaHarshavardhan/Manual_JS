import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const toggleVisibility = () => {
    setShowText(!showText);
  };

  return (
    <div style={styles.container}>
      <h1>React Hooks: Understanding `useState`</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
        style={styles.input}
      />

      {/* Toggle Button */}
      <button onClick={toggleVisibility} style={styles.button}>
        {showText ? 'Hide' : 'Show'} Text
      </button>

      {/* Conditional Output */}
      {showText && (
        <div style={styles.outputBox}>
          <p>You typed: <strong>{text || 'Nothing yet'}</strong></p>
        </div>
      )}

      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        The screen updates automatically because we're using the <code>useState</code> hook.
      </p>
    </div>
  );
}

// Styles as JavaScript object
const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    padding: '40px'
  },
  input: {
    width: '300px',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  outputBox: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    border: '1px solid #bee5eb',
    borderRadius: '5px',
    display: 'inline-block'
  }
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);