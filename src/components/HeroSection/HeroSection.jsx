import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';
import WaitlistForm from '../WaitlistForm/WaitlistForm';
import HeroVisual from './HeroVisual';
import './HeroSection.css';

const HeroSection = ({ email, setEmail, submitted, setSubmitted }) => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <div className="badge">COMING SOON</div>
            <h1>
              Build Your <span className="highlight">Dream Portfolio</span> in Minutes
            </h1>
            <p className="subheadline">
              AI-powered. Developer-focused. Instantly showcase your skills with a beautiful, modern portfolio that gets you noticed.
            </p>
            {!submitted ? (
              <WaitlistForm email={email} setEmail={setEmail} onSuccess={() => setSubmitted(true)} />
            ) : (
              <div className="success-message" role="alert">
                <FiCheckCircle className="success-icon" />
                <div>
                  <p className="success-title">Thanks for signing up!</p>
                  <p className="success-text">We'll keep you updated on our launch.</p>
                </div>
              </div>
            )}
            <div className="trust-badges">
              <div className="trust-item">No credit card required</div>
              <div className="trust-item">Free early access</div>
            </div>
          </Col>
          <Col lg={6} className="hero-visual">
            <HeroVisual />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;