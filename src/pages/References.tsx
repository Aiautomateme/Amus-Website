import { motion } from 'motion/react';
import { ExternalLink, Handshake, Building2, Scale } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';

const partners = [
  {
    name: 'Van Kleef advocatuur',
    description: 'Samenwerkingspartner gespecialiseerd in diverse rechtsgebieden.',
    icon: Building2,
  },
  {
    name: 'Belkhir Legal',
    description: 'Juridische partner voor gespecialiseerde ondersteuning.',
    icon: Scale,
  },
  {
    name: 'Raad voor Rechtsbijstand',
    description: 'Voor informatie over gefinancierde rechtsbijstand.',
    url: 'https://www.rechtsbijstand.nl',
    icon: Handshake,
  },
  {
    name: 'Juridisch Loket',
    description: 'Voor gratis juridisch advies en doorverwijzingen.',
    url: 'https://www.juridischloket.nl',
    icon: Handshake,
  },
];

export default function References() {
  return (
    <main className="pt-20">
      <PageHeader 
        title="Verwijzingen &"
        highlightedTitle="Partners"
        description="Almus Advokatbyrå werkt nauw samen met diverse partners om u de best mogelijke juridische ondersteuning te bieden."
        imageSrc="https://picsum.photos/seed/partners/1920/1080?blur=4"
      />

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-surface rounded-3xl border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <partner.icon className="w-8 h-8 text-accent" />
                  </div>
                  {partner.url && (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{partner.name}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-primary rounded-3xl text-white text-center space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold">Wilt u meer weten over onze samenwerkingen?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Wij vertellen u graag meer over hoe wij samenwerken met onze partners om uw belangen optimaal te behartigen.
            </p>
            <div className="pt-4">
              <a href="tel:+31206992209" className="btn-primary">
                Neem contact op
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
