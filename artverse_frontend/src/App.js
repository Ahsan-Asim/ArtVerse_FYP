// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignInPage from './pages/signin_page';
import SignUpPage from './pages/signup_page';
import HomePage from './pages/home_page';
import Landing_Page from './pages/Landing_Page';
import Specific_Painting_Page from './pages/Specific_Painting_Page';
import Service_Page from './pages/Service_Page';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "black" }}>
        <Routes>
          {/* Define Routes for each page */}
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/service" element={<Service_Page />} />
          <Route path="/painting" element={<Specific_Painting_Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
