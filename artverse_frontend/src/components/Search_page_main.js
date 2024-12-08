import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/search_page_main.css";

function Search_page_main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Extract 'title' query parameter from URL
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    if (title) {
      setSearchQuery(title);
      fetchArtworks(title); // Automatically fetch artworks when title is found
    }
  }, []);

  const fetchArtworks = async (query) => {
    console.log(`Fetching artworks with query: ${query}`);
    try {
      const response = await fetch(
        `http://localhost:4000/api/artwork/search?title=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched artworks:", data);
      setArtworks(data);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      e.preventDefault();
      fetchArtworks(searchQuery);
    }
  };

  return (
    <div className="search-page">
      <h1 className="search-title">Search Results</h1>
      <div className="artwork-grid">
        {artworks.length > 0 ? (
          artworks.map((artwork) => {
            const imageUrl = `http://localhost:4000${artwork.image}`; // Construct URL for each artwork

            return (
              <div key={artwork._id} className="artwork-card">
                <Link
                  to="/painting"
                  state={{ artwork }}
                  className="artwork-link"
                >
                  <div className="artwork-image">
                    <img src={imageUrl} alt={artwork.title} />
                  </div>
                  <div className="artwork_detail">
                    <h2 className="artwork-title">{artwork.title}</h2>
                    <p className="artwork-details">
                      {artwork.category} | {artwork.yearProduced}
                    </p>
                    <p className="artwork-description">{artwork.description}</p>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="no-results">No artworks found.</p>
        )}
      </div>
    </div>
  );
}

export default Search_page_main;
