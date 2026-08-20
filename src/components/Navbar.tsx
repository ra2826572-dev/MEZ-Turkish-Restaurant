import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, MapPin, Clock, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'Royal Platter', href: '#platter' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#0E2019] text-[#D8C6A5] text-xs py-2 px-4 border-b border-[#254236] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-xs text-[#E3D4BC]">
              <MapPin className="w-3.5 h-3.5 text-[#C4AD89]" />
              5, Block L, Gulberg 2, Lahore
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#E3D4BC]">
              <Clock className="w-3.5 h-3.5 text-[#C4AD89]" />
              Open Daily: 1:00 PM – 12:00 AM
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#F3EAD8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C4AD89]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-[#C4AD89] font-medium">★ 4.8 / 5 Google Rated (53 Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E2019]/95 backdrop-blur-md shadow-xl py-3.5 border-b border-[#203D31]'
            : 'bg-[#0E2019]/80 backdrop-blur-sm py-5 border-b border-[#203D31]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C4AD89] flex items-center justify-center bg-[#173429] text-[#E8DCC4] shadow-md group-hover:border-[#E5D2B4] transition-colors">
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider text-[#DCD1BF] hover:text-[#FBF7F0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4AD89] hover:after:w-full after:transition-all after:duration-300 uppercase text-[12px]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="px-3.5 py-2 text-xs font-medium text-[#E8DCC4] border border-[#2F5244] hover:border-[#C4AD89] rounded-sm hover:bg-[#16362B] transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C4AD89]" />
              <span>Call</span>
            </a>

            <button
              id="nav-reserve-btn"
              onClick={onOpenReservation}
              className="px-5 py-2.5 bg-[#C4AD89] hover:bg-[#D5C1A1] text-[#0D2018] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenReservation}
              className="sm:hidden px-3 py-1.5 bg-[#C4AD89] text-[#0D2018] text-xs font-semibold uppercase rounded-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E8DCC4] hover:text-white rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#0E2019] border-l border-[#203D31] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#203D31]">
                <div>
                  <span className="font-cinzel-brand text-2xl font-bold tracking-[0.2em] text-[#F4ECE1]">
                    MEZ
                  </span>
                  <span className="font-serif-luxury text-xs text-[#C4AD89] block">
                    Turkish Cuisine • Lahore
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#D8C6A5] hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded text-sm uppercase tracking-wider text-[#E8DCC4] hover:bg-[#16362B] hover:text-white transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C4AD89]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#203D31] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-[#C4AD89] text-[#0D2018] font-semibold text-xs uppercase tracking-widest rounded-sm text-center shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 border border-[#2F5244] text-[#E8DCC4] font-medium text-xs uppercase tracking-wider rounded-sm text-center flex items-center justify-center gap-2 hover:bg-[#16362B]"
              >
                <Phone className="w-4 h-4 text-[#C4AD89]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <div className="text-center text-xs text-[#A2947F] pt-2">
                5, Block L, Gulberg 2, Lahore
                <br />
                Open 1:00 PM – 12:00 AM Daily
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
