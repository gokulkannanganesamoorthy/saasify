import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { BentoGrid } from './components/sections/BentoGrid';
import { Pricing } from './components/sections/Pricing';
import { VelocityScroll } from './components/sections/VelocityScroll';
import { FAQ } from './components/sections/FAQ';
import { HeroParallax } from './components/sections/HeroParallax';
import { Footer } from './components/layout/Footer';
import { LeadCapture } from './components/forms/LeadCapture';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [isLeadCaptureOpen, setIsLeadCaptureOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30">
        <Navbar onOpenModal={() => setIsLeadCaptureOpen(true)} />
        <main>
          <Hero onOpenModal={() => setIsLeadCaptureOpen(true)} />
          <BentoGrid />
          <Pricing />
          <VelocityScroll />
          <HeroParallax />
          <FAQ />
        </main>
        <Footer />
        <LeadCapture
          isOpen={isLeadCaptureOpen}
          onClose={() => setIsLeadCaptureOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
