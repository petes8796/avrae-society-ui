import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App(){
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
