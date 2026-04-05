import { motion } from 'motion/react';
import Hero from '@/src/components/Hero';
import Expertise from '@/src/components/Expertise';
import Team from '@/src/components/Team';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <img
                  src="https://picsum.photos/seed/office/800/600"
                  alt="Almus Advokatbyrå Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    25+
                  </div>
                  <div>
                    <p className="text-primary font-serif font-bold">Jaar ervaring</p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">In de advocatuur</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Al meer dan <span className="text-accent">25 jaar</span> een begrip in Amsterdam.
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Almus Advokatbyrå staat voor een professionele, maar ook persoonlijke aanpak van uw zaak. Wij begrijpen dat juridische kwesties vaak gepaard gaan met emoties en onzekerheid.
                </p>
                <p>
                  Of het nu gaat om complexe strafzaken of gevoelige familieaangelegenheden, wij bieden de deskundigheid die nodig is om het beste resultaat voor u te bereiken.
                </p>
              </div>
              
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary">Snel contact</h4>
                    <p className="text-sm text-slate-500">Wij reageren binnen 24 uur op uw aanvraag.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary">Centraal gelegen</h4>
                    <p className="text-sm text-slate-500">Ons kantoor bevindt zich in Amsterdam Zuidoost.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <Link to="/wie-zijn-wij" className="btn-primary group">
                  Meer over ons
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Expertise />
      <Team />

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight"
            >
              Heeft u direct juridische <span className="text-accent italic">bijstand</span> nodig?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              Wacht niet langer en neem vandaag nog contact met ons op voor een vrijblijvend gesprek. Wij staan u graag te woord.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12"
            >
              <a href="tel:+31206992209" className="flex items-center text-white hover:text-accent transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:bg-accent transition-colors">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Bel ons direct</p>
                  <p className="text-2xl font-serif font-bold">020-699.22.09</p>
                </div>
              </a>
              
              <a href="mailto:info@aalmoesadvocaten.nl" className="flex items-center text-white hover:text-accent transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:bg-accent transition-colors">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Stuur een e-mail</p>
                  <p className="text-2xl font-serif font-bold">info@aalmoesadvocaten.nl</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
