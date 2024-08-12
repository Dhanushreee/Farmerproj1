import React from 'react';
import { Link } from 'react-router-dom';
import './landpost.css'; // Make sure to include this CSS file in your project
const LandPost = () => {
  // Benefits of farmland leasing
  const benefits = [
    {
      id: 1,
      title: 'Access to Rich Soil',
      description: 'Farmland with nutrient-rich soil offers an ideal environment for growing a wide variety of crops. This enhances yield quality and quantity, ensuring a successful farming season.',
    },
    {
      id: 2,
      title: 'Long-term Lease Options',
      description: 'Secure your agricultural ventures with long-term lease agreements, providing stability and the opportunity to plan and invest in infrastructure and equipment with confidence.',
    },
    {
      id: 3,
      title: 'Suitable for Various Crops',
      description: 'These lands are versatile and can support a range of crops, from grains to vegetables, making them suitable for diverse agricultural projects and market demands.',
    },
    {
      id: 4,
      title: 'Eco-friendly Farming',
      description: 'Promote sustainable agriculture with eco-friendly practices such as organic farming and water conservation, contributing to environmental health and sustainable food production.',
    },
    {
      id: 5,
      title: 'Proximity to Local Markets',
      description: 'Located near bustling markets, these farmlands provide easy access to customers, reducing transportation costs and enhancing the freshness and quality of produce delivered to consumers.',
    },
    {
      id: 6,
      title: 'Certified Organic Soil',
      description: 'Lease land that meets organic certification standards, ensuring your crops are grown in soil free from synthetic pesticides and fertilizers, ideal for producing organic produce.',
    },
  ];

  return (
    <div className="Appfll">
      <header className="herofll">
        <div className="hero-overlayfll"></div>
        <div className="hero-contentfll">
          <h1>Benefits of Farmland Leasing</h1>
          <p>Explore the advantages of leasing farmland for your agricultural ventures.</p>
          <form className="search-formfll">
            <div className="input-containerfll">
              
              <input type="text" placeholder="Enter city or neighborhood" required />
            </div>
            <div className="input-containerfll">
              
              <input type="text" placeholder="Property type" required />
            </div>
            <div className="input-containerfll">
             
              <input type="number" placeholder="Max price" required />
            </div>
            <Link to="/LandOwnerPage">  <button type="submit">Search</button></Link>
          </form>
        </div>
      </header>

      <section className="featured-benefitsfll">
        <h2>Benefits</h2>
        <div className="benefits-listfll">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-cardfll">
              <div className="benefit-detailsfll">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Farmland Leasing. All rights reserved.</p>
        <div className="footer-contactfll">
          <p>Contact Us: info@farmlandleasing.com | +123-456-7890</p>
        </div>
        <div className="social-icons">
          <i className="material-icons">facebook</i>
          <i className="material-icons">twitter</i>
          <i className="material-icons">instagram</i>
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Subscribe for updates" />
         <button type="submit">Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default LandPost;
