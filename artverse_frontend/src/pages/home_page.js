import React from 'react';
import '../styles/HomePage.css'; // Ensure to import your custom CSS
import Home_Page_Header from '../components/Home_Page_Header';
import Home_Page_Image from '../components/Home_Page_Image';
import Home_Category_Section from '../components/Home_Category_Section';
import Home_Page_Artist_Display from '../components/Home_Page_Artist_Display';
import Home_Page_Footer from '../components/Home_Page_Footer';
function home_page() {
  return (
    <div className='home-page'>
      <Home_Page_Header />
      <Home_Page_Image />
      <Home_Category_Section />
      <Home_Page_Artist_Display />
      <Home_Page_Footer />
      
    </div>
  )
}

export default home_page;
