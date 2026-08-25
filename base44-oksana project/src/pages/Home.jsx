import React from 'react';
import Hero from '@/components/editorial/Hero';
import About from '@/components/editorial/About';
import Specialties from '@/components/editorial/Specialties';
import Reviews from '@/components/editorial/Reviews';
import Footer from '@/components/editorial/Footer';

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#F9F7F2] shadow-[0_0_80px_rgba(0,0,0,0.35)]">
      <Hero /><About /><Specialties /><Reviews /><Footer />
    </main>
  );
}