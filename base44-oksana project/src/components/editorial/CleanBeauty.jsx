import React from 'react';
import { Image } from '@/components/ui/image';

export default function CleanBeauty() {
  return (
    <article className="relative pt-8">
      <span className="specialty-number right-0 -top-6">01</span>
      <div className="relative z-10">
        <div>
          <h3 className="font-serif text-3xl">Clean Beauty</h3>
          <p className="service-kicker">Natural nails · thoughtful care</p>
        </div>
      </div>
      <div className="relative mt-9 h-[520px]">
        <div className="absolute left-0 top-0 h-[260px] w-[88%] shadow-md overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#ded8ce] text-[#7A746B] p-3 text-center select-none">
            <span className="text-[8px] uppercase tracking-[0.22em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <div className="absolute right-0 top-[220px] z-10 h-[190px] w-[48%] shadow-xl overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#ded8ce] text-[#7A746B] p-2 text-center select-none">
            <span className="text-[7px] uppercase tracking-[0.2em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-[8%] h-[210px] w-[42%] shadow-lg overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#ded8ce] text-[#7A746B] p-2 text-center select-none">
            <span className="text-[7px] uppercase tracking-[0.2em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <p className="absolute bottom-7 right-1 w-[42%] border-t border-[#A69D91] pt-3 text-[11px] leading-5 text-[#67675E]">
          Quiet finishes, considered prep and lasting natural health.
        </p>
      </div>
    </article>
  );
}