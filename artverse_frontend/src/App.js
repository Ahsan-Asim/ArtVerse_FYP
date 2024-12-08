import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";

import SignInPage from './pages/signin_page';
import SignUpPage from './pages/signup_page';
import HomePage from './pages/home_page';
import Landing_Page from './pages/Landing_Page';
import Specific_Painting_Page from './pages/Specific_Painting_Page';
import Service_Page from './pages/Service_Page';
import Become_Artist from './pages/Become_Artist';
import Profile from './pages/profile';
import Artist_studio from './pages/Artist_studio';
import Upload_Artwork from './pages/Upload_Artwork';
import CartPage from './pages/CartPage.js';
import Artist_detail from './pages/Artist_detail';
import SearchPage from './pages/Search_page.js';
import About_Us from './pages/About_Us';
import EditArtwork from './pages/Edit_Artwork.js';
import NotFoundPage from './pages/Page_Not_Found.js'; // Import the NotFoundPage component

// Import the SessionManager
import SessionManager from './pages/sessionManager.js';

function App() {
  return (
    <GoogleOAuthProvider clientId="868206158931-8u3ftrs4ekvg4jitiu02bab01n5hj7q9.apps.googleusercontent.com">
      <Router>
        <SessionManager>
          <div className="App" style={{ backgroundColor: "black" }}>
            <Routes>
              {/* Define Routes for each page */}
              <Route path="/" element={<Landing_Page />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/service" element={<Service_Page />} />
              <Route path="/painting" element={<Specific_Painting_Page />} />
              <Route path="/become-artist" element={<Become_Artist />} />
              <Route path="/artist_studio" element={<Artist_studio />} />
              <Route path="/upload_artwork" element={<Upload_Artwork />} />
              <Route path="/cartpage" element={<CartPage />} />
              <Route path="/artist_detail" element={<Artist_detail />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/About_Us" element={<About_Us />} />
              <Route path="/edit_artwork" element={<EditArtwork />} />
              
              {/* Fallback Route for undefined paths */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </SessionManager>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
