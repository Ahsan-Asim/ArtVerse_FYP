import React from "react";
import "../styles/About_us_3rd_sec.css";

function About_us_3rd_sec() {
  return (
    <div className="main">
      <div className="text1">
        <h2>OUR TEAM</h2>
        <p>
          Our team is a passionate group of creators, technologists, and art
          lovers dedicated to empowering artists and art enthusiasts alike.
          We’re united by a vision to make art accessible, meaningful, and
          celebrated, bringing together diverse talents to build a platform
          where creativity knows no bounds.
        </p>
      </div>

      <div className="profile-cards-container10">
        {/* First Card */}
        <div className="profile-card10">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/Artist_Image.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="detail-row">
              <h2>Rohit Kumar</h2>
              <h3>Team Leader</h3>
            </div>
            <p>
              An entrepreneur and visionary leader, Rohit Kumar guides Artverse
              with a commitment to innovation and empowering the art community.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="profile-card10">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/designer.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="detail-row">
              <h2>Wajeeha Kashaf</h2>
              <h3>Designer</h3>
            </div>
            <p>
              She is a very chill girl who only eats, sleeps, and repeats. A
              very lazy girl.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="profile-card10">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${require("../assets/images/backend_dev.png")})`,
            }}
          ></div>
          <div className="card-details">
            <div className="detail-row">
              <h2>Ahsan Asim</h2>
              <h3>Backend Developer</h3>
            </div>
            <p>He is also a bad boy, "snake chupa rustam", and a lot more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_us_3rd_sec;