import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="https://aalmoesadvocaten.nl/wp-content/themes/aalmoes/images/logo-1775945452.png" 
                alt="Almus Advokatbyrå" 
                className="h-16 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Al meer dan 25 jaar staan wij voor een professionele en persoonlijke aanpak van uw zaak. Gespecialiseerd in Strafrecht en Personen- en familierecht.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold text-white">Navigatie</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/wie-zijn-wij" className="hover:text-accent transition-colors">Wie zijn wij</Link></li>
              <li><Link to="/kosten" className="hover:text-accent transition-colors">Kosten</Link></li>
              <li><Link to="/in-het-nieuws" className="hover:text-accent transition-colors">In het nieuws</Link></li>
              <li><Link to="/route" className="hover:text-accent transition-colors">Route & Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold text-white">Informatie</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/klachtenregeling" className="hover:text-accent transition-colors">Klachtenregeling</Link></li>
              <li><Link to="/privacyverklaring" className="hover:text-accent transition-colors">Privacyverklaring</Link></li>
              <li><a href="http://aalmoesadvocaten.com/algemene-voorwaarden/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center">Algemene voorwaarden <ExternalLink className="ml-1 w-3 h-3" /></a></li>
              <li><a href="http://aalmoesadvocaten.com/clienttevredenheidsonderzoek/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center">Cliënttevredenheidsonderzoek <ExternalLink className="ml-1 w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span>Jolicoeurstraat 8<br />1103 TS Amsterdam</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent shrink-0" />
                <a href="tel:+31206992209" className="hover:text-accent transition-colors">020-699.22.09</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent shrink-0" />
                <a href="mailto:info@aalmoesadvocaten.nl" className="hover:text-accent transition-colors">info@aalmoesadvocaten.nl</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {currentYear} Almus Advokatbyrå. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <span>In samenwerking met Van Kleef advocatuur & Belkhir Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
