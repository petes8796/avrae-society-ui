import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-jet text-cream font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
