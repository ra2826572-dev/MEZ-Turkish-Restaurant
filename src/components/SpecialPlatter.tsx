import React from 'react';
import { Crown, Users, Sparkles, CheckCircle2, Calendar, Phone, ArrowRight } from 'lucide-react';
import { SPECIAL_PLATTER_DATA, RESTAURANT_INFO } from '../data/restaurantData';

interface SpecialPlatterProps {
  onOpenReservation: () => void;
}

export const SpecialPlatter: React.FC<SpecialPlatterProps> = ({ onOpenReservation }) => {
  return (
    <section id="platter" className="py-20 lg:py-28 bg-[#0B1A14] text-[#FAF7F0] relative overflow-hidden border-y border-[#264A3B]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C4AD89]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#16362B]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Gold Border Card Container */}
        <div className="relative rounded-sm bg-gradient-to-b from-[#132A20] to-[#0E1F18] border-2 border-[#C4AD89]/70 shadow-2xl p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Top Crown Badge */}
          <div className="flex items-center justify-between pb-6 border-b border-[#254B3B] mb-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span>The Royal Sultan Experience</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 bg-[#1A382C] rounded-full border border-[#C4AD89]/40 text-[#E8DCC4] text-xs">
              <Users className="w-3.5 h-3.5 text-[#C4AD89]" />
              <span>{SPECIAL_PLATTER_DATA.serves}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Prominent Image Presentation */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden border-2 border-[#C4AD89] shadow-2xl group">
                <img
                  src={SPECIAL_PLATTER_DATA.image}
                  alt="MEZ Special Platter Royal Turkish Feast"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A14]/90 via-transparent to-transparent" />

                {/* Overlaid Price Shield */}
                <div className="absolute bottom-6 left-6 bg-[#0E2019]/95 backdrop-blur-md px-5 py-3 rounded-sm border border-[#D4AF37] shadow-xl">
                  <span className="text-[11px] uppercase tracking-widest text-[#C4AD89] block font-light">
                    Exclusive Platter
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#E8DCC4]">PKR</span>
                    <span className="font-cinzel-brand text-2xl sm:text-3xl font-bold text-[#FAF0D9]">
                      {SPECIAL_PLATTER_DATA.priceFormatted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ottoman corner ornaments */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />
            </div>

            {/* Right: Detailed Breakdown & Reservation */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="font-serif-luxury italic text-lg text-[#C4AD89] tracking-wider block mb-1">
                  {SPECIAL_PLATTER_DATA.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#FAF7F0] tracking-wide">
                  {SPECIAL_PLATTER_DATA.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed">
                {SPECIAL_PLATTER_DATA.description}
              </p>

              {/* Inclusions List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>What the Feast Includes</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SPECIAL_PLATTER_DATA.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#E8DCC4] font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C4AD89] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-6 border-t border-[#254B3B] flex flex-col sm:flex-row items-center gap-4">
                <button
                  id="platter-reserve-btn"
                  onClick={onOpenReservation}
                  className="w-full sm:w-auto px-8 py-4 bg-[#C4AD89] hover:bg-[#D5C1A1] text-[#0A1A14] font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-xl hover:shadow-[#C4AD89]/20 flex items-center justify-center gap-2 cursor-pointer border border-[#E5D2B4]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Your Experience</span>
                </button>

                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 border border-[#2F5A48] hover:border-[#C4AD89] text-[#E8DCC4] text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 hover:bg-[#16362B]"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4AD89]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
