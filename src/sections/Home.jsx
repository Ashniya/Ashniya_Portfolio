import React, { useRef } from 'react';
import Section from '../components/Section';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import TextPressure from '../components/TextPressure';
import VariableProximity from '../components/VariableProximity';
import LiquidEther from '../components/LiquidEther';

export default function Home() {
  const containerRef = useRef(null);

  const orbitIcons = [
    { icon: Mail, label: "Email", angle: -45, href: "mailto:ashniyaalosious@gmail.com" },
    { icon: Github, label: "Github", angle: -15, href: "https://github.com/Ashniya" },
    { icon: Linkedin, label: "LinkedIn", angle: 15, href: "https://www.linkedin.com/in/ashniya-alosious" },
    { icon: Twitter, label: "Twitter", angle: 45, href: "#contact" }, // Keeping twitter as a link to contact section until provided
  ];

  return (
    <Section id="home" className="relative" background={
      <LiquidEther
        mouseForce={15}
        cursorSize={80}
        BFECC={true}
        resolution={0.4}
        isBounce={false}
        className="opacity-30" // Adjust opacity as needed
      />
    }>
      <div 
        ref={containerRef}
        className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 pt-20 lg:-translate-x-8 xl:-translate-x-16 relative z-10 pointer-events-none"
      >
        <div className="lg:w-3/5 text-center lg:text-left space-y-4 pointer-events-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl font-bold tracking-widest text-gray-500 uppercase"
          >
            Hi I'm
          </motion.p>
          <div className="relative inline-block w-max">
            <motion.h1 
              initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
              whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "linear" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight whitespace-nowrap py-1 pr-2"
            >
              <VariableProximity
                label="Ashniya"
                className="text-gradient pr-2 md:pr-4"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={120}
              />
              <VariableProximity
                label="Alosious"
                className="text-gray-100 drop-shadow-sm"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={120}
              />
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-12 md:h-16 lg:h-20 relative text-gray-200 mt-2"
          >
            <TextPressure
              text="Aspiring Full Stack Developer"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="currentColor"
              minFontSize={20}
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-gray-300 max-w-2xl"
          >
            <VariableProximity
              label="Welcome to my digital playground — where code meets creativity. I craft responsive frontends & build efficient backends, constantly learning and refining my craft."
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 800"
              containerRef={containerRef}
              radius={80}
            />
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="px-8 py-3 bg-white hover:bg-gray-200 text-gray-900 rounded-full font-semibold transition-colors">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-brand-dark-3/50 hover:bg-brand-dark-3/80 text-white rounded-full font-semibold transition-colors border border-gray-700">
              Get In Touch
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:flex lg:w-2/5 justify-center mt-16 lg:mt-0 relative">

          {/* Main Avatar Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-tr from-brand-light-1 to-brand-light-4 shadow-2xl overflow-hidden border-[6px] border-brand-dark-2 z-10 box-border"
          >
            {/* Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-8xl font-black text-white/50 bg-brand-dark-3/50">
              A
            </div>
          </motion.div>

          {/* Curved track guide and Orbit Icons Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-1/2 w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border-r-[2px] border-brand-dark-4/60 pointer-events-none z-20">
            {orbitIcons.map((item, idx) => (
              <div
                key={idx}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ transform: `rotate(${item.angle}deg)` }}
              >
                {/* Isolate translation translation to properly center on circle edge */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : "_self"}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                    title={item.label}
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-brand-dark-2 text-gray-200 rounded-full shadow-lg border border-gray-700 hover:scale-110 hover:text-brand-light-1 transition-transform pointer-events-auto"
                    style={{ transform: `rotate(${-item.angle}deg)` }}
                  >
                    <item.icon size={22} className="m-auto" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
