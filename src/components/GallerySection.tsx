import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/restaurantData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'ambience', label: 'Ambience' },
    { id: 'cuisine', label: 'Turkish Cuisine' },
  ];

  const filteredGallery = GALLERY_IMAGES.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const openLightbox = (image: GalleryImage) => {
    const idx = filteredGallery.findIndex((i) => i.id === image.id);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
      );
    }
  };

  const activeImage = activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E5DAC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D2] border border-[#C4AD89] text-[#142A21] text-xs uppercase tracking-[0.2em] mb-4">
            <Camera className="w-3.5 h-3.5 text-[#927448]" />
            <span>Visual Journal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#142A21] tracking-wide mb-3">
            Moments at MEZ
          </h2>

          <p className="font-serif-luxury italic text-lg sm:text-xl text-[#8E7450] mb-4">
            A glimpse into our vibrant kitchens, artisanal dishes, and serene dining spaces.
          </p>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto mb-8">
            <div className="h-[1px] flex-1 bg-[#C4AD89]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#927448]" />
            <div className="h-[1px] flex-1 bg-[#C4AD89]" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#142A21] text-[#FAF7F0] shadow-md'
                    : 'bg-[#FFFFFF] text-[#55605A] border border-[#E0D4C2] hover:bg-[#F2EAE0] hover:text-[#142A21]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative h-72 sm:h-80 rounded-sm overflow-hidden bg-[#0E2019] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-[#E3D8C6]"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B15]/90 via-[#0C1B15]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Overlay Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-[#142A21]/80 backdrop-blur-sm flex items-center justify-center text-[#C4AD89] border border-[#C4AD89]/40">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C4AD89] block font-semibold mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-cinzel-brand text-lg font-bold text-[#FAF7F0]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-[#D8C6A5] font-light mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="max-h-[75vh] w-auto overflow-hidden rounded-sm border border-[#C4AD89]/60 shadow-2xl">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="font-cinzel-brand text-xl font-bold text-[#F4ECE1]">
                {activeImage.title}
              </h3>
              {activeImage.description && (
                <p className="text-sm text-[#D8C6A5] mt-1 font-light">
                  {activeImage.description}
                </p>
              )}
              <span className="text-xs text-[#8A847B] block mt-2">
                {activeLightboxIndex + 1} / {filteredGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
