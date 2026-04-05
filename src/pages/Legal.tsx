import { motion } from 'motion/react';
import { ShieldCheck, Scale, FileText, Info, ArrowRight, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PageHeader from '@/src/components/PageHeader';

export default function Legal() {
  const location = useLocation();
  const isPrivacy = location.pathname === '/privacyverklaring';

  return (
    <main className="pt-20">
      <PageHeader 
        title={isPrivacy ? 'Privacy' : 'Klachten'}
        highlightedTitle="verklaring"
        description={isPrivacy 
          ? 'Wij hechten veel waarde aan de bescherming van uw persoonsgegevens en gaan hier zorgvuldig mee om.'
          : 'Wij doen er alles aan om u zo goed mogelijk van dienst te zijn. Mocht u toch ontevreden zijn, dan kunt u gebruik maken van onze klachtenregeling.'
        }
        imageSrc="https://picsum.photos/seed/legal3/1920/1080?blur=4"
      />

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-slate prose-lg max-w-none"
            >
              {isPrivacy ? (
                <div className="space-y-8">
                  <div className="flex items-center mb-10">
                    <ShieldCheck className="w-12 h-12 text-accent mr-6 shrink-0" />
                    <h2 className="text-3xl font-serif font-bold text-primary m-0">Privacyverklaring Almus Advokatbyrå</h2>
                  </div>
                  
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                      Almus Advokatbyrå respecteert uw privacy en verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
                    </p>
                    
                    <h3 className="text-xl font-serif font-bold text-primary">Welke gegevens verwerken wij?</h3>
                    <p>
                      Wij verwerken gegevens die u aan ons verstrekt in het kader van de juridische dienstverlening, zoals uw naam, adres, contactgegevens en informatie die relevant is voor uw zaak.
                    </p>
                    
                    <h3 className="text-xl font-serif font-bold text-primary">Doeleinden van verwerking</h3>
                    <p>
                      Uw gegevens worden uitsluitend gebruikt voor het uitvoeren van de met u overeengekomen juridische werkzaamheden, facturatie en om te voldoen aan wettelijke verplichtingen.
                    </p>
                    
                    <h3 className="text-xl font-serif font-bold text-primary">Beveiliging</h3>
                    <p>
                      Wij hebben passende technische en organisatorische maatregelen genomen om uw persoonsgegevens te beveiligen tegen verlies of enige vorm van onrechtmatige verwerking.
                    </p>
                    
                    <div className="p-8 bg-surface rounded-2xl border border-slate-100 flex items-start mt-12">
                      <Info className="w-6 h-6 text-accent mr-4 shrink-0 mt-1" />
                      <p className="text-sm text-slate-500 italic m-0">
                        Voor een volledig overzicht van onze privacyverklaring kunt u contact met ons opnemen of de uitgebreide verklaring opvragen op ons kantoor.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="flex items-center mb-10">
                    <Scale className="w-12 h-12 text-accent mr-6 shrink-0" />
                    <h2 className="text-3xl font-serif font-bold text-primary m-0">Interne Klachtenregeling</h2>
                  </div>
                  
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                      Ons kantoor streeft naar een optimale dienstverlening. Mocht u onverhoopt ontevreden zijn over de totstandkoming en de uitvoering van een overeenkomst van opdracht, onze dienstverlening of de hoogte van de declaratie, dan verzoeken wij u uw bezwaren eerst voor te leggen aan uw eigen advocaat.
                    </p>
                    
                    <h3 className="text-xl font-serif font-bold text-primary">Procedure</h3>
                    <p>
                      Uw klacht zal met de grootste zorgvuldigheid worden behandeld. Wij streven ernaar om binnen een redelijke termijn tot een passende oplossing te komen.
                    </p>
                    
                    <h3 className="text-xl font-serif font-bold text-primary">Klachtenfunctionaris</h3>
                    <p>
                      Indien overleg met uw advocaat niet tot een oplossing leidt, kunt u zich wenden tot de klachtenfunctionaris van ons kantoor.
                    </p>
                    
                    <div className="p-8 bg-surface rounded-2xl border border-slate-100 mt-12">
                      <h4 className="font-serif font-bold text-primary mb-4">Cliënttevredenheidsonderzoek</h4>
                      <p className="text-sm text-slate-500 mb-6">
                        Wij horen graag uw feedback om onze dienstverlening continu te kunnen verbeteren.
                      </p>
                      <a href="http://aalmoesadvocaten.com/clienttevredenheidsonderzoek/" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center w-fit">
                        Naar onderzoek <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-16 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0"
            >
              <div className="flex items-center space-x-4">
                <FileText className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-primary">Laatst bijgewerkt: April 2024</span>
              </div>
              <div className="flex space-x-4">
                <a href="mailto:info@aalmoesadvocaten.nl" className="text-accent hover:underline text-sm font-medium">
                  Vragen? Neem contact op
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
