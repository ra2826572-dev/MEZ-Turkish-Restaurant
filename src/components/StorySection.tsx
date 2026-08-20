import React from 'react';
import { Sparkles, Flame, HeartHandshake, UtensilsCrossed } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E8DFD0]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#16362B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C4AD89]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery with Turkish Brass Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Atmosphere Image */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-[#FFFFFF] group">
                <img
                  src={IMAGES.ambience}
                  alt="MEZ Turkish Restaurant Interior in Gulberg Lahore"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B15]/70 via-transparent to-transparent" />
                
                {/* Floating Image Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0E2019]/90 backdrop-blur-md p-4 rounded-sm border border-[#C4AD89]/40 text-left">
                  <div className="text-xs uppercase tracking-widest text-[#C4AD89] font-medium mb-1">
                    Fine Dining Ambience
                  </div>
                  <div className="text-sm text-[#F4ECE1] font-light">
                    Warm architectural tones, intimate velvet booths & authentic Turkish touches in Gulberg 2.
                  </div>
                </div>
              </div>

              {/* Decorative Corner Filigree Accent */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C4AD89] pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#C4AD89] pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C7654] font-semibold">
              <span className="w-6 h-[1px] bg-[#C4AD89]" />
              <span>Our Culinary Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#142A21] leading-tight tracking-wide">
              A Taste of Turkey in Lahore
            </h2>

            <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#8E7450] leading-relaxed">
              Where the rich heritage of Anatolian gastronomy meets modern fine dining hospitality.
            </p>

            <div className="space-y-4 text-base text-[#3C423E] leading-relaxed font-light">
              <p>
                Located in the vibrant culinary district of Gulberg 2, <strong>MEZ Turkish Restaurant</strong> brings the time-honored culinary traditions of Turkey directly to Lahore. We focus on rich, authentic flavors, masterfully prepared over natural wood charcoal grills and in traditional stone ovens.
              </p>
              <p>
                From tender slow-cooked meats and succulent Adana kebabs to crisp boat-shaped pides and velvety meze spreads, every dish is crafted with meticulous attention to detail, traditional recipes, and premium presentation.
              </p>
              <p>
                Whether you join us for an intimate lunch, a celebratory family feast, or late-night dessert over freshly brewed Turkish Çay, our serene ambience and dedicated table service promise an elevated dining experience.
              </p>
            </div>

            {/* Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] rounded-sm border border-[#EBE4D5] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#16362B] flex items-center justify-center text-[#C4AD89] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#142A21]">Charcoal Grilled Meats</h4>
                  <p className="text-xs text-[#626A65] mt-0.5">Natural hardwood coal skewers & slow-simmered tender cuts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] rounded-sm border border-[#EBE4D5] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#16362B] flex items-center justify-center text-[#C4AD89] shrink-0 mt-0.5">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#142A21]">Fresh Stone-Baked Pide</h4>
                  <p className="text-xs text-[#626A65] mt-0.5">Golden crust flatbreads baked fresh to order daily.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] rounded-sm border border-[#EBE4D5] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#16362B] flex items-center justify-center text-[#C4AD89] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#142A21]">Authentic Gaziantep Sweets</h4>
                  <p className="text-xs text-[#626A65] mt-0.5">Golden hot Kunafa and pistachio baklava with Turkish tea.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] rounded-sm border border-[#EBE4D5] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#16362B] flex items-center justify-center text-[#C4AD89] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#142A21]">Warm Turkish Hospitality</h4>
                  <p className="text-xs text-[#626A65] mt-0.5">Attentive table service and peaceful aesthetic dining.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
