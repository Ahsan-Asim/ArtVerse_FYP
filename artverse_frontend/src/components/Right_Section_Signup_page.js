import React from 'react';
import Logo from '../assets/images/ArtVerse_Logo.png'; // Correct path
import '../styles/RightSectionSignup.css'; // Ensure this is included
import GoogleLogo from '../assets/images/Google.png'; // Correct path



function Right_Section_Signup_page() {
  return (
    <div className='right-section'> 
      <img src={Logo} alt="ArtVerse Logo" className="logo" />
      <div className="sign_div1"><p>Sign up To ArtVerse</p></div>




       {/* Email Form Section */}
       <form className="signin-form">

        {/* Name and Phone Fields */}
        <div className="name-phone-container">
          <div className="name-container">
            <label className="name-label">Name</label>
            <input type='text' className='name-input' />
          </div>
          <div className="phone-container">
            <label className="phone-label">Phone</label>
            <input type='text' className='phone-input' />
          </div>
        </div>



        <label className="email-label">Email</label>
        <input type="email" className="email-input" />

        <div className="password-container">
          <label className="password-label">Password</label>
        </div>
        <input type="password" className="password-input"/>

        <button type="submit" className="signin-button">Create Account</button>
      </form>


      <div className="sign_div2" style={{textAlign:"center"}}>


          <span className='Google_Text'>Continue With Google</span>
          <img src={GoogleLogo} alt="Google Logo" className="google-logo" />


      </div>


      <div className="signup-text">
        Already ArtVerse Account? <span className="signup-link">Login</span>
      </div>

      
    </div>
  )
}

export default Right_Section_Signup_page
