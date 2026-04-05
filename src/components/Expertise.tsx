import { motion } from 'motion/react';
import { Shield, Users, Globe, Scale, CheckCircle2 } from 'lucide-react';

const expertiseItems = [
  {
    title: 'Strafrecht',
    icon: Shield,
    description: 'Van relatief ‘kleine’ zaken zoals winkeldiefstal tot ‘grote’ zaken als fraude, internationale drugshandel en moord.',
    features: ['Jeugdstrafrecht', 'Uit- en overleveringszaken', 'Internationale zaken'],
  },
  {
    title: 'Personen- en familierecht',
    icon: Users,
    description: 'Begeleiding bij complexe familieaangelegenheden met een persoonlijke aanpak.',
    features: ['Echtscheidingen & Alimentatie', 'Omgangsregelingen & Gezag', 'Erkenning & Ouderschap', 'Jeugd(beschermings)recht'],
  },
  {
    title: 'Internationaal',
    icon: Globe,
    description: 'Goede relaties met advocatenkantoren in het binnen- en buitenland. Wij houden ook zelf kantoor in Suriname.',
    features: ['Suriname kantoor', 'Internationaal privaatrecht', 'Grensoverschrijdende zaken'],
  },
];

export default function Expertise() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
          >
            Onze <span className="text-accent">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Almus Advokatbyrå biedt gespecialiseerde juridische hulp op diverse rechtsgebieden. Wij staan geregistreerd in het rechtsgebiedenregister van de Nederlandse orde van advocaten.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group p-10 bg-surface rounded-3xl border border-slate-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon className="w-32 h-32 text-primary" />
              </div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {item.description}
              </p>
              
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-primary rounded-3xl text-white flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center mb-6 md:mb-0">
            <Scale className="w-10 h-10 text-accent mr-6 shrink-0" />
            <div>
              <h4 className="text-xl font-serif font-bold mb-1">Kwaliteitswaarborg</h4>
              <p className="text-slate-400 text-sm">Onze advocaten behalen jaarlijks de vereiste opleidingspunten volgens de normen van de NOvA.</p>
            </div>
          </div>
          <button className="btn-primary whitespace-nowrap">
            Bekijk alle diensten
          </button>
        </motion.div>
      </div>
    </section>
  );
}
