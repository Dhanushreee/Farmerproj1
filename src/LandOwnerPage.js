// src/components/LandOwnerPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandOwnerPage.css'; // Make sure to create and include this CSS file

const LandOwnerPage = () => {
  const [land, setLand] = useState({
    title: '',
    area: '',
    location: '',
    facilities: '',
    leaseTerms: '',
    image: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLand({ ...land, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle land post submission, such as sending data to the server

    // Reset the form after submission
    setLand({
      title: '',
      area: '',
      location: '',
      facilities: '',
      leaseTerms: '',
      image: '',
      contact: '',
    });
  };

  return (
    <div className="landowner-pagellp">
      <div className="create-postllp">
        <h1>Post Your Land for Lease</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={land.title}
            onChange={handleChange}
            placeholder="Land Title"
            required
          />
          <input
            type="number"
            name="area"
            value={land.area}
            onChange={handleChange}
            placeholder="Area (in acres)"
            required
          />
          <input
            type="text"
            name="location"
            value={land.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
          <textarea
            name="facilities"
            value={land.facilities}
            onChange={handleChange}
            placeholder="Facilities (e.g., water, electricity)"
            required
          ></textarea>
          <textarea
            name="leaseTerms"
            value={land.leaseTerms}
            onChange={handleChange}
            placeholder="Lease Terms (e.g., duration, price)"
            required
          ></textarea>
          <input
            type="text"
            name="image"
            value={land.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <input
            type="text"
            name="contact"
            value={land.contact}
            onChange={handleChange}
            placeholder="Contact Information"
            required
          />
          <center>
            <Link to="/landlease">
              <button type="submit">Post Land</button>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default LandOwnerPage;
