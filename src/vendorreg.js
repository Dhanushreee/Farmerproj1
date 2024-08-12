import { Business, Email, Home, LocationCity, Lock, Person, Phone, Public, Visibility, VisibilityOff, Work } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import './vendorreg.css';

const VendorRegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    console.log('Submitting data:', formData);

    try {
        const response = await axios.post('http://localhost:9007/api/kk', formData);
        console.log('Vendor created successfully:', response.data);
        // Optionally redirect or clear form
    } catch (error) {
        console.error('There was an error creating the vendor:', error.response ? error.response.data : error.message);
        alert('An error occurred while creating the vendor. Please check the console for more details.');
    }
  };

  return (
    <div className="form-wrappervf">
      <h2 className="form-titlevf">Vendor Registration</h2>
      <form className="registration-formvf" onSubmit={handleSubmit}>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Business Name"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Business />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Home />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCity />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Public />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupvf">
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <center>
          
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Register
          </Button>
        </center>
      </form>
    </div>
  );
};

export default VendorRegistrationForm;
