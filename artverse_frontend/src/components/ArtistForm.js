// src/components/ArtistForm.js
import React from 'react';
import '../styles/BecomeArtist.css';


function ArtistForm() {
    return (
        <form className="artist-form">
            <div className="form-row">
                <div className="form-group">
                    <label>Artist Name</label>
                    <input type="text" placeholder="Artist Name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" placeholder="Country" />
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" placeholder="State" />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" placeholder="City" />
                </div>
            </div>

            <div className="form-group">
                <label>Residential Address</label>
                <input type="text" placeholder="Residential Address" />
            </div>

            <div className="form-group">
                <label>Education</label>
                <input type="text" placeholder="Education" />
            </div>

            <div className="form-group">
                <label>About Me</label>
                <textarea placeholder="About Me" />
            </div>

            <button type="submit" className="register-button">Register as Artist</button>
        </form>
    );
}

export default ArtistForm;

