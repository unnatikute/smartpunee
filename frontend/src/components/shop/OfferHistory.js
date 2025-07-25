// components/shop/OfferHistory.js
import React from 'react';

const OfferHistory = () => {
  // Static mock for now
  const history = [
    { id: 1, offer: 'Flat 100 OFF on ₹999', date: '2025-07-15' },
    { id: 2, offer: '50% OFF on Bakery Items', date: '2025-07-10' }
  ];

  return (
    <div className="offer-history">
      <h3>Offer History</h3>
      <ul>
        {history.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.offer}</strong> — <em>{entry.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferHistory;
