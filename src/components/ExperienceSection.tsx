import React from 'react';
import { Sparkles, Users2, Clock, UtensilsCrossed, Wine, Flame } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: <Flame className="w-5 h-5 text-[#C4AD89]" />,
      title: 'Authentic Charcoal Mastery',
      description: 'Our kebabs, tender meats, and whole fish are grilled over natural wood coals, capturing rich smoky aromas and Anatolian seasoning.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C4AD89]" />,
      title: 'Aesthetic Ambience',
      description: 'Sophisticated deep emerald greens, warm architectural lighting, plush seating, and subtle Ottoman geometry designed for serene dining.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-[#C4AD89]" />,
      title: 'Family & Group Gatherings',
      description: 'Spacious banquet seating and royal sharing platters crafted specifically for celebratory family feasts and corporate dinners.',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#C4AD89]" />,
      title: 'Lunch & Late-Night Dining',
      description: 'Serving continuously from 1:00 PM until 12:00 AM midnight daily with uninterrupted kitchen and dessert service.',
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-[#C4AD89]" />,
      title: 'Attentive Table Service',
      description: 'From sizzling tableside butter pourings to freshly brewed Turkish tea in traditional tulip glasses, our hospitality is heartfelt.',
    },
    {
      icon: <Wine className="w-5 h-5 text-[#C4AD89]" />,
      title: 'Artisanal Mocktails & Çay',
      description: 'Crafted seasonal fruit infusions, refreshing mint mojitos, and authentic Turkish coffee simmered in copper cezve pots.',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#10241C] text-[#FAF7F0] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C4AD89]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A382C] border border-[#C4AD89]/30 text-[#D8C6A5] text-xs uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The MEZ Hospitality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#F4ECE1] tracking-wide mb-3">
            More Than a Meal
          </h2>

          <p className="font-serif-luxury italic text-lg sm:text-xl text-[#C4AD89] mb-4">
            An immersion into genuine Turkish culinary culture, warm hospitality, and timeless ambience.
          </p>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto">
            <div className="h-[1px] flex-1 bg-[#C4AD89]/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-[#C4AD89]/60" />
          </div>
        </div>

        {/* 2-Column Experience Breakdown with Visual Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Grid: Features */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#152E23] p-5 rounded-sm border border-[#244E3C] hover:border-[#C4AD89] transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#1A3B2E] flex items-center justify-center mb-4 border border-[#2F5E49] group-hover:border-[#C4AD89] transition-colors">
                  {exp.icon}
                </div>
                <h3 className="font-cinzel-brand text-base font-bold text-[#FAF7F0] mb-2 group-hover:text-[#E8DCC4] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#C9BFB0] font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Composite */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="rounded-sm overflow-hidden border-2 border-[#C4AD89]/70 shadow-2xl">
              <img
                src={IMAGES.ambience}
                alt="MEZ Turkish Restaurant Ambience in Gulberg 2 Lahore"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Quick Stat Pill */}
            <div className="bg-[#152E23] p-5 rounded-sm border border-[#244E3C] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#C4AD89] uppercase tracking-wider block font-semibold">
                  Location & Timing
                </span>
                <span className="text-sm font-bold text-[#FAF7F0] block mt-0.5">
                  5, Block L, Gulberg 2, Lahore
                </span>
                <span className="text-xs text-[#A89882]">Open 7 Days a Week • 1 PM – 12 AM</span>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-4 py-2 bg-[#C4AD89] text-[#0C1B15] text-xs font-bold uppercase rounded-sm hover:bg-[#D5C1A1] transition-colors shrink-0"
              >
                Call MEZ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
