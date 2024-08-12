import React from 'react';
import { Link } from 'react-router-dom';
import './landlease.css';
const LandLeasing = () => {
  return (
    <div className="landh1">
      <div className="landh2">
      <header className="header">
        <h1>Land Leasing Marketplace</h1>
        <p>Your premier platform for land lease opportunities</p>
      </header>
      
      <section className="featured-listings">
        <h2>Featured Land for Lease</h2>
        <div className="cards">
          <div className="card">
            <div className="card-image card-image-1"></div>
            <h3>1.2 Acres of Land for Lease in Manali</h3>
            <p>Kullu District, Himachal Pradesh, 17513</p>
            <Link to='/landisp'>View</Link>
            
          </div>
          <div className="card">
            <div className="card-image card-image-2"></div>
            <h3>2.5 Acres of Land for Lease in Alibag</h3>
            <p>Raigad District, Maharashtra, 402201</p>
            <Link to='/landisp'>View</Link>
          </div>
          <div className="card">
            <div className="card-image card-image-3"></div>
            <h3>Lease 3 Acres in Kodaikanal, Dindigul District</h3>
            <p>MTamil Nadu, 624101</p>
            <Link to='/landisp'>View</Link>
          </div>
        </div>
      </section>
      <section className="featured-listings2">
     
        <div className="cards">
          <div className="card">
            <div className="card-image card-image-4"></div>
            <h3>Prime 4 Acres for Lease in Coorg, Kodagu District</h3>
            <p> Karnataka, 571201</p>
            <Link to='/landisp'>View</Link>
          </div>
          <div className="card">
            <div className="card-image card-image-5"></div>
            <h3>Discover 1.5 Acres for Lease in Lonavala,</h3>
            <p>Pune District, Maharashtra, 410401</p>
            <Link to='/landisp'>View</Link>
          </div>
          <div className="card">
            <div className="card-image card-image-6"></div>
            <h3>Lease 2 Acres in Ooty</h3>
            <p>Nilgiris District, Tamil Nadu, 643001</p>
              <Link to='/landisp'>View</Link>
          </div>
        </div>
      </section>
      </div>
      
    </div>
  );
}

export default LandLeasing;
