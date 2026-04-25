import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';
import ThreeHero from './ThreeHero';
import { PERSONAL_DETAILS } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ThreeHero />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-neutral-400 font-medium tracking-widest uppercase text-xs mb-4 block">
            Welcome to my creative space
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-white mb-6">
            Hi, I'm <span className="gradient-text">{PERSONAL_DETAILS.name}</span>
          </h1>
          <div className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto h-12">
            <Typewriter
              options={{
                strings: ['IT Student', 'Web Developer', 'Tech Enthusiast'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-neutral-700 text-white font-medium hover:bg-neutral-900 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500"
      >
        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neutral-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
