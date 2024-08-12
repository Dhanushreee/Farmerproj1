import React from 'react';
import './landisp.css';

const LandOwnerDetailsPage = () => {
    return (
        <div className="land-owner-details-page">
        <div className="land-owner-details">

            <div className="land-owner-profile">
                <div className="land-owner-image"></div>
                <div className="land-owner-info">
                    <h2>Land Owner's Name</h2>
                    <p>Address: 123 Property Lane, City, State</p>
                    <p>Contact: (123) 456-7890 | email@example.com</p>
                </div>
            </div>

            <div className="land-details">
                <div className="land-image"></div>
                <div className="land-info">
                    <h2>Land Parcel Name</h2>
                    <p>Size: 50 acres</p>
                    <p>Location: City, State</p>
                    <p>Lease Price: $500 per acre/year</p>
                    <p>Description: Detailed description about the land parcel, including soil quality, previous usage, and any other relevant information.</p>
                    <p>Availability Date: 2023-08-01</p>
                    <p>Category: Agricultural</p>
                </div>
            </div>

            <div className="land-owner-history">
                <h2>Land Owner's History</h2>
                <p>Number of Listings: 5</p>
                <p>Rating: 4.7 stars</p>
                <p>Total Land Owned: 200 acres</p>
                <p>Experience: 15 years</p>
            </div>

           
            </div>
        </div>
    );
};

export default LandOwnerDetailsPage;
