import { Clock, MapPin, Phone, Instagram, Coffee, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export function VisitUsSection() {
  return (
    <section id="visit" className="py-16 md:py-24 bg-[#faf7f2] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1c4587]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Drop In Anytime</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>No Reservation Needed</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
            Walk in, take a seat & enjoy your chai.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We are a cozy neighborhood cafe. We don't do formal table reservations — just walk right in, say hello at the counter, and make yourself at home.
          </p>
        </div>

        {/* Visit Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#eff5fc] text-[#1c4587] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Opening Hours
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                7:00 AM – 11:30 PM
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Open 7 days a week, 365 days a year. Our copper samovar starts simmering at 6:45 AM.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1.5 rounded-lg text-center">
              Fresh bakes out of oven: 7:30 AM & 3:30 PM
            </div>
          </div>

          {/* Card 2: Address & Landmark */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#eff5fc] text-[#1c4587] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Where to Find Us
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {CAFE_INFO.address}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Landmark: Right opposite Global City. Look for the big royal blue board with white letters.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-bold text-[#1c4587] hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Card 3: Connect & Say Hello */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#eff5fc] text-[#1c4587] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Direct Contact
              </h3>
              <p className="mt-2 text-sm font-mono font-bold text-slate-900">
                {CAFE_INFO.phone}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Have questions about daily specials or catering orders? Give us a ring.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-[#1c4587] font-medium">
                <Instagram className="w-4 h-4" />
                <span>{CAFE_INFO.instagram}</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Welcoming chai lovers since morning</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
