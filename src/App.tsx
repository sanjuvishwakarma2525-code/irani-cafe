/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatchyPhrasesTicker, EyeCatchingBanner } from './components/CatchyPhrasesTicker';
import { CafeGallerySection } from './components/CafeGallerySection';
import { OriginalMenuCards } from './components/OriginalMenuCards';
import { VisitUsSection } from './components/VisitUsSection';
import { ReviewsStorySection } from './components/ReviewsStorySection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVisit = () => {
    const el = document.getElementById('visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 antialiased selection:bg-[#0C4DA2] selection:text-white">
      {/* Top Navbar with exact official logo */}
      <Navbar 
        onSeeMenu={scrollToMenu} 
        onVisitUs={scrollToVisit}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onExploreMenu={scrollToMenu}
          onSeePhotos={scrollToGallery}
        />

        {/* Catchy Animated Slogan Marquee Ticker */}
        <CatchyPhrasesTicker />

        {/* Eye Catching Quote Banner */}
        <EyeCatchingBanner />

        {/* Real Cafe Photos Gallery with 1-Click Original Photo Loader */}
        <CafeGallerySection />

        {/* Original Printed Menu Cards (Pages 1 & 2) */}
        <div id="menu">
          <OriginalMenuCards />
        </div>

        {/* Visit Us & Opening Hours (Simple, No Reservations) */}
        <VisitUsSection />

        {/* Heritage Story & Customer Love */}
        <ReviewsStorySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
