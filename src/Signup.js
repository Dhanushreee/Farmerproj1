// src/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    occupation: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="image-sidesi">
      
      </div>
      <div className="form-sidesi">
        <div className="form-wrappersi">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-groupsi">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groupsi">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groupsi">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groupsi">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          
           
            <div className="form-groupsi">
              <label htmlFor="zip">Zip Code:</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groupsi">
              <label htmlFor="occupation">Occupation:</label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groupsi">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <center>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
   <Link to='/home'>  <button type="submit">Signup</button></Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
