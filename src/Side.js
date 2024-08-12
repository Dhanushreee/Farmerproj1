import React from 'react';
import { FaHome, FaInfoCircle, FaQuestionCircle, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidw.css';
const Sidebar = () => {
  return (
    <div className="sidebar11">
      <nav className="sidebar-nav11">
        <ul>
          <li>
            <a href="#home">
           <FaHome className="icon" />
           <Link to="/Main"> Home</Link> 
            </a>
          </li>
          <li>
            <a href="#profile">
              <FaUserAlt className="icon" />
            <Link to="/profile1"> Profile</Link> 
            </a>
          </li>
          
         
          <li>
            <a href="#about-us">
              <FaInfoCircle className="icon" />
            <Link to="/Aboutus"> About Us</Link> 
            </a>
          </li>
          <li>
            <a href="#faq">
              <FaQuestionCircle className="icon" />
           <Link to="/fq">  FAQ</Link> 
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
