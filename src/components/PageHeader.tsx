import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface PageHeaderProps {
  title: string;
  highlightedTitle?: string;
  description: string;
  imageSrc: string;
}

export default function PageHeader({ title, highlightedTitle, description, imageSrc }: PageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={containerRef} className="py-24 bg-primary relative overflow-hidden min-h-[60vh] flex items-center">
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80"></div>
      </motion.div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            {title} {highlightedTitle && <span className="text-accent">{highlightedTitle}</span>}
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
