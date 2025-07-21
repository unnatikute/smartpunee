import React from 'react';
import './sidebar.css';

const SidebarCategoryList = ({ categories, selected, onSelect }) => {
  return (
    <div className="sidebar">
      {categories.map(cat => (
        <div
          key={cat.id}
          className={`sidebar-item ${selected === cat.id ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          <span className="icon">{cat.icon}</span>
          <span>{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarCategoryList;
