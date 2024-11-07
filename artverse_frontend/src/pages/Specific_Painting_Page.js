import React from 'react';
import '../styles/Specific_Page.css'; // Ensure to import your custom CSS

import Specific_Page_Header from '../components/Specific_Page_Header';
import Specific_Paintings_Image from '../components/Specific_Paintings_Image';
import Specefic_Paintings_Specification from '../components/Specefic_Paintings_Specification';
import Specific_Paintings_Paintings from '../components/Specific_Paintings_Paintings';
import Specific_Painting_Footer from '../components/Specific_Painting_Footer';
function Specific_Painting_Page() {
  return (
    <div className='specific_page'>
      <Specific_Page_Header />
      <Specific_Paintings_Image />
      <Specefic_Paintings_Specification />
      <Specific_Paintings_Paintings />
      <Specific_Painting_Footer />
      
    </div>
  )
}

export default Specific_Painting_Page
