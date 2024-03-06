// Header.js

import React from 'react';
import './header.css';

const Header = () => {
  const handleLogout = () => {
    // Handle logout functionality
    console.log('Logging out...');
  };

  return (
    <div className="navbar">
      <div className="left">
        <span className="ecommerce-admin">E-commerce Admin</span>
      </div>
      <div className="right">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
