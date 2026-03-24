import React from 'react';
import Section from '../components/Section';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Globe, BookOpen, Music, Sparkles } from 'lucide-react';
import LiquidEther from '../components/LiquidEther';

export default function About() {
  const cardClass = "bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)]";

  return (
    <Section id="about" className="pt-20 relative" background={
      <LiquidEther
        mouseForce={15}
        cursorSize={80}
        BFECC={true}
        resolution={0.4}
        isBounce={false}
        className="opacity-30" // Adjust opacity as needed
      />
    }>
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 pointer-events-none">
        <div className="text-center mb-12 md:mb-20 pointer-events-auto">
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-normal tracking-tighter uppercase leading-none text-white flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8">
            <span className="tracking-widest">ABOUT</span>
            <span className="font-serif italic text-gradient">ME</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 pointer-events-auto">

          {/* Row 1 */}

          {/* Education (Left, 40%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-2 h-full flex flex-col ${cardClass}`}
          >
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Education</h3>
            <div className="space-y-4 flex-1 flex flex-col justify-center">

              {/* LPU */}
              <div className="flex flex-col gap-1 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-1">
                  <h4 className="font-bold text-white text-sm leading-tight">Lovely Professional University</h4>
                  <span className="text-[10px] text-brand-light-1 font-bold whitespace-nowrap bg-brand-light-1/10 px-2 py-1 rounded-full uppercase tracking-wider w-fit">Aug '23 - Present</span>
                </div>
                <p className="text-xs text-gray-400 font-medium line-clamp-1">B.Tech - CSE <span className="mx-1 opacity-50">•</span> Phagwara, Punjab</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">CGPA</span>
                  <span className="text-xs font-bold text-white bg-black/20 px-2 py-0.5 rounded-md border border-white/5">7.0</span>
                </div>
              </div>

              {/* Gov HSS */}
              <div className="flex flex-col gap-1 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-1">
                  <h4 className="font-bold text-white text-sm leading-tight">Gov. HSS Ernakulam</h4>
                  <span className="text-[10px] text-brand-light-1 font-bold whitespace-nowrap bg-brand-light-1/10 px-2 py-1 rounded-full uppercase tracking-wider w-fit">Jun '20 - May '22</span>
                </div>
                <p className="text-xs text-gray-400 font-medium line-clamp-1">Intermediate <span className="mx-1 opacity-50">•</span> Kochi, Kerala</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Percentage</span>
                  <span className="text-xs font-bold text-white bg-black/20 px-2 py-0.5 rounded-md border border-white/5">82%</span>
                </div>
              </div>

              {/* SBOA */}
              <div className="flex flex-col gap-1 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-1">
                  <h4 className="font-bold text-white text-sm leading-tight">S.B.O.A Public (Sr.Sec.) School</h4>
                  <span className="text-[10px] text-brand-light-1 font-bold whitespace-nowrap bg-brand-light-1/10 px-2 py-1 rounded-full uppercase tracking-wider w-fit">Jun '19 - May '20</span>
                </div>
                <p className="text-xs text-gray-400 font-medium line-clamp-1">Matriculation <span className="mx-1 opacity-50">•</span> Kochi, Kerala</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Percentage</span>
                  <span className="text-xs font-bold text-white bg-black/20 px-2 py-0.5 rounded-md border border-white/5">82%</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* My Journey (Right, 60%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`lg:col-span-3 h-full flex flex-col ${cardClass}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-light-1">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-medium flex-1">
              <p>
                Hello! I'm <span className="font-bold text-white">Ashniya Alosious</span>, a passionate developer with a deep fascination for transforming complex problems into elegant digital solutions.
              </p>
              <p>
                My journey in tech began with curious exploration and has evolved into a focused expertise in full-stack development. I specialize in crafting responsive, user-centered applications using React, Node.js, and modern cloud infrastructure.
              </p>
              <p>
                What drives me is the intersection of technology and creativity—finding that perfect balance between functional code and intuitive design. I'm constantly expanding my skills through hands-on projects and keeping up with emerging technologies.
              </p>
            </div>
          </motion.div>

          {/* Row 2 */}

          {/* My Approach (Left, 60%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`lg:col-span-3 h-full flex flex-col ${cardClass}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-light-1">My Approach</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-medium flex-1">
              <p>
                I believe in creating technology that's not just functional but meaningful. Every line of code I write aims to solve real problems and enhance user experiences. I value clean architecture, collaborative development, and continuous learning as the foundations of great software.
              </p>
            </div>
          </motion.div>

          {/* When I'm Not Coding (Right, 40%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`lg:col-span-2 h-full flex flex-col ${cardClass}`}
          >
            <h3 className="text-xl font-bold mb-6 text-white">When I'm Not Coding</h3>
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                <BookOpen size={18} className="text-brand-light-1" />
                <span className="text-sm font-semibold text-gray-300">Reading</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                <Sparkles size={18} className="text-brand-light-1" />
                <span className="text-sm font-semibold text-gray-300">Dancing</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                <Music size={18} className="text-brand-light-1" />
                <span className="text-sm font-semibold text-gray-300">Music</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
