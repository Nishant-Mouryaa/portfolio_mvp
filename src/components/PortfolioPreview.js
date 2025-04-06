import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PortfolioPreview = ({ data }) => {
  const { name, headline, bio, skills } = data;

  return (
    <Container className="mt-5 border p-4">
      <Row>
        <Col>
          <section className="mb-4">
            <h1>{name || 'Your Name'}</h1>
            <h4>{headline || 'Your Headline'}</h4>
          </section>
          <section className="mb-4">
            <h3>About Me</h3>
            <p>{bio || 'Your bio will appear here.'}</p>
          </section>
          <section className="mb-4">
            <h3>Skills</h3>
            <p>{skills || 'List your skills here.'}</p>
          </section>
          <section>
            <h3>Projects</h3>
            <p>Projects will be listed here.</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioPreview;
