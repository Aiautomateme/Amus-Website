import { motion } from 'motion/react';
import { Newspaper, ExternalLink, ArrowRight, Calendar, Tag } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';

const newsItems = [
  {
    title: 'Afluisteren van gedetineerden',
    url: 'https://njcm.nl/wp-content/uploads/ntm/T2b_NTM2FNJCM-bull2E_050551_Final_LR.pdf',
    source: 'NJCM',
    category: 'Strafrecht',
  },
  {
    title: 'Aangifte na overlijden gedetineerde in cel',
    url: 'http://www.volkskrant.nl/nieuws-achtergrond/aangifte-na-dood-gedetineerde~b0fed100/',
    source: 'Volkskrant',
    category: 'Strafrecht',
  },
  {
    title: 'Amsterdammer pleegde mogelijk vier moorden',
    url: 'http://www.telegraaf.nl/nieuws/961445/amsterdammer-pleegde-mogelijk-vier-moorden',
    source: 'Telegraaf',
    category: 'Strafrecht',
  },
  {
    title: 'Jayjay wilde alleen pronken met koningsketting',
    url: 'https://www.at5.nl/artikelen/178089/jayjay-wilde-alle-pronken-met-koningsketting-op-open-air-',
    source: 'AT5',
    category: 'Strafrecht',
  },
  {
    title: 'Overleveringsrecht uitspraak',
    url: 'https://uitspraken.rechtspraak.nl/inziendocument?id=ECLI:NL:RBAMS:2017:3763',
    source: 'Rechtspraak',
    category: 'Overleveringsrecht',
  },
  {
    title: 'Wrede moord op Esther Paul vergelding?',
    url: 'https://www.parool.nl/amsterdam/was-de-wrede-moord-op-esther-paul-een-vergelding~a4570076/',
    source: 'Parool',
    category: 'Strafrecht',
  },
  {
    title: 'Nederlandse rappers en criminelen',
    url: 'https://www.parool.nl/amsterdam/nederlandse-rappers-innig-verstrengeld-met-criminelen~a4596239/',
    source: 'Parool',
    category: 'Beeldvorming',
  },
  {
    title: 'Verzoek erkenning kind uitspraak',
    url: 'https://www.recht.nl/rechtspraak/uitspraak/?ecli=ECLI:NL:RBNHO:2013:BZ9114',
    source: 'Recht.nl',
    category: 'Familierecht',
  },
];

export default function News() {
  return (
    <main className="pt-20">
      <PageHeader 
        title="In het"
        highlightedTitle="nieuws"
        description="Onze advocaten zijn regelmatig betrokken bij spraakmakende zaken die de media halen. Hieronder vindt u een selectie van artikelen en uitspraken."
        imageSrc="https://picsum.photos/seed/news/1920/1080?blur=4"
      />

      {/* News Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-slate-100 rounded-3xl p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 bg-surface text-accent text-xs font-bold rounded-full uppercase tracking-wider">
                      {item.category}
                    </div>
                    <Newspaper className="w-5 h-5 text-slate-300" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                <div className="pt-8 mt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-400">
                    <Tag className="w-4 h-4 mr-2" />
                    {item.source}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Lees meer <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-surface rounded-3xl border border-slate-100 text-center space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-primary">Meer informatie?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Wilt u meer weten over onze betrokkenheid bij deze of andere zaken? Neem dan contact met ons op.
            </p>
            <div className="pt-4">
              <a href="mailto:info@aalmoesadvocaten.nl" className="btn-primary">
                Stuur een bericht
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
