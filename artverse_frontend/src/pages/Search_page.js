import React, { useState } from 'react';
import '../styles/search.css';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [artworks, setArtworks] = useState([]);

  // Fetch artworks from the server
  const fetchArtworks = async (query) => {
    try {
      const response = await fetch(`/api/artworks/search?title=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch artworks');
      }
      const data = await response.json();
      setArtworks(data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  // Handle "Enter" key press in the search bar
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      e.preventDefault(); // Prevent default form submission behavior
      fetchArtworks(searchQuery);
    }
  };

  return (
    <div className="search-page">
      <h1 className="search-title">Search Results</h1>
      <input
        type="text"
        placeholder="Search for artworks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger search on Enter key
        className="search-input"
      />

      <div className="artwork-grid">
        {artworks.length > 0 ? (
          artworks.map((artwork) => (
            <div key={artwork._id} className="artwork-card">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="artwork-image"
              />
              <h2 className="artwork-title">{artwork.title}</h2>
              <p className="artwork-details">
                {artwork.category} | {artwork.yearProduced}
              </p>
              <p className="artwork-description">{artwork.description}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No artworks found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
