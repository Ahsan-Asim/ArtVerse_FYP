import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/ArtVerse_Logo.png';
import SearchIcon from '../assets/images/search.png';
import '../styles/Profile_Page_Header.css';
import axios from 'axios'; // Import axios for API calls

function Profile_header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [followedArtists, setFollowedArtists] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search?title=${searchQuery}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery) {
      handleSearchSubmit(e);
    }
  };

  // Fetch followed artists when the user clicks "Followed Artists"
  const fetchFollowedArtists = async () => {
    const userEmail = sessionStorage.getItem('email');
    if (!userEmail) {
      console.error('User email is not available in sessionStorage.');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:4000/api/artists/followed-artists/${userEmail}`);
      if (response.data) {
        setFollowedArtists(response.data); // Set followed artists in state
        console.log('Followed artists:', response.data);
        setModalVisible(true); // Show the modal
      }
    } catch (error) {
      console.error('Error fetching followed artists:', error);
    }
  };

  // Unfollow artist
  const unfollowArtist = async (artistId) => {
    const userEmail = sessionStorage.getItem('email');
    console.log(userEmail);
    console.log(artistId);
    if (!userEmail) {
      console.error('User email is not available in sessionStorage.');
      return;
    }
    try {
      const response = await axios.put("http://localhost:4000/api/artists/unfollow_artist", {
        userEmail,
        artistId
      });
      if (response.data) {
        setFollowedArtists((prevArtists) =>
          prevArtists.filter(artist => artist._id !== artistId)
        );
        console.log('Unfollowed artist:', response.data);
      }
    } catch (error) {
      console.error('Error unfollowing artist:', error);
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={Logo} alt="ArtVerse Logo" className="logo" />
      </Link>
      <div className="headings">
        <Link to="/About_Us" className="become-artist">About Us</Link>
        <Link to="#" className="why-us" onClick={fetchFollowedArtists}>Followed Artists</Link>
        <Link to="/become-artist" className="explore-digital-art">Become Artist</Link>
      </div>

      <form className="search-container" onSubmit={handleSearchSubmit}>
        <img src={SearchIcon} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
        />
        {searchQuery && (
          <button type="submit" className="search-btn">Search</button>
        )}
      </form>

      <div className="buttons">
        <Link to="/signin" className="login_button" style={{ textDecoration: "none" }}>
          Login
        </Link>
        <Link to="/signup" className="signup_button" style={{ textDecoration: "none" }}>
          Signup
        </Link>
      </div>

      {/* Modal for Followed Artists */}
      {modalVisible && (
        <div className="modal" style={{ display: modalVisible ? 'flex' : 'none' }} onClick={() => setModalVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setModalVisible(false)}>×</span>
            <h2>Followed Artists</h2>
            <div className="followed-artists">
              {followedArtists.length > 0 ? (
                followedArtists.map((artist) => (
                  <div key={artist._id} className="artist-card">
                    <img
                      src={`http://localhost:4000/${artist.image}`}
                      alt={artist.name}
                      className="artist-image"
                    />
                    <h3>{artist.name}</h3>
                    <p>{artist.country}</p>
                    <button
                      onClick={() => unfollowArtist(artist._id)}
                    >
                      Unfollow
                    </button>
                  </div>
                ))
              ) : (
                <p>No followed artists found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Profile_header;
