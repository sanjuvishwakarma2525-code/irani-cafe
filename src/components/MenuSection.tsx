import { useState, useMemo } from 'react';
import { Search, Sparkles, Utensils, Info, Check, Coffee } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'signature'>('all');
  const [activeStoryItem, setActiveStoryItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary / signature filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;
      if (dietaryFilter === 'signature' && !item.isSignature) return false;
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesMarathi = item.marathiName ? item.marathiName.includes(q) : false;
        if (!matchesName && !matchesDesc && !matchesCat && !matchesMarathi) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1c4587]">
            <span>Crafted Fresh Every Morning</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>The Daily Menu</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
            Timeless flavors, slow-brewed chai & oven-fresh bakes.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our recipes have been preserved over decades. From the legendary dum chai poured from a copper samovar to silky wobble-soft Caramel Custard and ruby-red Raspberry Pallonji.
          </p>

          {/* In-Person Experience Philosophy Notice */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-[#eff5fc] border border-[#1c4587]/20 rounded-full text-xs text-[#1c4587]">
            <Utensils className="w-3.5 h-3.5" />
            <span>Exclusively served fresh at our tables — we do not compromise taste with delivery boxes.</span>
          </div>
        </div>

        {/* Search & Dietary Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search chai, kheema, custard..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#faf7f2] border border-slate-200 rounded-lg focus:outline-none focus:border-[#1c4587] focus:ring-1 focus:ring-[#1c4587] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#f3ece1]/60 rounded-lg border border-slate-200/70 overflow-x-auto max-w-full">
            <button
              onClick={() => setDietaryFilter('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${dietaryFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setDietaryFilter('signature')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${dietaryFilter === 'signature' ? 'bg-[#1c4587] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Signatures</span>
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${dietaryFilter === 'veg' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Pure Veg
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${dietaryFilter === 'non-veg' ? 'bg-white text-rose-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Non-Veg
            </button>
          </div>

        </div>

        {/* Horizontal Category Carousel / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 mb-8 border-b border-slate-100">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${isSelected ? 'bg-[#1c4587] text-white shadow-xs' : 'bg-[#faf7f2] text-slate-700 hover:bg-[#eff5fc] border border-slate-200/60'}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results Counter / Category Title */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-800 text-sm">
              {selectedCategory === 'All' ? 'Full Cafe Collection' : selectedCategory}
            </span>
            <span className="mx-2">·</span>
            <span>Showing {filteredItems.length} items</span>
          </div>
          <span className="hidden sm:inline">Prices inclusive of all taxes</span>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#faf7f2]/70 hover:bg-white rounded-xl p-5 border border-slate-200/80 hover:border-[#1c4587]/30 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Name & Price */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        {/* Dietary dot symbol */}
                        <span 
                          className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`}
                          title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        />
                        <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#1c4587] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      {item.marathiName && (
                        <p className="text-[11px] text-[#1c4587] font-medium mt-0.5 ml-4">
                          {item.marathiName}
                        </p>
                      )}
                    </div>

                    {/* Price strictly in tabular numerals */}
                    <span className="font-mono text-base font-bold text-slate-900 tabular-nums shrink-0">
                      ₹{item.price}/-
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Pairing recommendation note */}
                  {item.pairingNote && (
                    <div className="mt-3 p-2 bg-[#eff5fc]/70 rounded-md text-[11px] text-[#1c4587] border border-[#1c4587]/10 flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                      <span>{item.pairingNote}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Footer: Category metadata & Story link */}
                <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate max-w-[160px]">{item.category}</span>
                  <button
                    onClick={() => setActiveStoryItem(item)}
                    type="button"
                    className="text-[#1c4587] hover:underline font-medium flex items-center gap-1 whitespace-nowrap"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Dish Lore</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-[#faf7f2] rounded-2xl border border-dashed border-slate-300">
            <Coffee className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="font-serif text-lg font-bold text-slate-800">No dishes match your filter</p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching for our classics like "Irani Chai", "Brun Maska", "Mutton Kheema", or "Custard".
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setDietaryFilter('all'); }}
              type="button"
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#1c4587] bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Why In-Person Section Card */}
        <div className="mt-16 bg-[#122d56] text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Irani Cafe Principle</span>
            </div>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why some things can never be put into a cardboard box.
            </h3>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">
              A crusty Brun Maska loses its crunch within 4 minutes. Steaming Irani Chai separates its clotted malai if packed in plastic. Most importantly, no delivery rider can deliver the warm clatter of porcelain, the pleasant chatter of friends, or the gentle laughter across blue checkered tablecloths.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Poured boiling hot at your table</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Toasted crisp fresh out of the baker's oven</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Zero plastic packaging footprint</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Dish Lore / Story Modal */}
      {activeStoryItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#faf7f2] rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-white/60 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1c4587]">
                  {activeStoryItem.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                  {activeStoryItem.name}
                </h3>
                {activeStoryItem.marathiName && (
                  <p className="text-xs text-[#1c4587] font-medium">
                    {activeStoryItem.marathiName}
                  </p>
                )}
              </div>
              <button
                onClick={() => setActiveStoryItem(null)}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200/80 space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeStoryItem.description}
              </p>
              {activeStoryItem.pairingNote && (
                <div className="pt-2 border-t border-slate-100 text-xs text-[#1c4587]">
                  <span className="font-bold">Our pairing tradition: </span>
                  <span>{activeStoryItem.pairingNote}</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-mono text-xl font-bold text-slate-900 tabular-nums">
                ₹{activeStoryItem.price}/-
              </span>
              <button
                onClick={() => setActiveStoryItem(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1c4587] rounded-lg hover:bg-[#122d56]"
              >
                Close Lore
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
