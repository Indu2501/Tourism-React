// src/components/Contact.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import '../style/contact.css';

const ContactDetails = () => {
  return (
    <div className="contact-section">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
          <span>2369 Robinson Lane Jackson, OH 45640</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhoneAlt} className='icon' />
          <span>(+1) 740-395-3829</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
          <span>info@example.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faClock} className='icon' />
          <span>Mon - Fri: 08.00 - 16.00</span>
        </div>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
