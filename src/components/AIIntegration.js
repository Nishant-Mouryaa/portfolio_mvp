import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AIIntegration = ({ onGenerate }) => {
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
    // Simulated API call
    // In a real scenario, make a fetch/axios call to your AI endpoint.
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ text: 'This is an AI-generated bio based on your input.' }), 1000)
    );
    setGeneratedText(response.text);
    onGenerate(response.text);
  };

  return (
    <div className="mb-3">
      <Button variant="info" onClick={handleGenerate}>
        Generate Bio
      </Button>
      {generatedText && (
        <Form.Group className="mt-2">
          <Form.Label>AI-Generated Bio</Form.Label>
          <Form.Control as="textarea" rows={3} value={generatedText} onChange={(e) => setGeneratedText(e.target.value)} />
        </Form.Group>
      )}
    </div>
  );
};

export default AIIntegration;
