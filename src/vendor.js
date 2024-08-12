import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './vendor.css';

const VendorPage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/pro/gg');
                if (response.status === 200) {
                    setProducts(response.data);
                } else {
                    throw new Error(`Unexpected status code: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="containerv">
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map(product => (
                    <div key={product.id} className="cardv">
                        <div
                            className="card-imagev"
                            style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                        <div className="card-detailsv">
                            <h3 className="product-namev">{product.name}</h3>
                            <p className="quantityv">Quantity: {product.quantity} Kg</p>
                            <p className="costv">Cost: Rs.{product.amount} per Kg</p>
                            <Link to={`/disp/${product.id}`}>View</Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default VendorPage;
