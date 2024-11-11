// src/App.js
import React from 'react';
// import Left_Image_Signin_page from './components/Left_Image_Signin_page';
// import Right_Section_Signin_page from './components/Right_Section_Signin_page';
import SignInPage from './pages/signin_page';
import SignUpPage from './pages/signup_page';
import BecomeArtistPage from './pages/BecomeArtistPage';
import StickyTabs from './components/sticky_tab';

import HomePage from './pages/home_page';
import Landing_Page from './pages/Landing_Page';

import Specific_Painting_Page from './pages/Specific_Painting_Page';
import Service_Page from './pages/Service_Page';
function App() {
  return (
    <div className="App" style={{"backgroundColor":"black"}}>
      <StickyTabs />
      <HomePage />
    </div>
  );
}

export default App;
