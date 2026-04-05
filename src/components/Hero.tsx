import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Scale, Users } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://picsum.photos/seed/legal/1920/1080?blur=2"
          alt="Legal background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ opacity, y: y1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Al meer dan 25 jaar ervaring
            </div>
            
            <h1 className="text-[43px] md:text-7xl font-serif font-bold text-white leading-tight">
              Rechtvaardigheid met een <span className="text-accent italic">persoonlijke</span> aanpak.
            </h1>
            
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
              Professionele juridische bijstand in Strafrecht en Personen- en familierecht. Wij staan voor u klaar met deskundigheid en betrokkenheid.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link to="/wie-zijn-wij" className="btn-primary flex items-center group">
                Onze expertise
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/route" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Contact opnemen
              </Link>
            </div>
          </motion.div>

          {/* Feature Cards with Parallax */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <Shield className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-3">Strafrecht</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Van winkeldiefstal tot complexe internationale zaken. Wij verdedigen uw rechten met passie.
              </p>
            </motion.div>
            
            <motion.div
              style={{ y: y3 }}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <Users className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-3">Familierecht</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Begeleiding bij echtscheiding, alimentatie, omgangsregelingen en meer met oog voor de mens.
              </p>
            </motion.div>
            
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.9, y: 150 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors sm:col-span-2"
            >
              <Scale className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-3">Professioneel & Persoonlijk</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Wij combineren jarenlange ervaring met een persoonlijke benadering. Uw zaak is bij ons in goede handen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
