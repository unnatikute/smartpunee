import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-column">
          <h3>🌟 About Us</h3>
          <p>
            LocalOffers is your go-to place for discovering <strong>exclusive deals</strong> from Pune's local shops. 
            Support local. Save big. Shop smart!
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>🛍 Services</h3>
          <ul>
            <li>🔎 Explore Local Offers</li>
            <li>📍 Map-Based Deals</li>
            <li>📝 Shop Registrations</li>
            <li>⚡ Flash Discounts</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>📞 Contact</h3>
          <p>📧 support@localoffers.in</p>
          <p>📱 +91 9876543210</p>
          <p>📍 Pune, MH</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>🌐 Connect</h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f" title="Facebook"></i>
            <i className="fab fa-instagram" title="Instagram"></i>
            <i className="fab fa-twitter" title="Twitter"></i>
            <i className="fab fa-youtube" title="YouTube"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>✨ Made with ❤️ in Pune | &copy; 2025 LocalOffers</p>
      </div>
    </footer>
  );
}

export default Footer;
