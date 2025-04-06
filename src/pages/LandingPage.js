import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ValueSection from '../components/ValueSection/ValueSection';
import ProcessSection from '../components/ProcessSection/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import Footer from '../components/Footer/Footer';
import '../styles/base.css';
import '../styles/variables.css';
import '../styles/animations.css';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="landing-page">
      <HeroSection email={email} setEmail={setEmail} submitted={submitted} setSubmitted={setSubmitted} />
      <ValueSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA email={email} setEmail={setEmail} submitted={submitted} setSubmitted={setSubmitted} />
      <Footer />
    </div>
  );
};

export default LandingPage;