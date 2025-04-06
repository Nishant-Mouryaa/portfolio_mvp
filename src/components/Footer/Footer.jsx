import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <Container>
        <Row className="footer-content">
          <Col md={6} className="footer-brand">
            <div className="logo">PortfolioAI</div>
            <p className="footer-text">The easiest way to build a stunning developer portfolio.</p>
          </Col>
          <Col md={6} className="footer-links">
            <div className="links-group">
              <h4>Product</h4>
              <a href="/features">Features</a>
              <a href="/templates">Templates</a>
              <a href="/pricing">Pricing</a>
            </div>
            <div className="links-group">
              <h4>Company</h4>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/careers">Careers</a>
            </div>
            <div className="links-group">
              <h4>Legal</h4>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={6}>
            <p>© {new Date().getFullYear()} PortfolioAI. All rights reserved.</p>
          </Col>
          <Col md={6} className="social-links">
            <a href="/twitter" aria-label="Twitter"><span className="social-icon">𝕏</span></a>
            <a href="/github" aria-label="GitHub"><span className="social-icon">⌨</span></a>
            <a href="/linkedin" aria-label="LinkedIn"><span className="social-icon">in</span></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;