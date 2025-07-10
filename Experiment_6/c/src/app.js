import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessage(`You typed: ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <h1>React Event Handling Demo</h1>

      {/* Button Click */}
      <section>
        <h2>Click Counter</h2>
        <p>You clicked <strong>{count}</strong> times</p>
        <button onClick={handleIncrement} className="btn">Click Me</button>
      </section>

      <hr />

      {/* Input Change */}
      <section>
        <h2>Type Something</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
          className="input-field"
        />
        <p>{message}</p>
      </section>

      <hr />

      {/* Form Submit */}
      <section>
        <h2>Submit a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter message"
            className="input-field"
          />
          <button type="submit" className="btn">Submit</button>
        </form>
        {message && <p>Submitted: {message.split(': ')[1]}</p>}
      </section>
    </div>
  );
}

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);