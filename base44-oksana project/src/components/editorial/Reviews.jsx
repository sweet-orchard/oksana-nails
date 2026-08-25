import React from 'react';
import SectionLabel from '@/components/editorial/SectionLabel';

const reviews = [
  ['Hey!!! Just wanted you to know that I have received so many compliments for the manicure you did for me! I absolutely love it and you are so so talented in recreating that design for me! Definitely recommending you to everyone I know xxx', 'Client Feedback'],
];

export default function Reviews() {
  return (
    <section className="bg-[#E8DED1] px-7 py-24 text-[#34372D]">
      <div className="mx-auto max-w-md"><SectionLabel>Reviews</SectionLabel>
        <div className="mt-16 space-y-16">{reviews.map(([quote, name]) => <blockquote key={name} className="border-l border-[#8D867A] pl-6"><p className="font-serif text-xl italic leading-relaxed">“{quote}”</p><footer className="mt-5 text-[9px] font-medium uppercase tracking-[0.26em] text-[#80796F]">— {name}</footer></blockquote>)}</div>
      </div>
    </section>
  );
}