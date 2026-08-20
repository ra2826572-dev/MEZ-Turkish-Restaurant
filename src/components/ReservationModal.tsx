import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Users, Phone, User, Send, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationDetails } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationDetails>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: 2,
    seatingPreference: 'indoor-main',
    occasion: 'Dinner',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello MEZ Turkish Restaurant,\nI would like to book a table:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Guests: ${formData.guests} persons\n` +
      `• Date: ${formData.date}\n` +
      `• Time: ${formData.time}\n` +
      `• Seating: ${formData.seatingPreference}\n` +
      (formData.specialRequest ? `• Notes: ${formData.specialRequest}\n` : '')
    );
    window.open(`https://wa.me/923155397465?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#142C22] border border-[#C4AD89] rounded-sm max-w-lg w-full overflow-hidden shadow-2xl relative text-[#FAF7F0]">
        {/* Header */}
        <div className="p-6 border-b border-[#264E3E] flex items-center justify-between bg-[#0E2019]">
          <div>
            <h3 className="font-cinzel-brand text-xl font-bold text-[#F4ECE1]">
              Table Reservation
            </h3>
            <p className="font-serif-luxury italic text-xs text-[#C4AD89]">
              MEZ Turkish Restaurant • Gulberg 2, Lahore
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#A89882] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#1B3B30] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto border border-[#C4AD89]">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-cinzel-brand text-xl font-bold text-[#F4ECE1]">
                Reservation Request Prepared
              </h4>
              <p className="text-xs text-[#D8C6A5] max-w-xs mx-auto">
                Tap below to send your reservation directly to MEZ staff on WhatsApp for immediate table confirmation.
              </p>
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 bg-[#C4AD89] hover:bg-[#D5C1A1] text-[#0C1B15] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#0C1B15]" />
                <span>Confirm on WhatsApp</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D8C6A5] mb-1 font-semibold">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0F221A] border border-[#2A5241] rounded-sm text-sm text-white focus:outline-none focus:border-[#C4AD89]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D8C6A5] mb-1 font-semibold">
                  Phone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0F221A] border border-[#2A5241] rounded-sm text-sm text-white focus:outline-none focus:border-[#C4AD89]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8C6A5] mb-1 font-semibold">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0F221A] border border-[#2A5241] rounded-sm text-xs text-white focus:outline-none focus:border-[#C4AD89]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8C6A5] mb-1 font-semibold">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0F221A] border border-[#2A5241] rounded-sm text-xs text-white focus:outline-none focus:border-[#C4AD89]"
                  >
                    {['13:00', '14:00', '15:00', '18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'].map((t) => (
                      <option key={t} value={t}>{t} ({parseInt(t) >= 12 ? 'PM' : 'AM'})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8C6A5] mb-1 font-semibold">
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full px-3 py-2.5 bg-[#0F221A] border border-[#2A5241] rounded-sm text-xs text-white focus:outline-none focus:border-[#C4AD89]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8C6A5] mb-1 font-semibold">
                    Seating
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
                    className="w-full px-3 py-2.5 bg-[#0F221A] border border-[#2A5241] rounded-sm text-xs text-white focus:outline-none focus:border-[#C4AD89]"
                  >
                    <option value="indoor-main">Main Dining</option>
                    <option value="family-private">Family Lounge</option>
                    <option value="lounge">Velvet Booth</option>
                    <option value="outdoor-patio">Outdoor Patio</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D8C6A5] mb-1 font-semibold">
                  Special Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, MEZ Platter pre-order"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#0F221A] border border-[#2A5241] rounded-sm text-xs text-white focus:outline-none focus:border-[#C4AD89]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C4AD89] hover:bg-[#D5C1A1] text-[#0C1B15] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer shadow-lg"
                >
                  Request Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
