import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { id } = useParams();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/shops?category=${id}`)
      .then((res) => res.json())
      .then((data) => setShops(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <h2>Shops in this Category</h2>
      <div className="shops">
        {shops.map((shop) => (
          <div key={shop.id} className="shop-card">
            <h3>{shop.shopName}</h3>
            <img src={`http://localhost:5000/${shop.shopImage}`} alt={shop.shopName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
