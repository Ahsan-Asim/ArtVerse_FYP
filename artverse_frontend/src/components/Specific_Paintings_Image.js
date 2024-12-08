import React from 'react';
import axios from 'axios'; // To handle API requests
import '../styles/Specific_Painting_Image.css';

// Import all icons
import LikeIcon from '../assets/images/like_icon.png';
import ShareIcon from '../assets/images/share_icon.png';
import BagIcon from '../assets/images/bag_icon.png';
import EyeIcon from '../assets/images/eye_icon.png';
import BookmarkIcon from '../assets/images/shopping_icon2.png';

export default function Specific_Paintings_Image({ artwork }) {
  const imageUrl = `http://localhost:4000${artwork.image}`; // Adjust the base URL as needed

  // Add to Cart Function
  const handleAddToCart = async () => {
    try {
      // Get userEmail from sessionStorage
      const userEmail = sessionStorage.getItem('email') || 'guest@example.com'; // Default to guest email if not available

      const response = await axios.post('http://localhost:4000/api/cart//add', {
        userEmail, // Use email from sessionStorage
        title: artwork.title,
        name: artwork.artist || '', // Default to empty string if artist's name is unavailable
        price: artwork.price,
        quantity: 1, // Default quantity to 1
        image: artwork.image,
      });

      if (response.status === 200) {
        alert('Item successfully added to cart!');
      } else {
        alert('Failed to add item to cart.');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('An error occurred while adding the item to the cart.');
    }
  };

  return (
    <div>
      <div className="featured-art1">
        <img
          src={imageUrl}
          alt={artwork.title}
          className="background-image11"
        />
      </div>
      <div className="heading-icons-container">
        <h2 className="specific-h2">{artwork.title}</h2>
        <div className="icons-container">
          <img src={LikeIcon} alt="Like" className="icon" />
          <img src={ShareIcon} alt="Share" className="icon" />
          <img
            src={BagIcon}
            alt="Add to Cart"
            className="icon"
            onClick={handleAddToCart} // Add onClick event
            style={{ cursor: 'pointer' }} // Indicate it's clickable
          />
          <img src={EyeIcon} alt="View" className="icon" />
          <img src={BookmarkIcon} alt="Bookmark" className="icon" />
        </div>
      </div>
      <h2 className="specific-Price">Rs. {artwork.price}</h2>
      <p>{artwork.description}</p>
    </div>
  );
}
