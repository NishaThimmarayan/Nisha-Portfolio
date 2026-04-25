import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { CERTIFICATIONS } from '../constants';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="section-padding max-w-7xl mx-auto px-6">
      <SectionHeading title="Learning & Growth" subtitle="Certifications" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 rounded-2xl glass-morphism hover:bg-neutral-800/40 transition-colors flex gap-4 items-start"
          >
            <div className="shrink-0 p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:scale-110 transition-transform">
              <Award className="text-neutral-400 group-hover:text-white" size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors leading-snug">
                {cert}
              </h4>
              <div className="flex items-center mt-2 text-[10px] text-neutral-500 font-bold uppercase tracking-tighter">
                <CheckCircle2 size={12} className="mr-1 text-green-500/50" />
                Verified Credential
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
