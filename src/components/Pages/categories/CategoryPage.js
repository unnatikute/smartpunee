import React, { useState,useEffect } from 'react';
import SidebarCategoryList from './SidebarCategoryList';
import CategoryContent from './CategoryContent';
import { categories } from './data/categories';
import './CategoryPage.css';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate();

  // 🔒 Login check on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);
  
  return (
    <div className="category-page">
      <SidebarCategoryList
        categories={categories}
        selected={selectedCategory.id}
        onSelect={cat => setSelectedCategory(cat)}
      />
      <CategoryContent category={selectedCategory} />
    </div>
  );
};

export default CategoryPage;
