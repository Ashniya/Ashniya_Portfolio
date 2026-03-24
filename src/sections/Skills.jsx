import React from 'react';
import Section from '../components/Section';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Skills({ onOpenSkills }) {
  return (
    <Section id="skills" className="relative !min-h-[40vh] py-10 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center pointer-events-auto flex flex-col justify-center items-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={onOpenSkills}
          className="group text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-white uppercase flex items-center justify-center gap-4 md:gap-8 transition-colors pointer-events-auto leading-none w-full whitespace-normal"
        >
          Explore my tech arsenal
          <ArrowRight className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 group-hover:translate-x-6 transition-transform duration-500 text-brand-light-1" />
        </motion.button>
      </div>
    </Section>
  );
}
