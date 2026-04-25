import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto px-6">
      <SectionHeading title="Selected Works" subtitle="Portfolio" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group relative p-8 rounded-3xl glass-morphism overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-800 via-neutral-100 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-neutral-800 group-hover:bg-neutral-100 transition-colors">
                <Github 
                  className="text-white group-hover:text-black transition-colors" 
                  size={24} 
                />
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                title="View Source"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-400 mb-6 font-light leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.split(', ').map((t) => (
                <span 
                  key={t} 
                  className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500"
                >
                  {t}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-bold text-white hover:gap-2 transition-all"
              >
                Repo Details <span className="ml-1 opacity-0 group-hover:opacity-100 transition-all font-serif">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
