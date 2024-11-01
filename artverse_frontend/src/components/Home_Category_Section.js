import React from 'react';
import '../styles/Home_Category_Section.css'; // Ensure to import your custom CSS
import SerigraphImage from '../assets/images/home2.png'; // Replace with correct paths
import DrawingImage from '../assets/images/home3.png';
import PaintingImage from '../assets/images/home4.png';
import SculptureImage from '../assets/images/home5.png';

import Image1 from '../assets/images/home6.png'; // Add correct path to image 1
import Image2 from '../assets/images/home7.png'; // Add correct path to image 2
import Image3 from '../assets/images/home8.png'; // Add correct path to image 3
import LikeIcon from '../assets/images/like_icon.png';
import ShoppingIcon from '../assets/images/shopping_icon.png';


function Home_Category_Section() {
  return (
    <>
    <div className="category-section">
      <h2 className="category-title">Explore By Category</h2>
      <div className="category-items">
        <div className="category-item">
          <img src={SerigraphImage} alt="Serigraphs" className="category-image" />
          <p className="category-text">Serigraphs</p>
        </div>
        <div className="category-item">
          <img src={DrawingImage} alt="Drawings" className="category-image" />
          <p className="category-text">Drawings</p>
        </div>
        <div className="category-item">
          <img src={PaintingImage} alt="Paintings" className="category-image" />
          <p className="category-text">Paintings</p>
        </div>
        <div className="category-item">
          <img src={SculptureImage} alt="Sculptures" className="category-image" />
          <p className="category-text">Sculptures</p>
        </div>
      </div>
    </div>



    <div className="curated-collections">
      <h2 className="collections-title">Curated Collections</h2>
      <div className="collections-items">
        <a href="/colour-paintings" className="collection-card">
          <img src={Image1} alt="Colour Paintings" className="collection-image" />
          <div className="collection-text">
            <h3>Colour Paintings</h3>
            <p>Artist Spotlights</p>
          </div>
        </a>
        <a href="/artist-spotlights" className="collection-card">
          <img src={Image2} alt="Artist Spotlights" className="collection-image" />
          <div className="collection-text">
            <h3>Artist Spotlights</h3>
            <p>Asian Mysticism</p>
          </div>
        </a>
        <a href="/englo-art" className="collection-card">
          <img src={Image3} alt="Englo Art" className="collection-image" />
          <div className="collection-text">
            <h3>Englo Art</h3>
            <p>British Paintings</p>
          </div>
        </a>
      </div>
    </div>




    <div className="art-by-price">
      <h2 className="price-title">Art By Price</h2>
      <div className="price-buttons">
        <button className="price-button">$50 - $100</button>
        <button className="price-button">$100 - $200</button>
        <button className="price-button">$200 - $500</button>
        <button className="price-button">$500 - $1000</button>
        <button className="price-button">$1000 - $2000</button>
        <button className="price-button">$2000+</button>
      </div>
    </div>



    <div className="art-by-price">
      <h2 className="price-title">filter more</h2>
      <div className="price-buttons">
        <button className="price-button">New Arrivals</button>
        <button className="price-button">New Arrivals</button>
        <button className="price-button">New Arrivals</button>
        <button className="price-button">New Arrivals</button>
        <button className="price-button">New Arrivals</button>
        <button className="price-button">New Arrivals</button>
      </div>
    </div>


    


    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* First Card */}
      <div className="art-card" style={{ width: '30%', margin: '10px' }}>
        <div className="card-image" style={{ backgroundImage: 'url("../assets/images/home9.png")', height: '232px' }}></div>
        <div className="card-details" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
          <div className="left-details" style={{ textAlign: 'left' }}>
            <h3 className="art-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Flowery</h3>
            <p className="artist-name" style={{ fontSize: '16px', color: '#333' }}>By Asif Hussain</p>
            <p className="art-type" style={{ fontSize: '16px', color: '#333' }}>Painting</p>
            <p className="art-material" style={{ fontSize: '16px', color: '#333' }}>Oil, Acrylic on Canvas</p>
            <p className="dimensions" style={{ fontSize: '16px', color: '#333' }}>72 x 52 Inches</p>
          </div>
          <div className="right-details" style={{ textAlign: 'right' }}>
            <p className="price-old" style={{ textDecoration: 'line-through', color: '#888' }}>Rs. 80,000</p>
            <p className="price-new" style={{ fontSize: '20px', fontWeight: 'bold' }}>Rs. 71,000</p>
            <p className="discount" style={{ color: 'green', fontWeight: 'bold' }}>30% OFF</p>
          </div>
        </div>
        <div className="card-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button className="icon-button" style={{ backgroundColor: '#fff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-button" style={{ backgroundColor: '#fff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={ShoppingIcon} alt="Shopping" />
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="art-card" style={{ width: '30%', margin: '10px' }}>
        <div className="card-image" style={{ backgroundImage: 'url("../assets/images/home10.png")', height: '232px' }}></div>
        <div className="card-details" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
          <div className="left-details" style={{ textAlign: 'left' }}>
            <h3 className="art-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Colour Paintings</h3>
            <p className="artist-name" style={{ fontSize: '16px', color: '#333' }}>By Artist Name</p>
            <p className="art-type" style={{ fontSize: '16px', color: '#333' }}>Artist Spotlights</p>
            <p className="art-material" style={{ fontSize: '16px', color: '#333' }}>Mixed Media</p>
            <p className="dimensions" style={{ fontSize: '16px', color: '#333' }}>60 x 40 Inches</p>
          </div>
          <div className="right-details" style={{ textAlign: 'right' }}>
            <p className="price-old" style={{ textDecoration: 'line-through', color: '#888' }}>Rs. 90,000</p>
            <p className="price-new" style={{ fontSize: '20px', fontWeight: 'bold' }}>Rs. 81,000</p>
            <p className="discount" style={{ color: 'green', fontWeight: 'bold' }}>10% OFF</p>
          </div>
        </div>
        <div className="card-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button className="icon-button" style={{ backgroundColor: '#fff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-button" style={{ backgroundColor: '#fff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={ShoppingIcon} alt="Shopping" />
          </button>
        </div>
      </div>

      {/* Third Card */}
      <div className="art-card" style={{ width: '30%', margin: '10px' }}>
        <div className="card-image" style={{ backgroundImage: 'url(../assets/images/home11.png)', height: '232px' }}></div>
        <div className="card-details" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
          <div className="left-details" style={{ textAlign: 'left' }}>
            <h3 className="art-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Asian Mysticism</h3>
            <p className="artist-name" style={{ fontSize: '16px', color: '#333' }}>By Artist Name</p>
            <p className="art-type" style={{ fontSize: '16px', color: '#333' }}>Englo Art</p>
            <p className="art-material" style={{ fontSize: '16px', color: '#333' }}>Acrylic on Canvas</p>
            <p className="dimensions" style={{ fontSize: '16px', color: '#333' }}>50 x 70 Inches</p>
          </div>
          <div className="right-details" style={{ textAlign: 'right' }}>
            <p className="price-old" style={{ textDecoration: 'line-through', color: '#888' }}>Rs. 100,000</p>
            <p className="price-new" style={{ fontSize: '20px', fontWeight: 'bold' }}>Rs. 90,000</p>
            <p className="discount" style={{ color: 'green', fontWeight: 'bold' }}>15% OFF</p>
          </div>
        </div>
        <div className="card-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button className="icon-button" style={{ backgroundColor: '#fff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-button" style={{ backgroundColor: '#fff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={ShoppingIcon} alt="Shopping" />
          </button>
        </div>
      </div>
    </div>
    

    </>
  );
}


export default Home_Category_Section;
