import React, { useState, useEffect } from 'react';
import { Home, Settings, Briefcase, Award, Trophy, FileText, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'Skills', icon: Settings, href: '#skills' },
  { name: 'Projects', icon: Briefcase, href: '#projects' },
  { name: 'Certificates', icon: Award, href: '#certificates' },
  { name: 'Achievements', icon: Trophy, href: '#achievements' },
  { name: 'Resume', icon: FileText, href: '#resume' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export default function Navbar({ onSkillsClick }) {
  const [activeItem, setActiveItem] = useState('#home');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show only when at the very top (Home page)
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // Otherwise, depend on mouse position (handled in handleMouseMove)
        setIsVisible(false);
      }
    };

    const handleMouseMove = (e) => {
      // Show when mouse touches the top of the viewport (top 100px)
      if (e.clientY <= 100) {
        setIsVisible(true);
      } else if (window.scrollY >= 50) {
        // Hide if we are not at the top and mouse leaves the top area
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScroll = (href) => {
    setActiveItem(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 transition-all duration-500 ease-in-out ${isVisible ? 'top-6' : '-top-32'}`}>
      <nav className="bg-nav-bg text-nav-text rounded-[2rem] py-3 px-6 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-md">

        {/* Profile / Brand */}
        <div className="flex items-center gap-3 pl-2">
          <span className="text-white font-bold text-xl tracking-wide hidden sm:block animate-[appearSlide_0.8s_ease-out_forwards] glance-text animate-[glance_3s_infinite_linear]">
            Ashniya
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-1 origin-bottom overflow-x-auto no-scrollbar scroll-smooth px-1 sm:px-2 mx-2 flex-1 justify-center md:justify-start">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.25, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === '#skills') {
                    onSkillsClick?.();
                  } else {
                    handleScroll(item.href);
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeItem === item.href
                  ? 'bg-white/10 text-white'
                  : 'hover:text-nav-text-hover hover:bg-white/5'
                  }`}
              >
                <item.icon size={16} className={activeItem === item.href ? "opacity-100 shrink-0" : "opacity-70 shrink-0"} />
                <span className="whitespace-nowrap">{item.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 origin-bottom shrink-0 pb-1">
          <div className="w-2" /> {/* Subtle spacing adjustment */}
        </div>
      </nav>
    </div>
  );
}
