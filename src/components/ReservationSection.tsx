import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Phone, User, MessageSquare, Check, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationDetails } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationDetails>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 4,
    seatingPreference: 'indoor-main',
    occasion: 'Dinner',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00',
    '17:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello MEZ Turkish Restaurant,\nI would like to confirm my table reservation request:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Guests: ${formData.guests} persons\n` +
      `• Date: ${formData.date}\n` +
      `• Time: ${formData.time}\n` +
      `• Seating: ${formData.seatingPreference}\n` +
      `• Occasion: ${formData.occasion || 'Regular Dining'}\n` +
      (formData.specialRequest ? `• Special Notes: ${formData.specialRequest}\n` : '')
    );
    window.open(`https://wa.me/923155397465?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 lg:py-28 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E5DAC8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D2] border border-[#C4AD89] text-[#142A21] text-xs uppercase tracking-[0.2em] mb-4">
            <CalendarIcon className="w-3.5 h-3.5 text-[#927448]" />
            <span>Table Bookings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel-brand font-bold text-[#142A21] tracking-wide mb-3">
            Reserve Your Experience
          </h2>

          <p className="font-serif-luxury italic text-lg sm:text-xl text-[#8E7450] mb-4">
            Experience authentic Turkish hospitality in the heart of Gulberg, Lahore.
          </p>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto">
            <div className="h-[1px] flex-1 bg-[#C4AD89]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#927448]" />
            <div className="h-[1px] flex-1 bg-[#C4AD89]" />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#FFFFFF] border-2 border-[#D8CCBA] rounded-sm shadow-xl p-6 sm:p-10 lg:p-12 relative">
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-[#142A21] text-[#E8DCC4] rounded-full flex items-center justify-center mx-auto border-2 border-[#C4AD89] shadow-lg">
                <Check className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div>
                <h3 className="font-cinzel-brand text-2xl sm:text-3xl font-bold text-[#142A21]">
                  Reservation Request Received
                </h3>
                <p className="text-sm text-[#5D6661] mt-2 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your reservation request for{' '}
                  <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at{' '}
                  <strong>{formData.time}</strong> is prepared.
                </p>
              </div>

              {/* Receipt Preview Box */}
              <div className="bg-[#FAF7F0] p-6 rounded-sm border border-[#E0D4C2] max-w-md mx-auto text-left text-xs space-y-2 text-[#3D4742]">
                <div className="flex justify-between pb-2 border-b border-[#E0D4C2] font-semibold text-[#142A21]">
                  <span>MEZ Turkish Restaurant</span>
                  <span>Gulberg 2, Lahore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6C5B]">Guest Name:</span>
                  <span className="font-medium text-[#142A21]">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6C5B]">Phone:</span>
                  <span className="font-medium text-[#142A21]">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6C5B]">Date & Time:</span>
                  <span className="font-medium text-[#142A21]">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6C5B]">Party Size:</span>
                  <span className="font-medium text-[#142A21]">{formData.guests} Persons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6C5B]">Seating Preference:</span>
                  <span className="font-medium text-[#142A21] capitalize">{formData.seatingPreference.replace('-', ' ')}</span>
                </div>
                {formData.specialRequest && (
                  <div className="flex justify-between">
                    <span className="text-[#7A6C5B]">Special Notes:</span>
                    <span className="font-medium text-[#142A21]">{formData.specialRequest}</span>
                  </div>
                )}
              </div>

              {/* 1-Click WhatsApp Sync Button */}
              <div className="space-y-3 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-4 bg-[#142A21] hover:bg-[#1E3E31] text-[#FAF7F0] font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#C4AD89]"
                >
                  <Send className="w-4 h-4 text-[#25D366]" />
                  <span>Send Confirmation to MEZ on WhatsApp</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#8C7B68] underline hover:text-[#142A21]"
                >
                  Make another booking
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#142A21] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C7B68] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] placeholder-[#9E907F] focus:outline-none focus:border-[#142A21] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#142A21] mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C7B68] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] placeholder-[#9E907F] focus:outline-none focus:border-[#142A21] transition-colors"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#142A21] mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <CalendarIcon className="w-4 h-4 text-[#8C7B68] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] focus:outline-none focus:border-[#142A21] transition-colors"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#142A21] mb-2">
                    Time (1:00 PM – 11:30 PM) *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#8C7B68] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] focus:outline-none focus:border-[#142A21] transition-colors appearance-none cursor-pointer"
                    >
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t} ({parseInt(t.split(':')[0]) >= 12 ? 'PM' : 'AM'})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#142A21] mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#8C7B68] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] focus:outline-none focus:border-[#142A21] transition-colors appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'} {num >= 6 ? '(Special Platter Recommended)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#142A21] mb-2">
                    Seating Preference
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seatingPreference: e.target.value as any,
                      })
                    }
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] focus:outline-none focus:border-[#142A21] transition-colors cursor-pointer"
                  >
                    <option value="indoor-main">Main Dining Hall (Atmospheric)</option>
                    <option value="family-private">Family Lounge (Private/Spacious)</option>
                    <option value="lounge">Velvet Booth (Quiet/Romantic)</option>
                    <option value="outdoor-patio">Outdoor Patio Area</option>
                  </select>
                </div>
              </div>

              {/* Special Request */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#142A21] mb-2">
                  Special Request / Dietary Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Birthday celebration, High chair required, MEZ Special Platter pre-order, outdoor seating..."
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full p-4 bg-[#FAF7F0] border border-[#D8CCBA] rounded-sm text-sm text-[#142A21] placeholder-[#9E907F] focus:outline-none focus:border-[#142A21] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#6B7570]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant confirmation via direct call or WhatsApp message.</span>
                </div>

                <button
                  type="submit"
                  id="submit-reservation-btn"
                  className="w-full sm:w-auto px-8 py-4 bg-[#142A21] hover:bg-[#1D3E31] text-[#FAF7F0] font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer border border-[#C4AD89]"
                >
                  <CalendarIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>Request a Reservation</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
