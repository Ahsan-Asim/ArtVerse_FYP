// src/App.js
import React from 'react';
// import Left_Image_Signin_page from './components/Left_Image_Signin_page';
// import Right_Section_Signin_page from './components/Right_Section_Signin_page';
import SignInPage from './pages/signin_page';
import SignUpPage from './pages/signup_page';

import HomePage from './pages/home_page';
function App() {
  return (
    <div className="App" style={{"backgroundColor":"black"}}>
      <HomePage />
    </div>
  );
}

export default App;
