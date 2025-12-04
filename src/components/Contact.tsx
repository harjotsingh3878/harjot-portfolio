'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { PersonalData } from '../types/portfolio';
import './Contact.css';

interface ContactProps {
  personalData: PersonalData;
}

const Contact: React.FC<ContactProps> = ({ personalData }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section section-dark contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out to me for any opportunities or collaborations!</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p>{personalData.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">Send Message</button>

            {submitted && (
              <div className="success-message">
                <FaCheckCircle /> Thank you! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
