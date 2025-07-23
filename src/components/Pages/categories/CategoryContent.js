import React from 'react';
import './categoryContent.css';

const CategoryContent = ({ category }) => {
  return (
    <div className="content-area">
      <div className="category-header">
        {category.icon && <span className="category-icon">{category.icon}</span>}
        <h3>{category.name}</h3>
      </div>

      <div className="sub-grid">
        {category.subcategories.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="sub-item">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onError={(e) => (e.target.src = "/images/placeholder.jpg")} // fallback image
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
