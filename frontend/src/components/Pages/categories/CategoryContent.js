import React from 'react';
import './categoryContent.css';

const CategoryContent = ({ category, searchTerm, filters  }) => {
  const filteredItems = category.subcategories.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !filters.city || item.city === filters.city;
    const matchesDiscount = !filters.discount || parseInt(item.discount) >= parseInt(filters.discount);
    const matchesRating = !filters.rating || parseFloat(item.rating) >= parseFloat(filters.rating);
    // Distance is skipped as it needs location logic

    return matchesSearch && matchesCity && matchesDiscount && matchesRating;
  });
  return (
    <div className="content-area">
      <div className="category-header">
        {category.icon && <span className="category-icon">{category.icon}</span>}
        <h3>{category.name}</h3>
      </div>

      <div className="sub-grid">
        {filteredItems.length === 0 ? (
          <p>No results found.</p>
        ) : (
          filteredItems.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="sub-item">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onError={(e) => (e.target.src = "/images/placeholder.jpg")} // fallback image
            />
            <p>{item.name}</p>
            {item.discount && <span className="badge">Save {item.discount}%</span>}
            {item.rating && <span className="badge">{item.rating}★</span>}
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default CategoryContent;
