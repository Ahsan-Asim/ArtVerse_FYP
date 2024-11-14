import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Logo from '../assets/images/ArtVerse_Logo.png';
import SearchIcon from '../assets/images/search.png';
import ShoppingIcon from '../assets/images/shopping.png';
import LikeIcon from '../assets/images/heart.png';
import ProfileIcon from '../assets/images/profile.png';
import '../styles/Landing_Page_Header.css';

function Landing_Page_Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={Logo} alt="ArtVerse Logo" className="logo" />
      </Link>
      <div className="headings">
        <Link to="/become-artist" className="become-artist">About Us</Link>
        <Link to="/why-us" className="why-us">Digital Art</Link>
        <Link to="/become-artist" className="explore-digital-art">Become Artist</Link>
      </div>

      <div className="search-container">
        <img src={SearchIcon} alt="Search Icon" className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="buttons">
        {/* Use Link components for Login and Signup buttons */}
        <Link to="/signin" className="login_button" style={{"textDecoration":"none"}}>
          Login
        </Link>
        <Link to="/signup" className="signup_button" style={{"textDecoration":"none"}}>
          Signup
        </Link>
      </div>
    </header>
  );
}

export default Landing_Page_Header;
