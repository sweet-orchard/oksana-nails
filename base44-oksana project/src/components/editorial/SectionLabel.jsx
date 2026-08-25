import React from 'react';

export default function SectionLabel({ children, align = 'left' }) {
  return (
    <div className={`flex items-center gap-4 ${align === 'right' ? 'justify-end' : ''}`}>
      {align === 'right' && <span className="h-px w-10 bg-[#4A4D3E]" />}
      <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#4A4D3E]">{children}</span>
      {align !== 'right' && <span className="h-px w-10 bg-[#4A4D3E]" />}
    </div>
  );
}