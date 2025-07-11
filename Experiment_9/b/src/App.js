import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Child Component: Receives data via props and sends data back via callback
function ChildComponent({ message, onSendMessage }) {
  const handleSend = () => {
    onSendMessage("Hello from Child!");
  };

  return (
    <div style={styles.card}>
      <h2>Child Component</h2>
      <p><strong>Message from Parent:</strong> {message || 'No message'}</p>
      <button onClick={handleSend} style={styles.button}>Send Message to Parent</button>
    </div>
  );
}

// Parent Component: Holds the state and shares data
function ParentComponent() {
  const [childMessage, setChildMessage] = useState('');

  const handleMessageFromChild = (msg) => {
    setChildMessage(msg);
  };

  return (
    <div style={styles.container}>
      <h1>React: Sharing Data Between Components</h1>

      {/* Pass data to child */}
      <ChildComponent
        message="Hi from Parent!"
        onSendMessage={handleMessageFromChild}
      />

      {/* Display message from child */}
      {childMessage && (
        <div style={styles.outputBox}>
          <h2>Message from Child:</h2>
          <p>{childMessage}</p>
        </div>
      )}
    </div>
  );
}

// Root Component
export default function App() {
  return <ParentComponent />;
}
// Styles as JavaScript object
const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '40px'
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  outputBox: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    border: '1px solid #bee5eb',
    borderRadius: '10px',
    textAlign: 'center'
  },
  button: {
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