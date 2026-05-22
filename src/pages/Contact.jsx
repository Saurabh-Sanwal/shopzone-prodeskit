import { useState, useRef } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import "../styles/pages.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read values from refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    if (!name || !email) return;
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Get in <span className="accent-text">Touch</span></h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon"><FiMail /></div>
              <div>
                <h4>Email Us</h4>
                <p>support@shopzone.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><FiPhone /></div>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><FiMapPin /></div>
              <div>
                <h4>Visit Us</h4>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <FiCheckCircle size={48} color="var(--success)" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  className="btn btn-outline"
                  style={{ margin: "20px auto 0", display: "flex" }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      ref={nameRef}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      ref={emailRef}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    ref={subjectRef}
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    ref={messageRef}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <FiSend /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}