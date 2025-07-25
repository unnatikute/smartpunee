
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Pages/contact/contact';
import AboutUs from './components/Pages/aboutUs/aboutUs';
import CategoryPage from './components/Pages/categories/CategoryPage';
import City from './components/Pages/city/city';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/Pages/home/home';
import Register from './components/Pages/register/register';
import Discover from './components/howitworks/discover';
import Browse from './components/howitworks/browse';
import ShopSave from './components/howitworks/shopSave';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/city" element={<City />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/how-it-works/discover" element={<Discover />} />
<Route path="/how-it-works/browse" element={<Browse />} />
<Route path="/how-it-works/shop-save" element={<ShopSave />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
=======
// App.js
import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AuthPage from './components/Auth/AuthPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import UserDashboard from './components/Dashboard/UserDashboard';
import ShopOwnerDashboard from './components/Dashboard/ShopOwner';
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
  const hideLayout = location.pathname === '/login';

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
          <Route path="/how-it-works/discover" element={<Discover />} />
          <Route path="/how-it-works/browse" element={<Browse />} />
          <Route path="/how-it-works/shopSave" element={<ShopSave />} />

          {/* Role-Based Protected Routes */}
          <Route
            path="/user-dashboard/*"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shop-dashboard/*"
            element={
              <ProtectedRoute role="shop">
                <ShopOwnerDashboard />
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
