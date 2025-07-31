import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/categories/${categoryId}`); // ✅ match your Route
  };

  return (
    <div>
      <h2>Choose a Category</h2>
      <div className="categories">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className="category-card"
          >
            <img
              src={`http://localhost:5000/uploads/${cat.image}`}
              alt={cat.name}
            />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
