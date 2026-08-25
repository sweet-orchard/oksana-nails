import React from 'react';

const values = [
  ['01', 'Quality & Precision', 'I believe in doing nails right. Using the best products and techniques ensures that your nails not only look stunning but stay strong and beautiful for as long as possible. Quality is key, and I always aim for perfection.'],
  ['02', 'Client Experience', "My top priority is you. From your comfort in the chair to ensuring you love your nails. I'm here to make every visit an experience. I strive to create a welcoming, positive space where you can relax and feel your best."],
  ['03', 'Creativity & Innovation', "I'm all about pushing boundaries and experimenting with new designs. Every set of nails is a canvas, and I love bringing fresh, unique ideas to life, whether it's bold art, intricate details or classic elegance."],
];

export default function Values() {
  return (
    <div className="mt-20">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#898175] mb-12">What drives my passion</p>
      <div className="grid gap-14">
        {values.map(([number, title, body]) => (
          <article key={number} className="relative max-w-[340px]">
            <span className="absolute -left-3 -top-12 font-serif text-[92px] leading-none text-[#A69D91]/20">{number}</span>
            <div className="relative border-l border-[#A69D91]/60 pl-5"><h3 className="font-serif text-xl text-[#34372D]">{title}</h3><p className="mt-3 text-[13px] font-light leading-6 text-[#56584D]">{body}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}