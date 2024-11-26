// import React from "react";
// import "../styles/Artist_studio_main.css";

// import home4 from "../assets/images/home4.png";
// function ArtworkCard({ image, title, type, dimensions, date, price, forSale, status }) {
//   return (
//     <div className="artwork-card">
//       <img className="artwork-image" src={home4} alt={title} />
//       <div className="artwork-details">
//         <h3>{title}</h3>
//         <p>{type}</p>
//         <p>{dimensions}</p>
//       </div>
//       <div className="artwork-status">
//         <p>{date}</p>
//         <p>${price}</p>
//         <p>{forSale ? "Yes" : "Not for Sale"}</p>
//         <p className={`status ${status === "Draft" ? "draft" : ""}`}>{status}</p>
//       </div>
//     </div>
//   );
// }

// function Artist_studio_main() {
//   const artworks = [
//     {
//       image: "home4",
//       title: "Abstract Paint",
//       type: "Painting",
//       dimensions: "11 x 34 x 45",
//       date: "May 17, 2024",
//       price: 2300,
//       forSale: true,
//       status: "Published",
//     },
//     {
//       image: "home4",
//       title: "Artwork",
//       type: "Painting",
//       dimensions: "11 x 34 x 45",
//       date: "May 17, 2024",
//       price: 2300,
//       forSale: true,
//       status: "Draft",
//     },
//     {
//       image: "home4",
//       title: "Artwork",
//       type: "Painting",
//       dimensions: "11 x 34 x 45",
//       date: "May 17, 2024",
//       price: 2300,
//       forSale: false,
//       status: "Draft",
//     },
//   ];

//   return (
//     <div className="main-studio">
//       <h1>Manage Artworks</h1>
//       <div className="heading">
//         <div className="left-area">
//           <h1>My Original Artworks</h1>
//         </div>
//         <div className="right-area">
//           <button type="submit">Upload New Artwork</button>
//         </div>
//       </div>

//       <div className="artwork-list">
//         {artworks.map((artwork, index) => (
//           <ArtworkCard key={index} {...artwork} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Artist_studio_main.css";

function ArtworkCard({ image, title, category, dimensions, yearProduced, price }) {
  return (
    <div className="artwork-card">
      <img
        className="artwork-image"
        src={image || "/default-image.png"} // Use a default image if `image` is not available
        alt={title}
      />
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
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:4000/api/artwork/getArtwork/${email}`)
        .then((response) => {
          // Map API response to match expected props
          const mappedArtworks = response.data.map((artwork) => ({
            image: `http://localhost:4000${artwork.image}`, // Ensure full URL for the image
            title: artwork.title,
            category: artwork.category,
            dimensions: `${artwork.dimensions?.height || "N/A"} x ${artwork.dimensions?.width || "N/A"} x ${artwork.dimensions?.depth || "N/A"}`,
            yearProduced: artwork.yearProduced,
            price: artwork.description, // If "price" is part of the description, adjust accordingly
          }));
          
          setArtworks(mappedArtworks);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching artworks:", error);
          setLoading(false);
        });
    }
  }, [email]);

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
            onClick={() => window.open("/upload_artwork", "_blank")}
          >
            Upload New Artwork
          </button>
        </div>
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
