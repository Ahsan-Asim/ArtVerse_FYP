import React from 'react';
import '../styles/HomePage.css'; // Ensure to import your custom CSS
import Home_Page_Header from '../components/Home_Page_Header';
import Home_Page_Image from '../components/Home_Page_Image';
import Home_Category_Section from '../components/Home_Category_Section';

function home_page() {
  return (
    <div className='home-page'>
      <Home_Page_Header />
      <Home_Page_Image />
      <Home_Category_Section />
      
    </div>
  )
}

export default home_page;
