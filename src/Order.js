import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    buyerName: '',
    contact: '',
    buyerType: '',
    quantity: '',
    dateRequest: '',
    dateOrder: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="order-form">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="buyerName">Buyer Name</label>
          <input
            type="text"
            id="buyerName"
            name="buyerName"
            value={formData.buyerName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="buyerType">Buyer Type</label>
          <select
            id="buyerType"
            name="buyerType"
            value={formData.buyerType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select buyer type
            </option>
            <option value="retailers">Retailers</option>
            <option value="wholesale">Wholesale</option>
            <option value="restaurants">Restaurants</option>
            <option value="food-processing">Food Processing</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity (kg)</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter the quantity"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateRequest">Date of Request</label>
          <input
            type="date"
            id="dateRequest"
            name="dateRequest"
            value={formData.dateRequest}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOrder">Date of Order</label>
          <input
            type="date"
            id="dateOrder"
            name="dateOrder"
            value={formData.dateOrder}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Order;
