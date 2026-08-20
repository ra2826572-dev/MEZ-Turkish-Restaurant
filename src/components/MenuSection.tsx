import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Flame, Leaf, Utensils, ChevronDown, Check, Phone } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegetarianOnly, setVegetarianOnly] = useState<boolean>(false);
  const [signatureOnly, setSignatureOnly] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Vegetarian filter
      if (vegetarianOnly && !item.isVegetarian) {
        return false;
      }
      // Signature filter
      if (signatureOnly && !item.isSignature) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchTurkish = item.turkishName?.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchTurkish) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery, vegetarianOnly, signatureOnly]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E3D8C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D2] border border-[#C4AD89] text-[#142A21] text-xs uppercase tracking-[0.2em] mb-4">
            <Utensils className="w-3.5 h-3.5 text-[#927448]" />
            <span>Authentic Turkish Menu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#142A21] tracking-wide mb-3">
            Culinary Offerings
          </h2>

          <p className="font-serif-luxury italic text-lg sm:text-xl text-[#8E7450] mb-4">
            Every dish prepared with traditional Turkish recipes and authentic charcoal technique.
          </p>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto mb-6">
            <div className="h-[1px] flex-1 bg-[#C4AD89]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#927448]" />
            <div className="h-[1px] flex-1 bg-[#C4AD89]" />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-sm border border-[#E5DAC8] shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#8C7B68] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Iskender, Pide, Kunafa)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] placeholder-[#9E907F] focus:outline-none focus:border-[#142A21] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7B68] hover:text-[#142A21]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Dietary Toggles */}
            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-start md:justify-end">
              <button
                onClick={() => setVegetarianOnly(!vegetarianOnly)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm border transition-all flex items-center gap-1.5 cursor-pointer ${
                  vegetarianOnly
                    ? 'bg-[#1D4A38] text-white border-[#1D4A38]'
                    : 'bg-[#FAF7F0] text-[#3D4742] border-[#D8CCBA] hover:border-[#1D4A38]'
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>Vegetarian</span>
              </button>

              <button
                onClick={() => setSignatureOnly(!signatureOnly)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm border transition-all flex items-center gap-1.5 cursor-pointer ${
                  signatureOnly
                    ? 'bg-[#8C734B] text-white border-[#8C734B]'
                    : 'bg-[#FAF7F0] text-[#3D4742] border-[#D8CCBA] hover:border-[#8C734B]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C4AD89]" />
                <span>Signatures Only</span>
              </button>

              {(vegetarianOnly || signatureOnly || searchQuery) && (
                <button
                  onClick={() => {
                    setVegetarianOnly(false);
                    setSignatureOnly(false);
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-xs text-[#8C7B68] underline hover:text-[#142A21] px-2"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-2 scrollbar-none border-t border-[#F0E8DC]">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#142A21] text-[#FAF7F0] shadow-md'
                    : 'bg-[#FAF7F0] text-[#55605A] hover:bg-[#EFE7D8] hover:text-[#142A21]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Count Status */}
        <div className="flex items-center justify-between text-xs text-[#7A6C5B] mb-6">
          <span>Showing <strong>{filteredItems.length}</strong> Turkish items</span>
          <span>All prices in Pakistani Rupee (PKR) inclusive of taxes</span>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFFFF] rounded-sm border border-[#E5DAC8]">
            <p className="text-base text-[#7A6C5B]">No menu items match your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setVegetarianOnly(false);
                setSignatureOnly(false);
              }}
              className="mt-3 text-xs uppercase tracking-wider text-[#142A21] underline font-semibold"
            >
              View Full Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border border-[#E5DAC8] rounded-sm p-4 sm:p-5 hover:border-[#142A21] transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex gap-4 items-start">
                    {/* Item Thumbnail */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden bg-[#FAF7F0] shrink-0 border border-[#E3D8C6]">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Header & Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-cinzel-brand font-bold text-base text-[#142A21] leading-snug group-hover:text-[#8E7450] transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      {item.turkishName && (
                        <p className="font-serif-luxury italic text-xs text-[#8E7450] tracking-wide mb-1">
                          {item.turkishName}
                        </p>
                      )}

                      <div className="flex items-center gap-1.5 flex-wrap mt-1">
                        {item.isSignature && (
                          <span className="px-1.5 py-0.5 bg-[#142A21] text-[#E8DCC4] text-[9px] uppercase tracking-wider font-semibold rounded-xs">
                            Signature
                          </span>
                        )}
                        {item.isVegetarian && (
                          <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] uppercase font-semibold rounded-xs">
                            Vegetarian
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="px-1.5 py-0.5 bg-red-100 text-red-800 text-[9px] uppercase font-semibold rounded-xs flex items-center gap-0.5">
                            <Flame className="w-2.5 h-2.5" /> Spicy
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#5D6661] font-light leading-relaxed mt-3 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Price and Action Bar */}
                <div className="mt-4 pt-3 border-t border-[#F2EAE0] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#8C7B68] block">Price</span>
                    <span className="font-cinzel-brand text-base sm:text-lg font-bold text-[#142A21]">
                      PKR {item.price.toLocaleString()}/-
                    </span>
                  </div>

                  <button
                    onClick={onOpenReservation}
                    className="px-3 py-1.5 bg-[#FAF7F0] hover:bg-[#142A21] text-[#142A21] hover:text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#D8CCBA] transition-colors cursor-pointer"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Menu Footer Contact Notice */}
        <div className="mt-12 p-6 bg-[#142A21] rounded-sm text-[#FAF7F0] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#254B3B]">
          <div>
            <h4 className="font-cinzel-brand text-lg font-bold text-[#FAF7F0]">
              Planning a Group Feast or Special Event?
            </h4>
            <p className="text-xs text-[#D8C6A5] mt-1 font-light">
              We offer customized set menus, family platters, and dedicated service for gatherings at MEZ in Gulberg 2.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="px-4 py-2.5 border border-[#C4AD89] text-[#FAF7F0] text-xs uppercase tracking-wider rounded-sm hover:bg-[#1C3E31] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C4AD89]" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 bg-[#C4AD89] text-[#0C1B15] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#D5C1A1] transition-colors shadow-md"
            >
              Book Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
