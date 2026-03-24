import React, { useRef } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import SplashCursor from '../components/SplashCursor';
import { motion, useScroll, useTransform } from 'motion/react';
import scribeImg from '../assets/projects/scribe.png';
import taskMasterImg from '../assets/projects/taskmaster.png';

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const projects = [
    { 
      title: "Scribe – A Blogging Website", 
      desc: "A full-stack blogging platform designed to enable users to publish content, interact with other creators, and build a social presence. Supports blog creation, likes, comments, and user-following.", 
      tags: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Firebase", "Cloudinary"],
      image: scribeImg,
      github: "https://github.com/Ashniya/Scribe", // Add real links if available
      demo: "#"
    },
    { 
      title: "TaskMaster – Full-Stack Task Management", 
      desc: "A task management web application that helps users organize, track, and analyze their daily activities through an intuitive and interactive interface. Improves task organization and productivity.", 
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      image: taskMasterImg,
      github: "https://github.com/raushan165/Taskpilot",
      demo: "#"
    }
  ];

  return (
    <Section id="projects" className="relative overflow-hidden">
      {/* Background Fluid Effect */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <SplashCursor />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tighter text-white">
            PRO<span className="text-brand-light-1">JECTS</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-right from-brand-light-1 to-brand-light-4 rounded-full" />
          <p className="mt-8 text-gray-400 text-lg md:text-xl font-medium tracking-wide uppercase">
            Curated Works & Technical Implementations
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Horizontal Slider Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-8 px-4 md:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
          
          {/* Spacer for better scrolling feel at the end */}
          <div className="min-w-[100px] md:min-w-[200px] shrink-0" />
        </div>

        {/* Scroll Indicator / Instruction */}
        <div className="flex justify-center mt-6 items-center gap-4 text-gray-400">
          <span className="text-xs uppercase tracking-widest animate-pulse font-bold">swipe to explore</span>
          <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-light-1"
              style={{ width: useTransform(scrollXProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
