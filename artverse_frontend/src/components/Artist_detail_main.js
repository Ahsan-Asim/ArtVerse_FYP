import React, { useState } from "react";
import "../styles/Artist_detail_main.css";
import home4 from "../assets/images/home4.png"; // If you want to include an image for each artist, use it here

// Modal Component to display artist details and edit/delete buttons
function Modal({ artist, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>×</button> {/* Close button */}
        <h3>{artist.name}</h3>
        <p>{artist.city}</p>
        <p>{artist.description}</p>

        <div className="modal-buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

function ArtistCard({ image, name, city, description, onClick }) {
  return (
    <div className="artist-card" onClick={onClick}>
      <img src={image || home4} alt={name} />
      
      <div className="artist-details">
        <h3>{name}</h3>
        <p>{city}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Artist_detail_main() {
  const [selectedArtist, setSelectedArtist] = useState(null); // state for selected artist for the modal

  const artists = [
    {
      image: home4,
      name: "Wajeeha Kashaf",
      city: "Faisalabad",
      description: "Hardworking, creative, and passionate about design and art.",
    },
    {
      image: home4,
      name: "Rohit Kumar",
      city: "Islamabad",
      description: "An artist blending intricate details with bold abstract elements.",
    },
    {
      image: home4,
      name: "Ali Hassan",
      city: "Lahore",
      description: "Inspired by nature, Ali creates minimalist art with a modern twist.",
    },
    {
      image: home4,
      name: "Sarah Khan",
      city: "Karachi",
      description: "A photographer turned visual artist, exploring light and shadows.",
    },
    {
      image: home4,
      name: "Usman Ali",
      city: "Rawalpindi",
      description: "An experimental artist known for mixing traditional with digital art.",
    },
  ];

  // Handle opening the modal and setting the selected artist
  const handleCardClick = (artist) => {
    setSelectedArtist(artist);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedArtist(null);
  };

  return (
    <div className="main-studio">
      <h1>Manage Artist Profile</h1>
      <div className="heading">Welcome to Artist Portfolios</div>

      <div className="artist-list">
        {artists.map((artist, index) => (
          <ArtistCard key={index} {...artist} onClick={() => handleCardClick(artist)} />
        ))}
      </div>

      {selectedArtist && (
        <Modal artist={selectedArtist} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Artist_detail_main;
