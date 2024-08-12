import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function HomePage() {
  return (
    <div className="homepage-wrapper">
      <div className="home">
      
       <header className="header1">
        <h1>Farm Assist</h1>
        <p>Your premier platform for empowering and supporting farmers</p>
      </header>
      </div>
      <br></br>
      <div className="homepage-container">
        <div className="container">
          <div className="text-content">
            <h2>I want to buy</h2>
            <p>Quick order and delivery. Pay securely.</p>
            <Link to='/vendor'><button>Shop Now</button></Link>
          </div>
        </div>
        <div className="container">
          <div className="text-content">
            <h2>I want to sell</h2>
            <p>Easy to schedule and sell. Receive direct payments.</p>
            <Link to="/farmer">
              <button>Sell Now</button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="homepage-container">
        <div className="container donation">
          <div className="caption-content">
            <h2>Donate to Farmers</h2>
            <p>Help farmers in need by donating.</p>
           <Link to="/donor"> <button>Donate</button></Link>
          </div>
        </div>
        <div className="container land-lease">
          <div className="caption-content">
            <h2>Land Lease</h2>
            <p>Lease land for farming or other purposes.</p>
           <Link to="/landlease"><button>View</button></Link>

          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We connect farmers and vendors for a seamless buying and selling experience.</p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/vendor">Vendor</Link></li>
              <li><Link to="/landlease">Lease</Link></li>
              <li><Link to="/Aboutus">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/fq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: support@yourcompany.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div>
        <FontAwesomeIcon icon={faFacebookF} /> {/* Facebook Icon */}
        <FontAwesomeIcon icon={faTwitter} />    {/* Twitter Icon */}
        <FontAwesomeIcon icon={faInstagram} />  {/* Instagram Icon */}
        <FontAwesomeIcon icon={faLinkedin} />   {/* LinkedIn Icon */}
      </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
