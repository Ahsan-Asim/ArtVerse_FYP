import React from "react";
import "../styles/Artist_studio_main.css";

import home4 from "../assets/images/home4.png";
function ArtworkCard({ image, title, type, dimensions, date, price, forSale, status }) {
  return (
    <div className="artwork-card">
      <img className="artwork-image" src={home4} alt={title} />
      <div className="artwork-details">
        <h3>{title}</h3>
        <p>{type}</p>
        <p>{dimensions}</p>
      </div>
      <div className="artwork-status">
        <p>{date}</p>
        <p>${price}</p>
        <p>{forSale ? "Yes" : "Not for Sale"}</p>
        <p className={`status ${status === "Draft" ? "draft" : ""}`}>{status}</p>
      </div>
    </div>
  );
}

function Artist_studio_main() {
  const artworks = [
    {
      image: "home4",
      title: "Abstract Paint",
      type: "Painting",
      dimensions: "11 x 34 x 45",
      date: "May 17, 2024",
      price: 2300,
      forSale: true,
      status: "Published",
    },
    {
      image: "home4",
      title: "Artwork",
      type: "Painting",
      dimensions: "11 x 34 x 45",
      date: "May 17, 2024",
      price: 2300,
      forSale: true,
      status: "Draft",
    },
    {
      image: "home4",
      title: "Artwork",
      type: "Painting",
      dimensions: "11 x 34 x 45",
      date: "May 17, 2024",
      price: 2300,
      forSale: false,
      status: "Draft",
    },
  ];

  return (
    <div className="main-studio">
      <h1>Manage Artworks</h1>
      <div className="heading">
        <div className="left-area">
          <h1>My Original Artworks</h1>
        </div>
        <div className="right-area">
          <button type="submit">Upload New Artwork</button>
        </div>
      </div>

      <div className="artwork-list">
        {artworks.map((artwork, index) => (
          <ArtworkCard key={index} {...artwork} />
        ))}
      </div>
    </div>
  );
}

export default Artist_studio_main;
