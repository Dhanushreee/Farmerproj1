import React from 'react';
import Carousel1 from './caro1';
import Footer from './Footer';
import './Main.css';


function Main() {
  return (
    <div className="App">
   
<Carousel1/>
<div class="container-wrappercc">
  <div class="containercc">
    <div class="text-contentcc">
   
      <p>Transform Your Harvest into Revenue! Connect Directly with Buyers and Start Selling Today!</p>
     
    </div>
  </div>
  <div class="containercc">
    <div class="text-contentcc">
   
      <p>Experience Freshness Like Never Before! Buy Directly from Local Farmers and Taste the Difference!</p>
     
    </div>
  </div>
 
</div>
<div className="container-wrappercc1">
      <div className="containercc1">
        <h2>Support Programs</h2>
        <p>Farmers play a vital role in feeding the world, and it's essential to provide them with the support they need to thrive. Various support programs are available to help farmers improve their productivity, sustainability, and overall well-being. These programs offer financial assistance, educational resources, and infrastructural support to ensure that farmers can continue to contribute effectively to agriculture.</p>
      </div>
      <div className="containercc1">
        <h2>Land Leasing</h2>
        <p>Land leasing is a critical component of modern agriculture, allowing farmers to access land without the burden of ownership. This arrangement offers flexibility and can be a strategic way to expand farming operations, manage resources, and adapt to market conditions. Here’s an in-depth look at land leasing, its benefits, types, and best practices.</p>
      </div>
      <div className="containercc1">
        <h2>Financial Aid</h2>
        <p>Financial aid programs are essential for supporting farmers by providing the resources needed to invest in their operations, manage risks, and overcome financial challenges. These programs offer various forms of assistance, including loans, grants, and insurance, to help farmers maintain and enhance their agricultural activities.</p>
      </div>
    </div>
   <Footer/>
    </div>
    
  );
}

export default Main;
