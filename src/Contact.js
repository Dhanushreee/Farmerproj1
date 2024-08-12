import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
       
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us with any questions, feedback, or support inquiries.</p>
      </header>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p><strong>Address:</strong> 123 Farmer Welfare Road, Agriculture City, India, 110001</p>
        <p><strong>Phone:</strong> +91-123-456-7890</p>
        <p><strong>Email:</strong> contact@farmerwelfare.org</p>
      </section>

      <section className="contact-form">
        <center>
        <h2>Contact Form</h2>
        </center>
        <form>
          <div className="form-groupc">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-groupc">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-groupc">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-groupc">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <center>
          <button type="submit">Submit</button>
          </center>
        </form>
      </section>
      </div>
    
  );
};

export default ContactUs;
