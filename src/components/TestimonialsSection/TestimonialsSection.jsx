import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <div className="section-header">
          <h2>Trusted by Developers Worldwide</h2>
          <p className="section-subtitle">Join thousands of developers who've enhanced their careers</p>
        </div>
        <Row className="testimonials">
          <Col md={4}>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "This portfolio builder helped me land my dream job at Google. The AI-generated content was spot on!"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" aria-label="Sarah Johnson"></div>
                <div className="author-info">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Senior Developer at Google</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "I went from 0 freelance clients to fully booked in 2 months after using this tool to showcase my work."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" aria-label="Michael Chen"></div>
                <div className="author-info">
                  <div className="author-name">Michael Chen</div>
                  <div className="author-title">Freelance Developer</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The GitHub integration saved me hours of work. My portfolio was ready before I finished my coffee!"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" aria-label="David Rodriguez"></div>
                <div className="author-info">
                  <div className="author-name">David Rodriguez</div>
                  <div className="author-title">Open Source Contributor</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;