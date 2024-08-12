// src/components/LandOwnerRegistrationForm.js

import { Email, Home, LocationCity, Lock, Map, Person, Phone, Public, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import './landreg.css';

const LandOwnerRegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    landSize: '',
    landLocation: '',
    role: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      console.log('Posting data:', formData);
      const response = await axios.post('http://localhost:9000/landowners/poo', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        console.log('Registration successful:', response.data);
        // Redirect to another page or show a success message
        window.location.href = '/Main';
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div className="form-wrapperlf">
      <h2 className="form-titlelf">Landowner Registration</h2>
      <form className="registration-formlf" onSubmit={handleSubmit}>
        <div className="form-grouplf">
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
        <div className="form-grouplf">
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
        <div className="form-grouplf">
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
        <div className="form-grouplf">
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
        <div className="form-grouplf">
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
        <div className="form-grouplf">
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
        <div className="form-grouplf">
          <TextField
            fullWidth
            label="Land Size (in acres)"
            name="landSize"
            value={formData.landSize}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Map />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-grouplf">
          <TextField
            fullWidth
            label="Land Location"
            name="landLocation"
            value={formData.landLocation}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Map />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-grouplf">
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={formData.role}
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
        <div className="form-grouplf">
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
        <div className="form-grouplf">
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

export default LandOwnerRegistrationForm;
