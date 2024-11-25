import React, { useState, useEffect } from "react";
import "../styles/Artist_detail_main.css";
import home4 from "../assets/images/home4.png"; // Default image

// Modal Component to display artist details and edit/delete buttons
function Modal({ artist, closeModal, onVerify, onDelete }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>×</button>
        <h3>{artist.name}</h3>
        <p>{artist.city}</p>
        <p>{artist.description}</p>

        <div className="modal-buttons">
          <button onClick={() => onVerify(artist.email)}>Verify</button>
          <button onClick={() => onDelete(artist.email)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
function Artist_detail_main() {
  const [artists, setArtists] = useState([]); // State for artist data
  const [selectedArtist, setSelectedArtist] = useState(null); // State for selected artist for the modal
  const [loading, setLoading] = useState(true); // State for loading spinner
  const [error, setError] = useState(null); // State for error handling

  // Fetch artist data on component mount
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/admin/artists"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch artists");
        }
        const data = await response.json();
        setArtists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  // Handle opening the modal and setting the selected artist
  const handleCardClick = (artist) => {
    setSelectedArtist(artist);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedArtist(null);
  };

  // Handle verification of a user
  const handleVerify = async (email) => {
    try {
      const response = await fetch("http://localhost:4000/api/admin/verifyUser", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert("User verified successfully");
      closeModal();

      // Optionally, refresh the artist list
      setArtists((prevArtists) =>
        prevArtists.map((artist) =>
          artist.email === email ? { ...artist, isVerified: true } : artist
        )
      );
    } catch (error) {
      console.error(error);
      alert("Error verifying user: " + error.message);
    }
  };

  // Handle deletion (blocking) of a user
  const handleDelete = async (email) => {
    try {
      const response = await fetch("/api/admin/blockUser", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert("User blocked successfully");
      closeModal();

      // Optionally, remove the blocked artist from the list
      setArtists((prevArtists) =>
        prevArtists.filter((artist) => artist.email !== email)
      );
    } catch (error) {
      console.error(error);
      alert("Error blocking user: " + error.message);
    }
  };

  return (
    <div className="main-studio">
      <h1>Manage Artist Profile</h1>
      <div className="heading">Welcome to Artist Portfolios</div>

      {loading ? (
        <p>Loading artists...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="artist-list">
          {artists.map((artist, index) => (
            <ArtistCard
              key={index}
              image={artist.image || home4} // Use default image if not provided
              name={artist.name}
              city={artist.city}
              description={artist.description}
              onClick={() => handleCardClick(artist)}
            />
          ))}
        </div>
      )}

      {selectedArtist && (
        <Modal
          artist={selectedArtist}
          closeModal={closeModal}
          onVerify={handleVerify}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Artist_detail_main;
