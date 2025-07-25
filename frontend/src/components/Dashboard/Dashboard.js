import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Home from '../Pages/home/home';
import AboutUs from '../Pages/aboutUs/aboutUs';
import Contact from '../Pages/contact/contact';

// User Pages
import City from '../Pages/city/city';
import CategoryPage from '../Pages/categories/CategoryPage';
import Discover from '../howitworks/discover';
import Browse from '../howitworks/browse';
import ShopSave from '../howitworks/shopSave';
import UserDashboard from './UserDashboard';

// Shop Owner Pages
import ShopOwnerDashboard from './ShopOwnerDashboard';
// import ShopAddEdit from './ShopAddEdit'; // Add shop-specific routes if needed

// Admin Pages
import AdminDashboard from './AdminDashboard';
// import AdminReports from './AdminReports'; // Add admin-specific routes if needed

const Dashboard = () => {
  const role = localStorage.getItem('role'); // 'user', 'shopOwner', 'admin', or null

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Role: User */}
        {role === 'user' && (
          <>
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/city" element={<City />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/how-it-works/discover" element={<Discover />} />
            <Route path="/how-it-works/browse" element={<Browse />} />
            <Route path="/how-it-works/shop-save" element={<ShopSave />} />
          </>
        )}

        {/* Role: Shop Owner */}
        {role === 'shopOwner' && (
          <>
            <Route path="/shop-dashboard" element={<ShopOwnerDashboard />} />
            {/* Add shop offer creation, edit, history routes here */}
          </>
        )}

        {/* Role: Admin */}
        {role === 'admin' && (
          <>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/city" element={<City />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/how-it-works/discover" element={<Discover />} />
            <Route path="/how-it-works/browse" element={<Browse />} />
            <Route path="/how-it-works/shop-save" element={<ShopSave />} />
            <Route path="/shop-dashboard" element={<ShopOwnerDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            {/* Add reports, analytics, shop management routes here */}
          </>
        )}

        {/* Default Fallback: Unauthenticated or Wrong Role */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
