import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("localUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("localUser");
    setUser(null);
    navigate("/auth");
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const role = user?.role; // "user", "shop", or "admin"

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <NavLink to="/" className="logo-link">
            <img src="/images/logo.png" alt="LocalOffers Logo" className="logo-image" />
            <span className="logo-text"></span>
          </NavLink>
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
              Home
            </NavLink>
          </li>

          {(!user || role === "user") && (
            <>
              <li>
                <NavLink to="/city" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  City
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  Categories
                </NavLink>
              </li>
            </>
          )}

          {(role === "shop" || role === "admin") && (
            <>
              <li>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/offers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  My Offers
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-offer" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  Add Offer
                </NavLink>
              </li>
            </>
          )}

          {role === "admin" && (
            <>
              <li>
                <NavLink to="/reports" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  Reports
                </NavLink>
              </li>
              <li>
                <NavLink to="/analytics" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink to="/management" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                  Management
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
              Contact
            </NavLink>
          </li>

          {!user && (
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                About
              </NavLink>
            </li>
          )}

          <li>
            {user ? (
              <div className="profile-dropdown" onMouseLeave={() => setShowDropdown(false)}>
                <img
                  src={user.image || "/images/user-default.png"}
                  alt="Profile"
                  className="profile-pic"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="dropdown-menu">
                    <p><strong>{user.name}</strong></p>
                    <p>{user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleNavClick}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
