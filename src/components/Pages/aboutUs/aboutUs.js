import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Local Offers</h1>
        <p>Connecting You to the Best Local Deals in Your City</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Local Offers is a platform that helps you discover amazing discounts, exclusive deals, and seasonal offers from shops in your city. Whether it’s fashion, food, electronics, or daily essentials — we bring local businesses closer to you!
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to support local shops by giving them a digital platform to promote their offers and reach more customers. At the same time, we help shoppers save time and money by finding all the best deals in one place.
        </p>
      </div>

      <div className="about-section highlight-section">
        <h2>What We Offer</h2>
        <ul>
          <li>📍 City-wise shop listings</li>
          <li>🔥 Real-time offers and discounts</li>
          <li>🛍️ Shop categories for easy browsing</li>
          <li>📞 Direct contact with local sellers</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Meet Our Team</h2>
        <p>
          We're a passionate team of developers, designers, and local business supporters from Pune, working together to make shopping smarter and more local!
        </p>
      </div>

      <div className="about-footer">
        <p>Thank you for supporting your local businesses! 🙌</p>
      </div>
    </div>
  );
};

export default AboutUs;