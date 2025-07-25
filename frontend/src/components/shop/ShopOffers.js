// components/shop/ShopOffers.js
import React from 'react';

const ShopOffers = () => {
  return (
    <div className="shop-offers">
      <h3>Your Active Offers</h3>
      <ul>
        <li>Buy 1 Get 1 Free on Shoes</li>
        <li>20% off on all Electronics</li>
        {/* Fetch and display real offers from DB here */}
      </ul>
    </div>
  );
};

export default ShopOffers;
