import { PERSONAL_DETAILS } from '../constants';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-900 bg-neutral-950 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-display font-bold tracking-tighter text-white mb-2">
            {PERSONAL_DETAILS.name}
          </span>
          <p className="text-neutral-500 text-sm font-medium">
            IT Student @ Panimalar Engineering College
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="text-neutral-500 text-sm font-medium mb-4">
            &copy; {currentYear} {PERSONAL_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a 
              href={PERSONAL_DETAILS.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:text-neutral-400 transition-colors"
            >
              Github
            </a>
            <a 
              href={PERSONAL_DETAILS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:text-neutral-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${PERSONAL_DETAILS.email}`} 
              className="text-white hover:text-neutral-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        className="text-[12vw] font-display font-black tracking-tighter text-white text-center mt-12 pointer-events-none select-none uppercase whitespace-nowrap overflow-hidden"
      >
        {PERSONAL_DETAILS.name} • PORTFOLIO • 2026
      </motion.div>
    </footer>
  );
}
