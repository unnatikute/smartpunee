import React, { useState, useEffect } from 'react';
import SidebarCategoryList from './SidebarCategoryList';
import CategoryContent from './CategoryContent';
import { categories } from './data/categories';
import './CategoryPage.css';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || null);
  const navigate = useNavigate();

  // 🔒 Only allow authenticated users with "user" role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role');

    if (!isLoggedIn || isLoggedIn !== 'true' || role !== 'user') {
      navigate('/login'); // Redirect to login for unauthenticated or wrong role
    }
  }, [navigate]);

  if (!selectedCategory) return <p>Loading categories...</p>;

  return (
    <div className="category-page">
      <SidebarCategoryList
        categories={categories}
        selected={selectedCategory.id}
        onSelect={setSelectedCategory}
      />
      <CategoryContent category={selectedCategory} />
    </div>
  );
};

export default CategoryPage;
