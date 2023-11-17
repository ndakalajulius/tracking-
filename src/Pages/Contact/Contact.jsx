// ContactUsPage.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="4"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
