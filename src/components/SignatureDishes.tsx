import React, { useState } from 'react';
import { Sparkles, Flame, Eye, ChevronRight, Check } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { MenuItem } from '../types';

interface SignatureDishesProps {
  onSelectDishForReservation?: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenReservation }) => {
  const [activeDish, setActiveDish] = useState<MenuItem | null>(null);

  return (
    <section id="signatures" className="py-20 lg:py-28 bg-[#12261E] text-[#FAF7F0] relative overflow-hidden">
      {/* Background Subtle Ottoman Grid Pattern */}
      <div className="absolute inset-0 bg-turkish-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B3B30] border border-[#C4AD89]/30 text-[#D8C6A5] text-xs uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Chef's Masterpieces</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#F4ECE1] tracking-wide mb-4">
            Signature Turkish Flavours
          </h2>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto mb-4">
            <div className="h-[1px] flex-1 bg-[#C4AD89]/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-[#C4AD89]/60" />
          </div>

          <p className="text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed">
            Handpicked specialties crafted with traditional Anatolian spices, master butchery, and slow charcoal fire.
          </p>
        </div>

        {/* Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#163127] rounded-sm overflow-hidden border border-[#264E3E] hover:border-[#C4AD89] transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-[#0C1B15]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163127] via-transparent to-transparent opacity-80" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="px-2.5 py-1 bg-[#0E2019]/90 backdrop-blur-md text-[#E8DCC4] border border-[#C4AD89]/50 text-[10px] uppercase font-semibold tracking-widest rounded-sm">
                    Signature
                  </span>
                  {dish.isSpicy && (
                    <span className="px-2 py-0.5 bg-[#8C2A1E]/90 text-white text-[10px] uppercase font-bold tracking-wider rounded-sm flex items-center gap-1 w-fit">
                      <Flame className="w-3 h-3" /> Spicy
                    </span>
                  )}
                </div>

                {/* Price Tag Badge */}
                <div className="absolute bottom-3 right-3 bg-[#0B1A14]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#C4AD89]">
                  <span className="text-xs text-[#A89882] block font-light">PKR</span>
                  <span className="font-cinzel-brand text-base font-bold text-[#EED8B5] leading-none">
                    {dish.price.toLocaleString()}/-
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-cinzel-brand text-lg font-bold text-[#FAF7F0] group-hover:text-[#E8DCC4] transition-colors">
                      {dish.name}
                    </h3>
                  </div>

                  {dish.turkishName && (
                    <p className="font-serif-luxury italic text-xs text-[#C4AD89] tracking-wider mb-2.5">
                      {dish.turkishName}
                    </p>
                  )}

                  <p className="text-xs text-[#C9BFB0] font-light leading-relaxed line-clamp-3 mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#264E3E]/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveDish(dish)}
                    className="text-xs text-[#D8C6A5] hover:text-[#FFFFFF] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C4AD89]" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={onOpenReservation}
                    className="px-3 py-1.5 bg-[#C4AD89]/20 hover:bg-[#C4AD89] text-[#E8DCC4] hover:text-[#0C1B15] text-[11px] font-semibold uppercase tracking-wider rounded-sm border border-[#C4AD89]/40 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Prompt */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C4AD89] hover:text-[#F4ECE1] border-b border-[#C4AD89]/50 hover:border-[#F4ECE1] pb-1 transition-colors"
          >
            <span>View Full Authentic Turkish Menu (Soups, BBQ, Pide & Sweets)</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {activeDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#142C22] border border-[#C4AD89] rounded-sm max-w-lg w-full overflow-hidden shadow-2xl relative text-[#FAF7F0]">
            <div className="relative h-64">
              <img
                src={activeDish.image}
                alt={activeDish.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveDish(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-cinzel-brand text-2xl font-bold text-[#F4ECE1]">
                    {activeDish.name}
                  </h3>
                  {activeDish.turkishName && (
                    <p className="font-serif-luxury italic text-sm text-[#C4AD89]">
                      {activeDish.turkishName}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#A89882] block">Price</span>
                  <span className="font-cinzel-brand text-xl font-bold text-[#EED8B5]">
                    PKR {activeDish.price.toLocaleString()}/-
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#D4C8B5] font-light leading-relaxed my-4">
                {activeDish.description}
              </p>
              <div className="pt-4 border-t border-[#264E3E] flex gap-3">
                <button
                  onClick={() => {
                    setActiveDish(null);
                    onOpenReservation();
                  }}
                  className="flex-1 py-3 bg-[#C4AD89] hover:bg-[#D5C1A1] text-[#0C1B15] font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors text-center"
                >
                  Reserve Table for this Dish
                </button>
                <button
                  onClick={() => setActiveDish(null)}
                  className="px-5 py-3 border border-[#2F5244] text-[#E8DCC4] hover:bg-[#1C3E31] text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
