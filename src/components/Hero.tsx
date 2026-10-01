import { Sparkles, ArrowRight, Camera } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onSeePhotos: () => void;
}

export function Hero({ onExploreMenu, onSeePhotos }: HeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-[#faf7f2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          
          {/* Badge: Dunk It While It's Hot · Genuine Neighborhood Cafe */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff5fc] border border-[#0C4DA2]/20 text-xs font-semibold text-[#0C4DA2]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Dunk It While It's Hot · Genuine Neighborhood Cafe</span>
            </div>
          </div>

          {/* Headline: Warm cutting chai, crusty Brun Maska & sweet memories. */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-slate-900 tracking-tight leading-[1.15]">
            Warm cutting chai, crusty <span className="italic text-[#0C4DA2] font-serif">Brun Maska</span> & sweet memories.
          </h1>

          {/* Hindi conversational card */}
          <div className="p-3.5 sm:p-4 bg-white/90 rounded-2xl border border-blue-200/70 shadow-xs flex items-center gap-3.5 max-w-4xl">
            <span className="text-2xl shrink-0">🫖</span>
            <div>
              <p className="font-serif italic text-[#0C4DA2] font-bold text-sm sm:text-base leading-snug">
                "गरमा-गरम चाय, मस्का मार के पाव, और दिल खोल के गपशप!"
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Real taste, simple prices — just like the old days.
              </p>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Welcome to <strong className="font-bold text-slate-800">Irani Naka Cafe</strong>. Look for our royal blue board, step inside to the blue checkered tables, and enjoy slow-brewed hot chai, flaky bakery patties, comforting Maggi, and silky Caramel Custard.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onExploreMenu}
              type="button"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#0C4DA2] hover:bg-[#083570] rounded-xl transition-all shadow-sm flex items-center gap-2"
            >
              <span>See Cafe Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onSeePhotos}
              type="button"
              className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-xs"
            >
              <Camera className="w-4 h-4 text-[#0C4DA2]" />
              <span>See Real Cafe Photos</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
