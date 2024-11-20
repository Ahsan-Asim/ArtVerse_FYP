import React from "react";
import '../styles/Artist_studio_footer.css';  // Assuming you use an external CSS file

function ArtistStudioFooter() {
  return (
    <div>
      <footer className="footer">
        {/* Logo */}
        <div className="footer-logo"></div>

        {/* Footer Content */}
        <div className="footer-content">
          {/* Column 1 */}
          <div>
            <h4 className="footer-title">For Collectors</h4>
            <ul className="footer-list">
              <li>Digital Art / NFTs</li>
              <li>Art Category</li>
              <li>Artist</li>
              <li>Seller Forum</li>
              <li>Collector’s Support</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="footer-title">Drawing</h4>
            <ul className="footer-list">
              <li>M.F Hussain</li>
              <li>Sell Your Art</li>
              <li>Resell Work</li>
              <li>Sh Raza</li>
              <li>Artverse For Sellers</li>
              <li>Collector’s FAQ</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="footer-title">Art By Price</h4>
            <ul className="footer-list">
              <li>Paintings</li>
              <li>Under Rs 2500</li>
              <li>Photography</li>
              <li>Rs 25000 - Rs 1 lac</li>
              <li>Print Making</li>
              <li>Rs 1 lac - Rs 3 lac</li>
              <li>Sculpture</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li>Jatin</li>
              <li>Sellers FAQ</li>
              <li>Ahsan Asim</li>
              <li>Support</li>
              <li>Bon Proctor</li>
              <li>Sellings KYC</li>
              <li>Laxmi Kaur</li>
              <li>Victor Frankl</li>
              <li>Rohit Kumar</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ArtistStudioFooter;
