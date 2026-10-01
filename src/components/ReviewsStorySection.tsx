import { Star, Quote, Clock, MapPin, Phone, Instagram } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export function ReviewsStorySection() {
  const reviews = [
    {
      author: 'Mukesh Parab',
      role: 'Local Resident & Daily Visitor',
      content: 'The Brun Maska here takes me straight back to the old cafes of Fort and Dhobi Talao. Crisp on the outside, loaded with cold butter, and that Irani chai is thick, sweet, and slow brewed to perfection.',
      rating: 5,
      favorite: 'Irani Malai Chai & Brun Maska'
    },
    {
      author: 'Ananya Deshmukh',
      role: 'Architect & Vinyl Collector',
      content: 'The cassette and vinyl wall alone is worth the trip! Finding a cafe that plays Kishore Kumar and RD Burman while serving authentic Caramel Custard on blue checkered tables is rare magic.',
      rating: 5,
      favorite: 'Caramel Custard & Vinyl Booth'
    },
    {
      author: 'Farhan Merchant',
      role: 'Food Blogger, Mumbai Chowpatty',
      content: 'Their Parsi Akhoori and Mutton Kheema are genuinely top tier. And having Raspberry Pallonji in chilled glass bottles completes the true Irani experience. Just walk in and grab a table!',
      rating: 5,
      favorite: 'Mutton Kheema Pav & Raspberry Pallonji'
    }
  ];

  return (
    <section id="our-story" className="py-16 md:py-24 bg-[#faf7f2] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heritage Story Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1c4587]">
              <span>Our Heritage & Philosophy</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>The Irani Naka Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
              Preserving the communal warmth of Bombay's timeless chai culture.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                In early 20th-century Bombay, Persian emigrants created something revolutionary: corner cafes with large glass windows, bentwood chairs, marble tables, and copper samovars that never stopped boiling. They were democratic spaces where poets, dock workers, film directors, and students sat shoulder-to-shoulder over a 4-anna cup of tea.
              </p>
              <p>
                <strong>Irani Naka Cafe</strong> was born out of love for this dying heritage. We didn't want to build another sterile neon coffee shop. We created a sanctuary where time slows down — where your chai is brewed on slow <em>dum</em>, your bun maska is dunked with joy, and classic cassette songs keep company with genuine human conversation.
              </p>
            </div>

            {/* Vintage Cafe Rules Playful Plaque */}
            <div className="p-4 bg-white rounded-xl border border-[#1c4587]/20 shadow-xs">
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#1c4587] font-bold">
                The Irani Naka House Etiquette
              </p>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <p>☕ Sit as long as you like with your chai.</p>
                <p>🎵 Request your favorite cassette on the wall.</p>
                <p>🍞 Always dunk your Brun while the tea is hot.</p>
                <p>💬 Strangers at your table are friends in disguise.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Cafe Visit Info Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg relative overflow-hidden">
            <div className="tile-pattern-border w-full absolute top-0 left-0" />
            
            <h3 className="font-serif text-2xl font-bold text-slate-900 mt-2">
              Visit Irani Naka Cafe
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {CAFE_INFO.tagline}
            </p>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#1c4587] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900">Opening Hours</p>
                  <p className="text-slate-600">{CAFE_INFO.hours}</p>
                  <p className="text-[11px] text-slate-500">Chai samovar fires up at 6:45 AM daily</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1c4587] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900">Address & Landmark</p>
                  <p className="text-slate-600">{CAFE_INFO.address}</p>
                  <p className="text-[11px] text-slate-500">Ample street parking & direct metro connectivity</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#1c4587] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900">Contact & Table Queries</p>
                  <p className="text-slate-600 font-mono">{CAFE_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#1c4587] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900">Instagram Community</p>
                  <p className="text-slate-600 font-mono">{CAFE_INFO.instagram}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Walk-ins always welcomed</span>
              <a 
                href="#visit" 
                className="font-semibold text-[#1c4587] hover:underline"
              >
                Find cafe on map →
              </a>
            </div>

          </div>

        </div>

        {/* Customer Testimonials & Reviews */}
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Loved by generations of chai lovers.
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Real reflections from regular visitors who make Irani Naka their second home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.content}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="font-serif text-sm font-bold text-slate-900">{rev.author}</p>
                  <p className="text-[11px] text-slate-500">{rev.role}</p>
                  <p className="text-[10px] text-[#1c4587] font-medium mt-1">
                    Favorite: {rev.favorite}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
