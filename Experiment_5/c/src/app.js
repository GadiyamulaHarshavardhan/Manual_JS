import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component
function Header() {
  return (
    <header>
      <h1>React Component Demo</h1>
    </header>
  );
}

// Class Component
class Content extends React.Component {
  render() {
    return (
      <main>
        <Greeting />
        <Features />
      </main>
    );
  }
}

// Nested Functional Component
function Greeting() {
  return (
    <section>
      <h2>Hello, React!</h2>
      <p>This is a functional component.</p>
    </section>
  );
}

// Nested Class Component
class Features extends React.Component {
  render() {
    return (
      <section>
        <h2>Features</h2>
        <ul>
          <li>Functional Components</li>
          <li>Class Components</li>
          <li>Nested Components</li>
        </ul>
      </section>
    );
  }
}

// App Root Component
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);