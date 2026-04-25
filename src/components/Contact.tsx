import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { PERSONAL_DETAILS } from '../constants';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const contacts = [
    { 
      label: 'Email', 
      value: PERSONAL_DETAILS.email, 
      href: `mailto:${PERSONAL_DETAILS.email}`,
      icon: Mail 
    },
    { 
      label: 'LinkedIn', 
      value: 'Connect on LinkedIn', 
      href: PERSONAL_DETAILS.linkedin,
      icon: Linkedin 
    },
    { 
      label: 'GitHub', 
      value: 'Follow on GitHub', 
      href: PERSONAL_DETAILS.github,
      icon: Github 
    },
  ];

  return (
    <section id="contact" className="section-padding bg-black/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading title="Let's Work Together" subtitle="Get In Touch" align="center" />
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank" 
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl glass-morphism border-neutral-800 hover:border-neutral-500 transition-all flex flex-col items-center"
            >
              <div className="p-4 rounded-2xl bg-neutral-900 mb-4 group-hover:scale-110 transition-transform">
                <contact.icon className="text-neutral-400 group-hover:text-white" size={28} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">{contact.label}</div>
              <div className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors truncate w-full px-2">
                {contact.value}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-tr from-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tighter max-w-xl leading-[0.9]">
            Have a project in mind? Let's build something amazing.
          </h3>
          <a
            href={`mailto:${PERSONAL_DETAILS.email}`}
            className="group px-10 py-5 rounded-full bg-white text-black font-bold flex items-center gap-3 hover:bg-neutral-200 transition-all hover:scale-105"
          >
            Send Message
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
