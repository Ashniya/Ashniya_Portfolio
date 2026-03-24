import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const number = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div 
      className="min-w-[280px] md:min-w-[380px] lg:min-w-[450px] h-[400px] md:h-[500px] snap-center px-3 relative group"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-full w-full rounded-3xl overflow-hidden bg-brand-dark-3 shadow-2xl border border-gray-800 flex flex-col">
        {/* Background Number */}
        <div className="absolute top-[-20px] left-[-20px] text-[150px] md:text-[200px] font-bold text-white/5 select-none pointer-events-none z-0">
          {number}
        </div>

        {/* Image Section */}
        <div className="h-2/5 md:h-1/2 w-full overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex-grow flex flex-col justify-between z-10 bg-brand-dark-3/80 backdrop-blur-md">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-[10px] md:text-xs font-medium bg-white/10 text-gray-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-brand-light-4 transition-colors">
                  <Github size={20} className="text-white" />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-brand-light-4 transition-colors">
                  <ExternalLink size={20} className="text-white" />
                </a>
              )}
            </div>
            
            <button className="text-sm font-bold border-b-2 border-brand-light-1 pb-1 hover:text-brand-light-1 transition-colors">
              VIEW CASE
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
