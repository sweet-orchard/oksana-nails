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
    <div className="bg-[#161814] h-[100dvh] overflow-hidden flex items-center justify-center p-0 md:py-8 selection:bg-[#59634C] selection:text-white">
      {/* Main Container (Strict 1-Screen Viewport Fit on Mobile) */}
      <main className="w-full max-w-[440px] bg-[#F8F6F0] shadow-[0_20px_70px_rgba(0,0,0,0.65)] relative overflow-hidden flex flex-col justify-between h-[100dvh] sm:h-auto sm:min-h-[780px] border md:border-[#2D3227]/40 md:rounded-lg">
        
        {/* Header & Profile Content (Top) */}
        <div className="w-full flex flex-col items-center flex-shrink-0">
          
          {/* Top Banner Image */}
          <div className="relative w-full h-[125px] sm:h-[185px] overflow-hidden bg-[#23271F]">
            <Image
              src="/images/hero-detail.jpeg"
              alt="Oksana Nail Studio Aesthetic"
              className="w-full h-full object-cover object-[center_35%] filter contrast-[1.05] brightness-95"
            />
            
            {/* Subtle warm vignette overlay for crisp contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Circular Overlapping Avatar (Higher Overlap on Header Image) */}
          <div className="relative -mt-[58px] sm:-mt-[68px] z-10">
            <div className="w-[116px] h-[116px] sm:w-[136px] sm:h-[136px] rounded-full overflow-hidden border-[4px] sm:border-[5px] border-[#F8F6F0] shadow-2xl bg-[#23271F]">
              <Image
                src="/images/portrait%202.jpeg?v=2"
                alt="Oksana - Nail Technician"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Name & Title (Much Bigger & Impactful) */}
          <div className="text-center px-6 mt-1 sm:mt-2">
            <h1 className="font-signature text-[52px] sm:text-[62px] font-normal leading-none text-[#23271F] select-none tracking-normal">
              Oksana
            </h1>
            <p className="mt-0.5 text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] text-[#59634C] uppercase">
              NAIL ARTIST
            </p>
            <div className="w-10 sm:w-12 h-px bg-[#59634C]/35 mx-auto mt-1.5" />
          </div>
        </div>

        {/* Framed Buttons Stack (Middle - Generous & Luxurious Padding) */}
        <div className="w-full px-6 sm:px-7 space-y-2.5 sm:space-y-3 my-auto flex-shrink-0 pt-1 pb-1">
          <button
            onClick={() => setActiveModal('about')}
            className="w-full py-3.5 sm:py-4 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99]"
          >
            About Me
          </button>

          {/* Three Inline Category Buttons in One Horizontal Row */}
          <div className="grid grid-cols-3 gap-2 w-full">
            <button
              onClick={() => setActiveModal('clean-beauty')}
              className="w-full py-3.5 sm:py-4 px-1 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99] text-center"
            >
              Clean Beauty
            </button>

            <button
              onClick={() => setActiveModal('bridal')}
              className="w-full py-3.5 sm:py-4 px-1 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99] text-center"
            >
              Bridal
            </button>

            <button
              onClick={() => setActiveModal('editorial')}
              className="w-full py-3.5 sm:py-4 px-1 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99] text-center"
            >
              Editorial
            </button>
          </div>

          <button
            onClick={() => setActiveModal('reviews')}
            className="w-full py-3.5 sm:py-4 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99]"
          >
            The Experience
          </button>

          <button
            onClick={() => setActiveModal('book')}
            className="w-full py-3.5 sm:py-4 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-all duration-300 shadow-sm active:scale-[0.99]"
          >
            Enquiries
          </button>
        </div>

        {/* Footer Info (Bottom) */}
        <div className="w-full px-6 sm:px-7 pb-4 sm:pb-6 pt-1 text-center flex-shrink-0 flex flex-col items-center gap-2">
          <div className="text-[8px] sm:text-[8.5px] uppercase tracking-[0.24em] text-[#868B7D]">
            <span>See you around</span>
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
                  A freelance nail artist working independently across manicure, pedicure and creative projects.
                </p>
                <p>
                  My work moves between private clients, bridal and creative productions, with a particular appreciation for natural beauty, thoughtful details and a considered approach to each project.
                </p>
                <p>
                  Based in Bristol, working on set with models.
                </p>
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
                  <h3 className="font-serif text-xl sm:text-2xl text-[#23271F]">Clean Beauty</h3>
                  <p className="text-xs text-[#575B50] font-light mt-0.5 tracking-wide">Natural nails. Thoughtful care. Aesthetic.</p>
                </div>

                <div className="space-y-2.5">
                  {/* Hero Spotlight 1 */}
                  <div 
                    onClick={() => setLightbox({ src: '/images/clean-beauty images/1.jpeg?v=2', caption: 'Clean Beauty 1' })}
                    className="w-full aspect-[16/10] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                  >
                    <Image 
                      src="/images/clean-beauty images/1.jpeg?v=2" 
                      alt="Clean Beauty 1" 
                      className="w-full h-full object-cover" 
                      style={{ transform: 'rotate(-10deg) scale(1.4)', transformOrigin: 'center' }} 
                    />
                  </div>

                  {/* 2-Column Vertical Pair */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/2.jpeg', caption: 'Clean Beauty 2' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/2.jpeg" alt="Clean Beauty 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/3.jpeg', caption: 'Clean Beauty 3' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/3.jpeg" alt="Clean Beauty 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  {/* 3-Column Detail Trio */}
                  <div className="grid grid-cols-3 gap-2">
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/4.jpeg', caption: 'Clean Beauty 4' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/4.jpeg" alt="Clean Beauty 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/5.jpeg', caption: 'Clean Beauty 5' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/5.jpeg" alt="Clean Beauty 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/6.jpeg', caption: 'Clean Beauty 6' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/6.jpeg" alt="Clean Beauty 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  {/* 2-Column Pair */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/7.jpeg', caption: 'Clean Beauty 7' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/7.jpeg" alt="Clean Beauty 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/8.jpeg', caption: 'Clean Beauty 8' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/8.jpeg" alt="Clean Beauty 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  {/* Wide Feature Card */}
                  <div 
                    onClick={() => setLightbox({ src: '/images/clean-beauty images/9.jpeg', caption: 'Clean Beauty 9' })}
                    className="w-full aspect-[16/10] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                  >
                    <Image src="/images/clean-beauty images/9.jpeg" alt="Clean Beauty 9" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  {/* 2-Column Pair */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/10.jpeg', caption: 'Clean Beauty 10' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/10.jpeg" alt="Clean Beauty 10" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/clean-beauty images/11.jpeg', caption: 'Clean Beauty 11' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#E2DED4] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/clean-beauty images/11.jpeg" alt="Clean Beauty 11" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
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
                      onClick={() => setLightbox({ src: '/images/bridal images/1.jpeg', caption: 'Bridal 1' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/bridal images/1.jpeg" alt="Bridal 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/bridal images/2.jpeg', caption: 'Bridal 2' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/bridal images/2.jpeg" alt="Bridal 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div 
                    onClick={() => setLightbox({ src: '/images/bridal images/3.jpeg', caption: 'Bridal 3 — Wedding Day Aesthetics' })}
                    className="w-full aspect-[4/3] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                  >
                    <Image src="/images/bridal images/3.jpeg" alt="Bridal 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div 
                      onClick={() => setLightbox({ src: '/images/bridal images/4.jpeg', caption: 'Bridal 4' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/bridal images/4.jpeg" alt="Bridal 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/bridal images/5.jpeg', caption: 'Bridal 5' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/bridal images/5.jpeg" alt="Bridal 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/bridal images/6.jpeg', caption: 'Bridal 6' })}
                      className="aspect-square bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/bridal images/6.jpeg" alt="Bridal 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/bridal images/7.jpeg', caption: 'Bridal 7' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/bridal images/7.jpeg" alt="Bridal 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/bridal images/8.jpeg', caption: 'Bridal 8' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/bridal images/8.jpeg" alt="Bridal 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
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
                    onClick={() => setLightbox({ src: '/images/edutorial images/1.jpeg?v=3', caption: 'On Set 1 — Creative Production Cover' })}
                    className="w-full aspect-[4/3] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                  >
                    <Image src="/images/edutorial images/1.jpeg?v=3" alt="On Set 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/edutorial images/2.jpeg', caption: 'On Set 2' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/edutorial images/2.jpeg" alt="On Set 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/edutorial images/3.jpeg', caption: 'On Set 3' })}
                      className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/edutorial images/3.jpeg" alt="On Set 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/edutorial images/4.jpeg', caption: 'On Set 4' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/edutorial images/4.jpeg" alt="On Set 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/edutorial images/5.jpeg', caption: 'On Set 5' })}
                      className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-[#D5C8B8] cursor-pointer group rounded-none"
                    >
                      <Image src="/images/edutorial images/5.jpeg" alt="On Set 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4: Behind the Scenes (Dark Green #232520) */}
              <div className="bg-[#232520] px-5 sm:px-6 py-8 text-[#F9F7F2]">
                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the scenes images/1.jpeg', caption: 'BTS 1' })}
                      className="aspect-[4/5] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the scenes images/1.jpeg" alt="BTS 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the scenes images/2.jpeg', caption: 'BTS 2' })}
                      className="aspect-[4/5] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the scenes images/2.jpeg" alt="BTS 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div 
                    onClick={() => setLightbox({ src: '/images/behind the scenes images/3.jpeg', caption: 'BTS 3 — Studio Atmosphere' })}
                    className="w-full aspect-[16/10] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                  >
                    <Image src="/images/behind the scenes images/3.jpeg" alt="BTS 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the scenes images/4.jpeg', caption: 'BTS 4' })}
                      className="aspect-square bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the scenes images/4.jpeg" alt="BTS 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the scenes images/5.jpeg', caption: 'BTS 5' })}
                      className="aspect-square bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the scenes images/5.jpeg" alt="BTS 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the scenes images/6.jpeg', caption: 'BTS 6' })}
                      className="aspect-square bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the scenes images/6.jpeg" alt="BTS 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the scenes images/7.jpeg', caption: 'BTS 7' })}
                      className="aspect-[3/4] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the scenes images/7.jpeg" alt="BTS 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                    <div 
                      onClick={() => setLightbox({ src: '/images/behind the scenes images/8.jpeg', caption: 'BTS 8' })}
                      className="aspect-[3/4] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                    >
                      <Image src="/images/behind the scenes images/8.jpeg" alt="BTS 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
                    </div>
                  </div>

                  <div 
                    onClick={() => setLightbox({ src: '/images/behind the scenes images/9.jpeg', caption: 'BTS 9 — On Set Details' })}
                    className="w-full aspect-[16/10] bg-stone-800 overflow-hidden shadow-sm border border-white/10 cursor-pointer group rounded-none"
                  >
                    <Image src="/images/behind the scenes images/9.jpeg" alt="BTS 9" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
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

              <h2 className="font-serif text-2xl text-[#23271F]">Work with Me</h2>
              <p className="text-xs text-[#575B50] mt-2 mb-6 font-light">
                For appointments, bridal and creative projects.
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
                  href="/contact.html"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 border border-[#2D3227] bg-[#F8F6F0]/75 text-[#23271F] font-sans text-xs font-semibold uppercase tracking-[0.24em] hover:bg-[#23271F] hover:text-[#F8F6F0] transition-colors shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email: virasaienko@gmail.com</span>
                </a>
              </div>

              <p className="text-[9px] uppercase tracking-wider text-center text-[#868B7D] mt-5">
                Open to collaborations
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

              <h2 className="font-serif text-2xl text-[#23271F] mb-6">The Experience</h2>
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
                    — Charly
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
                    — Sue
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
                    — Indianna
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
                alt="Preview" 
                className="max-w-full max-h-[85vh] object-contain rounded-none shadow-2xl border border-white/10" 
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}