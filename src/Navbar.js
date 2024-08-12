import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarNew() {
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleSignupDropdown = () => {
    setShowSignupDropdown(!showSignupDropdown);
  };

  const handleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <nav className="navbar">
      <div className="website-name">FarmAssist</div>
      <ul className="nav-links">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li className="dropdown">
          <span className="nav-link dropdown-toggle" onClick={handleSignupDropdown}>Signup</span>
          {showSignupDropdown && (
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/farmerreg">Farmer Signup</Link>
              <Link className="dropdown-item" to="/vendorreg">User Signup</Link>
              <Link className="dropdown-item" to="/landreg">Land Owner Signup</Link>
            </div>
          )}
        </li>
        <li><Link className="nav-link" to="/login">Login</Link></li>
        <li><Link className="nav-link" to="/ho">Seller</Link></li>
        <li><Link className="nav-link" to="/ho22">Buyer</Link></li>
        <li><Link className="nav-link" to="/donor">Donation</Link></li>
        <li><Link className="nav-link" to="/landpost">Lease</Link></li>
      </ul>
      <div className="profile-container">
        <div className="profile-icon" onClick={handleProfileDropdown}></div>
        {showProfileDropdown && (
          <div className="profile-dropdown">
            <Link className="dropdown-item" to="/profile1">Profile</Link>
            <Link className="dropdown-item" to="/Account">Account Settings</Link>
            <Link className="dropdown-item" to="/login">Log Out</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarNew;
