import React, { useState } from 'react';
import './city.css';

const shopData = [
  {
    name: "Fashion Hub",
    city: "Pune",
    category: "Clothing",
    imageUrl: "https://via.placeholder.com/300x150",
    offer: "Get 20% off on all items!"
  },
  {
    name: "Electro Mart",
    city: "Mumbai",
    category: "Electronics",
    imageUrl: "https://via.placeholder.com/300x150",
    offer: "Flat ₹1000 off on phones!"
  },
  {
    name: "Fresh Grocers",
    city: "Pune",
    category: "Grocery",
    imageUrl: "https://via.placeholder.com/300x150",
    offer: "Buy 1 Get 1 Free"
  },
  {
    name: "City Style",
    city: "Delhi",
    category: "Fashion",
    imageUrl: "https://via.placeholder.com/300x150",
    offer: "Upto 50% off on summer wear"
  }
];

const City = () => {
  const [searchCity, setSearchCity] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(shopData.map(shop => shop.category))];

  const filteredShops = shopData.filter(shop =>
    shop.city.toLowerCase().includes(searchCity.toLowerCase()) &&
    (category === 'All' || shop.category === category)
  );

  return (
    <div className="city-page">
      <h2>Find City-Wise Local Offers</h2>

      <div className="city-filters">
        <input
          type="text"
          placeholder="Enter city name..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          className="city-search-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="city-category-select"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="shop-list">
        {filteredShops.length > 0 ? (
          filteredShops.map((shop, index) => (
            <div key={index} className="shop-card">
              <img src={shop.imageUrl} alt={shop.name} className="shop-image" />
              <h4>{shop.name}</h4>
              <p>📍 {shop.city}</p>
              <p>🛍️ {shop.category}</p>
              <p className="shop-offer">🎉 {shop.offer}</p>
            </div>
          ))
        ) : (
          <p>No shops or offers found in this city/category.</p>
        )}
      </div>
    </div>
  );
};

export default City;
