import React from 'react';
import Logo from '../assets/images/ArtVerse_Logo.png'; // Correct path to your logo
import SearchIcon from '../assets/images/search.png'; // Correct path to your search icon
import ShoppingIcon from '../assets/images/shopping.png'; // Correct path to your shopping icon
import LikeIcon from '../assets/images/heart.png'; // Correct path to your like icon
import ProfileIcon from '../assets/images/profile.png'; // Correct path to your profile icon
import '../styles/Landing_Page_Header.css'; // Ensure to import your custom CSS

function Landing_Page_Header() {
  return (
    <>
    <header className="header">
      <a href="/" className="logo-link">
        <img src={Logo} alt="ArtVerse Logo" className="logo" />
      </a>
      <div className="headings">
        <a href="/become-artist" className="become-artist">About Us</a>
        <a href="/why-us" className="why-us">Digital Art</a>
        <a href="/explore-digital-art" className="explore-digital-art">Traditional Art</a>
      </div>

      <div className="search-container">
        <img src={SearchIcon} alt="Search Icon" className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="buttons">
      <button className='login_button'>Login</button>
      <button className='signup_button'>Signup</button>
      </div>

     

    </header>


    </>
  )
}

export default Landing_Page_Header;
