import React from 'react';
import { Link } from 'react-router-dom';
import Carousel11 from './caros2';
import './ho.css';
import Sidebar from './Side';

function HomePagef() {
  return (
    <div>
      <div className='caro'>
      <Carousel11 />
      </div>
      <Sidebar />
      <div className="custom-containerh1">
        <div className="custom-container-texth1">
       <center><strong> Empowering Farmers, Nourishing Futures</strong> </center> 
        </div>
      </div>
      <div className="container-wrappercch1">
      <div className="containercch1">
  <div className="text-contentcch1">
    <h2>Sell Your Harvest</h2>
    <p>Connect with buyers directly. Schedule your sales and receive timely payments for your produce.</p>
    <Link to="/farmer"><button>Sell Now</button></Link>
  </div>
</div>

        <div className="containercch1">
          <div className="text-contentcch1">
            <h2>Lease Your Land</h2>
            <p>Provide leasing opportunities and find interested tenants.</p>
            <Link to="/LandOwnerPage"><button>Lease Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePagef;
