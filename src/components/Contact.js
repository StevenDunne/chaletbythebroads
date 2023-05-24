import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <>
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form name='contact' action='/contact' method='post'>
        <input type='hidden' name='form-name' value='contact' />
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder='How can we help?'
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ContactForm;

