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

export default App;
