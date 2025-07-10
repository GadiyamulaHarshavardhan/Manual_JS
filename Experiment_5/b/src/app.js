import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Hello, JSX!</h1>
      <p>This is rendered using React without manual index.html</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);