import { Sparkles, Heart } from 'lucide-react';
import { ChaiGlassIcon } from './ChaiGlassIcon';

export function CatchyPhrasesTicker() {
  const phrases = [
    { text: "Dunk It While It's Hot · Dip, Sip, Repeat!", icon: "☕" },
    { text: "Maska Maar Ke — Extra Butter, Pure Joy", icon: "🧈" },
    { text: "Slow Down, Bombay. Have a Cutting Chai.", icon: "🕊️" },
    { text: "गरमा-गरम चाय, ठंडी हवा, सच्ची दोस्ती", icon: "✨" },
    { text: "Life Is Sweet with Caramel Custard", icon: "🍮" },
    { text: "No WiFi, No Hurry — Just Real Conversations", icon: "💛" },
    { text: "Fresh Brun Maska Baked Warm Every Morning", icon: "🥖" },
    { text: "Ek Cutting Chai, Do Dosti", icon: "🫖" },
  ];

  return (
    <div className="w-full bg-[#1c4587] text-white py-3.5 overflow-hidden shadow-inner border-y-2 border-[#b8621b]/30">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {/* Render twice for continuous infinite scroll appearance */}
        {[...phrases, ...phrases].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide">
            <span className="text-base">{item.icon}</span>
            <span className="font-serif italic text-amber-200">{item.text}</span>
            <span className="text-white/30 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EyeCatchingBanner() {
  return (
    <div className="max-w-5xl mx-auto px-4 my-10">
      <div className="bg-gradient-to-r from-[#eff5fc] via-white to-[#eff5fc] border-2 border-[#1c4587]/20 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-sm">
        {/* Decorative corner icon */}
        <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#1c4587]/10 rounded-full flex items-center justify-center pointer-events-none">
          <ChaiGlassIcon className="w-8 h-8 text-[#1c4587] opacity-40" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c4587] text-white text-[11px] font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>The Golden Irani Rule</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold tracking-tight">
          "Don't rush your chai. <span className="text-[#1c4587] italic underline decoration-amber-400 decoration-wavy">Dunk your Brun</span>, take a breath, and let the city wait."
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          No fancy tables, no reservations needed. Just walk in, find a cozy chair by the checkered table, and ask for a hot cup of Irani Chai.
        </p>

        <div className="mt-4 flex items-center justify-center gap-6 text-xs font-semibold text-[#1c4587]">
          <span>✨ Fresh Amul Butter</span>
          <span>·</span>
          <span>☕ 100% Dum Brewed</span>
          <span>·</span>
          <span>🍮 Century-Old Custard Recipe</span>
        </div>
      </div>
    </div>
  );
}
