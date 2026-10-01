import { useState } from 'react';
import { IraniNakaLogo } from './IraniNakaLogo';
import { FileText, Sparkles, Check } from 'lucide-react';

export function OriginalMenuCards() {
  const [activePage, setActivePage] = useState<1 | 2>(1);

  return (
    <section className="py-16 bg-[#faf7f2] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C4DA2]">
            <FileText className="w-3.5 h-3.5" />
            <span>The Official Printed Menu</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Original Cafe Rates</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Original Irani Naka Menu Card
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Exactly as printed on our blue-and-white table cards at the cafe.
          </p>

          {/* Page Switcher Tabs */}
          <div className="mt-6 inline-flex p-1 bg-white border border-[#0C4DA2]/20 rounded-xl shadow-xs">
            <button
              onClick={() => setActivePage(1)}
              type="button"
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${activePage === 1 ? 'bg-[#0C4DA2] text-white shadow-xs' : 'text-slate-700 hover:text-[#0C4DA2]'}`}
            >
              Menu Card: Page 1 (Chai, Brun, Kheema & Maggi)
            </button>
            <button
              onClick={() => setActivePage(2)}
              type="button"
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${activePage === 2 ? 'bg-[#0C4DA2] text-white shadow-xs' : 'text-slate-700 hover:text-[#0C4DA2]'}`}
            >
              Menu Card: Page 2 (Bakery, Custard, Pallonji & Shakes)
            </button>
          </div>
        </div>

        {/* Authentic Printed Menu Board Container */}
        <div className="bg-white border-4 border-[#0C4DA2] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-[#0C4DA2]">
          
          {/* Subtle textured background and azulejo pattern top header */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-[#0C4DA2]" />
          
          {/* Center Brand Header */}
          <div className="flex flex-col items-center justify-center mb-8 pb-6 border-b-2 border-dashed border-[#0C4DA2]/30">
            <IraniNakaLogo className="scale-110 sm:scale-125" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0C4DA2] mt-3">
              Official Cafe Dine-In Menu · Opposite Global City
            </p>
          </div>

          {activePage === 1 ? (
            /* PAGE 1 CONTENT */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
              
              {/* Col 1: Chai, Coffee & Brun */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2] flex justify-between">
                    <span>CHAI & HOT BEVERAGES</span>
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Irani Chai</span><span className="font-bold">35/-</span></div>
                    <div className="flex justify-between"><span>Irani Malai Chai</span><span className="font-bold">40/-</span></div>
                    <div className="flex justify-between"><span>Lemon Tea</span><span className="font-bold">35/-</span></div>
                    <div className="flex justify-between"><span>Green Tea</span><span className="font-bold">30/-</span></div>
                    <div className="flex justify-between"><span>Kesar Ukala</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Boost - Hot/Cold</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Hot Chocolate</span><span className="font-bold">95/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2] flex justify-between">
                    <span>COFFEE FAVOURITES</span>
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Hot Coffee</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Black Coffee</span><span className="font-bold">45/-</span></div>
                    <div className="flex justify-between"><span>Strong Coffee</span><span className="font-bold">60/-</span></div>
                    <div className="flex justify-between"><span>Cold Coffee</span><span className="font-bold">90/-</span></div>
                    <div className="flex justify-between"><span>Coffee Latte</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Coffee Condensed</span><span className="font-bold">120/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2] flex justify-between">
                    <span>BRUN & BUN PAV SPECIALS</span>
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Brun Maska</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Brun Maska Sugar</span><span className="font-bold">55/-</span></div>
                    <div className="flex justify-between"><span>Brun Maska Jam</span><span className="font-bold">60/-</span></div>
                    <div className="flex justify-between"><span>Brun Maska Nutella</span><span className="font-bold">70/-</span></div>
                    <div className="flex justify-between"><span>Maska Bun</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Malai Bun</span><span className="font-bold">60/-</span></div>
                    <div className="flex justify-between"><span>Bun Maska with Sugar</span><span className="font-bold">55/-</span></div>
                    <div className="flex justify-between"><span>Bun Maska with Jam</span><span className="font-bold">60/-</span></div>
                    <div className="flex justify-between"><span>Bun Maska with Nutella</span><span className="font-bold">80/-</span></div>
                  </div>
                </div>
              </div>

              {/* Col 2: Mains & Eggs */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    VEG MAINS
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Paneer Bhurji Pav</span><span className="font-bold">230/-</span></div>
                    <div className="flex justify-between"><span>Soyabean Kheema Pav</span><span className="font-bold">180/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    NON VEG MAINS
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-75">CHICKEN</p>
                  <div className="mt-1 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Chicken Kheema Pav</span><span className="font-bold">220/-</span></div>
                    <div className="flex justify-between"><span>Chicken Kheema Pav & Half Fry</span><span className="font-bold">250/-</span></div>
                    <div className="flex justify-between"><span>Chicken Cutlet Pav</span><span className="font-bold">100/-</span></div>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-2.5 opacity-75">MUTTON</p>
                  <div className="mt-1 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Mutton Kheema Pav</span><span className="font-bold">250/-</span></div>
                    <div className="flex justify-between"><span>Mutton Kheema Pav & Half Fry</span><span className="font-bold">280/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    EGGS YOUR WAY
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Boiled Egg</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Boiled cheese Egg Bhurji</span><span className="font-bold">125/-</span></div>
                    <div className="flex justify-between"><span>Half Fry Pav</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Masala Half Fry Pav</span><span className="font-bold">100/-</span></div>
                    <div className="flex justify-between"><span>Plain Omelette Pav</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Masala Omelette Pav</span><span className="font-bold">100/-</span></div>
                    <div className="flex justify-between"><span>Cheese Omelette Pav</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Anda Masala Pav</span><span className="font-bold">180/-</span></div>
                    <div className="flex justify-between"><span>Egg Bhurji Pav</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between font-bold"><span>Akhuri (Parsi Bhurji)</span><span>180/-</span></div>
                  </div>
                </div>
              </div>

              {/* Col 3: Rice, Sandwiches & Maggi */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    FLAVORS OF RICE
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Veg Tawa Pulav</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Egg Rice</span><span className="font-bold">160/-</span></div>
                    <div className="flex justify-between"><span>Chicken Kheema Rice</span><span className="font-bold">180/-</span></div>
                    <div className="flex justify-between"><span>Mutton Kheema Rice</span><span className="font-bold">220/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    BREAD & SANDWICHES
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Jam Bread / Butter Bread</span><span className="font-bold">45/-</span></div>
                    <div className="flex justify-between"><span>Jam & Butter Bread</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Nutella Sandwich</span><span className="font-bold">90/-</span></div>
                    <div className="flex justify-between"><span>Plain / Aloo Sandwich</span><span className="font-bold">60/- / 70/-</span></div>
                    <div className="flex justify-between"><span>Cheese Corn Sandwich</span><span className="font-bold">110/-</span></div>
                    <div className="flex justify-between"><span>Veg Club / Chicken Club</span><span className="font-bold">100/- / 120/-</span></div>
                    <div className="flex justify-between"><span>Masala Toast Sandwich</span><span className="font-bold">90/-</span></div>
                    <div className="flex justify-between"><span>Masala Cheese Toast</span><span className="font-bold">100/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    MAGGI DELIGHTS
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Plain Maggi</span><span className="font-bold">65/-</span></div>
                    <div className="flex justify-between"><span>Masala Maggi</span><span className="font-bold">90/-</span></div>
                    <div className="flex justify-between"><span>Peri Peri Masala Maggi</span><span className="font-bold">100/-</span></div>
                    <div className="flex justify-between"><span>Egg Masala Maggi</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Chicken Cheese Maggi</span><span className="font-bold">150/-</span></div>
                    <div className="flex justify-between"><span>Masala Pasta / Chicken Pasta</span><span className="font-bold">140/- / 160/-</span></div>
                    <div className="flex justify-between"><span>White Sauce Pasta / Chicken</span><span className="font-bold">180/- / 200/-</span></div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* PAGE 2 CONTENT */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
              
              {/* Col 1: Bakery Treats, Nachos & Corn */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    BAKERY TREATS
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Chicken Patties</span><span className="font-bold">60/-</span></div>
                    <div className="flex justify-between"><span>Chicken Tandoori Patties</span><span className="font-bold">65/-</span></div>
                    <div className="flex justify-between"><span>Veg Patties</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Paneer Patties</span><span className="font-bold">65/-</span></div>
                    <div className="flex justify-between"><span>Chicken Puff</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Mawa Samosa</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Chicken Cutlet</span><span className="font-bold">60/-</span></div>
                    <div className="flex justify-between"><span>Chicken Roll</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Chicken Kebab Roll</span><span className="font-bold">90/-</span></div>
                    <div className="flex justify-between"><span>Chicken Stuff Croissant</span><span className="font-bold">80/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    NACHO BITES & CORN
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Classic Crunch Nachos</span><span className="font-bold">110/-</span></div>
                    <div className="flex justify-between"><span>Corny Cheesy Nachos</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Cheesy Chicken Nachos</span><span className="font-bold">140/-</span></div>
                    <div className="flex justify-between"><span>Paneer Masala Nachos</span><span className="font-bold">150/-</span></div>
                    <div className="flex justify-between pt-1"><span>Plain Sweet Corn</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between"><span>Butter Corn</span><span className="font-bold">70/-</span></div>
                    <div className="flex justify-between"><span>Chatpata Masala Corn</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Masala Butter Corn</span><span className="font-bold">100/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    ROLLS SPECIAL
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Plain Egg Roll</span><span className="font-bold">110/-</span></div>
                    <div className="flex justify-between"><span>Chicken Egg Roll</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Paneer Roll</span><span className="font-bold">150/-</span></div>
                    <div className="flex justify-between"><span>Veg Roll</span><span className="font-bold">100/-</span></div>
                  </div>
                </div>
              </div>

              {/* Col 2: Desserts, Ice Cream & Extras */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    DESSERTS & ICE CREAM
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Gulab Jamun (2 pcs)</span><span className="font-bold">40/-</span></div>
                    <div className="flex justify-between font-bold text-sm bg-blue-50/60 p-1 rounded">
                      <span>🍮 Caramel Custard</span>
                      <span>60/-</span>
                    </div>
                    <div className="flex justify-between"><span>Arabian Pudding</span><span className="font-bold">110/-</span></div>
                    <div className="flex justify-between"><span>Mawa Cake</span><span className="font-bold">50/-</span></div>
                    <div className="flex justify-between pt-1"><span>Ice Cream - Vanilla</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Ice Cream - Chocolate</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Ice Cream - Strawberry</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Ice Cream - Coconut</span><span className="font-bold">80/-</span></div>
                    <div className="flex justify-between"><span>Ice Cream - Mango</span><span className="font-bold">80/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    EXTRAS
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Pav</span><span className="font-bold">12/-</span></div>
                    <div className="flex justify-between"><span>Bread Slice</span><span className="font-bold">12/-</span></div>
                    <div className="flex justify-between"><span>Bun</span><span className="font-bold">30/-</span></div>
                    <div className="flex justify-between"><span>Cheese</span><span className="font-bold">25/-</span></div>
                    <div className="flex justify-between"><span>Extra Butter</span><span className="font-bold">25/-</span></div>
                    <div className="flex justify-between"><span>Strong coffee addon</span><span className="font-bold">20/-</span></div>
                  </div>
                </div>
              </div>

              {/* Col 3: Mocktails, Shakes & Pallonji */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    CHILL WITH MOCKTAILS
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Blue Ocean</span><span className="font-bold">140/-</span></div>
                    <div className="flex justify-between"><span>Virgin Classic Mojito</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Berry Berry</span><span className="font-bold">160/-</span></div>
                    <div className="flex justify-between"><span>Sunrise Mocktail</span><span className="font-bold">160/-</span></div>
                    <div className="flex justify-between"><span>Layered Kiwi Mocktail</span><span className="font-bold">160/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    MILKSHAKES & MORE
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between"><span>Banana Shake / Chickoo Shake</span><span className="font-bold">100/-</span></div>
                    <div className="flex justify-between"><span>Kit-Kat Shake</span><span className="font-bold">140/-</span></div>
                    <div className="flex justify-between"><span>Oreo Shake</span><span className="font-bold">120/-</span></div>
                    <div className="flex justify-between"><span>Classic Lassi</span><span className="font-bold">70/-</span></div>
                    <div className="flex justify-between"><span>Masala Chaas</span><span className="font-bold">60/-</span></div>
                    <div className="flex justify-between"><span>Classic Nimbu Paani</span><span className="font-bold">60/-</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-sm uppercase tracking-wider pb-1.5 border-b-2 border-[#0C4DA2]">
                    PALLONJI & DRINKS
                  </h3>
                  <div className="mt-2.5 space-y-1.5 font-medium">
                    <div className="flex justify-between font-bold"><span>Raspberry Pallonji</span><span>35/-</span></div>
                    <div className="flex justify-between"><span>Jeera Masala Pallonji</span><span className="font-bold">35/-</span></div>
                    <div className="flex justify-between"><span>Lemonade Palonji</span><span className="font-bold">35/-</span></div>
                    <div className="flex justify-between"><span>Ice-Cream Palonji</span><span className="font-bold">35/-</span></div>
                    <div className="flex justify-between"><span>Ginger Palonji</span><span className="font-bold">35/-</span></div>
                    <div className="flex justify-between pt-1"><span>Pepsi / 7-Up / Sprite / Fanta</span><span className="font-bold">20/-</span></div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Footer of Menu Card */}
          <div className="mt-8 pt-4 border-t-2 border-dashed border-[#0C4DA2]/30 flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium opacity-80 gap-2">
            <span>✨ Taxes Included · Freshly Prepared On Order</span>
            <span>इराणी नाका · Timings: 7:00 AM – 11:30 PM</span>
          </div>

        </div>

      </div>
    </section>
  );
}
