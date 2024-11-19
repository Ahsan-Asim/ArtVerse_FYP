import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';  // Import GoogleLogin
import Logo from '../assets/images/ArtVerse_Logo.png';
import '../styles/RightSectionSignup.css';
import GoogleLogo from '../assets/images/Google.png'; // Import your Google logo

function Right_Section_Signup_page() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for email signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/users/signup', formData);
      setMessage(response.data.message); // Success message from server
      navigate('/signin', {
        state: {
          email: formData.email,
          password: formData.password,
        },
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred during signup');
    }
  };

  // Handle Google login response
  const handleGoogleLogin = async (response) => {
    const { credential } = response;
    try {
      // Send the Google token to your backend for verification and user creation
      const res = await axios.post('http://localhost:4000/api/users/google-signup', { token: credential });
      setMessage(res.data.message); // Show success message from the backend
      navigate('/home');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Google login failed');
    }
  };

  return (
    <div className='right-section'>
      <img src={Logo} alt="ArtVerse Logo" className="logo" />
      <div className="sign_div1"><p>Sign up To ArtVerse</p></div>

      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="name-phone-container">
          <div className="name-container">
            <label className="name-label">Name</label>
            <input
              type='text'
              name="name"
              className='name-input'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="phone-container">
            <label className="phone-label">Phone</label>
            <input
              type='text'
              name="phone"
              className='phone-input'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label className="email-label">Email</label>
        <input
          type="email"
          name="email"
          className="email-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="password-container">
          <label className="password-label">Password</label>
        </div>
        <input
          type="password"
          name="password"
          className="password-input"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signin-button">Create Account</button>
      </form>

      {message && <p className="message">{message}</p>}

      {/* Google login button */}
      <div className="sign_div2" style={{ textAlign: "center" }}>
        <span className='Google_Text'>Continue With Google</span>
        {/* Custom Google login button */}
        <GoogleLogin
          onSuccess={handleGoogleLogin} // Handle successful Google login
          onError={() => setMessage('Google login failed')}
          render={(renderProps) => (
            <button
              className="google-login-btn"
              onClick={renderProps.onClick} // Trigger Google login
              disabled={renderProps.disabled}
            >
              <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
              <span>Continue With Google</span>
            </button>
          )}
        />
      </div>

      <div className="signup-text">
        Already have an ArtVerse Account? <Link to="/signin" className="signup-link">Login</Link>
      </div>
    </div>
  );
}

export default Right_Section_Signup_page;