import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/Artist_Form.css';

function ArtistForm() {
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
    awards: '',
    certificates: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    country: '',
    state: '',
    city: '',
  });

  // Regex for validation
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const countryRegex = /^[A-Za-z\s]+$/;
  const cityStateRegex = /^[A-Za-z\s]*$/; // Allow empty strings, alphabets and spaces

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error if the field is being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
    e.target.classList.remove('invalid-input');
  };

  const validateField = (name, value, element) => {
    let errorMessage = '';

    if (name === 'name' && !nameRegex.test(value) && value !== '') {
      errorMessage = 'Name must only contain alphabetic characters and spaces';
    } else if (name === 'email' && !emailRegex.test(value) && value !== '') {
      errorMessage = 'Invalid email format';
    } else if (name === 'country' && !countryRegex.test(value) && value !== '') {
      errorMessage = 'Country name must only contain alphabetic characters and spaces';
    } else if ((name === 'state' || name === 'city') && !cityStateRegex.test(value)) {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} must only contain alphabetic characters and spaces`;
    }

    if (errorMessage) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));

      // Add invalid and shake classes
      element.classList.add('invalid-input', 'shake');
      setTimeout(() => {
        element.classList.remove('shake');
      }, 300); // Match shake animation duration
    } else {
      element.classList.remove('invalid-input');
    }

    return errorMessage === ''; // Return true if valid
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value, e.target);
  };

  const validateForm = () => {
    let valid = true;

    Object.keys(formData).forEach((key) => {
      const element = document.querySelector(`[name=${key}]`);
      if (!validateField(key, formData[key], element)) {
        valid = false;
      }
    });

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:4000/api/users/become-artist', formData);
      setMessage(response.data.message);
      setError('');

      // Store updated user details in localStorage upon successful registration
      sessionStorage.setItem('email', formData.email);
      sessionStorage.setItem('role', 'artist');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div className="artist-form-container">
      
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form className="artist-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Artist Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Artist Name"
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Country"
              required
            />
            {errors.country && <p className="error-message">{errors.country}</p>}
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="State"
            />
            {errors.state && <p className="error-message">{errors.state}</p>}
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="City"
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
          </div>
        </div>

        <div className="form-group">
          <label>Residential Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Residential Address"
          />
        </div>

        <div className="form-group">
          <label>Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Education"
          />
        </div>

        <div className="form-group">
          <label>About Me</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About Me"
          />
        </div>

        <div className="form-group">
          <label>Awards</label>
          <textarea
            name="awards"
            value={formData.awards}
            onChange={handleChange}
            placeholder="Awards"
          />
        </div>

        <div className="form-group">
          <label>Certificates</label>
          <textarea
            name="certificates"
            value={formData.certificates}
            onChange={handleChange}
            placeholder="Certificates"
          />
        </div>

        <button type="submit" className="register-button">Register as Artist</button>
      </form>
    </div>
  );
}

export default ArtistForm;
