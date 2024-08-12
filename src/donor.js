import React, { useState } from 'react';
import Modal from 'react-modal';
import './donor.css';

// Set the app element for accessibility purposes
Modal.setAppElement('#root');

const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAmountChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="donation-container">
      <div className="donation-form">
        <h2>Support AID Programs in Sustainable Agriculture</h2>
        <p>Your generous donation will support AID programs in sustainable agriculture and help farmers. AID is a registered 501(c)(3) non-profit organization with federal tax-ID 04-3652609.</p>
        <br />
        <br />
        <h3>Donation</h3>
        <div className="donation-amounts">
          &nbsp;
          &nbsp;
          <label>
            <input type="radio" value="$10" checked={selectedAmount === '$10'} onChange={handleAmountChange} />
            $10
          </label>
          <label>
            <input type="radio" value="$20" checked={selectedAmount === '$20'} onChange={handleAmountChange} />
            $20
          </label>
          <label>
            <input type="radio" value="$30" checked={selectedAmount === '$30'} onChange={handleAmountChange} />
            $30
          </label>
          <label>
            <input type="radio" value="$50" checked={selectedAmount === '$50'} onChange={handleAmountChange} />
            $50
          </label>
          <label>
            <input type="radio" value="$100" checked={selectedAmount === '$100'} onChange={handleAmountChange} />
            $100
          </label>
          <label>
            <input type="radio" value="$200" checked={selectedAmount === '$200'} onChange={handleAmountChange} />
            $200
          </label>
          <input
            type="text"
            placeholder="$"
            className="custom-amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            aria-labelledby="customAmount"
            title="Other gift amount"
          />
        </div>

        <h3>Billing Address</h3>
        <div className="ddd">
          <form className="formdd" onSubmit={handleSubmit}>
            <label>
              Full Name:
              <br />
              <input type="text" name="fullName" required />
            </label>
            <br />
            <br />

            <label>
              Address:
              <br />
              <input type="text" name="address" required />
            </label>
            <br />
            <br />
            <label>
              City:
              <br />
              <input type="text" name="city" required />
            </label>
            <label>
              <br />
              <br />
              State:
              <br />
              <input type="text" name="state" required />
            </label>
            <br />
            <br />
            <label>
              Zip Code:
              <br />
              <input type="text" name="zip" required />
            </label>
            <br />
            <br />
            <label>
              Country:
              <br />
              <input type="text" name="country" required />
            </label>
            <br />
            <br />

            <center>
              <button type="submit">Submit</button>
            </center>
          </form>
        </div>
      </div>
      <div className="dona">
        <h3>Payment Details</h3>
        <form className="formdona" onSubmit={handleSubmit}>
          <label>
            Card Number:
            <input type="text" name="cardNumber" required />
          </label>
          <label>
            Expiry Date:
            <input type="text" name="expiryDate" required />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" required />
          </label>

          <button type="submit">Donate</button>
        </form>
      </div>

      <div className="right-sectiondona">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="donation-image"></div>
        <br />
        <p>Your donation to Agriculture and Farmers’ Welfare Fund supports projects that address the large-scale agrarian crisis across India, through sustainable low-input organic farming initiatives, reclamation of degraded lands, struggle for land-rights, and campaigns for government policies that mitigate farmer distress and counter the existing crisis. Agriculture is the backbone of India's economy, sustaining millions of livelihoods and ensuring food security for the nation. However, the sector faces a myriad of challenges that have led to an ongoing agrarian crisis</p>
      </div>

      {/* Modal for success message */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Donation Successful"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Donation Successful</h2>
        <p>Thank you for your generous donation! Check your email for the invoice.</p>
        <button onClick={closeModal}>Ok</button>
      </Modal>
    </div>
  );
};

export default DonationPage;
