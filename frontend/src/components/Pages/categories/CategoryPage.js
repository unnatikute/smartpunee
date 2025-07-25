import React, { useState, useEffect } from 'react';
import SidebarCategoryList from './SidebarCategoryList';
import CategoryContent from './CategoryContent';
import { categories } from '../../data/categories';
import './CategoryPage.css';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    city: '',
    discount: '',
    rating: '',
    distance: '',
  });
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
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="category-page">
      <SidebarCategoryList
        categories={categories}
        selected={selectedCategory.id}
        onSelect={setSelectedCategory}
      />
      <div className="filter-panel">
        <input
          type="text"
          placeholder="Search subcategories..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />

        <select name="city" onChange={handleFilterChange}>
          <option value="">All Cities</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </select>

        <select name="discount" onChange={handleFilterChange}>
          <option value="">All Discounts</option>
          <option value="10">10%+</option>
          <option value="20">20%+</option>
          <option value="50">50%+</option>
        </select>

        <select name="rating" onChange={handleFilterChange}>
          <option value="">All Ratings</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
        </select>

        <select name="distance" onChange={handleFilterChange}>
          <option value="">Any Distance</option>
          <option value="5">Within 5 km</option>
          <option value="10">Within 10 km</option>
        </select>
      </div>
      <CategoryContent
      category={selectedCategory}
      searchTerm={searchTerm}
      filters={filters}
      />
    </div>
  );
};

export default CategoryPage;
