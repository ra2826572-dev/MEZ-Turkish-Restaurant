import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, MessageSquare, Car, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactSectionProps {
  onOpenReservation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#10241C] text-[#FAF7F0] relative overflow-hidden">
      {/* Background Ottoman Grid */}
      <div className="absolute inset-0 bg-turkish-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A382C] border border-[#C4AD89]/30 text-[#D8C6A5] text-xs uppercase tracking-[0.2em] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Gulberg 2, Lahore</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#F4ECE1] tracking-wide mb-3">
            Find & Visit MEZ
          </h2>

          <p className="font-serif-luxury italic text-lg sm:text-xl text-[#C4AD89] mb-4">
            Centrally situated in the premier dining corridor of Gulberg, Lahore.
          </p>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto">
            <div className="h-[1px] flex-1 bg-[#C4AD89]/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-[#C4AD89]/60" />
          </div>
        </div>

        {/* 2-Column Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-[#163127] border border-[#264E3E] rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#264E3E]">
                <div className="w-12 h-12 rounded-full bg-[#1A3B2E] border border-[#C4AD89] flex items-center justify-center text-[#E8DCC4] font-cinzel-brand font-bold text-lg">
                  M
                </div>
                <div>
                  <h3 className="font-cinzel-brand text-xl font-bold text-[#F4ECE1]">
                    {RESTAURANT_INFO.name}
                  </h3>
                  <p className="font-serif-luxury italic text-xs text-[#C4AD89]">
                    Authentic Turkish Dining Experience
                  </p>
                </div>
              </div>

              {/* Detail Items */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1D4032] flex items-center justify-center text-[#C4AD89] shrink-0 border border-[#2E5E4A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A89882] font-semibold">
                      Location & Address
                    </h4>
                    <p className="text-sm text-[#FAF7F0] font-medium mt-1">
                      {RESTAURANT_INFO.address}
                    </p>
                    <p className="text-xs text-[#C4AD89] mt-0.5">
                      {RESTAURANT_INFO.locationDetails}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1D4032] flex items-center justify-center text-[#C4AD89] shrink-0 border border-[#2E5E4A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A89882] font-semibold">
                      Telephone & WhatsApp
                    </h4>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-base text-[#FAF7F0] font-bold mt-1 block hover:text-[#C4AD89] transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <span className="text-xs text-[#C4AD89]">Tap to call directly from mobile</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1D4032] flex items-center justify-center text-[#C4AD89] shrink-0 border border-[#2E5E4A]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A89882] font-semibold">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-[#FAF7F0] font-medium mt-1">
                      {RESTAURANT_INFO.openingHours}
                    </p>
                    <p className="text-xs text-[#C4AD89] mt-0.5">
                      Lunch: 1:00 PM – 5:00 PM | Dinner: 6:00 PM – 12:00 AM
                    </p>
                  </div>
                </div>

                {/* Parking & Services */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1D4032] flex items-center justify-center text-[#C4AD89] shrink-0 border border-[#2E5E4A]">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A89882] font-semibold">
                      Valet & Accessibility
                    </h4>
                    <p className="text-xs text-[#D8C6A5] mt-1 font-light">
                      Dedicated parking, valet service available, wheelchair accessible dining room.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#264E3E]">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-[#C4AD89] hover:bg-[#D5C1A1] text-[#0C1B15] font-bold text-xs uppercase tracking-wider rounded-sm text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="py-3 border border-[#2E5E4A] hover:border-[#C4AD89] text-[#FAF7F0] font-semibold text-xs uppercase tracking-wider rounded-sm text-center flex items-center justify-center gap-1.5 hover:bg-[#1A3B2E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4AD89]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Styled Map View */}
          <div className="lg:col-span-7 bg-[#163127] border border-[#264E3E] rounded-sm overflow-hidden flex flex-col justify-between shadow-xl min-h-[420px]">
            {/* Map Frame */}
            <div className="relative flex-1 min-h-[340px] bg-[#0E1F18] flex items-center justify-center overflow-hidden">
              <iframe
                title="MEZ Turkish Restaurant Map Location Gulberg 2 Lahore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.782046418706!2d74.34863337628876!3d31.502932997998634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919058b8f2780e9%3A0xa97193d5dfd9d701!2sGulberg%202%2C%20Lahore!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                className="w-full h-full border-0 absolute inset-0 filter invert-[90%] hue-rotate-180 contrast-90 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Branded Floating Location Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0E2019]/95 backdrop-blur-md p-4 rounded-sm border border-[#C4AD89]/70 shadow-2xl z-10 pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    Open Today 1:00 PM – 12:00 AM
                  </span>
                </div>
                <h4 className="font-cinzel-brand font-bold text-sm text-[#FAF7F0]">
                  MEZ Turkish Restaurant
                </h4>
                <p className="text-xs text-[#D8C6A5] mt-0.5">
                  5, Block L, Gulberg 2, Lahore
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#0C1B15] bg-[#C4AD89] px-2.5 py-1 rounded-xs flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={onOpenReservation}
                    className="text-[11px] font-medium text-[#FAF7F0] border border-[#2E5E4A] px-2.5 py-1 rounded-xs hover:bg-[#1A3B2E]"
                  >
                    Book Table
                  </button>
                </div>
              </div>
            </div>

            {/* Map Card Footer */}
            <div className="p-4 bg-[#11261E] border-t border-[#264E3E] flex items-center justify-between text-xs text-[#A89882]">
              <span>Near Main Boulevard, Gulberg 2</span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4AD89] hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps Application</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
