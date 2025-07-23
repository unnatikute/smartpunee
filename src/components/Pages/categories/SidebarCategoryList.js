import React from 'react';
import './sidebar.css';

const SidebarCategoryList = ({ categories = [], selected, onSelect }) => {
  return (
    <div className="sidebar">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`sidebar-item ${selected === cat.id ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
          role="button"
          tabIndex={0}
          aria-pressed={selected === cat.id}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelect(cat);
            }
          }}
        >
          <span className="icon">{cat.icon || '🔹'}</span>
          <span className="category-name">{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarCategoryList;
