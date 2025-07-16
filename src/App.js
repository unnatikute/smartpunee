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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
