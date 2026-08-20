import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + CUSTOMER_REVIEWS.length) % CUSTOMER_REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#12261E] text-[#FAF7F0] relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-turkish-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Google Score Card */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-[#254F3E]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3B2E] border border-[#C4AD89]/30 text-[#D8C6A5] text-xs uppercase tracking-[0.2em] mb-3">
              <MessageSquareHeart className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Guest Experiences</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#F4ECE1] tracking-wide">
              What Our Guests Say
            </h2>

            <p className="font-serif-luxury italic text-base sm:text-lg text-[#C4AD89] mt-2">
              Authentic feedback from diners at MEZ in Gulberg 2, Lahore.
            </p>
          </div>

          {/* Google 4.8 Rating Banner */}
          <div className="bg-[#173428] border border-[#C4AD89]/60 p-5 rounded-sm flex items-center gap-6 shadow-xl shrink-0">
            <div className="text-center pr-6 border-r border-[#2C5946]">
              <span className="font-cinzel-brand text-4xl font-bold text-[#F4ECE1] block leading-none">
                4.8
              </span>
              <div className="flex items-center justify-center gap-0.5 text-[#D4AF37] my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[10px] text-[#A89882] uppercase tracking-wider block">
                Out of 5.0
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FAF7F0]">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
                <span>Verified Reviews</span>
              </div>
              <p className="text-xs text-[#D8C6A5] font-light mt-0.5">
                Based on <strong>53 authentic customer reviews</strong>
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#C4AD89] underline hover:text-[#FFFFFF] mt-1.5 inline-block"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Featured Testimonials Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-[#163127] p-7 rounded-sm border border-[#264E3E] hover:border-[#C4AD89] transition-all duration-300 flex flex-col justify-between shadow-lg relative group"
            >
              <Quote className="w-8 h-8 text-[#C4AD89]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="font-serif-luxury italic text-base sm:text-lg text-[#F4ECE1] leading-relaxed mb-4">
                  "{review.excerpt}"
                </p>

                <p className="text-xs text-[#C9BFB0] font-light leading-relaxed mb-6">
                  {review.fullText}
                </p>
              </div>

              <div className="pt-4 border-t border-[#264E3E]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#FAF7F0] flex items-center gap-1.5">
                    {review.author}
                    <CheckCircle2 className="w-3 h-3 text-[#C4AD89]" />
                  </h4>
                  <span className="text-[11px] text-[#8E7E6B]">{review.source}</span>
                </div>

                {review.dishRecommended && (
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-wider text-[#A89882] block">
                      Recommended
                    </span>
                    <span className="text-[11px] text-[#C4AD89] font-medium">
                      {review.dishRecommended}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Review Sentiments Ribbon */}
        <div className="mt-12 p-6 bg-[#0E2019] rounded-sm border border-[#203F32] flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="px-3">
            <span className="font-cinzel-brand text-xl font-bold text-[#EED8B5] block">
              100%
            </span>
            <span className="text-xs text-[#A89882]">Authentic Turkish Recipes</span>
          </div>
          <div className="h-8 w-[1px] bg-[#203F32] hidden sm:block" />
          <div className="px-3">
            <span className="font-cinzel-brand text-xl font-bold text-[#EED8B5] block">
              Wood Charcoal
            </span>
            <span className="text-xs text-[#A89882]">Live Fire Open Grilling</span>
          </div>
          <div className="h-8 w-[1px] bg-[#203F32] hidden sm:block" />
          <div className="px-3">
            <span className="font-cinzel-brand text-xl font-bold text-[#EED8B5] block">
              Gulberg 2
            </span>
            <span className="text-xs text-[#A89882]">Central Lahore Dining Destination</span>
          </div>
          <div className="h-8 w-[1px] bg-[#203F32] hidden sm:block" />
          <div className="px-3">
            <span className="font-cinzel-brand text-xl font-bold text-[#EED8B5] block">
              1 PM – 12 AM
            </span>
            <span className="text-xs text-[#A89882]">Continuous Daily Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};
