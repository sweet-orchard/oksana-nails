import React from 'react';
import { Image } from '@/components/ui/image';
import SectionLabel from '@/components/editorial/SectionLabel';

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#E8E3DA] px-6 py-24">
      <div className="mx-auto max-w-md">
        <SectionLabel>About me</SectionLabel>
        <div className="relative mt-14 min-h-[530px]">
          <div className="ml-auto h-[390px] w-[78%] shadow-md overflow-hidden">
            <Image src="/images/about-studio.png" alt="Oksana in her naturally lit studio" className="h-full w-full editorial-photo" />
          </div>
          <div className="absolute left-0 top-[50%] w-[88%] border border-[#A69D91]/40 bg-[#F9F7F2]/95 p-7 shadow-[0_24px_60px_rgba(63,58,48,0.12)] backdrop-blur-sm">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#898175]">The artist</p>
            <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#34372D]">Hi, I’m <em className="text-[#8B8377]">Oksana.</em></h2>
            <p className="mt-5 text-[13px] font-light leading-6 text-[#56584D]">Your Nail Technician, Influencer, and Artist. I'm passionate about transforming nails into mini works of art. I'm here to inspire, share tips, and connect with all of you who love the world of beauty and design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}