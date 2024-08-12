import { Email, Home, LocationCity, Lock, Person, Phone, Public, Visibility, VisibilityOff, Work } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

const AlternativeFarmerRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    email: '',
    mobile: '',
    aadhar: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Farmer Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
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
        <div className="form-group">
          <TextField
            fullWidth
            label="Occupation"
            name="occupation"
            value={formData.occupation}
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <TextField
            fullWidth
            label="Aadhar Number"
            name="aadhar"
            value={formData.aadhar}
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Register
        </Button>
      </form>
    </div>
  );
};

export default AlternativeFarmerRegistration;
