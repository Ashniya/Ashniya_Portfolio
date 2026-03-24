import React from 'react';
import { motion } from 'motion/react';

export default function Section({ id, title, children, className = "", background }) {
  return (
    <section
      id={id}
      className={`min-h-screen py-24 flex flex-col justify-center items-center overflow-x-hidden relative ${className}`}
    >
      {background && (
        <div className="absolute inset-0 z-0">
          {background}
        </div>
      )}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6 max-w-5xl w-full relative z-10"
      >
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient drop-shadow-[0_0_15px_rgba(142,172,205,0.2)]">
            {title}
          </h2>
        )}
        <div className="w-full relative">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
