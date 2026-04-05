import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Send } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';

export default function Route() {
  return (
    <main className="pt-20">
      <PageHeader 
        title="Route &"
        highlightedTitle="Contact"
        description="Ons kantoor is centraal gelegen in Amsterdam Zuidoost. Wij zijn goed bereikbaar met zowel de auto als het openbaar vervoer."
        imageSrc="https://picsum.photos/seed/map/1920/1080?blur=4"
      />

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-primary">Almus Advokatbyrå</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Heeft u vragen of wilt u een afspraak maken? Neem dan contact met ons op via onderstaande gegevens of vul het contactformulier in.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-primary">Adres</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Jolicoeurstraat 8<br />
                    1103 TS Amsterdam
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-primary">Telefoon</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    020-699.22.09<br />
                    020-699.29.41
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-primary">E-mail</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    info@aalmoesadvocaten.nl
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-primary">Openingstijden</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Maandag - Vrijdag<br />
                    09:00 - 17:30
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Jolicoeurstraat+8+Amsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center group"
                >
                  <Navigation className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Plan uw route
                </a>
              </div>
            </motion.div>

            {/* Map Placeholder / Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">Stuur ons een bericht</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Naam</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Uw naam" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">E-mail</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Uw e-mailadres" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Onderwerp</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white">
                    <option>Strafrecht</option>
                    <option>Personen- en familierecht</option>
                    <option>Kosten & Tarieven</option>
                    <option>Overig</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Bericht</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Uw bericht..."></textarea>
                </div>
                
                <button type="button" className="btn-primary w-full flex items-center justify-center">
                  <Send className="mr-2 w-5 h-5" />
                  Verstuur bericht
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-serif italic">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>Interactieve kaart wordt hier geladen...</p>
            <p className="text-xs mt-2">Jolicoeurstraat 8, Amsterdam</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.467389823654!2d4.966038315800454!3d52.31653397977648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609503460e7e1%3A0x600609503460e7e1!2sJolicoeurstraat%208%2C%201103%20TS%20Amsterdam!5e0!3m2!1snl!2snl!4v1620000000000!5m2!1snl!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="relative z-10"
        ></iframe>
      </section>
    </main>
  );
}
