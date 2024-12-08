// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DefaultProfileIcon from "../assets/images/default_profile.jpeg";
// import StarImage from "../assets/images/Artist_Stars.png";

// function Home_Page_Artist_Display() {
//   const [artists, setArtists] = useState([]);
//   const [user, setUser] = useState("logged-in-user-name"); // Replace with actual username logic
//   const [followedArtists, setFollowedArtists] = useState(new Set()); // Track followed artists by name

//   useEffect(() => {
//     // Fetch artists from the API
//     axios
//       .get("http://localhost:4000/api/admin/artists") // Update the API endpoint as per your backend
//       .then((response) => setArtists(response.data))
//       .catch((error) => console.error("Error fetching artists:", error));
//   }, []);

//   const getArtistImageUrl = (imagePath) => {
//     if (!imagePath) {
//       return DefaultProfileIcon; // Default fallback image
//     }
//     return `http://localhost:4000/${imagePath.replace(/\\/g, "/")}`; // Adjust path for URL compatibility
//   };

//   const handleFollow = async (artistName) => {
//     console.log(artistName);

//     // Get the email from sessionStorage
//     const userEmail = sessionStorage.getItem("email");

//     try {
//       const response = await axios.post("http://localhost:4000/api/artists/follow", {
//         artistName: artistName, // Pass the artist's name
//         email: userEmail,      // Pass the email from sessionStorage
//       });
//       console.log(response.data.message);

//       // Update the followed artists state to reflect the new follow
//       setFollowedArtists((prev) => new Set(prev.add(artistName)));

//       alert(response.data.message); // Show success or error message
//     } catch (error) {
//       console.error("Error following artist:", error);
//       alert("An error occurred while following the artist.");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2
//         style={{
//           fontFamily: "Aleo, sans-serif",
//           fontWeight: "600",
//           fontSize: "38px",
//           width: "421px",
//           margin: "0 auto",
//           color: "#333",
//           marginBottom: "30px",
//         }}
//       >
//         Meet Our Artists
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           alignItems: "center",
//           marginBottom: "50px",
//         }}
//       >
//         {/* Display only the first 4 artists */}
//         {artists.slice(0, 4).map((artist, index) => (
//           <div
//             key={index}
//             style={{
//               width: "242px",
//               textAlign: "center",
//               borderRadius: "50px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               padding: "20px",
//               backgroundColor: "#FFF",
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 height: "207px",
//                 borderRadius: "50px",
//                 backgroundImage: `url(${getArtistImageUrl(artist.artistDetails?.image)})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             ></div>

//             <p
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "26.4px",
//                 fontWeight: "400",
//                 color: "#333",
//                 marginTop: "20px",
//               }}
//             >
//               {artist.artistDetails?.name || "Unknown Artist"}
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: "10px",
//               }}
//             >
//               {[1].map((star, idx) => (
//                 <img
//                   key={idx}
//                   src={StarImage}
//                   alt="Star"
//                   style={{
//                     width: "80px", // Adjust width for clarity
//                     height: "30px", // Adjust height to match the design
//                     margin: "0 5px", // Add spacing between stars
//                     objectFit: "contain", // Ensures proper scaling of the image
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Follow Button */}
//             <button
//               onClick={() => handleFollow(artist.artistDetails?.name)} // Pass artist name to follow function
//               style={{
//                 marginTop: "20px",
//                 padding: "10px 20px",
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 color: "#FFF",
//                 backgroundColor: "#000",
//                 border: "none",
//                 borderRadius: "25px",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
//             >
//               {followedArtists.has(artist.artistDetails?.name) ? "Following" : "Follow"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default Home_Page_Artist_Display;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DefaultProfileIcon from "../assets/images/default_profile.jpeg";
// import StarImage from "../assets/images/Artist_Stars.png";

// function Home_Page_Artist_Display() {
//   const [artists, setArtists] = useState([]);
//   const [user, setUser] = useState("logged-in-user-name"); // Replace with actual username logic
//   const [followedArtists, setFollowedArtists] = useState(new Set()); // Track followed artists by name

//   // Shuffle function to randomize artist cards
//   const shuffleArray = (array) => {
//     let shuffledArray = array.slice(); // Create a copy of the original array
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
//     }
//     return shuffledArray;
//   };

//   useEffect(() => {
//     // Fetch artists from the API
//     axios
//       .get("http://localhost:4000/api/admin/artists") // Update the API endpoint as per your backend
//       .then((response) => {
//         // Shuffle the artists before setting state
//         const shuffledArtists = shuffleArray(response.data);
//         setArtists(shuffledArtists);
//       })
//       .catch((error) => console.error("Error fetching artists:", error));

//     // Load the followed artists from localStorage
//     const followed = JSON.parse(localStorage.getItem("followedArtists")) || [];
//     setFollowedArtists(new Set(followed));
//   }, []);

//   const getArtistImageUrl = (imagePath) => {
//     if (!imagePath) {
//       return DefaultProfileIcon; // Default fallback image
//     }
//     return `http://localhost:4000/${imagePath.replace(/\\/g, "/")}`; // Adjust path for URL compatibility
//   };

//   const handleFollow = async (artistName) => {
//     console.log(artistName);

//     // Get the email from sessionStorage
//     const userEmail = sessionStorage.getItem("email");

//     try {
//       const response = await axios.post("http://localhost:4000/api/artists/follow", {
//         artistName: artistName, // Pass the artist's name
//         email: userEmail,      // Pass the email from sessionStorage
//       });
//       console.log(response.data.message);

