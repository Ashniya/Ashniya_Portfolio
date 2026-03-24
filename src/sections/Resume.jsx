import Section from '../components/Section';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function Resume() {
  return (
    <Section id="resume" className="bg-white/50 dark:bg-black/20 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Styled Title */}
        <div className="text-center mb-12 md:mb-20 pointer-events-auto">
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-normal tracking-tighter uppercase leading-none text-white flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8">
            <span className="tracking-widest">RESU</span>
            <span className="font-serif italic text-gradient">ME</span>
          </h2>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mb-10 text-center"
        >
          Want to know more about my experience and education? Download my full resume to get all the details.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="/Ashniya_CV.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-200 text-gray-900 rounded-full font-black text-lg transition-all shadow-2xl hover:-translate-y-2 active:scale-95 no-underline cursor-pointer uppercase tracking-widest"
        >
          <FileText size={24} />
          View & Download Resume
        </motion.a>
      </div>
    </Section>
  );
}
