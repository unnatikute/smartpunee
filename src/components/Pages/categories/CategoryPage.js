import React, { useState } from 'react';
import SidebarCategoryList from './SidebarCategoryList';
import CategoryContent from './CategoryContent';
import { categories } from './data/categories';
import './CategoryPage.css';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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
