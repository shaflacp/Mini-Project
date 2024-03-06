import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Address</h2>
          <p> 123 fifth Avenue,USA</p>
        </div>
        <div className="footer-section links">
          <h2>Get In Touch</h2>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/user/shop">SHOP</a></li>
            <li><a href="/user/login">LOGIN</a></li>
            <li><a href="/user/signup">SIGNUP</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
            <p>123 Jewelry Street, Cityville</p>
            <p>Email: planty@example.com</p>
            <p>Phone: 123-456-7890</p>

          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Powered By Plant Shop | GROW
      </div>
    </footer>

    </div>
  )
}

export default Footer
