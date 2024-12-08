import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DefaultProfileIcon from "../assets/images/default_profile.jpeg";
import "../styles/Landing_Page_Artist_Section.css";

function Landing_Page_Artist_Section() {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch artists from API
    axios
      .get("http://localhost:4000/api/admin/artists") // Adjust the API endpoint based on your setup
      .then((response) => setArtists(response.data))
      .catch((error) => console.error("Error fetching artists:", error));
  }, []);

  const getArtistImageUrl = (imagePath) => {
    if (!imagePath) {
      return DefaultProfileIcon; // Fallback image
    }
    return `http://localhost:4000/${imagePath.replace(/\\/g, "/")}`; // Replace backslashes with forward slashes
  };

  return (
    <div className="artist-section">
      <h1 className="main-heading1">Meet Our Artists</h1>
      <div className="bold-line"></div>

      <div className="artist-cards1">
        {artists.slice(0, 4).map((artist, index) => (
          <div className="artist-card" key={index}>
            <img
              src={getArtistImageUrl(artist.artistDetails?.image)}
              alt={`Artist ${artist.artistDetails?.name || "No Name"}`}
              className="artist-image"
            />
            <div className="artist-text">
              <h3>{artist.artistDetails?.name}</h3>
              <p>{artist.artistDetails?.country}</p>
              <button
                className="follow-button"
                onClick={() => navigate("/signup")}
              >
                Follow Artist
              </button>
            </div>
          </div>
        ))}

        {/* Explore More Button */}
        <button className="explore-more-button" onClick={() => navigate("/signup")}>
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Landing_Page_Artist_Section;
