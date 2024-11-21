import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ArtistRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    state: '',
    city: '',
    address: '',
    education: '',
    about: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/users/become-artist', formData);
      setMessage(response.data.message);
      setError('');

      // Store updated user details in localStorage upon successful registration
      sessionStorage.setItem('userEmail', formData.email);
      sessionStorage.setItem('userRole', 'artist');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register as an Artist</h2>
      {message && <p style={styles.successMessage}>{message}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} style={styles.input} />
        </label>
        <label style={styles.label}>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} style={styles.input} />
        </label>
        <label style={styles.label}>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} style={styles.input} />
        </label>
        <label style={styles.label}>
          Education:
          <input type="text" name="education" value={formData.education} onChange={handleChange} style={styles.input} />
        </label>
        <label style={styles.label}>
          About:
          <textarea name="about" value={formData.about} onChange={handleChange} style={{ ...styles.input, height: '80px' }}></textarea>
        </label>
        <button type="submit" style={styles.button}>Register as Artist</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '5px',
    width: '100%',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
};

export default ArtistRegistrationForm;
