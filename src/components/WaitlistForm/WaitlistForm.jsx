import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { FiMail } from 'react-icons/fi';
import './WaitlistForm.css';

const WaitlistForm = ({ email, setEmail, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return;
    setIsSubmitting(true);
    try {
      console.log('Email submitted:', email);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onSuccess();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="cta-form" noValidate>
      <div className="input-group">
        <FiMail className="input-icon" />
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email Address"
          isInvalid={email && !validateEmail(email)}
        />
      </div>
      <Button variant="primary" type="submit" disabled={isSubmitting || (email && !validateEmail(email))}>
        {isSubmitting ? (
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        ) : (
          'Join the Waitlist'
        )}
      </Button>
    </Form>
  );
};

export default WaitlistForm;