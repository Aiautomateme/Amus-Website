import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Wie zijn wij', path: '/wie-zijn-wij' },
  { name: 'Kosten', path: '/kosten' },
  { name: 'In het nieuws', path: '/in-het-nieuws' },
  { name: 'Verwijzingen', path: '/verwijzingen' },
  { name: 'Route', path: '/route' },
];

const infoItems = [
  { name: 'Klachtenregeling', path: '/klachtenregeling' },
  { name: 'Privacyverklaring', path: '/privacyverklaring' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsInfoOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://aalmoesadvocaten.nl/wp-content/themes/aalmoes/images/logo-1775945452.png" 
              alt="Almus Advokatbyrå" 
              className={cn(
                "h-12 w-auto transition-all duration-300",
                !isScrolled && "brightness-0 invert"
              )}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'relative text-sm font-medium transition-colors py-2 px-1',
                  location.pathname === item.path 
                    ? 'text-accent' 
                    : isScrolled 
                      ? 'text-primary hover:text-accent' 
                      : 'text-white hover:text-accent'
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <div className="relative group">
              <button
                onMouseEnter={() => setIsInfoOpen(true)}
                className={cn(
                  'flex items-center text-sm font-medium transition-colors hover:text-accent py-2 px-1',
                  isInfoOpen 
                    ? 'text-accent' 
                    : isScrolled 
                      ? 'text-primary' 
                      : 'text-white'
                )}
              >
                Info <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform duration-300", isInfoOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isInfoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsInfoOpen(false)}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-md py-2 border border-slate-100"
                  >
                    {infoItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-primary hover:bg-slate-50 hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="tel:+31206992209"
              className="btn-primary py-2 px-4 text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Bel nu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 transition-colors duration-300",
                isScrolled || isOpen ? "text-primary" : "text-white"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'block px-3 py-4 text-base font-medium border-b border-slate-50',
                    location.pathname === item.path ? 'text-accent' : 'text-primary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              {infoItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-4 text-base font-medium border-b border-slate-50 text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <a
                  href="tel:+31206992209"
                  className="flex items-center text-primary"
                >
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  020-699.22.09
                </a>
                <a
                  href="mailto:info@aalmoesadvocaten.nl"
                  className="flex items-center text-primary"
                >
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  info@aalmoesadvocaten.nl
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
