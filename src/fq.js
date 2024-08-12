import React, { useState } from 'react';
import './fq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Farmer Welfare?",
      answer: "Farmer Welfare is a dedicated platform aimed at empowering and supporting farmers across India. We provide resources, training, financial assistance, and market access to help farmers thrive."
    },
    {
      question: "How can I apply for financial support?",
      answer: "To apply for financial support, please visit our Financial Support section on the website. Fill out the application form, and our team will review it and get in touch with you for further steps."
    },
    {
      question: "What types of training programs do you offer?",
      answer: "We offer a range of training programs covering sustainable farming practices, modern agricultural techniques, crop management, and market insights. You can find details and schedules on our Training Programs page."
    },
    {
      question: "How can I connect with buyers through your platform?",
      answer: "Our platform facilitates direct connections between farmers and buyers through our online marketplace. Create a seller profile, list your products, and start connecting with potential buyers."
    },
    {
      question: "Can I volunteer with Farmer Welfare?",
      answer: "Yes, we welcome volunteers who are passionate about supporting farmers. Please visit our Volunteer page to learn more about available opportunities and how you can get involved."
    },
    {
      question: "How can I make a donation?",
      answer: "To make a donation, go to our Donations page where you can choose the amount and purpose of your contribution. We appreciate your support in helping us make a difference in the lives of farmers."
    },
  ];

  return (
    <div className="faq">
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services and how we support farmers.</p>
      </header>

      <section className="faq-content">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h2>{item.question}</h2>
              <span className={`toggle-icon ${activeIndex === index ? 'open' : ''}`}>+</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
