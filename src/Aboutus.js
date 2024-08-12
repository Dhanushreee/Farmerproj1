import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Farmer Welfare</h1>
        <p>Empowering farmers, transforming agriculture.</p>
      </header>

      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to foster a sustainable and prosperous future for farmers. Through innovative solutions, comprehensive support programs, and a deep commitment to well-being, we aim to elevate the livelihoods of farmers.
          </p>
        </div>
      
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Education and Training</h3>
            <p>Providing training programs on the latest agricultural techniques and sustainable practices.</p>
          </div>
          <div className="service-item">
            <h3>Financial Support</h3>
            <p>Offering microloans, grants, and subsidies for better equipment and technologies.</p>
          </div>
          <div className="service-item">
            <h3>Market Access</h3>
            <p>Connecting farmers directly with buyers to ensure fair prices.</p>
          </div>
          <div className="service-item">
            <h3>Community Building</h3>
            <p>Encouraging the exchange of ideas and best practices through networks and forums.</p>
          </div>
          <div className="service-item">
            <h3>Advocacy</h3>
            <p>Promoting policies and initiatives that benefit farmers at various levels.</p>
          </div>
        </div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value-item"><strong>Integrity:</strong> Honesty and transparency in all our actions.</div>
          <div className="value-item"><strong>Innovation:</strong> Embracing new technologies and methods.</div>
          <div className="value-item"><strong>Community:</strong> Building a strong, supportive community.</div>
          <div className="value-item"><strong>Sustainability:</strong> Prioritizing environmentally friendly practices.</div>
        </div>
      </section>

      <section className="join-us">
        <h2>Join Us</h2>
        <p>
          We invite you to join our mission to transform India's agricultural landscape. Whether you're a farmer seeking support, a donor looking to contribute, or a volunteer eager to help, there's a place for you at Farmer Welfare.
        </p>
        <button className="join-button">Get Involved</button>
      </section>
    </div>
  );
};

export default AboutUs;
