import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold mb-3 block">
          {subtitle || 'Section'}
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
          {title}
        </h2>
        <div
          className={cn(
            'h-1 w-12 bg-neutral-100 rounded-full',
            align === 'center' ? 'mx-auto' : ''
          )}
        />
      </motion.div>
    </div>
  );
}
