import React, { useState } from 'react';
import './profile1.css';

const ViewProf = () => {
  const [profile, setProfile] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2022',
    lastLogin: 'July 2023',
    accountType: 'Premium',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Simulate saving the changes
    console.log('Profile saved', profile);
  };

  return (
    <div className="view-profile-container">
      <h2>Profile Details</h2>
      <div className="profile-info">
        <div className="info">
        {isEditing ? (
          <>
            <p>
              <strong>Username:</strong> 
              <br></br>
              <input 
                type="text" 
                name="username" 
                value={profile.username} 
                onChange={handleChange} 
              />
            </p>
            <p>
              <strong>Email:</strong> 
              <br></br>
              <input 
                type="email" 
                name="email" 
                value={profile.email} 
                onChange={handleChange} 
              />
            </p>
            <p>
              <strong>Member Since:</strong> 
              <br></br>
              <input 
                type="text" 
                name="memberSince" 
                value={profile.memberSince} 
                onChange={handleChange} 
              />
            </p>
            <p>
              <strong>Last Login:</strong> 
              <br></br>
              <input 
                type="text" 
                name="lastLogin" 
                value={profile.lastLogin} 
                onChange={handleChange} 
              />
            </p>
            <p>
              <strong>Account Type:</strong>
              <br></br> 
              <input 
                type="text" 
                name="accountType" 
                value={profile.accountType} 
                onChange={handleChange} 
              />
            </p>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Member Since:</strong> {profile.memberSince}</p>
            <p><strong>Last Login:</strong> {profile.lastLogin}</p>
            <p><strong>Account Type:</strong> {profile.accountType}</p>
            <button onClick={handleEdit}>Edit</button>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default ViewProf;
