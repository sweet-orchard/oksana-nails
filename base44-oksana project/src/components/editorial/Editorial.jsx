import React from 'react';
import { Image } from '@/components/ui/image';

export default function Editorial() {
  return (
    <article className="relative border-t border-[#A69D91]/30 pt-20">
      <span className="specialty-number right-0 top-8">03</span>
      <div className="relative z-10">
        <div>
          <h3 className="font-serif text-3xl uppercase tracking-[0.08em]">Editorial</h3>
          <p className="service-kicker">Shoots · models · brands</p>
        </div>
      </div>
      <div className="relative mt-10 h-[570px] bg-[#23251F] p-4 shadow-2xl">
        <div className="absolute left-4 top-4 h-[320px] w-[53%] shadow-lg overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#181a15] text-[#8A8F7C] p-3 text-center select-none">
            <span className="text-[8px] uppercase tracking-[0.22em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <div className="absolute right-4 top-20 z-10 h-[190px] w-[42%] shadow-xl overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#181a15] text-[#8A8F7C] p-2 text-center select-none">
            <span className="text-[7px] uppercase tracking-[0.2em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <div className="absolute bottom-12 right-4 h-[230px] w-[70%] shadow-xl overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#181a15] text-[#8A8F7C] p-2 text-center select-none">
            <span className="text-[7px] uppercase tracking-[0.2em] font-medium opacity-80">Photo Placeholder</span>
          </div>
        </div>
        <p className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.3em] text-[#A69D91]">
          Creative direction · 2026
        </p>
      </div>
    </article>
  );
}