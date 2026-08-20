import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091510] text-[#D8CBB7] border-t border-[#1C3A2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1A382C]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C4AD89] flex items-center justify-center bg-[#142D22] text-[#E8DCC4] shadow-md">
                <span className="font-cinzel-brand font-bold text-sm tracking-wider">M</span>
              </div>
              <div>
                <span className="font-cinzel-brand text-2xl font-bold tracking-[0.25em] text-[#F4ECE1] block leading-none">
                  MEZ
                </span>
                <span className="font-serif-luxury italic text-xs tracking-[0.2em] text-[#C4AD89] block mt-1 uppercase">
                  Turkish Restaurant
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B5A895] font-light leading-relaxed max-w-sm">
              Experience the pinnacle of authentic Turkish gastronomy in Gulberg, Lahore. Fresh stone-oven pides, wood charcoal-grilled kebabs, rich slow-cooked meats, and sweet Gaziantep Kunafa.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#132A20] border border-[#264E3E] flex items-center justify-center text-[#25D366] hover:border-[#C4AD89] hover:bg-[#1A3A2C] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#132A20] border border-[#264E3E] flex items-center justify-center text-[#E8DCC4] hover:border-[#C4AD89] hover:bg-[#1A3A2C] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#132A20] border border-[#264E3E] flex items-center justify-center text-[#E8DCC4] hover:border-[#C4AD89] hover:bg-[#1A3A2C] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel-brand text-sm font-bold uppercase tracking-widest text-[#FAF7F0] border-b border-[#1E4233] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Signatures Dishes
                </a>
              </li>
              <li>
                <a href="#platter" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  MEZ Royal Platter
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Turkish Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Hospitality Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F4ECE1] text-[#A89882] transition-colors block py-0.5">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel-brand text-sm font-bold uppercase tracking-widest text-[#FAF7F0] border-b border-[#1E4233] pb-2">
              Contact & Hours
            </h4>

            <div className="space-y-3 text-xs text-[#B5A895]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C4AD89] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C4AD89] shrink-0 mt-0.5" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-[#F4ECE1] font-semibold">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C4AD89] shrink-0 mt-0.5" />
                <span>
                  Open Daily: 1:00 PM – 12:00 AM (Midnight)
                  <br />
                  <span className="text-[#A2947F]">Lunch, Dinner & Late Night Service</span>
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 bg-[#C4AD89] text-[#0A1812] text-xs font-bold uppercase tracking-wider rounded-sm text-center block hover:bg-[#D5C1A1] transition-colors"
              >
                Call for Table Reservation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7D6C]">
          <p>© 2026 MEZ Turkish Restaurant. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Gulberg 2, Lahore, Pakistan</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#C4AD89] hover:text-[#FAF7F0] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
