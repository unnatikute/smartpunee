import React, { useEffect, useState } from 'react';
import './categoryContent.css';

const CategoryContent = ({ category }) => {
  const [shops, setShops] = useState([]);

  // Fetch shops from server when category changes
  useEffect(() => {
    const fetchShops = async () => {
        if (!category?.name) return;
      try {
        const response = await fetch(`http://localhost:5000/shops?category=${category.name}`);
        const data = await response.json();
        setShops(data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    fetchShops();
  }, [category]);

  return (
    <div className="content-area">
      <h3>{category.name}</h3>

      {/* ✅ Static subcategories */}
     {/* <div className="sub-grid">
        {category.subcategories.map((item, idx) => (
          <div key={idx} className="sub-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>*/}

      {/* ✅ Shops fetched from backend */}
      <div className="shop-grid">
        {shops.length === 0 ? (
          <p>No shops found in this category.</p>
        ) : (
          shops.map((shop) => (
            <div key={shop.id} className="shop-card">
              <h4>{shop.shopName}</h4>
              <p>Owner: {shop.ownerName}</p>
              <p>Phone: {shop.phone}</p>
              <p>Email: {shop.email}</p>
              <p>Offer: {shop.offer}</p>
              {shop.image && (
                <img
                  src={`http://localhost:5000/uploads/${shop.image}`} 
                  alt={shop.shopName}
                  className="shop-image"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryContent;
