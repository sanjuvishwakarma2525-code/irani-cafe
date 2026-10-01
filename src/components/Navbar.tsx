import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { IraniNakaLogo } from './IraniNakaLogo';

interface NavbarProps {
  onSeeMenu: () => void;
  onVisitUs: () => void;
}

export function Navbar({ onSeeMenu, onVisitUs }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${scrolled ? 'bg-[#faf7f2]/95 backdrop-blur-md shadow-xs border-b border-[#0C4DA2]/15' : 'bg-[#faf7f2] border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with exact storefront typography */}
          <a href="#" className="flex items-center group py-2">
            <IraniNakaLogo className="scale-90 sm:scale-100 origin-left" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#gallery" className="hover:text-[#0C4DA2] transition-colors whitespace-nowrap">
              Photos of Cafe
            </a>
            <a href="#menu" className="hover:text-[#0C4DA2] transition-colors whitespace-nowrap">
              Full Menu
            </a>
            <a href="#visit" className="hover:text-[#0C4DA2] transition-colors whitespace-nowrap">
              Visit Us & Timings
            </a>
            <a href="#our-story" className="hover:text-[#0C4DA2] transition-colors whitespace-nowrap">
              Our Story
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Visit Us CTA */}
            <button
              onClick={onVisitUs}
              type="button"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0C4DA2] rounded-lg hover:bg-[#083570] transition-colors shadow-xs whitespace-nowrap flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit The Cafe</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#0C4DA2]/10 bg-[#faf7f2] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-800">
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0C4DA2]"
            >
              Photos of the Cafe
            </a>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0C4DA2]"
            >
              The Full Menu
            </a>
            <a 
              href="#visit" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0C4DA2]"
            >
              Visit Us & Timings
            </a>
            <a 
              href="#our-story" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0C4DA2]"
            >
              Our Story
            </a>
          </div>
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onVisitUs(); }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0C4DA2] rounded-lg"
            >
              Find Us / Directions
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
