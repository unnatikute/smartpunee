import React from 'react';
import './categoryContent.css';

const CategoryContent = ({ category }) => {
  return (
    <div className="content-area">
      <h3>{category.name}</h3>
      <div className="sub-grid">
        {category.subcategories.map((item, idx) => (
          <div key={idx} className="sub-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
