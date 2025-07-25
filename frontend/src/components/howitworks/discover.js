// src/components/howitworks/Discover.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './howitworks.css';

const Discover = () => {
  const navigate = useNavigate();

  const handleViewOffers = () => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && userData.role) {
      switch (userData.role) {
        case 'user':
          navigate('/'); // user sees home/top offers
          break;
        case 'shop':
          navigate('/shop-dashboard'); // shop owner sees dashboard
          break;
        case 'admin':
          navigate('/admin'); // admin dashboard
          break;
        default:
          navigate('/');
          break;
      }
    } else {
      alert('Please login to view top offers.');
      navigate('/login');
    }
  };

  return (
    <div className="how-it-works-page discover-page">
      <div className="discover-banner">
        <h1>🔍 Discover Local Gems</h1>
        <p>Explore exclusive offers and hidden treasures from shops in your neighborhood.</p>
      </div>

      <div className="discover-content">
        <h2>Why Use LocalOffers?</h2>
        <ul className="discover-benefits">
          <li>✅ Browse verified shops offering real-time deals.</li>
          <li>📍 Locate shops near you with trending offers.</li>
          <li>💬 Chat directly with sellers and shopkeepers.</li>
          <li>🎯 Save money and support your local community.</li>
        </ul>

        <img
          src="/images/discover-local.jpg"
          alt="Discover Local Shops"
          className="discover-image"
        />

        <div className="discover-cta">
          <p>Ready to explore offers in your area?</p>
          <button onClick={handleViewOffers} className="discover-btn">
            View Top Offers
          </button>
        </div>

        <div className="shop-owner-promo">
          <p>Are you a shop owner?</p>
          <Link to="/login" className="register-btn">Register Your Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
