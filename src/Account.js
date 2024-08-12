import React, { useState } from 'react';
import './Account.css';

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    if (settings.currentPassword && settings.newPassword === settings.confirmNewPassword) {
      alert('Password changed successfully');
    } else {
      alert('Passwords do not match');
    }
    // Simulate saving the changes
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <div className="settings-form">
        <div className="form-groupaa">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-groupaa">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-groupaa">
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={settings.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-groupaa">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={settings.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-groupaa">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            value={settings.confirmNewPassword}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-groupaa">
          {/* Dark mode option can be added here */}
        </div>
        <center>
        <button onClick={handleSave}>Save Settings</button>
        </center>
      </div>
    </div>
  );
};

export default AccountSettings;
