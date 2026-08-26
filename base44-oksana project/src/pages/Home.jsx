import React, { useState } from 'react';
import { Mail, MessageCircle, X, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { src, caption }

  const closeModal = () => {
    setActiveModal(null);
    setLightbox(null);
  };

  const openCategory = (categoryId) => {
    setActiveModal('portfolio');
    setTimeout(() => {
      const el = document.getElementById('cat-' + categoryId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  return (
    <div className="bg-[#161814] min-h-screen flex items-center justify-center p-0 md:py-8 selection:bg-[#59634C] selection:text-white">
      {/* Main Container (Card Matching Reference) */}
      <main className="w-full max-w-[440px] bg-[#F8F6F0] min-h-screen md:min-h-[820px] shadow-[0_20px_70px_rgba(0,0,0,0.65)] relative overflow-hidden flex flex-col justify-between border md:border-[#2D3227]/40 md:rounded-lg">
        
        {/* Header & Profile Content */}
        <div className="w-full flex flex-col items-center">
          
          {/* Top Banner Image with Brand Logo Overlay ON TOP of it */}
          <div className="relative w-full h-[230px] sm:h-[250px] overflow-hidden bg-[#23271F]">
            <Image
              src="/images/hero-detail.jpeg"
              alt="Oksana Nail Studio Aesthetic"
              className="w-full h-full object-cover object-[center_30%] filter contrast-[1.05] brightness-95"
            />
            
            {/* Subtle warm vignette overlay for crisp contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50 pointer-events-none" />

            {/* Brand Logo ON TOP of the image */}
            <div className="absolute top-5 sm:top-6 left-0 right-0 flex items-center justify-center z-10 px-6 pointer-events-none">
              <Image
                src="/images/logo-light.png"
                alt="OXINAILS"
                className="h-8 sm:h-9 w-auto max-w-[230px] object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
              />
            </div>
          </div>

          {/* Circular Overlapping Avatar */}
          <div className="relative -mt-16 sm:-mt-20 z-10">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[5px] border-[#F8F6F0] shadow-xl bg-[#23271F]">
              <Image
                src="/images/hero-portrait.png"
                alt="Oksana - Nail Technician"
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
          </div>

          {/* Name & Title (Signature script font matching reference) */}
          <div className="text-center px-6 mt-3">
            <h1 className="font-signature text-[52px] sm:text-[60px] font-normal leading-tight text-[#23271F] select-none tracking-normal">
              Oksana
            </h1>
            <p className="mt-0.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#59634C] uppercase">
              NAIL ARTIST
            </p>
            <div className="w-10 h-px bg-[#59634C]/30 mx-auto mt-3" />
          </div>

          {/* Framed Buttons Stack */}
          <div className="w-full px-7 mt-8 space-y-3">
            <button
              onClick={() => setActiveModal('about')}
              className="w-full py-3.5 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99]"
            >
              About Me
            </button>

            {/* Three Inline Category Buttons in One Horizontal Row */}
            <div className="grid grid-cols-3 gap-2 w-full">
              <button
                onClick={() => setActiveModal('clean-beauty')}
                className="w-full py-3.5 px-1 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99] text-center"
              >
                Clean Beauty
              </button>

              <button
                onClick={() => setActiveModal('bridal')}
                className="w-full py-3.5 px-1 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99] text-center"
              >
                Bridal
              </button>

              <button
                onClick={() => setActiveModal('editorial')}
                className="w-full py-3.5 px-1 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99] text-center"
              >
                Editorial
              </button>
            </div>

            <button
              onClick={() => setActiveModal('reviews')}
              className="w-full py-3.5 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99]"
            >
              The Experience
            </button>

            <button
              onClick={() => setActiveModal('book')}
              className="w-full py-3.5 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99]"
            >
              Enquiries
            </button>
          </div>

        </div>

        {/* Contact Me Footer */}
        <div className="w-full px-7 pt-10 pb-9 text-center">
          <div className="inline-block border-b border-[#2D3227]/30 pb-1.5 mb-5 px-4">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#23271F] select-none">
              Contact Me
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            {/* Email */}
            <a
              href="mailto:oxi.nails6@gmail.com"
              title="Email Oksana"
              className="w-12 h-12 rounded-full border border-[#2D3227] flex items-center justify-center text-[#23271F] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447472338158"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="w-12 h-12 rounded-full border border-[#2D3227] flex items-center justify-center text-[#23271F] hover:bg-[#59634C] hover:border-[#59634C] hover:text-white transition-all duration-300 shadow-sm group"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-6 text-[8px] uppercase tracking-[0.22em] text-[#868B7D]">
            <span>Bristol, UK · © 2026 Oksana</span>
          </div>
        </div>

        {/* ========================================== */}
        {/* MODAL: ABOUT ME                            */}
        {/* ========================================== */}
        {activeModal === 'about' && (
          <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200" onClick={closeModal}>
            <div className="bg-[#F8F6F0] text-[#23271F] w-full max-w-[440px] max-h-[85vh] rounded-t-2xl sm:rounded-xl p-6 sm:p-7 overflow-y-auto shadow-2xl relative border border-[#2D3227]/20" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-5 right-5 text-stone-500 hover:text-black p-1">
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#59634C]">About Me</span>
                <span className="h-px w-8 bg-[#59634C]/40" />
              </div>

              <h2 className="font-serif text-2xl text-[#23271F]">Oksana</h2>
              <p className="text-xs font-semibold tracking-widest text-[#59634C] uppercase mt-1 mb-5">
                Nail Technician &amp; Artist
              </p>

              {/* Bio Text */}
              <div className="space-y-4 text-[13px] text-[#44483E] leading-relaxed font-light">
                <p>
                  With years of experience in the beauty industry, I specialize in clean beauty, natural nail aesthetics, and editorial work.
                </p>
                <p>
                  My work moves between private clients, bridal and creative productions, with a particular appreciation for natural beauty, thoughtful details and a considered approach to each project.
                </p>
                <p>
                  Based in Bristol, working on set with models.
                </p>
              </div>

              {/* What Drives My Passion (Values) */}
              <div className="mt-9 pt-7 border-t border-[#E2DED4]">
                <p className="text-[9.5px] font-medium uppercase tracking-[0.28em] text-[#80796F] mb-9">What drives my passion</p>
                
                <div className="space-y-10">
                  {/* Value 01 */}
                  <article className="relative">
                    <span className="absolute -left-1 -top-8 font-serif text-[78px] leading-none text-[#8D867A]/15 select-none pointer-events-none">01</span>
                    <div className="relative border-l border-[#8D867A]/60 pl-5">
                      <h3 className="font-serif text-lg text-[#23271F]">Quality &amp; Precision</h3>
                      <p className="mt-2 text-[13px] font-light leading-relaxed text-[#575B50]">
                        I believe in doing nails right. Using the best products and techniques ensures that your nails not only look stunning but stay strong and beautiful for as long as possible. Quality is key, and I always aim for perfection.
                      </p>
                    </div>
                  </article>

                  {/* Value 02 */}
                  <article className="relative">
                    <span className="absolute -left-1 -top-8 font-serif text-[78px] leading-none text-[#8D867A]/15 select-none pointer-events-none">02</span>
                    <div className="relative border-l border-[#8D867A]/60 pl-5">
                      <h3 className="font-serif text-lg text-[#23271F]">Client Experience</h3>
                      <p className="mt-2 text-[13px] font-light leading-relaxed text-[#575B50]">
                        My top priority is you. From your comfort in the chair to ensuring you love your nails. I'm here to make every visit an experience. I strive to create a welcoming, positive space where you can relax and feel your best.
                      </p>
                    </div>
                  </article>

                  {/* Value 03 */}
                  <article className="relative">
                    <span className="absolute -left-1 -top-8 font-serif text-[78px] leading-none text-[#8D867A]/15 select-none pointer-events-none">03</span>
                    <div className="relative border-l border-[#8D867A]/60 pl-5">
                      <h3 className="font-serif text-lg text-[#23271F]">Creativity &amp; Innovation</h3>
                      <p className="mt-2 text-[13px] font-light leading-relaxed text-[#575B50]">
                        I'm all about pushing boundaries and experimenting with new designs. Every set of nails is a canvas, and I love bringing fresh, unique ideas to life, whether it's bold art, intricate details or classic elegance.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* MODAL 1: CLEAN BEAUTY & BIAB             */}
        {/* ========================================== */}
        {activeModal === 'clean-beauty' && (
          <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200" onClick={closeModal}>
            <div className="bg-[#F8F6F0] w-full max-w-[440px] max-h-[88vh] rounded-t-2xl sm:rounded-xl overflow-y-auto shadow-2xl relative border border-[#2D3227]/20" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-5 right-5 text-stone-500 hover:text-black p-1 z-20">
                <X className="h-5 w-5" />
              </button>

              {/* Category 1: Clean Beauty (Soft Alabaster #F8F6F0) */}
              <div className="bg-[#F8F6F0] px-5 sm:px-6 pt-6 sm:pt-7 pb-8">
                <div className="mb-3.5 pb-1 border-b border-[#E2DED4]">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#23271F]">Clean Beauty <span className="font-sans font-light text-lg text-[#59634C]">&amp;</span> BIAB</h3>
                  <p className="text-xs text-[#575B50] font-light mt-0.5 tracking-wide">Natural nails. Thoughtful care. Aesthetic.</p>
                </div>

                <div className="space-y-2.5">
                  {/* Hero Spotlight 1 */}
                  <div 
                    onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/9.jpeg', caption: 'Clean Beauty & BIAB — Spotlight' })}
                    className="w-full aspect-[16/10] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                  >
                    <Image src="/images/CLEAN BEAUTY/9.jpeg" alt="Clean Beauty 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  {/* 2-Column Vertical Pair */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/2.jpeg', caption: 'Clean Beauty 2' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/2.jpeg" alt="Clean Beauty 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/3.jpeg', caption: 'Clean Beauty 3' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/3.jpeg" alt="Clean Beauty 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  {/* 3-Column Detail Trio */}
                  <div className="grid grid-cols-3 gap-2">
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/4.jpeg', caption: 'Clean Beauty 4' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/4.jpeg" alt="Clean Beauty 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/5.jpeg', caption: 'Clean Beauty 5' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/5.jpeg" alt="Clean Beauty 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/6.jpeg', caption: 'Clean Beauty 6' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/6.jpeg" alt="Clean Beauty 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  {/* 2-Column Pair */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/7.jpeg', caption: 'Clean Beauty 7' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/7.jpeg" alt="Clean Beauty 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/8.jpeg', caption: 'Clean Beauty 8' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/8.jpeg" alt="Clean Beauty 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  {/* Wide Feature Card */}
                  <div 
                    onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/1.jpeg', caption: 'Clean Beauty 9 — Natural Care Detail' })}
                    className="w-full aspect-[16/10] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                  >
                    <Image src="/images/CLEAN BEAUTY/1.jpeg" alt="Clean Beauty 9" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  {/* 2-Column Pair */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/10.jpeg', caption: 'Clean Beauty 10' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/10.jpeg" alt="Clean Beauty 10" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/CLEAN BEAUTY/11.jpeg', caption: 'Clean Beauty 11' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/CLEAN BEAUTY/11.jpeg" alt="Clean Beauty 11" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* MODAL 2: BRIDAL & OCCASION                */}
        {/* ========================================== */}
        {activeModal === 'bridal' && (
          <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200" onClick={closeModal}>
            <div className="bg-[#E8DED1] w-full max-w-[440px] max-h-[88vh] rounded-t-2xl sm:rounded-xl overflow-y-auto shadow-2xl relative border border-[#2D3227]/20" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-5 right-5 text-stone-500 hover:text-black p-1 z-20">
                <X className="h-5 w-5" />
              </button>

              {/* Category 2: Bridal & Occasion (Warm Beige #E8DED1) */}
              <div className="bg-[#E8DED1] px-5 sm:px-6 pt-6 sm:pt-7 pb-8">
                <div className="mb-3.5 pb-1 border-b border-[#D5C8B8]">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#23271F] tracking-wide">BRIDAL <span className="font-sans font-light text-lg text-[#59634C]">&amp;</span> OCCASION</h3>
                  <p className="text-xs text-[#6B6357] font-light mt-0.5 tracking-wide">For the moments that matter.</p>
                </div>

                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/1.jpeg', caption: 'Bridal 1' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/BRIDAL & OCCASION/1.jpeg" alt="Bridal 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/2.jpeg', caption: 'Bridal 2' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/BRIDAL & OCCASION/2.jpeg" alt="Bridal 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div 
                    onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/3.jpeg', caption: 'Bridal 3 — Wedding Day Aesthetics' })}
                    className="w-full aspect-[16/10] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                  >
                    <Image src="/images/BRIDAL & OCCASION/3.jpeg" alt="Bridal 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div 
                      onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/4.jpeg', caption: 'Bridal 4' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/BRIDAL & OCCASION/4.jpeg" alt="Bridal 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/5.jpeg', caption: 'Bridal 5' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/BRIDAL & OCCASION/5.jpeg" alt="Bridal 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/6.jpeg', caption: 'Bridal 6' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/BRIDAL & OCCASION/6.jpeg" alt="Bridal 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/7.jpeg', caption: 'Bridal 7' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/BRIDAL & OCCASION/7.jpeg" alt="Bridal 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/BRIDAL & OCCASION/8.jpeg', caption: 'Bridal 8' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/BRIDAL & OCCASION/8.jpeg" alt="Bridal 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* MODAL 3: EDITORIAL & ON SET               */}
        {/* ========================================== */}
        {activeModal === 'editorial' && (
          <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200" onClick={closeModal}>
            <div className="bg-[#E8DED1] w-full max-w-[440px] max-h-[88vh] rounded-t-2xl sm:rounded-xl overflow-y-auto shadow-2xl relative border border-[#2D3227]/20" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-5 right-5 text-stone-500 hover:text-black p-1 z-20">
                <X className="h-5 w-5" />
              </button>

              {/* Category 3: On Set (Same Warm Beige as Bridal #E8DED1) */}
              <div className="bg-[#E8DED1] px-5 sm:px-6 pt-6 sm:pt-7 pb-8">
                <div className="mb-3.5 pb-1 border-b border-[#D5C8B8]">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#23271F] tracking-wide">ON SET</h3>
                  <p className="text-xs text-[#6B6357] font-light mt-0.5 tracking-wide">For shoots, models <span className="font-sans font-light text-xs text-[#59634C]">&amp;</span> collaborations.</p>
                </div>

                <div className="space-y-2.5">
                  <div 
                    onClick={() => setLightbox({ src: '/images/ON SET/1.jpeg', caption: 'On Set 1 — Creative Production Cover' })}
                    className="w-full aspect-[16/10] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                  >
                    <Image src="/images/ON SET/1.jpeg" alt="On Set 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/ON SET/2.jpeg', caption: 'On Set 2' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/ON SET/2.jpeg" alt="On Set 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/ON SET/3.jpeg', caption: 'On Set 3' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/ON SET/3.jpeg" alt="On Set 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/ON SET/4.jpeg', caption: 'On Set 4' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/ON SET/4.jpeg" alt="On Set 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/ON SET/5.jpeg', caption: 'On Set 5' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/ON SET/5.jpeg" alt="On Set 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4: Behind the Scenes (Dark Green #232520) */}
              <div className="bg-[#232520] px-5 sm:px-6 py-8 text-[#F9F7F2]">
                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/1.jpeg', caption: 'BTS 1' })}
                      className="aspect-[4/5] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the schenes ON SET/1.jpeg" alt="BTS 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/2.jpeg', caption: 'BTS 2' })}
                      className="aspect-[4/5] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the schenes ON SET/2.jpeg" alt="BTS 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div 
                    onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/3.jpeg', caption: 'BTS 3 — Studio Atmosphere' })}
                    className="w-full aspect-[16/10] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                  >
                    <Image src="/images/behind the schenes ON SET/3.jpeg" alt="BTS 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/4.jpeg', caption: 'BTS 4' })}
                      className="aspect-square bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the schenes ON SET/4.jpeg" alt="BTS 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/5.jpeg', caption: 'BTS 5' })}
                      className="aspect-square bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the schenes ON SET/5.jpeg" alt="BTS 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/6.jpeg', caption: 'BTS 6' })}
                      className="aspect-square bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the schenes ON SET/6.jpeg" alt="BTS 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/7.jpeg', caption: 'BTS 7' })}
                      className="aspect-[3/4] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the schenes ON SET/7.jpeg" alt="BTS 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/8.jpeg', caption: 'BTS 8' })}
                      className="aspect-[3/4] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the schenes ON SET/8.jpeg" alt="BTS 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div 
                    onClick={() => setLightbox({ src: '/images/behind the schenes ON SET/9.jpeg', caption: 'BTS 9 — On Set Details' })}
                    className="w-full aspect-[16/10] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                  >
                    <Image src="/images/behind the schenes ON SET/9.jpeg" alt="BTS 9" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* MODAL: BOOK AN APPOINTMENT (White)         */}
        {/* ========================================== */}
        {activeModal === 'book' && (
          <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200" onClick={closeModal}>
            <div className="bg-[#F8F6F0] text-[#23271F] w-full max-w-[440px] rounded-t-2xl sm:rounded-xl p-6 sm:p-7 shadow-2xl relative border border-[#2D3227]/20" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-5 right-5 text-stone-500 hover:text-black p-1">
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#59634C]">Enquiries</span>
                <span className="h-px w-8 bg-[#59634C]/40" />
              </div>

              <h2 className="font-serif text-2xl text-[#23271F]">Get in Touch</h2>
              <p className="text-xs text-[#575B50] mt-2 mb-6 font-light">
                For appointments, bridal enquiries, and creative projects.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/447472338158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#59634C] text-white border border-[#59634C] hover:bg-[#48523D] font-sans text-xs font-semibold uppercase tracking-[0.24em] transition-colors shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href="mailto:oxi.nails6@gmail.com"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-colors shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email: oxi.nails6@gmail.com</span>
                </a>
              </div>

              <p className="text-[9px] uppercase tracking-wider text-center text-[#868B7D] mt-5">
                Bristol, UK · Custom appointments &amp; bridal
              </p>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* MODAL: REVIEWS (Warm Beige #E8DED1)        */}
        {/* ========================================== */}
        {activeModal === 'reviews' && (
          <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200" onClick={closeModal}>
            <div className="bg-[#E8DED1] text-[#34372D] w-full max-w-[440px] max-h-[85vh] rounded-t-2xl sm:rounded-xl p-6 sm:p-8 overflow-y-auto shadow-2xl relative border border-[#8D867A]/30" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-5 right-5 text-stone-600 hover:text-black p-1">
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9.5px] font-medium uppercase tracking-[0.3em] text-[#605A51]">REVIEWS</span>
                <span className="h-px w-10 bg-[#8D867A]/50" />
              </div>

              <div className="space-y-8">
                {/* Review: Helen (Bridal 5-Star) */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <div className="flex items-center gap-1.5 text-[#8C6239] mb-2">
                    <Star className="h-3.5 w-3.5 fill-[#8C6239] text-[#8C6239]" />
                    <Star className="h-3.5 w-3.5 fill-[#8C6239] text-[#8C6239]" />
                    <Star className="h-3.5 w-3.5 fill-[#8C6239] text-[#8C6239]" />
                    <Star className="h-3.5 w-3.5 fill-[#8C6239] text-[#8C6239]" />
                    <Star className="h-3.5 w-3.5 fill-[#8C6239] text-[#8C6239]" />
                  </div>
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “My wedding nails were perfect and you are so skilled at what you do xx”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — Helen
                  </footer>
                </blockquote>

                {/* Review 1 (English) */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “Hey!!! Just wanted you to know that I have received so many compliments for the manicure you did for me! I absolutely love it and you are so so talented in recreating that design for me! Definitely recommending you to everyone I know xxx”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>

                {/* Review: Sooo many compliments */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “Sooo many compliments on these!! I loveeeee them!”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>

                {/* Review 2 (English) */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “Thank you so much for our nails 💅 you are truly talented- such an artist! 💗 we love them xx”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>

                {/* Review: They are incredible */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “They are incredible! ❤️”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>

                {/* Review 3 (Ukrainian) */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “Дякую! Вони надзвичайні 😍😍😍 любуюся 🥰”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — @mariia_sugaring_bristol
                  </footer>
                </blockquote>

                {/* Review: I love my nails */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “I love my nails. Thanks”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>

                {/* Review 4 (Russian/Ukrainian client) */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “Здравствуйте Оксана, хотела сказать что ногти просто супер, получила очень много комплиментов в поездке 😇❤️”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>

                {/* Review: Thank you so much and I love my nails */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “Thank you so much and I love my nails. Take care”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>

                {/* Review 5 (Ukrainian) */}
                <blockquote className="border-l-2 border-[#8D867A] pl-5">
                  <p className="font-serif text-[18px] sm:text-[20px] italic leading-relaxed text-[#23271F]">
                    “Дякую дуже за ваші золоті руки й талант ❤️”
                  </p>
                  <footer className="mt-2.5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#80796F]">
                    — CLIENT FEEDBACK
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* MODAL: IMAGE LIGHTBOX                      */}
        {/* ========================================== */}
        {lightbox && (
          <div 
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" 
            onClick={closeModal}
          >
            <div className="relative max-w-[92vw] max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={closeModal} 
                className="absolute -top-10 right-0 sm:-right-8 text-white/80 hover:text-white p-2 text-2xl"
                aria-label="Close preview"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <Image 
                src={lightbox.src} 
                alt={lightbox.caption || 'Preview'} 
                className="max-w-full max-h-[82vh] object-contain rounded-none shadow-2xl border border-white/10" 
              />
              {lightbox.caption && (
                <p className="text-[11px] tracking-widest text-[#E2DED4] uppercase mt-3 font-light text-center">
                  {lightbox.caption}
                </p>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}