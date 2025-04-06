import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProcessSection.css';

const ProcessSection = () => {
  return (
    <section className="process-section">
      <Container>
        <div className="section-header">
          <h2>How It Works</h2>
          <p className="section-subtitle">Get your portfolio live in just 3 simple steps</p>
        </div>
        <Row className="process-steps">
          <Col md={4} className="process-step">
            <div className="step-number">1</div>
            <h3>Connect GitHub</h3>
            <p>Link your GitHub account to import your projects automatically.</p>
          </Col>
          <Col md={4} className="process-step">
            <div className="step-number">2</div>
            <h3>Customize Your Portfolio</h3>
            <p>Select a template and let AI generate compelling content for you.</p>
          </Col>
          <Col md={4} className="process-step">
            <div className="step-number">3</div>
            <h3>Get Your Live Site</h3>
            <p>Publish instantly with a custom URL to showcase your work.</p>
          </Col>
        </Row>
        <div className="process-line"></div>
      </Container>
    </section>
  );
};

export default ProcessSection;