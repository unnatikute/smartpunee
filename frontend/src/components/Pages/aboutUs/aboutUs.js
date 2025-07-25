import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img src="/images/about-banner.jpg" alt="Local Offers Banner" className="hero-image" />
        <div className="hero-text">
          <h1>About Local Offers</h1>
          <p>Connecting You to the Best Local Deals in Your City</p>
        </div>
      </div>

      <div className="about-section">
        <h2>🌟 Who We Are</h2>
        <div className="about-flex">
          <img src="/images/community.jpg" alt="Community" className="about-img" />
          <p>
            <strong>Local Offers</strong> is your go-to platform to discover exclusive offers and real-time discounts from local shops. From fashion and food to electronics and essentials – we bring local deals directly to your screen!
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>🎯 Our Mission</h2>
        <div className="about-flex reverse">
          <p>
            Our mission is to <strong>empower local businesses</strong> by giving them a digital presence to reach more customers. For users, we aim to make local shopping easy, rewarding, and cost-effective.
          </p>
          <img src="/images/mission.jpg" alt="Our Mission" className="about-img" />
        </div>
      </div>

      <div className="about-section highlight-section">
        <h2>💼 What We Offer</h2>
        <ul className="offer-list">
          <li>📍 City-wise shop listings with verified shops</li>
          <li>🔥 Real-time offers and flash discounts</li>
          <li>🛍️ Organized categories for smart browsing</li>
          <li>📞 Direct chat and contact with shop owners</li>
          <li>📸 Shop images, logos, and product previews</li>
          <li>🔔 Alerts for trending deals and new offers</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>👩‍💻 Meet Our Team</h2>
        <p>
          We’re a passionate team from <strong>Pune</strong> — developers, designers, and local business advocates — working together to build a platform that supports small businesses and smart shoppers alike.
        </p>
        <div className="team-photos">
          <img src="/images/team1.jpg" alt="Team Member 1" />
          <img src="/images/team2.jpg" alt="Team Member 2" />
          <img src="/images/team3.jpg" alt="Team Member 3" />
          <img src="/images/team4.jpg" alt="Team Member 4" />
        </div>
      </div>

      <div className="about-footer">
        <p>🙌 Thank you for supporting your local businesses!</p>
      </div>
    </div>
  );
};

export default AboutUs;
