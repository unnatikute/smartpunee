// components/Dashboard/UserDashboard.js
import React from 'react';
import Home from '../Pages/home/home';
import CategoryPage from '../Pages/categories/CategoryPage';
import Contact from '../Pages/contact/contact';
import City from '../Pages/city/city';
import AboutUs from '../Pages/aboutUs/aboutUs';

const UserDashboard = () => {
  return (
    <div>
      <Home />
      <AboutUs/>
      <City />
      <CategoryPage />
      <Contact />
    </div>
  );
};

export default UserDashboard;
