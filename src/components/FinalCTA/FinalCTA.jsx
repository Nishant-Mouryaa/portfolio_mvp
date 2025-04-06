import React from 'react';
import { Container } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';
import WaitlistForm from '../WaitlistForm/WaitlistForm';
import './FinalCTA.css';

const FinalCTA = ({ email, setEmail, submitted, setSubmitted }) => {
  return (
    <section className="final-cta">
      <Container>
        <div className="cta-container">
          <h2>Ready to Build Your Portfolio?</h2>
          <p className="cta-subtitle">Join our waitlist to get early access and exclusive benefits.</p>
          {!submitted ? (
            <WaitlistForm email={email} setEmail={setEmail} onSuccess={() => setSubmitted(true)} />
          ) : (
            <div className="success-message" role="alert">
              <FiCheckCircle className="success-icon" />
              <div>
                <p className="success-title">You're on the list!</p>
                <p className="success-text">We'll be in touch soon.</p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;