// homepage.js

import React from 'react';
import './homepage.css';
import UserHeader from '../UserHeader/UserHeader';
import Footer from '../UserFooter/Footer';

function HomePage() {
  return (
    <div className='brandname'>
      <div className="container">
        <h1>Everything Is Better With Plants</h1>
        <img className="green2" src=".\green2.jpg" alt="green2"/>
        <button className="see-more-button">Shop Now</button>
      </div>
      <UserHeader/>
      
      <div className="features">
        <div className="feature">
          <h2>High Quality Plants</h2>
          <p>Transforming spaces with lush greenery, our high-quality plants bring nature's beauty into your home or office effortlessly.</p>
        </div>
        <div className="feature">
          <h2>Wide Plant Range</h2>
          <p>Discover a wide range of plants to fit any style or space, enhancing your environment with natural beauty.</p>
        </div>
        <div className="feature">
          <h2>Excellent Services</h2>
          <p>Enjoy top-notch service with expert plant care and hassle-free delivery, tailored to exceed your expectations.</p>
        </div>
        <div className="feature">
          <h2>Fast Delivery</h2>
          <p>Get your plants quickly with our speedy delivery service, ensuring you can enjoy greenery in no time.</p>
        </div>
      </div>

        
      <div class="plants-container">
  <a href="#" class="cactus">
    <img src="./cactus.jpg" alt="cactus" />
    <h2>Cactus</h2>
  </a>
  <a href="#" class="bonsai">
    <img src="./bonsai.jpg" alt="bonsai" />
    <h2>Bonsai</h2>
  </a>
  <a href="#" class="succulent">
    <img src="./succulent.jpg" alt="succulent" />
    <h2>Succulent</h2>
  </a>
  <a href="#" class="indoor">
    <img src="./indoor.jpg" alt="indoor" />
    <h2>Indoor Plants</h2>
  </a>
</div>
<div className="additional-content">
        <div className="container">
          <h2>Featured Products</h2>
          <p>Use these paragraphs to focus on the topic in the headline. Make sure you keep it short and attractive.</p>
          <button className='btn'> View All Plants</button>
          </div>
        
        </div>
        <Footer/>
</div>

  )
}

export default HomePage;