//       // Update the followed artists state
//       setFollowedArtists((prev) => {
//         const updatedFollowedArtists = new Set(prev);
//         updatedFollowedArtists.add(artistName);

//         // Store updated followed artists in localStorage to persist on reload
//         localStorage.setItem("followedArtists", JSON.stringify([...updatedFollowedArtists]));

//         return updatedFollowedArtists;
//       });

//       alert(response.data.message); // Show success or error message
//     } catch (error) {
//       console.error("Error following artist:", error);
//       alert("An error occurred while following the artist.");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2
//         style={{
//           fontFamily: "Aleo, sans-serif",
//           fontWeight: "600",
//           fontSize: "38px",
//           width: "421px",
//           margin: "0 auto",
//           color: "#333",
//           marginBottom: "30px",
//         }}
//       >
//         Meet Our Artists
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           alignItems: "center",
//           marginBottom: "50px",
//         }}
//       >
//         {/* Display the shuffled list of artists */}
//         {artists.slice(0, 4).map((artist, index) => (
//           <div
//             key={index}
//             style={{
//               width: "242px",
//               textAlign: "center",
//               borderRadius: "50px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               padding: "20px",
//               backgroundColor: "#FFF",
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 height: "207px",
//                 borderRadius: "50px",
//                 backgroundImage: `url(${getArtistImageUrl(artist.artistDetails?.image)})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             ></div>

//             <p
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "26.4px",
//                 fontWeight: "400",
//                 color: "#333",
//                 marginTop: "20px",
//               }}
//             >
//               {artist.artistDetails?.name || "Unknown Artist"}
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: "10px",
//               }}
//             >
//               {[1].map((star, idx) => (
//                 <img
//                   key={idx}
//                   src={StarImage}
//                   alt="Star"
//                   style={{
//                     width: "80px", // Adjust width for clarity
//                     height: "30px", // Adjust height to match the design
//                     margin: "0 5px", // Add spacing between stars
//                     objectFit: "contain", // Ensures proper scaling of the image
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Follow Button */}
//             <button
//               onClick={() => handleFollow(artist.artistDetails?.name)} // Pass artist name to follow function
//               style={{
//                 marginTop: "20px",
//                 padding: "10px 20px",
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 color: "#FFF",
//                 backgroundColor: "#000",
//                 border: "none",
//                 borderRadius: "25px",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
//             >
//               {followedArtists.has(artist.artistDetails?.name) ? "Following" : "Follow"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home_Page_Artist_Display;

import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultProfileIcon from "../assets/images/default_profile.jpeg";
import StarImage from "../assets/images/Artist_Stars.png";

function Home_Page_Artist_Display() {
  const [artists, setArtists] = useState([]);
  const [userEmail, setUserEmail] = useState(sessionStorage.getItem("email"));
  const [followedArtists, setFollowedArtists] = useState(new Set());

  // Fetch the followed artists of the user
  useEffect(() => {
    // Fetch followed artists for the user
    if (userEmail) {
      axios
        .get(`http://localhost:4000/api/artists/followed-artists/${userEmail}`)
        .then((response) => {
          const followed = new Set(response.data.map((artist) => artist.name));
          setFollowedArtists(followed);
        })
        .catch((error) => console.error("Error fetching followed artists:", error));
    }
  }, [userEmail]);

  // Fetch all artists
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/artists") // Replace with the actual API
      .then((response) => setArtists(response.data))
      .catch((error) => console.error("Error fetching artists:", error));
  }, []);

  const getArtistImageUrl = (imagePath) => {
    if (!imagePath) {
      return DefaultProfileIcon; // Default fallback image
    }
    return `http://localhost:4000/${imagePath.replace(/\\/g, "/")}`; // Adjust path for URL compatibility
  };

  const handleFollow = async (artistName) => {
    console.log(artistName);

    try {
      const response = await axios.post("http://localhost:4000/api/artists/follow", {
        artistName: artistName,
        email: userEmail,
      });
      console.log(response.data.message);

      // Update the followed artists state to reflect the new follow
      setFollowedArtists((prev) => new Set(prev.add(artistName)));

      alert(response.data.message); // Show success or error message
    } catch (error) {
      console.error("Error following artist:", error);
      alert("An error occurred while following the artist.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2
        style={{
          fontFamily: "Aleo, sans-serif",
          fontWeight: "600",
          fontSize: "38px",
          width: "421px",
          margin: "0 auto",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        Meet Our Artists
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        {/* Display only the first 4 artists, shuffled */}
        {artists.sort(() => Math.random() - 0.5).slice(0, 4).map((artist, index) => (
          <div
            key={index}
            style={{
              width: "242px",
              textAlign: "center",
              borderRadius: "50px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#FFF",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "207px",
                borderRadius: "50px",
                backgroundImage: `url(${getArtistImageUrl(artist.artistDetails?.image)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "26.4px",
                fontWeight: "400",
                color: "#333",
                marginTop: "20px",
              }}
            >
              {artist.artistDetails?.name || "Unknown Artist"}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              {[1].map((star, idx) => (
                <img
                  key={idx}
                  src={StarImage}
                  alt="Star"
                  style={{
                    width: "80px",
                    height: "30px",
                    margin: "0 5px",
                    objectFit: "contain",
                  }}
                />
              ))}
            </div>

            {/* Follow Button */}
            <button
              onClick={() => handleFollow(artist.artistDetails?.name)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                color: "#FFF",
                backgroundColor: "#000",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
            >
              {followedArtists.has(artist.artistDetails?.name) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home_Page_Artist_Display;
