import React from 'react';
import { ArrowDown, Mail, MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#23251F] px-5 pb-8 pt-5 text-[#F9F7F2] flex flex-col justify-between">
      <div className="mx-auto flex min-h-[calc(100svh-3.25rem)] max-w-md flex-col justify-between">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.24em] text-[#C1BBAF] gap-2 pt-2">
          <span>BIAB &amp; natural nail aesthetics</span>
          <span className="whitespace-nowrap">Bristol · 2026</span>
        </div>
        <div className="relative mt-4 mb-2 h-[355px]">
          <div className="absolute left-0 top-0 h-[275px] w-[53%] border border-[#555849] p-1.5 shadow-lg bg-[#2b2d26]">
            <Image src="/images/portrait 2.jpeg" alt="Editorial portrait of Oksana" className="h-full w-full editorial-photo" />
          </div>
          <div className="absolute right-0 top-0 z-10 text-right pr-1">
            <h1 className="font-serif text-[36px] sm:text-[46px] leading-none tracking-[-0.03em] text-[#F9F7F2] select-none drop-shadow-md">
              Oksana<span className="text-[#9EA28B]">.</span>
            </h1>
          </div>
          <div className="absolute right-0 top-[65px] h-[190px] w-[44%] border border-[#555849] p-1.5 shadow-lg bg-[#2b2d26]">
            <Image src="/images/hero-detail.png" alt="Sculpted manicure detail" className="h-full w-full editorial-photo" />
          </div>
          <p className="absolute top-[290px] left-0 max-w-[210px] font-serif text-[17px] italic leading-snug text-[#D6D0C5]">
            Nails with precision, softness, and a little bit of shine.
          </p>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="absolute top-[300px] right-2 h-4 w-4 text-[#9EA28B] animate-bounce" />
          </a>
        </div>
        <div id="book" className="relative z-20 mt-3 border border-[#555849] bg-[#303329] p-5 shadow-2xl">
          <div className="mb-4">
            <p className="mb-1 text-[8px] uppercase tracking-[0.34em] text-[#9EA28B]">Get in touch</p>
            <h2 className="font-serif text-2xl text-[#F9F7F2]">Book a session</h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <a href="https://wa.me/447472338158" target="_blank" rel="noreferrer" className="booking-link bg-[#626A52] text-white hover:bg-[#525944] transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="mailto:virasaienko@gmail.com" className="booking-link border border-[#555849] text-[#F9F7F2] hover:bg-white/5 transition-colors">
              <Mail className="h-4 w-4" /> Email Oksana
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}