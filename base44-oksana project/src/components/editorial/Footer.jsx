import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#23251F] px-7 pb-10 pt-16 text-[#F9F7F2]">
      <div className="mx-auto max-w-md"><p className="text-[9px] uppercase tracking-[0.3em] text-[#9EA28B]">Ready when you are</p><h2 className="mt-4 font-serif text-[48px] sm:text-[60px] leading-[1.02] tracking-tight">Beautiful nails,<br /><em className="italic text-[#9EA28B]">made just for you.</em></h2>
        <a href="#book" className="mt-10 flex min-h-12 items-center justify-between border-y border-[#555849] py-4 text-xs uppercase tracking-[0.2em]">Book an appointment <ArrowUpRight className="h-4 w-4" /></a>
        <div className="mt-14 flex justify-between text-[8px] uppercase tracking-[0.24em] text-[#777C69]"><span>© 2026 Oksana</span><span>Bristol, UK</span></div></div>
    </footer>
  );
}