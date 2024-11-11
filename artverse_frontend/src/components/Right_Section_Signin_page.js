// src/components/RightSection.js
import React from 'react';
import '../styles/RightSectionSignin.css'; // Ensure this is included
import Logo from '../assets/images/ArtVerse_Logo.png'; // Correct path
import GoogleLogo from '../assets/images/Google.png'; // Correct path


const Right_Section_Signin_page = () => {
  return (
    <div className="right-section">
      <img src={Logo} alt="ArtVerse Logo" className="logo" />
      <div className="sign_div1"><p>Sign in To ArtVerse</p></div>


      <div className="sign_div2" style={{textAlign:"center"}}>


          <span className='Google_Text'>Sign in With Google</span>
          <img src={GoogleLogo} alt="Google Logo" className="google-logo" />


      </div>


      <div className="sign_div4">
        <div className="line left-line"></div>
        <span className="or-text">Or Sign in with Email</span>
        <div className="line right-line"></div>
      </div>



      {/* Email Form Section */}
      <form className="signin-form">
        <label className="email-label">Email</label>
        <input type="email" className="email-input" />

        <div className="password-container">
          <label className="password-label">Password</label>
          <span className="forgot-password">Forget?</span>
        </div>
        <input type="password" className="password-input" placeholder='8+ Characters'/>

        <button type="submit" className="signin-button">Sign In</button>
      </form>

      <div className="signup-text">
        Don't have an ArtVerse Account? <span className="signup-link">Signup</span>
      </div>


    </div>
  );
};

export default Right_Section_Signin_page;
