import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Corrected import
import "../styles/Artist_studio_main.css";

function ArtworkCard({ image, title, type, dimensions, date, price, forSale, status }) {
  return (
    <div className="artwork-card">
      <img className="artwork-image" src={image} alt={title} />
      <div className="artwork-details">
        <h3>{title}</h3>
        <p>Category: {category}</p>
        <p>Dimensions: {dimensions}</p>
      </div>
      <div className="artwork-status">
        <p>Year: {yearProduced}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
}

function Artist_studio_main() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);  // New state for verification status
  const [isBlocked, setIsBlocked] = useState(false);   // New state for block status
  const email = sessionStorage.getItem('email');
  const navigate = useNavigate(); // Corrected: Use useNavigate hook

  useEffect(() => {
    if (email) {
      // Fetch user details to get isVerified and isBlocked
      axios
        .get(`http://localhost:4000/api/users/getUserStatus/${email}`)
        .then((response) => {
          const { isVerified, isBlocked } = response.data;
          console.log(isVerified);
          setIsVerified(isVerified);
          setIsBlocked(isBlocked);
        })
        .catch((error) => {
          console.error("Error fetching user status:", error);
        });

      // Fetch artworks
      axios
        .get(`http://localhost:4000/api/artwork/getArtwork/${email}`)
        .then((response) => {
          setArtworks(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching artworks:", error);
          setLoading(false);
        });
    }
  }, [email]);

  const handleUploadClick = () => {
    if (isVerified && !isBlocked) {
      // User is verified and not blocked, allow them to upload artwork
      window.open("/upload_artwork", "_blank"); // Open in a new tab
    } else {
      // Show alert if user is not verified or is blocked
      alert("You need to be verified and not blocked to upload artwork.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-studio">
      <h1>Manage Artworks</h1>
      <div className="heading">
        <div className="left-area">
          <h1>My Original Artworks</h1>
        </div>
        <div className="right-area">
          <button
            type="button"
            onClick={handleUploadClick} // Trigger the upload logic on click
          >
            Upload New Artwork
          </button>
        </div>
      </div>

      {/* Show user status */}
      <div className="user-status">
        <p>User Status: {isVerified ? "Verified" : "Not Verified"}</p>
        <p>{isBlocked ? "Account is Blocked" : "Account is Active"}</p>
      </div>

      <div className="artwork-list">
        {artworks.length > 0 ? (
          artworks.map((artwork, index) => (
            <ArtworkCard key={index} {...artwork} />
          ))
        ) : (
          <p>No artworks found.</p>
        )}
      </div>
    </div>
  );
}

export default Artist_studio_main;
