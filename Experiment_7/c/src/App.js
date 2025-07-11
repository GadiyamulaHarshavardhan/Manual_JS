import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    color: 'red',
    fruit: 'apple',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div style={styles.container}>
      <h1>React Form Example</h1>

      <form onSubmit={handleSubmit} style={styles.form}>

        {/* Text Input */}
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={styles.input}
          />
        </label>

        {/* Dropdown Select */}
        <label style={styles.label}>
          Favorite Color:
          <select
            name="color"
            value={formData.color}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>

        {/* Radio Buttons */}
        <div style={styles.radioGroup}>
          <p>Favorite Fruit:</p>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="fruit"
              value="apple"
              checked={formData.fruit === 'apple'}
              onChange={handleChange}
            />
            Apple
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="fruit"
              value="banana"
              checked={formData.fruit === 'banana'}
              onChange={handleChange}
            />
            Banana
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="fruit"
              value="orange"
              checked={formData.fruit === 'orange'}
              onChange={handleChange}
            />
            Orange
          </label>
        </div>

        {/* Checkbox */}
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          Subscribe to Newsletter
        </label>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {/* Display Form Data */}
      <div style={styles.output}>
        <h2>Form Values:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '40px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px'
  },
  label: {
    marginBottom: '15px',
    display: 'block'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    fontSize: '16px'
  },
  select: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    fontSize: '16px'
  },
  radioGroup: {
    marginBottom: '15px'
  },
  radioLabel: {
    display: 'block',
    margin: '5px 0'
  },
  checkboxLabel: {
    display: 'block',
    marginBottom: '15px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px'
  },
  output: {
    marginTop: '30px',
    textAlign: 'center'
  }
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);