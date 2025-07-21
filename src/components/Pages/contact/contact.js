import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optionally reset form values
    e.target.reset();

    // Auto-hide the message after a few seconds (optional)
    setTimeout(() => setSubmitted(false), 4000);
  };            
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subtext">Have a question, suggestion, or need help? Reach out to us!</p>

      <div className="contact-container">
        {/* Contact Form */}
        {submitted ? (
        <div className="success-message">✅ Message sent successfully!</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="Your email" required />

          <label>Message/Feedback</label>
          <textarea placeholder="Write your message here..." rows="5" required />

          <button type="submit">Send Message</button>
           </form>
        )}
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p><strong>Email:</strong> support@localoffers.in</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Pune, Maharashtra</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
