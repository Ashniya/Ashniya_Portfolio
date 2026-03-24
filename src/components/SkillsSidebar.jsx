import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Sparkles } from 'lucide-react';
import AnimatedList from './AnimatedList';
import FlowingMenu from './FlowingMenu';

const categories = [
  { 
    title: "Languages", 
    tools: [
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "Java", slug: "openjdk" },
      { name: "JS", slug: "javascript" },
      { name: "Python", slug: "python" },
      { name: "PHP", slug: "php" }
    ]
  },
  { 
    title: "Frameworks & Libs", 
    tools: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "React", slug: "react" },
      { name: "Express", slug: "express" },
      { name: "Laravel", slug: "laravel" }
    ]
  },
  { 
    title: "Tools & Platforms", 
    tools: [
      { name: "MySQL", slug: "mysql" },
      { name: "Linux", slug: "linux" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Cloudinary", slug: "cloudinary" },
      { name: "Firebase", slug: "firebase" },
      { name: "Docker", slug: "docker" }
    ]
  },
  { 
    title: "Databases", 
    tools: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "Atlas", slug: "mongodb" }
    ]
  }
];

const softSkills = ["Problem-Solving", "Self-Learning Ability", "Adaptability", "Time Management"];

export default function SkillsSidebar({ isOpen, onClose }) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const menuItems = categories.map(cat => ({
    text: cat.title,
    tools: cat.tools
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay to catch clicks outside the sidebar when open (mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] cursor-pointer bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-[100dvh] w-full sm:w-[450px] md:w-[35vw] min-w-[320px] bg-[#0A0A0A] z-[100] shadow-[-20px_0_100px_rgba(0,0,0,0.9)] border-l border-white/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 bg-[#0A0A0A]/80 backdrop-blur-md px-8 py-8 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-2">
                  <Sparkles size={24} className="text-[#3B82F6]" />
                  Skills <span className="text-[#3B82F6]">Arsenal</span>
                </h2>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mt-1">Technical Stack Overview</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-90 border border-white/5"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Scrollable */}
            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
              
              {/* Technical Skills Marquee/Flash Menu */}
              <div className="py-2 border-b border-white/5">
                <FlowingMenu 
                  items={menuItems}
                  textColor="white"
                  marqueeBgColor="rgba(59, 130, 246, 0.15)"
                  marqueeTextColor="#fff"
                  borderColor="rgba(255,255,255,0.03)"
                />
              </div>

              {/* Soft Skills Section */}
              <div className="p-8 pb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                    <User size={20} />
                  </div>
                  <h3 className="text-sm font-black text-gray-300 uppercase tracking-[0.2em]">Soft Skills</h3>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6">
                  <AnimatedList items={softSkills} displayScrollbar={false} />
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
