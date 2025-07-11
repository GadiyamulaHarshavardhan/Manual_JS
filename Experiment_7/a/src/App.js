import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={styles.container}>
      <h1>React Conditional Rendering</h1>

      {/* Toggle Button */}
      <button onClick={() => setIsVisible(!isVisible)} style={styles.button}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {/* Conditional Content */}
      {isVisible && (
        <div style={styles.messageBox}>
          <p>This message is shown conditionally!</p>
        </div>
      )}

      {/* Ternary Example */}
      <div style={styles.ternaryBox}>
        <p>{isVisible ? 'You can see the message.' : 'Message is hidden.'}</p>
      </div>
    </div>
  );
}

// Styles as JavaScript object (inline CSS)
const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    padding: '40px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  messageBox: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#d1ecf1',
    color: '#0c5460',
    border: '1px solid #bee5eb',
    borderRadius: '5px'
  },
  ternaryBox: {
    marginTop: '20px',
    fontStyle: 'italic',
    color: '#555'
  }
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);