import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../feature/slice/Add_to_cart_slice.js";
import { useNavigate } from "react-router-dom";

import "../styles/Home_Category_Section.css"; // Ensure to import your custom CSS
import SerigraphImage from "../assets/images/home2.png"; // Replace with correct paths
import DrawingImage from "../assets/images/home3.png";
import PaintingImage from "../assets/images/home4.png";
import SculptureImage from "../assets/images/home5.png";
import Image1 from "../assets/images/home6.png"; // Add correct path to image 1
import Image2 from "../assets/images/home7.png"; // Add correct path to image 2
import Image3 from "../assets/images/home8.png";
import LikeIcon from "../assets/images/like_icon.png";
import ShoppingIcon from "../assets/images/shopping_icon.png";

function Home_Category_Section() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Example painting data for this grid
  const painting = {
    title: "1", // Unique identifier
    name: "Flowery",
    artist: "Asif Hussain",
    type: "Painting",
    material: "Oil, Acrylic on Canvas",
    dimensions: "72 x 52 Inches",
    oldPrice: 80000,
    newPrice: 71000,
    discount: "30% OFF",
    image: require("../assets/images/Artist_Image.png"),
  };

  const handleAddToCart = () => {
    const userEmail = sessionStorage.getItem("email");
    if (!userEmail) {
      alert("Please sign in to add items to your cart.");
      return;
    }

    // Dispatch the action to add item to cart
    dispatch(
      addItemToCart({
        userEmail,
        title: painting.title,
        artist: painting.artist,
        image: painting.image,
        price: painting.newPrice,
        quantity: 1,
      })
    );
  };

  // Handle navigation to the Cart page
  const handleViewCart = () => {
    const userEmail = sessionStorage.getItem("email");
    if (!userEmail) {
      alert("Please sign in to view your cart.");
      return;
    }
    // Redirect to the Cart page
    navigate("/cartpage");
  };

  return (
    <>
      {/* Category Section */}
      <div className="category-section">
        <h2 className="category-title">Explore By Category</h2>
        <div className="category-items">
          <div className="category-item">
            <img
              src={SerigraphImage}
              alt="Serigraphs"
              className="category-image"
            />
            <p className="category-text">Serigraphs</p>
          </div>
          <div className="category-item">
            <img src={DrawingImage} alt="Drawings" className="category-image" />
            <p className="category-text">Drawings</p>
          </div>
          <div className="category-item">
            <img
              src={PaintingImage}
              alt="Paintings"
              className="category-image"
            />
            <p className="category-text">Paintings</p>
          </div>
          <div className="category-item">
            <img
              src={SculptureImage}
              alt="Sculptures"
              className="category-image"
            />
            <p className="category-text">Sculptures</p>
          </div>
        </div>
      </div>

      {/* Curated Collections */}
      <div className="curated-collections">
        <h2 className="collections-title">Curated Collections</h2>
        <div className="collections-items">
          <a href="/colour-paintings" className="collection-card">
            <img
              src={Image1}
              alt="Colour Paintings"
              className="collection-image"
            />
            <div className="collection-text">
              <h3>Colour Paintings</h3>
              <p>Artist Spotlights</p>
            </div>
          </a>
          <a href="/artist-spotlights" className="collection-card">
            <img
              src={Image2}
              alt="Artist Spotlights"
              className="collection-image"
            />
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

      {/* Art Card Section */}
      <div className="art-card-container">
        {/* First Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home10.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Colour Paintings</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Artist Spotlights</p>
              <p className="art-material">Mixed Media</p>
              <p className="dimensions">60 x 40 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 90,000</p>
              <p className="price-new">Rs. 81,000</p>
              <p className="discount">10% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home10.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Colour Paintings</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Artist Spotlights</p>
              <p className="art-material">Mixed Media</p>
              <p className="dimensions">60 x 40 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 90,000</p>
              <p className="price-new">Rs. 81,000</p>
              <p className="discount">10% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>

        {/* Third Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home11.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Asian Mysticism</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Englo Art</p>
              <p className="art-material">Acrylic on Canvas</p>
              <p className="dimensions">50 x 70 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 100,000</p>
              <p className="price-new">Rs. 90,000</p>
              <p className="discount">15% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>
      </div>
      {/* Art Card Section */}
      <div className="art-card-container">
        {/* First Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home10.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Colour Paintings</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Artist Spotlights</p>
              <p className="art-material">Mixed Media</p>
              <p className="dimensions">60 x 40 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 90,000</p>
              <p className="price-new">Rs. 81,000</p>
              <p className="discount">10% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>
        {/* Second Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home10.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Colour Paintings</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Artist Spotlights</p>
              <p className="art-material">Mixed Media</p>
              <p className="dimensions">60 x 40 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 90,000</p>
              <p className="price-new">Rs. 81,000</p>
              <p className="discount">10% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>

        {/* Third Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home11.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Asian Mysticism</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Englo Art</p>
              <p className="art-material">Acrylic on Canvas</p>
              <p className="dimensions">50 x 70 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 100,000</p>
              <p className="price-new">Rs. 90,000</p>
              <p className="discount">15% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>
      </div>
      {/* Art Card Section */}
      <div className="art-card-container">
        {/* First Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home10.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Colour Paintings</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Artist Spotlights</p>
              <p className="art-material">Mixed Media</p>
              <p className="dimensions">60 x 40 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 90,000</p>
              <p className="price-new">Rs. 81,000</p>
              <p className="discount">10% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home10.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Colour Paintings</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Artist Spotlights</p>
              <p className="art-material">Mixed Media</p>
              <p className="dimensions">60 x 40 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 90,000</p>
              <p className="price-new">Rs. 81,000</p>
              <p className="discount">10% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>

        {/* Third Card */}
        <div className="art-card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/home11.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="left-details">
              <h3 className="art-title">Asian Mysticism</h3>
              <p className="artist-name">By Artist Name</p>
              <p className="art-type">Englo Art</p>
              <p className="art-material">Acrylic on Canvas</p>
              <p className="dimensions">50 x 70 Inches</p>
            </div>
            <div className="right-details">
              <p className="price-old">Rs. 100,000</p>
              <p className="price-new">Rs. 90,000</p>
              <p className="discount">15% OFF</p>
            </div>
          </div>
          <div className="card-buttons">
            <button className="like-button">
              <img src={LikeIcon} alt="Like" className="icon" />
            </button>
            <button className="add-to-cart-button">
              <img src={ShoppingIcon} alt="Add to Cart" className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Category_Section;
