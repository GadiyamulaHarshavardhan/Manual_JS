import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component using Props
function Welcome(props) {
  return (
    <h2>Hello, {props.name}!</h2>
  );
}

// Functional Component with State and Event Handling
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked <strong>{count}</strong> times</p>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

// Parent Component passing props
function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <Welcome name="Alice" />
      <Counter />
    </div>
  );
}

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);