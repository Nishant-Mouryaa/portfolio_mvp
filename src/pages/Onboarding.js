import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Onboarding = () => {
  const [formData, setFormData] = useState({
    name: '',
    headline: '',
    bio: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGitHubConnect = () => {
    // Simulate fetching data from GitHub
    setFormData({
      name: 'John Doe',
      headline: 'Full-Stack Developer',
      bio: 'Passionate about building impactful software.',
      skills: 'JavaScript, React, Node.js',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to backend for saving
    console.log('Onboarding data:', formData);
  };

  return (
    <Container className="mt-5">
      <h2>Set Up Your Portfolio</h2>
      <Button variant="secondary" onClick={handleGitHubConnect} className="mb-3">
        Connect GitHub
      </Button>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="headline">
          <Form.Label>Headline</Form.Label>
          <Form.Control name="headline" value={formData.headline} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control as="textarea" name="bio" value={formData.bio} onChange={handleChange} rows={3} required />
        </Form.Group>
        <Form.Group controlId="skills">
          <Form.Label>Skills</Form.Label>
          <Form.Control name="skills" value={formData.skills} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save & Continue
        </Button>
      </Form>
    </Container>
  );
};

export default Onboarding;
