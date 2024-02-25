import React from 'react';
import './userheader.css';

const UserHeader = () => {
  return (
    <div>
    <nav className="user-header">
      <h1>The Boutique Store For Plants!</h1> {/* Added side heading */}
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>

      </ul>
    </nav>
    
    </div>
    
  );
};

export default UserHeader;
