import { TwinChaiGlasses } from './ChaiGlassIcon';
import { CAFE_INFO } from '../data/cafeData';

export function Footer() {
  return (
    <footer className="bg-[#122d56] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Ethos */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <TwinChaiGlasses className="text-white" />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  {CAFE_INFO.name}
                </span>
                <span className="text-xs text-blue-200 font-sans tracking-wide">
                  {CAFE_INFO.marathiName} · Bombay Irani Heritage
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              A cozy neighborhood cafe celebrating slow-brewed dum chai, crusty Brun Maska, golden Caramel Custard, and sweet conversations.
            </p>

            <p className="text-xs text-amber-300 italic">
              "No reservations needed. Just walk in and enjoy your chai."
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Real Cafe Photos
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  The Full Menu
                </a>
              </li>
              <li>
                <a href="#chai-club" className="hover:text-white transition-colors">
                  Chai Club Stamp Card
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">
                  Visit Us & Timings
                </a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Visit Us in Person
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {CAFE_INFO.address}
            </p>
            <p className="text-xs text-slate-300">
              <span className="font-bold text-white">Daily Timings: </span>
              {CAFE_INFO.hours}
            </p>
            <p className="text-xs text-slate-300 font-mono">
              Phone: {CAFE_INFO.phone}
            </p>
            <div className="pt-2 text-xs text-amber-200">
              Look for the royal blue signboard opposite Global City
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Irani Naka Cafe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Dunk, Sip & Smile</span>
            <span>·</span>
            <span>Made for Mumbai chai lovers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
