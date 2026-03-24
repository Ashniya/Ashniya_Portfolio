import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import Section from '../components/Section';
import { Award, X, Maximize2, ChevronRight, ChevronLeft, Github } from 'lucide-react';
import SplashCursor from '../components/SplashCursor';

// Import images
import skillcraftImg from '../assets/certificate/skillcraft.png';
import oasisImg from '../assets/certificate/oasis.png';
import nptelImg from '../assets/certificate/nptel.png';

const CertificateCard = ({ cert, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="min-w-[320px] md:min-w-[400px] snap-center group"
    >
      <div className="bg-slate-800/80 backdrop-blur-md rounded-[32px] overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 hover:shadow-indigo-500/10 hover:-translate-y-2 flex flex-col h-[500px]">
        {/* Image Container */}
        <div className="relative h-2/3 overflow-hidden bg-slate-900/50 flex items-center justify-center p-4">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <button
            onClick={() => onClick(cert)}
            className="absolute bottom-6 right-6 p-4 bg-slate-800/90 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-light-1 hover:text-gray-900"
          >
            <Maximize2 size={24} />
          </button>
        </div>

        {/* Info Section */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-8 bg-brand-light-1 rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-light-1">
                Certification
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black font-serif text-white leading-tight mb-2 group-hover:text-indigo-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-slate-400 font-serif italic text-lg leading-snug">
              {cert.issuer}
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {cert.date}
            </span>
            <Award size={24} className="text-slate-600 group-hover:text-amber-500 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const containerRef = useRef(null);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const certificates = [
    {
      title: "AICTE OIB-SIP Internship",
      description: "Developed Level-2 web applications (Calculator, Portfolio, Login Auth) with a 70% increase in responsiveness. Focused on event-driven logic, CRUD mechanisms, and precise input handling for stable cross-screen behavior.",
      date: "Aug’ 25",
      issuer: "Oasis Infobyte",
      image: oasisImg,
      github: "https://github.com/Ashniya/Oasis-Infobyte"
    },
    {
      title: "Web Development Internship",
      description: "Crafted interactive applications (Stopwatch, Tic-Tac-Toe, To-Do App) using Tailwind CSS and JavaScript. Increased accessibility by 65% through responsive design patterns and streamlined UI workflows.",
      date: "Jul’ 25",
      issuer: "Skill Craft Technology",
      image: skillcraftImg,
      github: "https://github.com/Ashniya/SCT_TrackCode_Task04"
    },
    {
      title: "Cloud Computing",
      description: "NPTEL Online Certification covering cloud architecture, virtualization, and distributed systems management.",
      date: "May’ 25",
      issuer: "NPTEL",
      image: nptelImg
    }
  ];

  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Section id="certificates" className="relative overflow-hidden py-24 bg-slate-900 leading-none">
      {/* Dynamic Background with SplashCursor */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <SplashCursor />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="relative w-full max-w-7xl mx-auto mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tighter text-white">
              CERTIFI<span className="text-brand-light-1">CATES</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-right from-brand-light-1 to-brand-light-4 rounded-full" />
            <p className="mt-8 text-gray-400 text-lg md:text-xl font-medium tracking-wide uppercase text-center max-w-2xl">
              Official Technical Milestones & Professional Training
            </p>
          </motion.div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-slate-800 hover:bg-slate-800 transition-all shadow-sm hover:shadow-xl group"
            >
              <ChevronLeft size={24} className="text-slate-400 group-hover:text-indigo-500" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-slate-800 hover:bg-slate-800 transition-all shadow-sm hover:shadow-xl group"
            >
              <ChevronRight size={24} className="text-slate-400 group-hover:text-indigo-500" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="relative group">
          <div
            ref={containerRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 pb-12 cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'smooth' }}
          >
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                cert={cert}
                index={index}
                onClick={setSelectedCert}
              />
            ))}
            {/* Spacer for scroll landing */}
            <div className="min-w-[50px] md:min-w-[150px] shrink-0" />
          </div>

          {/* Progress Bar */}
          <div className="absolute -bottom-4 left-0 w-full flex flex-col items-center gap-4">
            <div className="h-1 w-48 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                style={{ width: useTransform(scrollXProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 animate-pulse">
              Swipe to explore
            </span>
          </div>
        </div>
      </div>

      {/* Full-screen Modal (Lightbox) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-start md:items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-slate-900/80 overflow-y-auto overflow-x-hidden"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative max-w-6xl w-full bg-slate-900 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/20 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-8 right-8 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:rotate-90 group"
              >
                <X size={24} className="text-white group-hover:text-indigo-500" />
              </button>

              <div className="flex flex-col lg:flex-row h-full min-h-[60vh]">
                <div className="lg:w-[65%] bg-black/40 p-12 flex items-center justify-center">
                  <motion.img
                    layoutId={`cert-${selectedCert.title}`}
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[70vh] object-contain shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-xl"
                  />
                </div>
                <div className="lg:w-[35%] p-12 md:p-16 flex flex-col justify-center bg-slate-900">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/10 rounded-2xl mb-8">
                    <Award size={32} className="text-indigo-400" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black font-serif text-white mb-6 leading-[1.1]">
                    {selectedCert.title}
                  </h2>
                  <p className="text-xl text-slate-400 mb-10 font-serif leading-relaxed italic">
                    {selectedCert.description}
                  </p>

                    <div className="space-y-6 pt-8 border-t border-slate-800">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-2">Issued By</span>
                        <span className="text-2xl font-bold text-white tracking-tight">{selectedCert.issuer}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-2">Completion Date</span>
                        <span className="text-2xl font-bold text-white tracking-tight">{selectedCert.date}</span>
                      </div>
                      
                      {selectedCert.github && (
                        <div className="pt-6">
                          <a 
                            href={selectedCert.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold text-xs uppercase tracking-widest transition-all group w-full justify-center lg:w-fit"
                          >
                            <Github size={18} className="group-hover:text-brand-light-1" />
                            Project Repository
                          </a>
                        </div>
                      )}
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
