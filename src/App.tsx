/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { SignatureDishes } from './components/SignatureDishes';
import { SpecialPlatter } from './components/SpecialPlatter';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { QuickActionFloat } from './components/QuickActionFloat';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    // If the reservation section is in view, we can also scroll to it smoothly or open the quick modal
    setReservationModalOpen(true);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1A2E24] font-sans-body flex flex-col selection:bg-[#1B3B30] selection:text-[#E8DCC4]">
      {/* Navigation Header */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* 2. Brand Story / Introduction */}
        <StorySection />

        {/* 3. Signature Turkish Flavours */}
        <SignatureDishes onOpenReservation={handleOpenReservation} />

        {/* 4. MEZ Special Platter Feature (PKR 29,999/-) */}
        <SpecialPlatter onOpenReservation={handleOpenReservation} />

        {/* 5. Comprehensive Interactive Turkish Menu */}
        <MenuSection onOpenReservation={handleOpenReservation} />

        {/* 6. The MEZ Hospitality & Dining Experience */}
        <ExperienceSection />

        {/* 7. Luxury Visual Gallery with Fullscreen Lightbox */}
        <GallerySection />

        {/* 8. Google Reviews & Testimonials (4.8 / 5.0) */}
        <ReviewsSection />

        {/* 9. Full Reservation Form & Receipt Generator */}
        <ReservationSection />

        {/* 10. Location, Timing & Interactive Map (Gulberg 2, Lahore) */}
        <ContactSection onOpenReservation={handleOpenReservation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fast Reservation Popup Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      {/* Floating Quick Action Contacts */}
      <QuickActionFloat onOpenReservation={handleOpenReservation} />
    </div>
  );
}

