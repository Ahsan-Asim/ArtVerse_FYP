import React from 'react'
import Logo from '../assets/images/ArtVerse_Logo.png'; // Correct path to your logo
import SearchIcon from '../assets/images/search.png'; // Correct path to your search icon
import ShoppingIcon from '../assets/images/shopping.png'; // Correct path to your shopping icon
import LikeIcon from '../assets/images/heart.png'; // Correct path to your like icon
import ProfileIcon from '../assets/images/profile.png'; // Correct path to your profile icon
import '../styles/Artist_detail_header.css'; // Ensure to import your custom CSS

function Artist_detail_header() {
  return (
    <div>
    <header className="header">
    <a href="/" className="logo-link">
      <img src={Logo} alt="ArtVerse Logo" className="logo" />
    </a>
    <div className="headings">
      <a href="/profile" className="profile">Profile</a>
      <a href="/manage_artworks" className="manage-artworks">Manage Artworks</a>
      <a href="/sales_dashboard" className="sales-dashboard">Sales Dashboard</a>
      <a href="/offers_dashboard" className="offers-dashboard">Offers Dashboard</a>
    </div>
    <a href="/profile" className="icon-link">
      <img src={ProfileIcon} alt="Profile Icon" className="profile-icon" />
    </a>
  </header>
  </div>
  )
}

export default Artist_detail_header
