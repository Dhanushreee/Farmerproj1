import { Email, Home, LocationCity, Lock, Person, Phone, Public, Visibility, VisibilityOff, Work } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import './farmerreg.css';

const AlternativeFarmerRegistrationForm = () => {
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
    role: '' // Added role field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9007/api/freg/ref', formData); // Adjust URL as needed
      console.log('Form submitted:', response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <div className="form-wrapperff">
      <h2 className="form-titleff">Farmer Registration</h2>
      <form className="registration-formff" onSubmit={handleSubmit}>
        <div className="form-groupff">
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
        
        <div className="form-groupff">
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
        <div className="form-groupff">
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
        <div className="form-groupff">
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
        <div className="form-groupff">
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
        <div className="form-groupff">
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
        <div className="form-groupff">
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
        <div className="form-groupff">
          <TextField
            fullWidth
            label="Role" // Added role input field
            name="role"
            value={formData.role}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work /> {/* Using Work icon as a placeholder */}
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-groupff">
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
        <div className="form-groupff">
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

export default AlternativeFarmerRegistrationForm;
