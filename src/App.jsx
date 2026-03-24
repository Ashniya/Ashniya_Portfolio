import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Achievements from './sections/Achievements';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import ClickSpark from './components/ClickSpark';
import SkillsSidebar from './components/SkillsSidebar';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  // Touch handlers for global swipe-left detection
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const touchEndY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    // Calculate distance traveled (Positive = swiped Right [Left-to-Right])
    const distanceX = touchEndX.current - touchStartX.current; 
    const distanceY = Math.abs(touchStartY.current - touchEndY.current);
    
    // If predominantly horizontal and swiped enough
    if (Math.abs(distanceX) > 50 && Math.abs(distanceX) > distanceY) {
      if (distanceX > 0 && !isSkillsOpen) {
        // Swipe Left-to-Right: Open the sidebar
        setIsSkillsOpen(true);
      } else if (distanceX < 0 && isSkillsOpen) {
        // Swipe Right-to-Left: Close the sidebar
        setIsSkillsOpen(false);
      }
    }

    // Reset
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };


  return (
    <ClickSpark sparkColor="#8EACCD" sparkSize={12} sparkRadius={24} sparkCount={10}>
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
      {!loading && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-black min-h-screen relative overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main App Container that shrinks */}
          <div 
            className={`relative w-full min-h-screen transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] bg-[#0F172A] origin-center shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
              isSkillsOpen 
                ? 'scale-[0.93] -translate-x-[20vw] md:-translate-x-[15vw] rounded-[2.5rem] opacity-60 pointer-events-none blur-[2px] overflow-hidden' 
                : ''
            }`}
          >
            <Navbar onSkillsClick={() => setIsSkillsOpen(true)} isSkillsOpen={isSkillsOpen} />
            <main>
              <Home />
              <About />
              <Skills onOpenSkills={() => setIsSkillsOpen(true)} />
              <Projects />
              <Certificates />
              <Achievements />
              <Resume />
              <Contact />
            </main>
          </div>

          {/* Sidebar Component */}
          <SkillsSidebar isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
        </motion.div>
      )}
    </ClickSpark>
  );
}

export default App;
