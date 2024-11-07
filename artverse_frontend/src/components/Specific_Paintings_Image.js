import React from 'react';
import '../styles/Specific_Painting_Image.css'; // Ensure to import your custom CSS
import FeaturedImage from '../assets/images/home1.png'; // Replace with the correct path to your image
import FaHeart from '../assets/images/like_icon.png'; // Example icons from react-icons library
import FaShare from '../assets/images/share_icon.png'; // Example icons from react-icons library
import FaCartPlus from '../assets/images/bag_icon.png'; // Example icons from react-icons library
import FaEye from '../assets/images/eye_icon.png'; // Example icons from react-icons library
import FaBookmark from '../assets/images/shopping_icon2.png'; // Example icons from react-icons library





export default function Specific_Paintings_Image() {
  return (
    <div>
       <div className="featured-art1">
      <img src={FeaturedImage} alt="Featured Art1" className="background-image1" />
    </div>
    <div className="heading-icons-container">
        <h2 className='specific-h2'>Flowety</h2>
        <div className="icons-container">
          <img src={FaHeart} alt="Like" className="icon" />
          <img src={FaShare} alt="Share" className="icon" />
          <img src={FaCartPlus} alt="Add to Cart" className="icon" />
          <img src={FaEye} alt="View" className="icon" />
          <img src={FaBookmark} alt="Bookmark" className="icon" />
        </div>
      </div>




      <h2 className='specific-Price'>Rs. 1,300,000</h2>
    </div>
  )
}
