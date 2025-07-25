import React, { useState } from 'react';
import './sidebar.css';
import { shopData } from '../../data/shopData';

const SidebarCategoryList = ({ categories = [], selected, onSelect }) => {
  const [collapsed, setCollapsed] = useState({});

  const toggleCollapse = (catId) => {
    setCollapsed((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };
  const getOffersByCategory = (categoryName) => {
    return shopData.filter((shop) => shop.category === categoryName);
  };
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Categories</h3>
      {categories.map((cat) => (
        <div key={cat.id} className="sidebar-category">
          <div
            className={`sidebar-category-header ${selected === cat.id ? 'active' : ''}`}
            onClick={() => {
              toggleCollapse(cat.id);
              onSelect(cat);
            }}
          >
          <span className="icon">{cat.icon || '🔹'}</span>
          <span className="category-name">{cat.name}</span>
          <span className="subcategory-count">{cat.subcategories?.length || 0}</span>
            <span className="toggle-icon">
              {collapsed[cat.id] ? '▲' : '▼'}
            </span>
          </div>

          {collapsed[cat.id] && (
            <div className="subcategory-list">
              {cat.subcategories?.map((sub, idx) => (
                <div key={idx} className="subcategory-item">
                  {sub.name}
                </div>
              ))}
              {/* Show shop offers for this category */}
              {(() => {
                const offers = getOffersByCategory(cat.name);
                return (
                  <div className="shop-offers">
                    {offers.length > 0 ? (
                      offers.map((shop, idx) => (
                        <div key={idx} className="shop-offer-item">
                          <strong>{shop.name}</strong>
                          <div className="offer-text">{shop.offer}</div>
                        </div>
                      ))
                    ) : (
                      <div className="no-offers">No offers available</div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default SidebarCategoryList;
