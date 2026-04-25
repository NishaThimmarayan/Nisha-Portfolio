import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { INTERNSHIPS } from '../constants';
import { Briefcase } from 'lucide-react';

export default function Internships() {
  return (
    <section id="experience" className="section-padding bg-neutral-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Work Experience" subtitle="Internships" align="center" />
        
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {INTERNSHIPS.map((intern, i) => (
            <motion.div
              key={intern.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 absolute left-0 md:left-1/2 md:-ml-5 group-hover:bg-white group-hover:text-black transition-all duration-500 z-10 shrink-0">
                <Briefcase size={16} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl glass-morphism ml-16 md:ml-0">
                <div className="flex flex-col mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
                    Internship
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {intern.role}
                  </h3>
                </div>
                <div className="text-neutral-100 font-medium mb-3">{intern.company}</div>
                <p className="text-neutral-400 font-light leading-relaxed text-sm">
                  {intern.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
