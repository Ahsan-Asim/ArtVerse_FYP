import React, { useState, useEffect } from 'react';
import '../styles/search.css';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Extract 'title' query parameter from URL
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    if (title) {
      setSearchQuery(title);
      fetchArtworks(title); // Automatically fetch artworks
    }
  }, []);

  const fetchArtworks = async (query) => {
  console.log(`Fetching artworks with query: ${query}`); // Debug log for query
  try {
    const response = await fetch(`/api/artworks/search?title=${encodeURIComponent(query)}`);
    console.log(`Response status: ${response.status}`); // Log the HTTP response status

    if (!response.ok) {
      console.error('Failed to fetch artworks');
      throw new Error('Failed to fetch artworks');
    }

    const data = await response.json();
    console.log('Artworks fetched successfully:', data); // Log fetched data
    setArtworks(data);
  } catch (error) {
    console.error('Error fetching artworks:', error); // Log the error
  }
};


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      e.preventDefault();
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
        onKeyDown={handleKeyDown}
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
