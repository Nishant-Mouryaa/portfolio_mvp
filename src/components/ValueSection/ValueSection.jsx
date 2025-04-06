import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiZap, FiGithub, FiLayout } from 'react-icons/fi';
import './ValueSection.css';

const ValueSection = () => {
  const features = [
    {
      icon: <FiZap className="feature-icon" />,
      title: 'AI-Generated Content',
      description: 'Auto-generated bios and project descriptions tailored to your skills.'
    },
    {
      icon: <FiGithub className="feature-icon" />,
      title: 'GitHub Integration',
      description: 'Import your projects and display your work seamlessly.'
    },
    {
      icon: <FiLayout className="feature-icon" />,
      title: 'Customizable Templates',
      description: 'Choose from multiple modern designs for developers and freelancers.'
    }
  ];

  return (
    <section className="value-section">
      <Container>
        <div className="section-header">
          <h2>Why Choose Our Portfolio Builder</h2>
          <p className="section-subtitle">Everything you need to showcase your work professionally</p>
        </div>
        <Row className="feature-cards">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="feature-card">
                <div className="feature-icon-container">{feature.icon}</div>
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ValueSection;