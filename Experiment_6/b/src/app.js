import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Functional Component using Props
function Welcome(props) {
  return (
    <h2 className="greeting">Hello, {props.name}!</h2>
  );
}

// Functional Component with State and Event Handling
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <p>You clicked <strong>{count}</strong> times</p>
      <button onClick={increment} className="btn">Click Me</button>
    </div>
  );
}

// Parent Component passing props
function App() {
  return (
    <div className="app-container">
      <Welcome name="Alice" />
      <Counter />
    </div>
  );
}

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);