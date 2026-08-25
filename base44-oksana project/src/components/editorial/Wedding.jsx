import React from 'react';
import { Image } from '@/components/ui/image';

export default function Wedding() {
  return (
    <article className="relative border-t border-[#A69D91]/30 pt-20">
      <span className="specialty-number right-0 top-8">02</span>
      <div className="relative z-10">
        <div>
          <h3 className="font-serif text-3xl">Wedding Nails</h3>
          <p className="service-kicker">Bridal · occasions</p>
        </div>
      </div>
      <div className="relative mt-9 h-[570px]">
        <div className="absolute left-0 top-4 z-20 bg-[#4A4D3E] px-3.5 py-1.5 font-serif text-xs italic text-white shadow-xl">
          For the bride
        </div>
        <div className="absolute right-0 top-4 z-20 bg-[#34372D] px-3.5 py-1.5 text-white shadow-xl flex items-baseline gap-2">
          <span className="text-[8px] uppercase tracking-[0.22em] text-[#C5CBB7]">from</span>
          <span className="font-serif text-base font-medium tracking-tight">£95</span>
          <span className="text-[8px] uppercase tracking-[0.16em] text-[#E0E5D7] border-l border-white/20 pl-2">bridal set</span>
        </div>
        <div className="absolute left-[14%] top-0 h-[390px] w-[62%] shadow-md overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#ded8ce] text-[#7A746B] p-3 text-center select-none">
            <span className="text-[8px] uppercase tracking-[0.22em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <div className="absolute right-0 top-[305px] z-20 h-[165px] w-[44%] shadow-xl overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#ded8ce] text-[#7A746B] p-2 text-center select-none">
            <span className="text-[7px] uppercase tracking-[0.2em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[160px] w-[53%] shadow-lg overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#ded8ce] text-[#7A746B] p-2 text-center select-none">
            <span className="text-[7px] uppercase tracking-[0.2em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
      </div>
    </article>
  );
}