import { useState } from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import realStorefront from '../assets/images/regenerated_image_1790893365219.png';
import realCustardChai from '../assets/images/regenerated_image_1790893368664.png';
import realBakeryCounter from '../assets/images/regenerated_image_1790893371348.png';
import realMaggiPepsi from '../assets/images/regenerated_image_1790893373603.png';
import wallImg from '../assets/images/regenerated_image_1790893376581.png';
import brunImg from '../assets/images/food_brun_maska_chai_1790890626237.jpg';

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  tag: string;
}

const DEFAULT_PHOTOS: PhotoItem[] = [
  {
    id: 'default-1',
    src: realStorefront,
    title: 'Cafe Entrance & Storefront',
    caption: 'Royal blue facade with bold white lettering "Irani Naka" and twin chai cutting glasses logo.',
    tag: 'Storefront',
  },
  {
    id: 'default-2',
    src: realCustardChai,
    title: 'Irani Chai & Caramel Custard',
    caption: 'Wobbly golden caramel custard with dark caramel syrup alongside a steaming white cup of hot Irani dum chai on blue checkered cloth.',
    tag: 'Chai & Custard',
  },
  {
    id: 'default-3',
    src: realBakeryCounter,
    title: 'Wooden Counter & Fresh Patties',
    caption: 'Warm wooden service counter with illuminated glass shelves filled with fresh patties, vintage brass phone, and lantern lights.',
    tag: 'Bakery Counter',
  },
  {
    id: 'default-4',
    src: realMaggiPepsi,
    title: 'Masala Maggi & Glass Bottle Pepsi',
    caption: 'Two bowls of steaming spicy masala Maggi noodles on the blue checkered table with cold Pepsi and tea cups.',
    tag: 'Snack Table',
  },
  {
    id: 'default-5',
    src: brunImg,
    title: 'Warm Brun Maska Pav',
    caption: 'Crusty, toasted round brun with salted Amul butter ready to dunk in tea.',
    tag: 'Morning Special',
  },
  {
    id: 'default-6',
    src: wallImg,
    title: 'Retro Wall & Portuguese Tiles',
    caption: 'Vintage vinyl records, music cassettes, and blue Portuguese ceramic tile dado along the seating wall.',
    tag: 'Wall Art',
  }
];

export function CafeGallerySection() {
  const [photos] = useState<PhotoItem[]>(DEFAULT_PHOTOS);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C4DA2]">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Cafe Photos</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Moments from Irani Naka</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
              See the cafe in real life.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The blue entrance board, the checkered tables, the steaming chai, the golden custard, and the warm bakery counter.
            </p>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 bg-slate-100 cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white text-slate-900 shadow-xs">
                    {item.tag}
                  </span>
                </div>

                {/* Top right icon */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <div className="p-1.5 bg-black/60 rounded-full text-white">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
          >
            <div className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90"
              >
                ✕
              </button>
            </div>
            <div className="p-5 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0C4DA2]">
                  {selectedPhoto.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
