import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './city.css';
import { shopData } from '../../data/shopData';

// const shopData = [
//   {
//     name: "Fashion Hub",
//     city: "Pune",
//     category: "Clothing",
//     imageUrl: "https://via.placeholder.com/300x150",
//     offer: "Get 20% off on all items!"
//   },
//   {
//     name: "Electro Mart",
//     city: "Mumbai",
//     category: "Electronics",
//     imageUrl: "https://via.placeholder.com/300x150",
//     offer: "Flat ₹1000 off on phones!"
//   },
//   {
//     name: "Fresh Grocers",
//     city: "Pune",
//     category: "Grocery",
//     imageUrl: "https://via.placeholder.com/300x150",
//     offer: "Buy 1 Get 1 Free"
//   },
//   {
//     name: "City Style",
//     city: "Delhi",
//     category: "Fashion",
//     imageUrl: "https://via.placeholder.com/300x150",
//     offer: "Upto 50% off on summer wear"
//   }
// ];

const City = () => {
  const [searchCity, setSearchCity] = useState('');
  const [category, setCategory] = useState('All');
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  // 🔒 Check role on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role'); // 'user', 'shop', or 'admin'

    if (!isLoggedIn || isLoggedIn !== 'true') {
      navigate('/login');
    } else if (role !== 'user') {
      // Redirect based on role
      if (role === 'shop') navigate('/shop/dashboard');
      else if (role === 'admin') navigate('/admin/dashboard');
      else navigate('/'); // unknown role
    }
  }, [navigate]);

  const categories = ['All', ...new Set(shopData.map(shop => shop.category))];

  const filteredShops = shopData.filter(shop =>
    shop.city.toLowerCase().includes(searchCity.toLowerCase()) &&
    (category === 'All' || shop.category === category)
  );

  return (
    <div className="city-container">
      <div className={`city-sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h3>🗂 Categories</h3>
          <button onClick={() => setExpanded(!expanded)} className="collapse-btn">
            {expanded ? '−' : '+'}
          </button>
        </div>
        {expanded && (
          <ul className="category-list">
            {categories.map((cat, idx) => {
              const count = shopData.filter(shop => shop.category === cat).length;
              return (
                <li
                  key={idx}
                  className={`category-item ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat} <span className="badge">{cat === 'All' ? shopData.length : count}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="city-main">
        <h1 className="city-title">🏙️ Discover Local Offers by City</h1>

        <div className="city-filters">
          <input
            type="text"
            placeholder="🔍 Enter city (e.g., Pune)"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="city-search-input"
          />
        </div>

      <div className="shop-list">
        {filteredShops.length > 0 ? (
          filteredShops.map((shop, index) => (
            <div key={index} className="shop-card">
              <img src={shop.imageUrl} alt={shop.name} className="shop-image" />
              <div className="shop-details">
                <h3 className="shop-name">{shop.name}</h3>
                <p className="shop-meta">📍 {shop.city} | 🛍️ {shop.category}</p>
                <p className="shop-offer">🎉 {shop.offer}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">🚫 No shops or offers found for this city/category.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default City;
