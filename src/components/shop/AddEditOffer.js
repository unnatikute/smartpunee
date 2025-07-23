// components/shop/AddEditOffer.js
import React, { useState } from 'react';

const AddEditOffer = () => {
  const [offer, setOffer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Offer Saved: ${offer}`);
    // Here you would send offer data to your backend/Firebase
    setOffer('');
  };

  return (
    <div className="add-edit-offer">
      <h3>Add / Edit Offer</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          placeholder="Enter offer details"
          required
        />
        <button type="submit">Save Offer</button>
      </form>
    </div>
  );
};

export default AddEditOffer;
