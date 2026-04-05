import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mr M.H. Aalmoes',
    role: 'Advocaat & Founder',
    specialties: ['Strafrecht', 'Jeugdstrafrecht', 'Personen- en familierecht'],
    description: 'Mr Aalmoes heeft strafzaken behandeld waarvoor zij o.a. is afgereisd naar Frankrijk, Aruba, Curaçao, Colombia, Dominicaanse Republiek en Suriname.',
    image: 'https://picsum.photos/seed/lawyer1/400/500',
  },
  {
    name: 'Mr J. Schouten',
    role: 'Advocaat',
    specialties: ['Strafrecht', 'Personen- en familierecht', 'Echtscheidingen'],
    description: 'Geregistreerd op de hoofdgebieden Strafrecht en Personen- en familierecht in het rechtsgebiedenregister van de NOvA.',
    image: 'https://picsum.photos/seed/lawyer2/400/500',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="max-w-2xl mb-8 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            >
              Onze <span className="text-accent italic">Advocaten</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Maak kennis met onze deskundige advocaten die voor u klaarstaan met een persoonlijke en professionele aanpak.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <a href="https://www.baliebulletin.nl/founders-aalmoes-advocaten/" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center">
              Lees ons verhaal <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/5 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="lg:w-3/5 p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-medium text-sm tracking-wide uppercase">{member.role}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec) => (
                      <span key={spec} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{member.description}"
                  </p>
                </div>
                
                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center space-x-6">
                  <a href="tel:+31206992209" className="text-primary hover:text-accent transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href="mailto:info@aalmoesadvocaten.nl" className="text-primary hover:text-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
