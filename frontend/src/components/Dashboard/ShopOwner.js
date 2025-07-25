// components/Dashboard/ShopOwnerDashboard.js
import React from 'react';
import ShopOffers from '../shop/ShopOffers';
import AddEditOffer from '../shop/AddEditOffer';
import OfferHistory from '../shop/OfferHistory';
import Contact from '../Pages/contact/contact';

const ShopOwnerDashboard = () => {
  return (
    <div className="shop-owner-dashboard">
      <h2>Welcome to Shop Owner Dashboard</h2>

      {/* Show current offers */}
      <ShopOffers />

      {/* Add/Edit your offers */}
      <AddEditOffer />

      {/* Offer History */}
      <OfferHistory />

      {/* Contact Support */}
      <Contact />
    </div>
  );
};

export default ShopOwnerDashboard;
