import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AuthPage from './components/Auth/AuthPage';
import AdminLoginPage from './components/Auth/AdminLoginPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import UserDashboard from './components/Dashboard/UserDashboard';
import ShopOwnerDashboard from './components/Dashboard/ShopOwner';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Home from './components/Pages/home/home';
import AboutUs from './components/Pages/aboutUs/aboutUs';
import Contact from './components/Pages/contact/contact';
import City from './components/Pages/city/city';
import CategoryPage from './components/Pages/categories/CategoryPage';
import Discover from './components/howitworks/discover';
import Browse from './components/howitworks/browse';
import ShopSave from './components/howitworks/shopSave';

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/admin-login';

  return (
    <div className="App">
      {!hideLayout && <Header />}

      <div className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/city" element={<City />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/how-it-works/discover" element={<Discover />} />
          <Route path="/how-it-works/browse" element={<Browse />} />
          <Route path="/how-it-works/shopSave" element={<ShopSave />} />

          {/* Protected */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/shop-dashboard/*"
            element={
              <ProtectedRoute role="shopOwner">
                <ShopOwnerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/categories/:id"
            element={
              <ProtectedRoute role="user">
                <CategoryPage />
              </ProtectedRoute>
            }
          />

          {/* Unauthorized fallback */}
          <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
