import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <NavLink to="/" className="logo-link">
            <img src="/images/logo.png" alt="LocalOffers Logo" className="logo-image" />
            <span className="logo-text"></span>
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/city"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              City
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
