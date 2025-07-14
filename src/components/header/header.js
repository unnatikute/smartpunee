import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <NavLink to="/" className="nav-link logo-link">LocalOffers</NavLink>
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
              to="/offers"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Offers
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
