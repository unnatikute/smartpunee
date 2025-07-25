// src/components/howitworks/Browse.js
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './howitworks.css';

const Browse = () => {
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    const isLoggedIn = localStorage.getItem('user'); // Check if user is logged in
    if (isLoggedIn) {
      navigate('/categories');
    } else {
      alert('Please login to browse categories.');
      navigate('/login');
    }
  };

  return (
    <div className="how-it-works-page browse-page">
      <div className="browse-banner">
        <h1>📱 Browse</h1>
        <p>Explore trending deals, shop categories, and city-wise discounts easily!</p>
      </div>

      <div className="browse-content">
        <h2>How Browsing Works on LocalOffers</h2>
        <ul className="browse-points">
          <li>📍 Choose your city and see local offers instantly.</li>
          <li>📂 Filter by shop categories like clothing, electronics, food, etc.</li>
          <li>⚡ Discover flash deals and time-limited promotions.</li>
          <li>⭐ View top-rated shops and customer-reviewed offers.</li>
        </ul>

        <img
          src="/images/browse-offers.jpg"
          alt="Browse Offers"
          className="discover-image"
        />

        <div className="browse-cta">
        <p>Start browsing now and never miss a local deal again!</p>
        <button onClick={handleBrowseClick} className="discover-btn">Browse by Category</button>
      </div>

        <div className="shop-owner-promo">
          <p>Are you a shop owner? Get discovered by thousands!</p>
          <Link to="/register" className="register-btn">Register Your Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default Browse;
