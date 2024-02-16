import React from 'react'
import './userheader.css';


function UserHeader() {
  return (
    <div className='brandname'>
      <div className='navbar'>
     
      
      </div>
      <nav>
       <ul className='nav-list'>
       <li><a href="/collections">HOME</a></li>
        <li><a href="/contact">ABOUT</a></li>
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/signup">SIGNUP</a></li>


      </ul>
    </nav>
    <div className="container">
    <h1>S h o p W i t h U s</h1>
    <img className="img" src=".\img.jpg" alt="img"/>
     </div>
     </div>
     
    
  
  )
}

export default UserHeader
