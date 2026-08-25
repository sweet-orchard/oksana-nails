import React from 'react';
import SectionLabel from '@/components/editorial/SectionLabel';
import CleanBeauty from '@/components/editorial/CleanBeauty';
import Wedding from '@/components/editorial/Wedding';
import Editorial from '@/components/editorial/Editorial';

export default function Specialties() {
  return (
    <section id="work" className="overflow-hidden bg-[#F9F7F2] px-6 py-24 text-[#34372D]">
      <div className="mx-auto max-w-md">
        <SectionLabel align="right">Services</SectionLabel>
        <div className="mt-20 space-y-24"><CleanBeauty /><Wedding /><Editorial /></div>
      </div>
    </section>
  );
}