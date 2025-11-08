import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTASection from './components/CTASection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}
