import { motion } from 'motion/react';
import { CreditCard, Info, CheckCircle2, ArrowRight, ExternalLink, HelpCircle, Phone } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';

export default function Costs() {
  return (
    <main className="pt-20">
      <PageHeader 
        title="Kosten &"
        highlightedTitle="Tarieven"
        description="Wij vinden het belangrijk dat juridische bijstand voor iedereen toegankelijk is. Hieronder vindt u informatie over de kosten en mogelijkheden voor gefinancierde rechtsbijstand."
        imageSrc="https://picsum.photos/seed/money/1920/1080?blur=4"
      />

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Main Info */}
            <div className="lg:col-span-2 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mr-6 shrink-0">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary">Eigen bijdrage of uurtarief</h2>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Natuurlijke personen kunnen onder bepaalde voorwaarden in aanmerking komen voor – gedeeltelijk – gefinancierde rechtsbijstand. Dit geschied aan de hand van uw sofinummer.
                  </p>
                  <p>
                    Afhankelijk van het inkomen in het peiljaar wordt een eigen bijdrage vastgesteld. Meer informatie hierover kunt u vinden op de site van de Raad voor Rechtsbijstand.
                  </p>
                  <div className="p-6 bg-surface rounded-2xl border border-slate-100 flex items-start">
                    <Info className="w-6 h-6 text-accent mr-4 shrink-0 mt-1" />
                    <p className="text-sm text-slate-500 italic">
                      De Raad voor Rechtsbijstand stuurt u ook zelf een bericht om u te informeren of u in aanmerking komt voor gefinancierde rechtsbijstand en wat de hoogte van de eigen bijdrage is geworden.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mr-6 shrink-0">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary">Bijzondere bijstand</h2>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Indien u een uitkering ontvangt van de Gemeente waar u woonachtig bent, of u heeft een inkomen op of rond het bijstandsniveau, kunt u mogelijk in aanmerking komen voor bijzondere bijstand in uw Gemeente.
                  </p>
                  <p>
                    In dat geval hoeft u de eigen bijdrage niet, of slechts gedeeltelijk te voldoen. Wij kunnen u hierover adviseren.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mr-6 shrink-0">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary">Overige kosten</h2>
                </div>
                
                <p className="text-lg text-slate-600">Afhankelijk van het soort zaak kunnen er bijkomende kosten zijn:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Griffierecht', desc: 'Administratiekosten van de Rechtbank' },
                    { title: 'Leges', desc: 'Administratiekosten van een gemeentelijke instelling' },
                    { title: 'Deurwaarderskosten', desc: 'Kosten voor het betekenen van stukken' },
                    { title: 'Publicatiekosten', desc: 'Kosten voor publicatie in een dagblad' },
                  ].map((item) => (
                    <div key={item.title} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <h4 className="font-serif font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-primary rounded-3xl text-white space-y-8 shadow-2xl shadow-primary/20"
              >
                <h3 className="text-2xl font-serif font-bold">Juridisch Loket</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Indien u door het Juridisch loket bent doorverwezen naar ons kantoor, krijgt u een korting op de eigen bijdrage.
                </p>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-accent font-bold text-2xl mb-2">€ 54,– korting</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Op de eigen bijdrage</p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm">Bel het juridisch loket voor een doorverwijzing:</p>
                  <a href="tel:09008020" className="flex items-center text-xl font-serif font-bold hover:text-accent transition-colors">
                    <Phone className="w-5 h-5 mr-3 text-accent" />
                    0900-8020
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-surface rounded-3xl border border-slate-100 space-y-6"
              >
                <h3 className="text-xl font-serif font-bold text-primary">Handige Links</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="http://www.rechtsbijstand.nl" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-accent transition-colors group">
                      Raad voor Rechtsbijstand
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.juridischloket.nl" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-accent transition-colors group">
                      Het Juridisch Loket
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-accent/10 rounded-3xl border border-accent/20"
              >
                <h3 className="text-xl font-serif font-bold text-accent mb-4">Gedetineerden</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Gedetineerde cliënten behoeven in beginsel geen eigen bijdrage te betalen voor advocaatkosten.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Scale(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h18" />
    </svg>
  )
}
