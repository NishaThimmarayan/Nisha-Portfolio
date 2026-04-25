import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants';

export default function Skills() {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="section-padding bg-neutral-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Technical Skills" subtitle="My Expertise" align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-morphism"
            >
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest flex items-center">
                <span className="w-8 h-[1px] bg-neutral-500 mr-3" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl bg-neutral-800/50 border border-neutral-700/30 text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-500 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
