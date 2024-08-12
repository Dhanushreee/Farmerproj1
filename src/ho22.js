import React from 'react';
import { Link } from 'react-router-dom';
import Carousel11 from './caros2';
import './ho22.css';
import Sidebar from './Side';

function HomePageL() {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <div className="ccff">
        <Carousel11 />
        </div>
        <div className="custom-containerh2">
          <div className="custom-container-texth2">
           <center><strong>Empowering Farmers, Nourishing Futures</strong></center> 
          </div>
        </div>
        <div className="container-wrappercch2">
          <div className="containercch2">
            <div className="text-contentcch2">
              <h2>Sell Your Harvest</h2>
              <p>Connect with buyers directly. Schedule your sales and receive timely payments for your produce.</p>
              <Link to="/vendor"><button>Bye Now</button></Link>
            </div>
          </div>
          <div className="containercch2">
            <div className="text-contentcch2">
              <h2>Support the Community</h2>
              <p>Make a difference by donating to support farmers and their families. Your contribution helps provide essential resources and support.</p>
              <Link to="/donate"><button>Donate Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageL;
