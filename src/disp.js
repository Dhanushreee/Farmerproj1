import React from 'react';
import { Link } from 'react-router-dom';
import './dis.css';

const FarmerDetailsPage = () => {
    return (
        <div className="farmer-details-page">
            <div className="farmer-profile">
                <div className="farmer-image"></div>
                <div className="farmer-info">
                    <h2>Farmer's Name</h2>
                    <p>Address: 123 Farm Lane, City, State</p>
                    <p>Contact: (123) 456-7890 | email@example.com</p>
                </div>
            </div>

            <div className="product-details">
                <div className="product-image"></div>
                <div className="product-info">
                    <h2>Product Name</h2>
                    <p>Quantity: 100 kg</p>
                    <p>Price: $5 per kg</p>
                    <p>Description: Detailed description about the product.</p>
                    <p>Harvest Date: 2023-07-20</p>
                    <p>Packaging: Packaged in eco-friendly bags.</p>
                    <p>Category: Vegetables</p>
                </div>
            </div>

            <div className="farmer-history">
                <h2>Farmer's History</h2>
                <p>Number of Posts: 10</p>
                <p>Rating: 4.5 stars</p>
                <p>Farm Size: 50 acres</p>
                <p>Experience: 10 years</p>
            </div>

            <div className="additional-details">
                <h2>Additional Details</h2>
                <p>Delivery Options: Yes</p>
                <p>Payment Methods: Cash, Credit Card, PayPal</p>
                <p>Certifications: Organic Certified</p>
            </div>
            <Link to="/Order"><button>Order</button></Link>
        </div>
    );
};

export default FarmerDetailsPage;
