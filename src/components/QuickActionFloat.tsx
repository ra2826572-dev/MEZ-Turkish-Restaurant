import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface QuickActionFloatProps {
  onOpenReservation: () => void;
}

export const QuickActionFloat: React.FC<QuickActionFloatProps> = ({ onOpenReservation }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Button */}
      <a
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MEZ on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform border-2 border-white group relative"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-14 bg-[#0E2019] text-white text-[11px] font-semibold py-1 px-2.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-[#C4AD89]/40">
          WhatsApp Inquiries
        </span>
      </a>

      {/* Floating Reservation Pill */}
      <button
        onClick={onOpenReservation}
        aria-label="Book a table"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#122A22] text-[#FAF7F0] border border-[#C4AD89] shadow-2xl hover:bg-[#1A3E31] transition-all hover:scale-105 cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-xs uppercase font-bold tracking-wider hidden sm:inline">
          Book Table
        </span>
      </button>
    </div>
  );
};
