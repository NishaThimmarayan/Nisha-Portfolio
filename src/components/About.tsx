import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { ABOUT_TEXT } from '../constants';
import { GraduationCap, Trophy, Laptop } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'CGPA', value: ABOUT_TEXT.cgpa, icon: GraduationCap },
    { label: 'Student Core', value: 'IT Major', icon: Laptop },
    { label: 'Certifications', value: '5+', icon: Trophy },
  ];

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto px-6">
      <SectionHeading title="About Me" subtitle="My Journey" />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xl text-neutral-300 leading-relaxed font-light">
            Currently specializing in <span className="text-white font-medium">{ABOUT_TEXT.institution}</span> with a deep-seated <span className="text-white font-medium">{ABOUT_TEXT.passion}</span>.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            I strive to build seamless digital experiences through modern web technologies. My academic background coupled with my passion for coding allows me to approach problems with both logic and creativity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="p-4 rounded-2xl glass-morphism text-center">
                <stat.icon className="mx-auto mb-3 text-neutral-300" size={24} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl glass-morphism border-neutral-800 p-8 md:p-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-neutral-700 mr-3" />
              Technical Focus
            </h3>
            
            <div className="space-y-8">
              {[
                { title: 'Frontend Architecture', desc: 'Building scalable, component-driven UIs with React and TypeScript.' },
                { title: 'Backend Systems', desc: 'Designing robust APIs and database schemas for seamless data flow.' },
                { title: 'System Optimization', desc: 'Ensuring high performance and accessibility across all digital platforms.' }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="text-white font-medium mb-1 group-hover:text-neutral-300 transition-colors">{item.title}</div>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                pec.it.major.2026
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
