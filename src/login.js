import React, { useState } from 'react';
import axios from 'axios';
import { Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import './login.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9007/ap/api/login', formData);

      if (response.data.success) {
        const { role } = formData;
        if (role === 'farmer') {
          window.location.href = '/ho'; 
        } else if (role === 'vendor') {
          window.location.href = '/ho22'; 
        } else if (role === 'landowner') {
          window.location.href = '/landpost'; 
        }
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred while trying to login.');
    }
  };

  return (
    <Box className="login-container">
      <Typography variant="h4" className="login-title">
        Welcome Back
      </Typography>
      <Typography variant="subtitle1" className="login-subtitle">
        Please login to continue
      </Typography>
      <form className="login-form" onSubmit={handleSubmit}>
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
                  <Person />
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
          <label className="role-label">Login as:</label>
          <select
            className="role-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="farmer">Farmer</option>
            <option value="vendor">Vendor</option>
            <option value="landowner">Landowner</option>
          </select>
        </div>
        <Button type="submit" variant="contained" color="primary" className="login-button">
          Login
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Box>
  );
};

export default LoginPage;