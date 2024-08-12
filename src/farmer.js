import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './farmer.css';

const FarmerPage = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    description: '',
    city: '',
    image: '',
    amount: '',
    contact: ''
  });

  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting product:', product);
      const response = await axios.post('http://localhost:9000/api/products/prod', product, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Product posted successfully:', response.data);

      setProduct({
        name: '',
        quantity: '',
        description: '',
        city: '',
        image: '',
        amount: '',
        contact: ''
      });
      setError('');
    } catch (error) {
      console.error('There was an error posting the product:', error);
      setError(`Failed to post product. ${error.response ? error.response.data : error.message}`);
    }
  };

  return (
    <div className="farmer-pagefp">
      <div className="create-postfp">
        <h1>Post Your Product</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            required
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
            required
          ></textarea>
          <input
            type="text"
            name="city"
            value={product.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <input
            type="number"
            name="amount"
            value={product.amount}
            onChange={handleChange}
            placeholder="Expected Amount"
            required
          />
          <input
            type="text"
            name="contact"
            value={product.contact}
            onChange={handleChange}
            placeholder="Contact Information"
            required
          />
          <center>
            <button type="submit">Post Product</button>
          </center>
        </form>
        <center>
          <Link to="/vendor">Go to Vendor Page</Link>
        </center>
      </div>
    </div>
  );
};

export default FarmerPage;
