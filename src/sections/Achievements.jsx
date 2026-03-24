import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import Section from '../components/Section';
import { X, ChevronRight, ChevronLeft, Award } from 'lucide-react';
import RippleGrid from '../components/RippleGrid';

// Import local assets
import softEngCert from '../assets/achievements/Software Engineering Job Simulation.png';
import awsArchCert from '../assets/achievements/Solutions Architecture Job Simulation (Forage).png';

const TiltImage = ({ src, alt }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1500,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="max-w-full max-h-[60vh] object-contain shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-2xl border border-white/10"
      />
      {/* Shine effect */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateX: useTransform(mouseX, [-0.5, 0.5], [-50, 50]),
          translateY: useTransform(mouseY, [-0.5, 0.5], [-50, 50]),
          opacity: useTransform(dist => 0.2 - dist, [0, 0.5], [0.2, 0]),
        }}
        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 to-transparent blur-2xl rounded-2xl"
      />
    </motion.div>
  );
};

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      title: "Software Engineering Job Simulation",
      org: "Hewlett Packard Enterprise",
      description: "Completed the virtual simulation by designing RESTful APIs, developing a Spring Boot application, and executing unit tests to ensure functionality.",
      date: "Nov’ 25",
      image: softEngCert
    },
    {
      title: "Solutions Architecture Job Simulation",
      org: "AWS APAC",
      description: "Practiced real-world cloud solution design by architecting scalable systems, integrating key AWS services, and planning cost-efficient deployments.",
      date: "Jun’ 25",
      image: awsArchCert
    }
  ];

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const current = achievements[currentIndex];

  return (
    <Section id="achievements" className="relative overflow-hidden py-16 bg-[#0F172A] min-h-[85vh] flex flex-col items-center">
      
      {/* Background RippleGrid */}
      <RippleGrid 
        gridColor="#8EACCD" 
        rippleIntensity={0.05} 
        gridSize={10.0} 
        gridThickness={12.0}
        glowIntensity={0.3}
        opacity={0.3}
      />

      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-30 flex flex-col items-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 mb-4">
            Recognition & Milestones
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter font-sans uppercase">
            ACHIEVEMENTS
          </h1>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        
        <div className="relative z-10 w-full flex items-center justify-between">
          
          <button
            onClick={prevAchievement}
            className="p-4 md:p-8 text-white/5 hover:text-white transition-all transform hover:scale-125"
          >
            <ChevronLeft size={56} strokeWidth={0.5} />
          </button>

          {/* Achievement Content */}
          <div className="flex-1 max-w-4xl text-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col items-center"
              >
                {/* Badge with Glow */}
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="mb-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl relative group"
                >
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-white/60 font-black tracking-[0.4em] text-[10px] uppercase">
                    {current.org}
                  </span>
                </motion.div>

                {/* Achievement Title - With Split Text Animation feel */}
                <motion.h3 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight font-sans"
                >
                  {current.title.split(' ').map((word, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h3>

                {/* Info Text */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  className="mb-10 text-white font-medium tracking-[0.8em] text-[11px] uppercase italic"
                >
                  — {current.date} —
                </motion.div>

                {/* Primary Action Only */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAchievement(current)}
                  className="group relative px-16 py-5 bg-white text-black font-black rounded-full transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <span className="relative flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                    View Achievement
                    <ChevronRight size={16} />
                  </span>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextAchievement}
            className="p-4 md:p-8 text-white/5 hover:text-white transition-all transform hover:scale-125"
          >
            <ChevronRight size={56} strokeWidth={0.5} />
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-16 flex gap-3">
          {achievements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="group py-4"
            >
              <motion.div 
                animate={{ 
                  width: idx === currentIndex ? 60 : 12,
                  backgroundColor: idx === currentIndex ? "#ffffff" : "rgba(255,255,255,0.1)",
                }}
                className="h-1 rounded-full transition-all duration-500 group-hover:bg-white/40"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Certificate Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-[50px] bg-black/90"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative max-w-6xl w-full bg-[#0F172A]/80 rounded-[48px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-8 right-8 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all hover:scale-110 active:scale-90"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full lg:max-h-[85vh]">
                {/* Image Section with 3D Tilt */}
                <div className="lg:w-[60%] p-10 md:p-16 flex items-center justify-center bg-black/40">
                   <TiltImage 
                      src={selectedAchievement.image} 
                      alt={selectedAchievement.title} 
                    />
                </div>
                
                {/* Details Section */}
                <div className="lg:w-[40%] p-12 md:p-16 flex flex-col justify-center bg-gradient-to-br from-transparent to-white/5">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 p-4 bg-white/5 rounded-2xl w-fit"
                  >
                    <Award size={48} className="text-white/40" strokeWidth={1} />
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight font-sans"
                  >
                    {selectedAchievement.title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-white mb-10 leading-relaxed font-sans font-light"
                  >
                    {selectedAchievement.description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6 pt-10 border-t border-white/10"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Authority</span>
                      <span className="text-xl font-medium text-white/90 font-sans">{selectedAchievement.org}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Completion Date</span>
                      <span className="text-xl font-medium text-white/90 font-sans">{selectedAchievement.date}</span>
                    </div>
                  </motion.div>

                  {/* Mobile Close Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => setSelectedAchievement(null)}
                    className="mt-10 lg:hidden w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl"
                  >
                    Close Achievement
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
