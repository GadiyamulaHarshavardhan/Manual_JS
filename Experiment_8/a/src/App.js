import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Home Page Component
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
}

// Contact Page Component
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>You can contact us here.</p>
    </div>
  );
}

// User Detail Component with Route Param
function User({ params }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {params.id}</p>
    </div>
  );
}

// Layout Component with Navigation Links
function Layout() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          <li><Link to="/user/123" style={styles.link}>View User 123</Link></li>
        </ul>
      </nav>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User params={{ id: ':id' }} />} />
        </Routes>
      </main>
    </div>
  );
}

// Export App Root
export default function App() {
  return <Layout />;
}
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  },
  nav: {
    marginBottom: '20px'
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
    padding: 0
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold'
  },
  main: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px'
  }
};