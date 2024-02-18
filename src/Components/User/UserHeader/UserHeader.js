import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';
import './userheader.css';
// import Loginpage from './Loginpage'; // Import your login page component

function UserHeader() {
  return (
    // <Router>
      <div className='brandname'>
        <div className='navbar'>
        </div>
        <nav>
          <ul className='nav-list'>
            <li><Link to="/collections">HOME</Link></li>
            <li><Link to="/contact">ABOUT</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/signup">SIGNUP</Link></li>
          </ul>
        </nav>
        <div className="container">
          <h1>F A S H I O N</h1>
          <img className="sp" src=".\sp.jpg" alt="sp"/>
          <button className="see-more-button">See More</button>
        </div>

        {/* Define routes */}
        <switch>
          {/* <Route path="/login" component={Loginpage} /> */}
          {/* Define other routes */}
        </switch>
      </div>
    // </Router>
  )
}

export default UserHeader;
