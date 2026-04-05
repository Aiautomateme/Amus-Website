import { motion } from 'motion/react';
import { Shield, Users, Globe, Scale, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';

export default function WhoWeAre() {
  return (
    <main className="pt-20">
      <PageHeader 
        title="Wie zijn"
        highlightedTitle="wij"
        description="Almus Advokatbyrå bestaat al meer dan 25 jaar. Wij staan voor een professionele, maar ook persoonlijke aanpak van uw zaak."
        imageSrc="https://picsum.photos/seed/legal2/1920/1080?blur=4"
      />

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Op het kantoor behandelen wij zaken op het gebied van het <span className="text-primary font-bold">strafrecht</span> en <span className="text-primary font-bold">personen- en familierecht</span>.
                </p>
                <p>
                  Personen- en familierecht betekent zaken zoals op het gebied van erkenning, omgang, gezag, alimentatie, echtscheiding, ontkenning van het vaderschap, voornaamswijziging, etc.
                </p>
                <p>
                  In het Strafrecht staan wij u bij van relatief ‘kleine’ zaken zoals een winkeldiefstal tot ‘grote’ zaken als fraude, internationale drugshandel en moord.
                </p>
              </div>

              <div className="p-8 bg-surface rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Internationale Ervaring</h3>
                <p className="text-slate-600 mb-6">
                  Mr Aalmoes heeft strafzaken behandeld waarvoor zij o.a. is afgereisd naar Frankrijk, Aruba, Curaçao, Colombia, Dominicaanse Republiek en Suriname.
                </p>
                <div className="flex items-center text-accent font-medium">
                  <Globe className="w-5 h-5 mr-3" />
                  <span>Eigen kantoor in Suriname</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-video">
                <img
                  src="https://picsum.photos/seed/court/800/600"
                  alt="Courtroom"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="https://www.baliebulletin.nl/founders-aalmoes-advocaten/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-accent hover:shadow-lg transition-all group"
                >
                  <h4 className="font-serif font-bold text-primary mb-2 flex items-center group-hover:text-accent transition-colors">
                    Founders Aalmoes <ExternalLink className="ml-2 w-4 h-4" />
                  </h4>
                  <p className="text-xs text-slate-500">Lees het artikel in het Baliebulletin over de oprichting van ons kantoor.</p>
                </a>
                
                <a
                  href="http://www.dwtonline.com/laatste-nieuws/2019/10/17/verdachte-ontkent-betrokkenheid-in-nederlandse-drugsmoordzaak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-accent hover:shadow-lg transition-all group"
                >
                  <h4 className="font-serif font-bold text-primary mb-2 flex items-center group-hover:text-accent transition-colors">
                    Rechtszaak Suriname <ExternalLink className="ml-2 w-4 h-4" />
                  </h4>
                  <p className="text-xs text-slate-500">Artikel over een spraakmakende rechtszaak in Suriname waarbij wij betrokken waren.</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Register */}
      <section className="py-24 bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex items-center mb-10">
              <Scale className="w-12 h-12 text-accent mr-6" />
              <h2 className="text-3xl font-serif font-bold text-primary">Rechtsgebiedenregister</h2>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-primary">Mr M.H. Aalmoes</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                    Strafrecht (incl. Jeugdstrafrecht)
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                    Personen- en familierecht
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-primary">Mr J. Schouten</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                    Strafrecht
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                    Personen- en familierecht
                  </li>
                </ul>
              </div>
              
              <p className="text-sm text-slate-500 italic pt-6 border-t border-slate-100">
                Op grond van deze registratie zijn zij verplicht elk kalenderjaar volgens de normen van de Nederlandse orde van advocaten tien opleidingspunten te behalen op ieder geregistreerd hoofdrechtsgebied.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
