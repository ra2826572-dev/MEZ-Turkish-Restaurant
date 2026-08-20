import React from 'react';
import { Calendar, Utensils, Star, MapPin, Clock, ArrowDown, ChevronRight, Award } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0C1B15]">
      {/* Background Image with Darkened Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="MEZ Turkish Restaurant Dining Experience in Gulberg Lahore"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Multilayer Dark Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091611] via-[#0D1F18]/80 to-[#0A1812]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#091611]/50 to-[#091611]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Refined Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16362B]/80 border border-[#C4AD89]/40 text-[#E8DCC4] text-xs uppercase tracking-[0.25em] mb-6 backdrop-blur-md shadow-lg animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
          <span>Authentic Anatolian Heritage • Gulberg Lahore</span>
        </div>

        {/* Brand Master Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-cinzel-brand font-bold tracking-[0.2em] text-[#FAF7F0] mb-2 leading-none drop-shadow-md uppercase">
          MEZ
        </h1>

        <p className="font-serif-luxury italic text-2xl sm:text-3xl lg:text-4xl text-[#D8C6A5] tracking-wide mb-6">
          Turkish Cuisine
        </p>

        {/* Gold Ornament Divider */}
        <div className="flex items-center justify-center gap-3 w-48 mx-auto mb-7">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C4AD89] to-[#C4AD89]" />
          <div className="w-2 h-2 rotate-45 border border-[#C4AD89] bg-[#16362B]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C4AD89] to-[#C4AD89]" />
        </div>

        {/* Exact Supporting Text Required */}
        <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-[#EDE5D8] font-light leading-relaxed mb-10 tracking-wide">
          A refined Turkish dining experience in the heart of Gulberg, Lahore. Savor authentic wood charcoal-grilled kebabs, stone-baked pides, and timeless Ottoman flavors.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-14">
          <button
            id="hero-reserve-btn"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 bg-[#C4AD89] hover:bg-[#D5C1A1] text-[#0A1A14] font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-sm transition-all shadow-xl hover:shadow-[#C4AD89]/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-[#E5D2B4]"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>

          <button
            id="hero-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 bg-[#122820]/80 hover:bg-[#1C3E31] text-[#F4ECE1] font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-sm transition-all border border-[#C4AD89]/50 hover:border-[#C4AD89] flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#C4AD89]" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl pt-6 border-t border-[#203D31]/60">
          <div className="flex items-center justify-center sm:justify-start gap-3 bg-[#0F241C]/60 backdrop-blur-sm p-3.5 rounded border border-[#1F3F32]/50">
            <div className="w-9 h-9 rounded-full bg-[#18362B] flex items-center justify-center text-[#D4AF37]">
              <Star className="w-4 h-4 fill-[#D4AF37]" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#F4ECE1] flex items-center gap-1">
                4.8 / 5.0 Rating
              </div>
              <div className="text-xs text-[#A89882]">53 Verified Google Reviews</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 bg-[#0F241C]/60 backdrop-blur-sm p-3.5 rounded border border-[#1F3F32]/50">
            <div className="w-9 h-9 rounded-full bg-[#18362B] flex items-center justify-center text-[#C4AD89]">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#F4ECE1]">Gulberg 2, Lahore</div>
              <div className="text-xs text-[#A89882]">5, Block L • Valet Available</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 bg-[#0F241C]/60 backdrop-blur-sm p-3.5 rounded border border-[#1F3F32]/50">
            <div className="w-9 h-9 rounded-full bg-[#18362B] flex items-center justify-center text-[#C4AD89]">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#F4ECE1]">1:00 PM – 12:00 AM</div>
              <div className="text-xs text-[#A89882]">Open Daily for Lunch & Dinner</div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Arrow */}
      <a
        href="#story"
        aria-label="Scroll to introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#C4AD89] hover:text-[#F4ECE1] transition-colors p-2 z-10 animate-bounce hidden md:block"
      >
        <ArrowDown className="w-5 h-5 opacity-75" />
      </a>
    </section>
  );
};
