// src/components/howitworks/ShopSave.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './howitworks.css';

const ShopSave = () => {
  const navigate = useNavigate();

  const handleBrowseShops = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.role === 'user') {
      navigate('/city'); // Regular user sees local shops
    } else if (userData && userData.role === 'shop') {
      navigate('/shop/dashboard'); // Shop owners go to their dashboard
    } else if (userData && userData.role === 'admin') {
      navigate('/admin'); // Admin goes to admin dashboard
    } else {
      alert('⚠️ Please login to browse local shops.');
      navigate('/login');
    }
  };

  return (
    <div className="how-it-works-page shop-page">
      <div className="shop-banner">
        <h1>🛒 Shop & Save</h1>
        <p>Discover local stores and enjoy exclusive neighborhood discounts!</p>
      </div>

      <div className="browse-content">
        <h2>Why Shop Local with LocalOffers?</h2>
        <ul className="shop-benefits">
          <li>🏪 Support your neighborhood businesses directly.</li>
          <li>🔥 Access exclusive, shop-specific flash deals.</li>
          <li>👀 Browse offers by shop category and city location.</li>
          <li>🧾 Get authentic customer reviews and real-time deals.</li>
        </ul>

        <img
          src="/images/shop-and-save.png"
          alt="Shop and Save"
          className="discover-image"
        />

        <div className="shop-cta">
          <p>Explore shops and start saving today!</p>
          <button onClick={handleBrowseShops} className="discover-btn">
            Browse Local Shops
          </button>
        </div>

        <div className="shop-owner-promo">
          <p>Are you a shop owner? Get discovered by thousands!</p>
          <Link to="/login" className="register-btn">Register Your Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ShopSave;
